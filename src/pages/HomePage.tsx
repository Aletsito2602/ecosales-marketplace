import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCoffee, FaLeaf, FaGlobeAmericas, FaMugHot } from 'react-icons/fa';
import { FEATURED_PRODUCTS, COFFEE_ORIGINS, BREWING_METHODS } from '../lib/data';
import { formatARS } from '../lib/currency';
import { useScrollToTop } from '../hooks/useScrollToTop';
import CircularGallery from '../components/ui/CircularGallery';
import type { Product, CoffeeOrigin, BrewingMethod } from '../types';

const HomePage = () => {
  // Scroll to top on page load
  useScrollToTop();

  // Tiendas que confían en EcoSales
  const trustedStores = [
    { 
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop',
      text: 'Verde Natural'
    },
    { 
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop',
      text: 'Eco Textiles'
    },
    { 
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop',
      text: 'Hogar Verde'
    },
    { 
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=800&auto=format&fit=crop',
      text: 'Orgánico Plus'
    },
    { 
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop',
      text: 'Moda Consciente'
    },
    { 
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
      text: 'Bio Market'
    },
    { 
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=800&auto=format&fit=crop',
      text: 'Sustentable Co'
    },
    { 
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=800&auto=format&fit=crop',
      text: 'Planeta Verde'
    }
  ];

  // Animations
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center justify-center">
        {/* Video Background */}
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline
          style={{ filter: 'brightness(0.6)' }}
        >
          <source src="https://zsucsanecavdmpnpatct.supabase.co/storage/v1/object/public/ecosale/video.mp4" type="video/mp4" />
        </video>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="relative px-8 md:px-12 z-10 w-full">
          <motion.div 
            className="max-w-3xl mx-auto text-center text-white"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">Marketplace Sostenible</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">Productos ecológicos y empresas responsables que cuidan el planeta</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/products" 
                className="inline-block bg-turquoise-500 text-white font-medium px-8 py-4 rounded-lg border-2 border-turquoise-400 hover:bg-turquoise-600 hover:border-turquoise-300 transition-all duration-300"
              >
                Explorar Productos
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Value Proposition */}
      <section className="py-16 bg-neutral-50">
        <motion.div 
          className="w-full px-4 md:px-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="text-center mb-12">
            <motion.h2 
              className="font-serif text-3xl font-bold text-coffee-800 mb-4"
              variants={fadeIn}
            >
              Por qué elegir EcoSales
            </motion.h2>
            <motion.p 
              className="text-coffee-600 max-w-2xl mx-auto"
              variants={fadeIn}
            >
              Nos apasiona la sostenibilidad y conectamos consumidores con productos y empresas que cuidan el medio ambiente
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-100"
              variants={fadeIn}
            >
              <div className="text-turquoise-500 text-3xl mb-4 flex justify-center">
                <FaCoffee />
              </div>
              <h3 className="text-xl font-semibold text-coffee-800 mb-2">Productos Verificados</h3>
              <p className="text-coffee-600">Solo productos con certificaciones ecológicas y de impacto positivo</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-100"
              variants={fadeIn}
            >
              <div className="text-turquoise-500 text-3xl mb-4 flex justify-center">
                <FaLeaf />
              </div>
              <h3 className="text-xl font-semibold text-coffee-800 mb-2">Sostenibilidad</h3>
              <p className="text-coffee-600">Trabajamos con empresas B Corp y organizaciones comprometidas con el planeta</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-100"
              variants={fadeIn}
            >
              <div className="text-turquoise-500 text-3xl mb-4 flex justify-center">
                <FaGlobeAmericas />
              </div>
              <h3 className="text-xl font-semibold text-coffee-800 mb-2">Comercio Justo</h3>
              <p className="text-coffee-600">Promovemos el comercio justo y la economía circular</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-100"
              variants={fadeIn}
            >
              <div className="text-turquoise-500 text-3xl mb-4 flex justify-center">
                <FaMugHot />
              </div>
              <h3 className="text-xl font-semibold text-coffee-800 mb-2">Impacto Medible</h3>
              <p className="text-coffee-600">Cada compra genera un impacto positivo medible en el medio ambiente</p>
            </motion.div>
          </div>
        </motion.div>
      </section>
      
      {/* Featured Products */}
      <section className="py-16 bg-neutral-50">
        <motion.div 
          className="w-full px-4 md:px-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="flex justify-between items-center mb-8">
            <motion.h2 
              className="font-serif text-3xl font-bold text-coffee-800"
              variants={fadeIn}
            >
              Productos Destacados
            </motion.h2>
            <motion.div variants={fadeIn}>
              <Link 
                to="/products" 
                className="text-coffee-600 hover:text-coffee-800"
              >
                Ver Todos
              </Link>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_PRODUCTS.map((product: Product) => (
              <motion.div 
                key={product.id} 
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-gray-100"
                variants={fadeIn}
              >
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-turquoise-500 text-white text-sm font-bold px-2 py-1 rounded">
                    {product.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-coffee-800 mb-2">{product.name}</h3>
                  <p className="text-coffee-600 mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-coffee-800">{formatARS(product.price)}</span>
                      <span className="text-xs uppercase tracking-widest text-gray-500">Cuarto</span>
                    </div>
                    <Link 
                      to={`/products/${product.id}`}
                      className="inline-flex items-center justify-center rounded-full border border-coffee-500 px-4 py-2 text-sm font-medium text-coffee-600 transition-colors hover:bg-coffee-50"
                    >
                      Ver detalles
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      
      {/* Coffee Origins */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://zsucsanecavdmpnpatct.supabase.co/storage/v1/object/sign/e-commerces/kaapeh/10.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YTVkNTQ5Yi1jNjE5LTQxNzgtYjFiNy1jY2FkMjBlMTlhOTQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJlLWNvbW1lcmNlcy9rYWFwZWgvMTAuanBnIiwiaWF0IjoxNzU4NDk0NTg3LCJleHAiOjE3OTAwMzA1ODd9.n_LJ3z0na7M8kFhl0Hl4_8B7IVhN-Ic_49sb_kTn2lQ')"
          }}
        ></div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        
        {/* Content */}
        <motion.div 
          className="relative z-10 w-full px-4 md:px-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-16" variants={fadeIn}>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">Nuestro Impacto</h2>
            <p className="text-gray-200 text-lg max-w-3xl mx-auto leading-relaxed">
              Conectamos productos sostenibles con consumidores conscientes para crear un impacto positivo en el planeta
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {COFFEE_ORIGINS.map((origin: CoffeeOrigin) => (
              <motion.div 
                key={origin.name}
                className="bg-white bg-opacity-95 backdrop-blur-sm border border-white border-opacity-20 p-8 rounded-xl text-center shadow-2xl hover:shadow-3xl hover:bg-opacity-100 transition-all duration-300 w-72 transform hover:-translate-y-2"
                variants={fadeIn}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-bold text-coffee-800 mb-4">{origin.name}</h3>
                <p className="text-coffee-600 text-base leading-relaxed">{origin.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Trusted Stores Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-neutral-50 to-green-50 relative overflow-hidden w-full">
        <motion.div 
          className="w-full px-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-16 px-4 md:px-12" variants={fadeIn}>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-espresso mb-6">
              Tiendas que Confían en EcoSales
            </h2>
            <p className="text-espresso/70 text-lg max-w-3xl mx-auto leading-relaxed">
              Más de 150 tiendas sostenibles ya forman parte de nuestra comunidad, 
              creando un impacto positivo y conectando con consumidores conscientes
            </p>
          </motion.div>

          <div className="h-96 w-full">
            <CircularGallery
              items={trustedStores}
              bend={2}
              textColor="#231b18"
              borderRadius={0.08}
              font="bold 24px Inter"
              scrollSpeed={1.5}
              scrollEase={0.08}
            />
          </div>

          <motion.div className="text-center mt-12 px-4 md:px-12" variants={fadeIn}>
            <p className="text-espresso/60 mb-6">
              ¿Tu tienda también quiere ser parte del cambio?
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/comunidad" 
                className="inline-block bg-primary text-white font-semibold px-8 py-4 rounded-full hover:bg-primary/90 transition-colors shadow-lg"
              >
                Únete a la Comunidad
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
      
      {/* Brewing Methods */}
      <section className="py-16 bg-neutral-50">
        <motion.div 
          className="w-full px-4 md:px-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-12" variants={fadeIn}>
            <h2 className="font-serif text-3xl font-bold text-coffee-800 mb-4">Categorías Sostenibles</h2>
            <p className="text-coffee-600 max-w-2xl mx-auto">Explora nuestras categorías de productos ecológicos y empresas responsables</p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {BREWING_METHODS.map((method: BrewingMethod) => (
              <motion.div 
                key={method.name}
                className="bg-white border border-gray-100 p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                variants={fadeIn}
              >
                <h3 className="text-xl font-semibold text-coffee-800 mb-2">{method.name}</h3>
                <p className="text-coffee-600 text-sm">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;
