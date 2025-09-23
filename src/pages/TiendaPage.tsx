import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaSortAmountDown, FaLeaf, FaRecycle, FaGlobe } from 'react-icons/fa';
import { PRODUCTS } from '../lib/data';
import { useScrollToTop } from '../hooks/useScrollToTop';
import PageBanner from '../components/ui/PageBanner';
import { formatARS } from '../lib/currency';
import { motion } from 'framer-motion';

const TiendaPage = () => {
  // Scroll to top on page load
  useScrollToTop();
  
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState<'featured' | 'price-asc' | 'price-desc' | 'eco-impact'>('featured');
  
  // Categorías ecológicas expandidas
  const ecoCategories = [
    {
      id: 'productos-ecologicos',
      name: 'Productos Ecológicos',
      description: 'Productos con certificación orgánica y sostenible',
      icon: <FaLeaf className="text-green-600" />,
      color: 'green'
    },
    {
      id: 'empresas-ecologicas',
      name: 'Empresas Ecológicas',
      description: 'Productos de empresas B Corp y certificadas',
      icon: <FaGlobe className="text-blue-600" />,
      color: 'blue'
    },
    {
      id: 'economia-circular',
      name: 'Economía Circular',
      description: 'Productos que promueven la reutilización y reciclaje',
      icon: <FaRecycle className="text-primary" />,
      color: 'primary'
    },
    {
      id: 'comercio-justo',
      name: 'Comercio Justo',
      description: 'Productos con certificación de comercio justo',
      icon: <FaLeaf className="text-accent" />,
      color: 'accent'
    }
  ];

  // Mapear productos existentes a categorías ecológicas
  const getEcoCategory = (product: any) => {
    // Lógica para asignar categorías ecológicas basada en características del producto
    if (product.carbonFootprintSaved && product.carbonFootprintSaved > 2.5) {
      return 'productos-ecologicos';
    }
    if (product.shippingOptions?.some((option: any) => option.isBCorp)) {
      return 'empresas-ecologicas';
    }
    if (product.category === 'Cafés de Origen') {
      return 'comercio-justo';
    }
    if (product.category === 'Kits') {
      return 'economia-circular';
    }
    return 'productos-ecologicos'; // Default
  };

  // Agregar categoría ecológica a cada producto
  const productsWithEcoCategory = PRODUCTS.map(product => ({
    ...product,
    ecoCategory: getEcoCategory(product)
  }));
  
  const filteredProducts = useMemo(() => {
    const byCategory = selectedCategory
      ? productsWithEcoCategory.filter(product => product.ecoCategory === selectedCategory)
      : productsWithEcoCategory;

    const bySearch = searchTerm.trim().length > 0
      ? byCategory.filter(product =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : byCategory;

    const sorted = [...bySearch];

    if (sortOption === 'price-asc') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-desc') {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'eco-impact') {
      sorted.sort((a, b) => (b.carbonFootprintSaved || 0) - (a.carbonFootprintSaved || 0));
    } else {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    }

    return sorted;
  }, [selectedCategory, searchTerm, sortOption]);

  const resultCount = filteredProducts.length;

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };
    
  return (
    <div className="w-full space-y-12">
      <PageBanner
        title="Tienda Sostenible"
        description="Descubrí productos ecológicos, empresas responsables y opciones que cuidan el planeta. Cada compra es un voto por un futuro más sostenible."
        backgroundImage="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1600&auto=format&fit=crop"
        cta={{ label: 'Ver Impacto Ambiental', to: '/huella' }}
      />

      <div className="w-full space-y-10 px-6 md:px-12 pb-16">
        <motion.div 
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <div className="space-y-2 max-w-2xl">
            <h1 className="text-3xl font-bold text-espresso">Tienda Ecológica</h1>
            <p className="text-espresso/70 text-sm md:text-base">
              Explorá {resultCount} productos sostenibles organizados por impacto ambiental y responsabilidad social.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="relative w-full sm:w-64">
              <FaSearch className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400" />
              <input
                type="search"
                placeholder="Buscar productos sostenibles"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                className="w-full rounded-full border border-gray-200 bg-white px-10 py-2 text-sm text-espresso shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>

            <label className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-espresso shadow-sm">
              <FaSortAmountDown className="text-primary" />
              <span className="hidden sm:inline text-espresso/70">Ordenar</span>
              <select
                value={sortOption}
                onChange={(event) => setSortOption(event.target.value as typeof sortOption)}
                className="bg-transparent text-espresso focus:outline-none"
              >
                <option value="featured">Destacados</option>
                <option value="eco-impact">Mayor impacto ecológico</option>
                <option value="price-asc">Precio: menor a mayor</option>
                <option value="price-desc">Precio: mayor a menor</option>
              </select>
            </label>
          </div>
        </motion.div>

        {/* Categorías Ecológicas */}
        <motion.div 
          className="space-y-6"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <h2 className="text-xl font-bold text-espresso">Categorías Sostenibles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <motion.button
              variants={fadeUp}
              onClick={() => setSelectedCategory(null)}
              className={`p-4 rounded-2xl border-2 transition-all text-left ${
                selectedCategory === null
                  ? 'border-primary bg-primary/10 shadow-lg'
                  : 'border-gray-200 bg-white hover:border-primary/50 hover:shadow-md'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-full bg-primary/20">
                  <FaGlobe className="text-primary" />
                </div>
                <span className="font-semibold text-espresso">Todos</span>
              </div>
              <p className="text-sm text-espresso/70">Ver todos los productos</p>
            </motion.button>

            {ecoCategories.map((category) => {
              const isSelected = selectedCategory === category.id;
              let buttonClasses = 'p-4 rounded-2xl border-2 transition-all text-left ';
              let iconClasses = 'p-2 rounded-full ';
              
              if (isSelected) {
                switch (category.color) {
                  case 'green':
                    buttonClasses += 'border-green-500 bg-green-50 shadow-lg';
                    iconClasses += 'bg-green-100';
                    break;
                  case 'blue':
                    buttonClasses += 'border-blue-500 bg-blue-50 shadow-lg';
                    iconClasses += 'bg-blue-100';
                    break;
                  case 'primary':
                    buttonClasses += 'border-primary bg-primary/10 shadow-lg';
                    iconClasses += 'bg-primary/20';
                    break;
                  case 'accent':
                    buttonClasses += 'border-accent bg-accent/10 shadow-lg';
                    iconClasses += 'bg-accent/20';
                    break;
                }
              } else {
                buttonClasses += 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md';
                switch (category.color) {
                  case 'green':
                    iconClasses += 'bg-green-100';
                    break;
                  case 'blue':
                    iconClasses += 'bg-blue-100';
                    break;
                  case 'primary':
                    iconClasses += 'bg-primary/20';
                    break;
                  case 'accent':
                    iconClasses += 'bg-accent/20';
                    break;
                }
              }
              
              return (
                <motion.button
                  key={category.id}
                  variants={fadeUp}
                  onClick={() => setSelectedCategory(category.id)}
                  className={buttonClasses}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={iconClasses}>
                      {category.icon}
                    </div>
                    <span className="font-semibold text-espresso text-sm">{category.name}</span>
                  </div>
                  <p className="text-xs text-espresso/70">{category.description}</p>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Productos */}
        <motion.div 
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {filteredProducts.map((product, index) => {
            const ecoCategory = ecoCategories.find(cat => cat.id === product.ecoCategory);
            
            return (
              <motion.article
                key={product.id}
                variants={fadeUp}
                custom={index}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl"
              >
                <Link to={`/products/${product.id}`} className="relative block">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Badges */}
                  <div className="absolute left-4 top-4 flex flex-col gap-2">
                    <span className="rounded-full bg-black/60 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">
                      {product.category}
                    </span>
                    {ecoCategory && (
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold text-white flex items-center gap-1 ${
                        ecoCategory.color === 'green' ? 'bg-green-500' :
                        ecoCategory.color === 'blue' ? 'bg-blue-500' :
                        ecoCategory.color === 'primary' ? 'bg-primary' :
                        ecoCategory.color === 'accent' ? 'bg-accent' : 'bg-primary'
                      }`}>
                        {ecoCategory.icon}
                        Eco
                      </span>
                    )}
                  </div>

                  {/* Impacto de carbono */}
                  {product.carbonFootprintSaved && (
                    <div className="absolute right-4 top-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      🌱 {product.carbonFootprintSaved}kg CO₂
                    </div>
                  )}
                </Link>

                <div className="flex flex-1 flex-col gap-4 px-6 pb-6 pt-5">
                  <div className="space-y-2">
                    <Link to={`/products/${product.id}`} className="inline-block text-lg font-semibold text-espresso transition-colors hover:text-primary">
                      {product.name}
                    </Link>
                    <p className="text-sm leading-relaxed text-espresso/70 line-clamp-3">
                      {product.description}
                    </p>
                  </div>

                  <div className="mt-auto">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-bold text-primary">{formatARS(product.price)}</span>
                        <span className="text-xs uppercase tracking-widest text-gray-500">Cuarto</span>
                      </div>
                      <Link
                        to={`/products/${product.id}`}
                        className="inline-flex items-center justify-center rounded-full border border-primary px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white"
                      >
                        Ver detalles
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {filteredProducts.length === 0 && (
          <motion.div 
            className="rounded-2xl border border-gray-200 bg-white px-8 py-16 text-center text-espresso/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-4xl mb-4">🌱</div>
            <h3 className="text-lg font-semibold mb-2">No encontramos productos</h3>
            <p>Probá limpiar los filtros o explorá otra categoría ecológica.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default TiendaPage;
