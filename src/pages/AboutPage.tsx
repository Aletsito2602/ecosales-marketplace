import { motion } from 'framer-motion';
import { useScrollToTop } from '../hooks/useScrollToTop';
import DomeGallery from '../components/ui/DomeGallery';

const AboutPage = () => {
  // Scroll to top on page load
  useScrollToTop();

  const ecosalesImages = [
    {
      src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1000&auto=format&fit=crop',
      alt: 'Granos de café de especialidad'
    },
    {
      src: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1000&auto=format&fit=crop',
      alt: 'Plantación de café'
    },
    {
      src: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=1000&auto=format&fit=crop',
      alt: 'Interior de cafetería'
    },
    {
      src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000&auto=format&fit=crop',
      alt: 'Preparación de café'
    },
    {
      src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1000&auto=format&fit=crop',
      alt: 'Arte en café'
    },
    {
      src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1000&auto=format&fit=crop',
      alt: 'Tostado de café'
    },
    {
      src: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1000&auto=format&fit=crop',
      alt: 'Equipo EcoSales'
    },
    {
      src: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1000&auto=format&fit=crop',
      alt: 'Barista trabajando'
    },
    {
      src: 'https://images.unsplash.com/photo-1497515114629-f71d768fd07c?q=80&w=1000&auto=format&fit=crop',
      alt: 'Café servido'
    },
    {
      src: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1000&auto=format&fit=crop',
      alt: 'Comunidad cafetera'
    }
  ];

  return (
    <div className="w-full h-screen relative overflow-hidden bg-gradient-to-br from-primary-50 via-neutral-50 to-bean-50">
      {/* Hero Section with DomeGallery - Full Width & Animated */}
      <div className="absolute inset-0 w-full h-full">
        <DomeGallery
          images={ecosalesImages}
          fit={0.8}
          overlayBlurColor="#231b18"
          grayscale={false}
          imageBorderRadius="20px"
          openedImageBorderRadius="24px"
          segments={40}
          dragSensitivity={15}
          maxVerticalRotationDeg={8}
        />
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-24 h-24 bg-bean/30 rounded-full blur-2xl"
          animate={{
            x: [0, 60, -30, 0],
            y: [0, -40, 20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>
      
      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-white/90 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50 max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-espresso mb-8">
            EcoSales - Marketplace Ecológico
          </h1>
          
          {/* KPIs Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="bg-primary/10 rounded-2xl p-6 border border-primary/20">
              <div className="text-3xl font-bold text-primary mb-2">15.4kg</div>
              <p className="text-sm text-espresso/70">CO₂ Ahorrado Total</p>
            </div>
            <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
              <div className="text-3xl font-bold text-green-600 mb-2">4</div>
              <p className="text-sm text-espresso/70">Empresas B Corp</p>
            </div>
            <div className="bg-bean/10 rounded-2xl p-6 border border-bean/20">
              <div className="text-3xl font-bold text-bean mb-2">6</div>
              <p className="text-sm text-espresso/70">Productos Sostenibles</p>
            </div>
            <div className="bg-accent/10 rounded-2xl p-6 border border-accent/20">
              <div className="text-3xl font-bold text-accent mb-2">100%</div>
              <p className="text-sm text-espresso/70">Comercio Justo</p>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Navigation hint */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/70 text-center"
        >
          <div className="text-sm mb-2">Arrastrá para explorar</div>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto relative">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white/70 rounded-full absolute left-1/2 top-2 transform -translate-x-1/2"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
