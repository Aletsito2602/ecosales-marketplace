import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCoffee, FaLeaf, FaGlobeAmericas, FaMugHot } from 'react-icons/fa';
import { FEATURED_PRODUCTS, COFFEE_ORIGINS, BREWING_METHODS } from '../lib/data';
import type { Product, CoffeeOrigin, BrewingMethod } from '../types';

const HomePage = () => {
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
      <section className="relative overflow-hidden rounded-lg">
        <div className="absolute inset-0 bg-cover bg-center" style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1500')",
          filter: 'brightness(0.6)'
        }}></div>
        
        <div className="relative py-24 px-8 md:py-32 md:px-12 z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center text-white"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">Descubre el Arte del Café</h1>
            <p className="text-xl md:text-2xl mb-8 text-cream-100">Granos de especialidad seleccionados a mano de los mejores productores del mundo</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/products" 
                className="inline-block bg-coffee-500 text-white font-medium px-8 py-4 rounded-lg hover:bg-coffee-600 transition-colors"
              >
                Explorar Cafés
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Value Proposition */}
      <section className="py-12 bg-cream-50 dark:bg-espresso-900 rounded-lg">
        <motion.div 
          className="container mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="text-center mb-12">
            <motion.h2 
              className="font-serif text-3xl font-bold text-coffee-800 dark:text-cream-300 mb-4"
              variants={fadeIn}
            >
              Por qué elegir Kaapeh
            </motion.h2>
            <motion.p 
              className="text-coffee-600 dark:text-cream-100 max-w-2xl mx-auto"
              variants={fadeIn}
            >
              Nos apasiona el café de especialidad y cada detalle del proceso, desde el cultivo hasta tu taza
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="bg-white dark:bg-espresso-800 p-6 rounded-lg shadow-md text-center"
              variants={fadeIn}
            >
              <div className="text-coffee-500 dark:text-cream-400 text-3xl mb-4 flex justify-center">
                <FaCoffee />
              </div>
              <h3 className="text-xl font-semibold text-coffee-800 dark:text-cream-200 mb-2">Calidad Superior</h3>
              <p className="text-coffee-600 dark:text-cream-100">Solo seleccionamos el 1% de los mejores granos de café del mundo</p>
            </motion.div>
            
            <motion.div 
              className="bg-white dark:bg-espresso-800 p-6 rounded-lg shadow-md text-center"
              variants={fadeIn}
            >
              <div className="text-coffee-500 dark:text-cream-400 text-3xl mb-4 flex justify-center">
                <FaLeaf />
              </div>
              <h3 className="text-xl font-semibold text-coffee-800 dark:text-cream-200 mb-2">Sostenibilidad</h3>
              <p className="text-coffee-600 dark:text-cream-100">Trabajamos directamente con productores que practican agricultura sostenible</p>
            </motion.div>
            
            <motion.div 
              className="bg-white dark:bg-espresso-800 p-6 rounded-lg shadow-md text-center"
              variants={fadeIn}
            >
              <div className="text-coffee-500 dark:text-cream-400 text-3xl mb-4 flex justify-center">
                <FaGlobeAmericas />
              </div>
              <h3 className="text-xl font-semibold text-coffee-800 dark:text-cream-200 mb-2">Comercio Justo</h3>
              <p className="text-coffee-600 dark:text-cream-100">Pagamos precios justos que superan los estándares del mercado</p>
            </motion.div>
            
            <motion.div 
              className="bg-white dark:bg-espresso-800 p-6 rounded-lg shadow-md text-center"
              variants={fadeIn}
            >
              <div className="text-coffee-500 dark:text-cream-400 text-3xl mb-4 flex justify-center">
                <FaMugHot />
              </div>
              <h3 className="text-xl font-semibold text-coffee-800 dark:text-cream-200 mb-2">Tostado Artesanal</h3>
              <p className="text-coffee-600 dark:text-cream-100">Tostamos en pequeños lotes para garantizar frescura y sabor óptimos</p>
            </motion.div>
          </div>
        </motion.div>
      </section>
      
      {/* Featured Products */}
      <section className="py-12">
        <motion.div 
          className="container mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="flex justify-between items-center mb-8">
            <motion.h2 
              className="font-serif text-3xl font-bold text-coffee-800 dark:text-cream-200"
              variants={fadeIn}
            >
              Cafés Destacados
            </motion.h2>
            <motion.div variants={fadeIn}>
              <Link 
                to="/products" 
                className="text-coffee-600 hover:text-coffee-800 dark:text-cream-400 dark:hover:text-cream-300"
              >
                Ver Todos
              </Link>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_PRODUCTS.map((product: Product) => (
              <motion.div 
                key={product.id} 
                className="bg-white dark:bg-espresso-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                variants={fadeIn}
              >
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-coffee-500 text-white text-sm font-bold px-2 py-1 rounded">
                    {product.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-coffee-800 dark:text-cream-200 mb-2">{product.name}</h3>
                  <p className="text-coffee-600 dark:text-cream-100 mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-coffee-800 dark:text-cream-200">${product.price.toFixed(2)}</span>
                    <Link 
                      to={`/products/${product.id}`}
                      className="bg-coffee-500 text-white px-4 py-2 rounded hover:bg-coffee-600 transition-colors"
                    >
                      Ver Detalles
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      
      {/* Coffee Origins */}
      <section className="py-12 bg-coffee-900 text-white rounded-lg">
        <motion.div 
          className="container mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-12" variants={fadeIn}>
            <h2 className="font-serif text-3xl font-bold mb-4">Orígenes del Café</h2>
            <p className="text-cream-200 max-w-2xl mx-auto">Exploramos el mundo para traerte los mejores granos de café de regiones reconocidas por su excelencia</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {COFFEE_ORIGINS.map((origin: CoffeeOrigin) => (
              <motion.div 
                key={origin.name}
                className="bg-coffee-800 p-6 rounded-lg text-center hover:bg-coffee-700 transition-colors cursor-pointer"
                variants={fadeIn}
              >
                <h3 className="text-xl font-semibold mb-2">{origin.name}</h3>
                <p className="text-cream-200 text-sm">{origin.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      
      {/* Brewing Methods */}
      <section className="py-12">
        <motion.div 
          className="container mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-12" variants={fadeIn}>
            <h2 className="font-serif text-3xl font-bold text-coffee-800 dark:text-cream-200 mb-4">Métodos de Preparación</h2>
            <p className="text-coffee-600 dark:text-cream-100 max-w-2xl mx-auto">Cada método de preparación resalta diferentes características del café. Descubre cuál es tu favorito</p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {BREWING_METHODS.map((method: BrewingMethod) => (
              <motion.div 
                key={method.name}
                className="bg-cream-100 dark:bg-espresso-800 p-6 rounded-lg text-center hover:bg-cream-200 dark:hover:bg-espresso-700 transition-colors cursor-pointer"
                variants={fadeIn}
              >
                <h3 className="text-xl font-semibold text-coffee-800 dark:text-cream-200 mb-2">{method.name}</h3>
                <p className="text-coffee-600 dark:text-cream-100 text-sm">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      
      {/* Newsletter */}
      <section className="py-12 bg-cream-100 dark:bg-espresso-800 rounded-lg">
        <motion.div 
          className="container mx-auto px-4 max-w-4xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <div className="text-center mb-8">
            <h2 className="font-serif text-3xl font-bold text-coffee-800 dark:text-cream-200 mb-4">Únete a Nuestra Comunidad</h2>
            <p className="text-coffee-600 dark:text-cream-100">Recibe consejos de preparación, ofertas exclusivas y noticias sobre nuevos cafés</p>
          </div>
          
          <form className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Tu correo electrónico" 
              className="flex-1 px-4 py-3 rounded-lg border border-coffee-200 dark:border-espresso-600 focus:outline-none focus:ring-2 focus:ring-coffee-500 dark:bg-espresso-700 dark:text-white"
              required
            />
            <motion.button 
              type="submit"
              className="bg-coffee-500 text-white px-6 py-3 rounded-lg hover:bg-coffee-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Suscribirse
            </motion.button>
          </form>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;
