import { useEffect, useMemo, useRef } from 'react';
import { useGesture } from '@use-gesture/react';
import './DomeGallery.css';

const DEFAULT_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1000&auto=format&fit=crop',
    alt: 'Coffee beans'
  },
  {
    src: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1000&auto=format&fit=crop',
    alt: 'Coffee plantation'
  },
  {
    src: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=1000&auto=format&fit=crop',
    alt: 'Coffee shop interior'
  },
  {
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000&auto=format&fit=crop',
    alt: 'Coffee brewing'
  },
  {
    src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1000&auto=format&fit=crop',
    alt: 'Coffee cup art'
  },
  {
    src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1000&auto=format&fit=crop',
    alt: 'Coffee roasting'
  },
  {
    src: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1000&auto=format&fit=crop',
    alt: 'Coffee team'
  }
];

const DEFAULTS = {
  maxVerticalRotationDeg: 5,
  dragSensitivity: 20,
  enlargeTransitionMs: 300,
  segments: 35
};

const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);
// const normalizeAngle = (d: number) => ((d % 360) + 360) % 360;
const wrapAngleSigned = (deg: number) => {
  const a = (((deg + 180) % 360) + 360) % 360;
  return a - 180;
};

interface ImageItem {
  src: string;
  alt: string;
}

interface ItemCoord extends ImageItem {
  x: number;
  y: number;
  sizeX: number;
  sizeY: number;
}

function buildItems(pool: (string | ImageItem)[], seg: number): ItemCoord[] {
  const xCols = Array.from({ length: seg }, (_, i) => -37 + i * 2);
  const evenYs = [-4, -2, 0, 2, 4];
  const oddYs = [-3, -1, 1, 3, 5];

  const coords = xCols.flatMap((x, c) => {
    const ys = c % 2 === 0 ? evenYs : oddYs;
    return ys.map(y => ({ x, y, sizeX: 2, sizeY: 2 }));
  });

  const totalSlots = coords.length;
  if (pool.length === 0) {
    return coords.map(c => ({ ...c, src: '', alt: '' }));
  }

  const normalizedImages = pool.map(image => {
    if (typeof image === 'string') {
      return { src: image, alt: '' };
    }
    return { src: image.src || '', alt: image.alt || '' };
  });

  const usedImages = Array.from({ length: totalSlots }, (_, i) => normalizedImages[i % normalizedImages.length]);

  return coords.map((c, i) => ({
    ...c,
    src: usedImages[i].src,
    alt: usedImages[i].alt
  }));
}

interface DomeGalleryProps {
  images?: (string | ImageItem)[];
  fit?: number;
  fitBasis?: 'auto' | 'min' | 'max' | 'width' | 'height';
  minRadius?: number;
  maxRadius?: number;
  padFactor?: number;
  overlayBlurColor?: string;
  maxVerticalRotationDeg?: number;
  dragSensitivity?: number;
  enlargeTransitionMs?: number;
  segments?: number;
  dragDampening?: number;
  openedImageWidth?: string;
  openedImageHeight?: string;
  imageBorderRadius?: string;
  openedImageBorderRadius?: string;
  grayscale?: boolean;
}

export default function DomeGallery({
  images = DEFAULT_IMAGES,
  fit = 0.5,
  overlayBlurColor = '#060010',
  maxVerticalRotationDeg = DEFAULTS.maxVerticalRotationDeg,
  dragSensitivity = DEFAULTS.dragSensitivity,
  segments = DEFAULTS.segments,
  imageBorderRadius = '30px',
  openedImageBorderRadius = '30px',
  grayscale = true
}: DomeGalleryProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLElement>(null);
  const sphereRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<HTMLDivElement>(null);
  const scrimRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef({ x: 0, y: 0 });
  const draggingRef = useRef(false);

  const items = useMemo(() => buildItems(images, segments), [images, segments]);

  const applyTransform = (xDeg: number, yDeg: number) => {
    const el = sphereRef.current;
    if (el) {
      el.style.transform = `translateZ(calc(var(--radius) * -1)) rotateX(${xDeg}deg) rotateY(${yDeg}deg)`;
    }
  };

  useGesture(
    {
      onDragStart: () => {
        draggingRef.current = true;
      },
      onDrag: ({ movement: [mx, my], last }) => {
        if (!draggingRef.current) return;
        
        const nextX = clamp(
          rotationRef.current.x - my / dragSensitivity,
          -maxVerticalRotationDeg,
          maxVerticalRotationDeg
        );
        const nextY = wrapAngleSigned(rotationRef.current.y + mx / dragSensitivity);
        
        rotationRef.current = { x: nextX, y: nextY };
        applyTransform(nextX, nextY);
        
        if (last) {
          draggingRef.current = false;
        }
      }
    },
    { target: mainRef, eventOptions: { passive: true } }
  );

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    
    const ro = new ResizeObserver(() => {
      const radius = Math.min(window.innerWidth, window.innerHeight) * fit;
      root.style.setProperty('--radius', `${radius}px`);
      root.style.setProperty('--overlay-blur-color', overlayBlurColor);
      root.style.setProperty('--tile-radius', imageBorderRadius);
      root.style.setProperty('--enlarge-radius', openedImageBorderRadius);
      root.style.setProperty('--image-filter', grayscale ? 'grayscale(1)' : 'none');
    });
    
    ro.observe(root);
    return () => ro.disconnect();
  }, [fit, overlayBlurColor, imageBorderRadius, openedImageBorderRadius, grayscale]);

  // Auto-rotation effect
  useEffect(() => {
    let animationId: number;
    let startTime = Date.now();
    
    const animate = () => {
      if (!draggingRef.current) {
        const elapsed = (Date.now() - startTime) / 1000;
        const autoRotationSpeed = 0.2; // degrees per second
        const newY = (elapsed * autoRotationSpeed) % 360;
        
        rotationRef.current = { 
          x: rotationRef.current.x, 
          y: newY 
        };
        applyTransform(rotationRef.current.x, newY);
      }
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="sphere-root"
      style={{
        '--segments-x': segments,
        '--segments-y': segments,
      } as React.CSSProperties}
    >
      <main ref={mainRef} className="sphere-main">
        <div className="stage">
          <div ref={sphereRef} className="sphere">
            {items.map((it, i) => (
              <div
                key={`${it.x},${it.y},${i}`}
                className="item"
                style={{
                  '--offset-x': it.x,
                  '--offset-y': it.y,
                  '--item-size-x': it.sizeX,
                  '--item-size-y': it.sizeY
                } as React.CSSProperties}
              >
                <div className="item__image">
                  <img src={it.src} draggable={false} alt={it.alt} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="overlay" />
        <div className="overlay overlay--blur" />
        <div className="edge-fade edge-fade--top" />
        <div className="edge-fade edge-fade--bottom" />

        <div className="viewer" ref={viewerRef}>
          <div ref={scrimRef} className="scrim" />
          <div ref={frameRef} className="frame" />
        </div>
      </main>
    </div>
  );
}
