import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCoffee, FaLeaf, FaGlobeAmericas, FaMugHot } from 'react-icons/fa';
import { FEATURED_PRODUCTS, COFFEE_ORIGINS, BREWING_METHODS } from '../lib/data';
import { formatARS } from '../lib/currency';
import { useScrollToTop } from '../hooks/useScrollToTop';
import type { Product, CoffeeOrigin, BrewingMethod } from '../types';

const HomePage = () => {
  // Scroll to top on page load
  useScrollToTop();

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
        <div className="absolute inset-0 bg-cover bg-center" style={{ 
          backgroundImage: "url('https://zsucsanecavdmpnpatct.supabase.co/storage/v1/object/sign/e-commerces/kaapeh/29.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YTVkNTQ5Yi1jNjE5LTQxNzgtYjFiNy1jY2FkMjBlMTlhOTQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJlLWNvbW1lcmNlcy9rYWFwZWgvMjkuanBnIiwiaWF0IjoxNzU4MzE3NDI2LCJleHAiOjE3ODk4NTM0MjZ9.AVwkJYMBu1ED3YEfBaE55co5oclvthRtwDXQocnVUAY')",
          filter: 'brightness(0.6)'
        }}></div>
        
        <div className="relative px-8 md:px-12 z-10 w-full">
          <motion.div 
            className="max-w-3xl mx-auto text-center text-white"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">Descubre el Arte del Café</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">Granos de especialidad seleccionados a mano de los mejores productores del mundo</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/products" 
                className="inline-block bg-turquoise-500 text-white font-medium px-8 py-4 rounded-lg border-2 border-turquoise-400 hover:bg-turquoise-600 hover:border-turquoise-300 transition-all duration-300"
              >
                Explorar Cafés
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
              Por qué elegir Kaapeh
            </motion.h2>
            <motion.p 
              className="text-coffee-600 max-w-2xl mx-auto"
              variants={fadeIn}
            >
              Nos apasiona el café de especialidad y cada detalle del proceso, desde el cultivo hasta tu taza
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
              <h3 className="text-xl font-semibold text-coffee-800 mb-2">Calidad Superior</h3>
              <p className="text-coffee-600">Solo seleccionamos el 1% de los mejores granos de café del mundo</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-100"
              variants={fadeIn}
            >
              <div className="text-turquoise-500 text-3xl mb-4 flex justify-center">
                <FaLeaf />
              </div>
              <h3 className="text-xl font-semibold text-coffee-800 mb-2">Sostenibilidad</h3>
              <p className="text-coffee-600">Trabajamos directamente con productores que practican agricultura sostenible</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-100"
              variants={fadeIn}
            >
              <div className="text-turquoise-500 text-3xl mb-4 flex justify-center">
                <FaGlobeAmericas />
              </div>
              <h3 className="text-xl font-semibold text-coffee-800 mb-2">Comercio Justo</h3>
              <p className="text-coffee-600">Pagamos precios justos que superan los estándares del mercado</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-100"
              variants={fadeIn}
            >
              <div className="text-turquoise-500 text-3xl mb-4 flex justify-center">
                <FaMugHot />
              </div>
              <h3 className="text-xl font-semibold text-coffee-800 mb-2">Tostado Artesanal</h3>
              <p className="text-coffee-600">Tostamos en pequeños lotes para garantizar frescura y sabor óptimos</p>
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
              Cafés Destacados
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
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">Orígenes del Café</h2>
            <p className="text-gray-200 text-lg max-w-3xl mx-auto leading-relaxed">
              Exploramos el mundo para traerte los mejores granos de café de regiones reconocidas por su excelencia
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
            <h2 className="font-serif text-3xl font-bold text-coffee-800 mb-4">Métodos de Preparación</h2>
            <p className="text-coffee-600 max-w-2xl mx-auto">Cada método de preparación resalta diferentes características del café. Descubre cuál es tu favorito</p>
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
