import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

interface BannerCta {
  label: string;
  to: string;
}

interface PageBannerProps {
  title: string;
  description: string;
  backgroundImage?: string;
  cta?: BannerCta;
  children?: ReactNode;
  align?: 'center' | 'left';
}

const defaultBackground = 'https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=1600';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const PageBanner = ({
  title,
  description,
  backgroundImage,
  cta,
  children,
  align = 'center'
}: PageBannerProps) => {
  const image = backgroundImage ?? defaultBackground;
  const alignmentClasses =
    align === 'center'
      ? 'text-center items-center'
      : 'text-left items-start';
  const containerWidth = align === 'center' ? 'max-w-4xl' : 'max-w-5xl';

  return (
    <section className="relative overflow-hidden w-full flex items-center justify-center min-h-[75vh] md:min-h-[80vh] lg:min-h-[85vh]">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.45)), url('${image}')` }}
        />
      </div>

      <div className="relative z-10 w-full px-6 py-32 md:px-16 md:py-40 flex justify-center">
        <motion.div
          className={`${containerWidth} mx-auto flex flex-col gap-6 text-white ${alignmentClasses}`}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 text-sm uppercase tracking-[0.35em] px-4 py-2 rounded-full">
            Kaapeh · Café de Especialidad
          </div>
          <h1 className="font-serif text-3xl md:text-5xl font-bold leading-tight">{title}</h1>
          <p className="text-lg md:text-xl text-white/90">{description}</p>

          {children ? <div className="pt-2">{children}</div> : null}

          {cta ? (
            <div>
              <Link
                to={cta.to}
                className="inline-flex items-center justify-center bg-coffee-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-coffee-600 transition-colors"
              >
                {cta.label}
              </Link>
            </div>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
};

export default PageBanner;
