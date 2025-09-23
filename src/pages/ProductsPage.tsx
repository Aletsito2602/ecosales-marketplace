import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaSortAmountDown } from 'react-icons/fa';
import { PRODUCTS } from '../lib/data';
import { useScrollToTop } from '../hooks/useScrollToTop';
import PageBanner from '../components/ui/PageBanner';
import { formatARS } from '../lib/currency';

const ProductsPage = () => {
  // Scroll to top on page load
  useScrollToTop();
  
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');
  
  const categories = Array.from(new Set(PRODUCTS.map(product => product.category)));
  
  const filteredProducts = useMemo(() => {
    const byCategory = selectedCategory
      ? PRODUCTS.filter(product => product.category === selectedCategory)
      : PRODUCTS;

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
    } else {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    }

    return sorted;
  }, [selectedCategory, searchTerm, sortOption]);

  const resultCount = filteredProducts.length;
    
  return (
    <div className="w-full space-y-12">
      <PageBanner
        title="Catálogo EcoSales"
        description="Productos sostenibles seleccionados cuidadosamente de empresas comprometidas con el medio ambiente y la responsabilidad social."
        backgroundImage="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1600&auto=format&fit=crop"
        cta={{ label: 'Ver Impacto Ambiental', to: '/huella' }}
      />

      <div className="w-full space-y-10 px-6 md:px-12 pb-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2 max-w-2xl">
            <h1 className="text-3xl font-bold text-gray-900">Todos los Productos</h1>
            <p className="text-gray-600 text-sm md:text-base">
              Filtrá por categoría, buscá productos sostenibles o descubrí nuevas opciones ecológicas. Encontramos {resultCount} productos responsables para vos.
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
                className="w-full rounded-full border border-gray-200 bg-white px-10 py-2 text-sm text-gray-800 shadow-sm focus:border-coffee-400 focus:outline-none focus:ring-2 focus:ring-coffee-300"
              />
            </div>

            <label className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
              <FaSortAmountDown className="text-coffee-500" />
              <span className="hidden sm:inline text-gray-600">Ordenar</span>
              <select
                value={sortOption}
                onChange={(event) => setSortOption(event.target.value as typeof sortOption)}
                className="bg-transparent text-gray-700 focus:outline-none"
              >
                <option value="featured">Destacados</option>
                <option value="price-asc">Precio: menor a mayor</option>
                <option value="price-desc">Precio: mayor a menor</option>
              </select>
            </label>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
              selectedCategory === null
                ? 'bg-coffee-500 text-white shadow-lg shadow-coffee-500/30'
                : 'border-gray-200 bg-white text-gray-600 hover:border-coffee-200 hover:text-gray-900'
            }`}
          >
            Todas
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-coffee-500 text-white shadow-lg shadow-coffee-500/30'
                  : 'border-gray-200 bg-white text-gray-600 hover:border-coffee-200 hover:text-gray-900'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map(product => (
            <article
              key={product.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg transition-transform hover:-translate-y-1 hover:shadow-2xl"
            >
              <Link to={`/products/${product.id}`} className="relative block">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">
                  {product.category}
                </span>
              </Link>

              <div className="flex flex-1 flex-col gap-4 px-6 pb-6 pt-5">
                <div className="space-y-2">
                  <Link to={`/products/${product.id}`} className="inline-block text-lg font-semibold text-gray-900 transition-colors hover:text-coffee-600">
                    {product.name}
                  </Link>
                  <p className="text-sm leading-relaxed text-gray-600 line-clamp-3">
                    {product.description}
                  </p>
                </div>

                <div className="mt-auto">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-bold text-coffee-600">{formatARS(product.price)}</span>
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
              </div>
            </article>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="rounded-2xl border border-gray-200 bg-white px-8 py-16 text-center text-gray-600">
            No encontramos productos sostenibles con esos filtros. Probá limpiarlos o explorá otra categoría.
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
