import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PRODUCTS } from '../lib/data';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { openWhatsApp } from '../lib/whatsapp';
import PageBanner from '../components/ui/PageBanner';
import { formatARS } from '../lib/currency';

const ProductDetailPage = () => {
  // Scroll to top on page load
  useScrollToTop();
  
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  
  const product = PRODUCTS.find(p => p.id === productId);
  
  if (!product) {
    return (
      <div className="space-y-10">
        <PageBanner
          title="No encontramos ese café"
          description="Puede que el enlace haya cambiado o el producto haya sido dado de baja."
          backgroundImage="https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1600"
          cta={{ label: 'Volver al catálogo', to: '/products' }}
        />
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-300 mb-6">Probá navegar el catálogo para descubrir otros perfiles Kaapeh.</p>
          <button
            onClick={() => navigate('/products')}
            className="bg-coffee-500 text-white px-6 py-2 rounded hover:bg-coffee-600 transition-colors"
          >
            Ir al catálogo
          </button>
        </div>
      </div>
    );
  }
  
  const handleBuyWhatsApp = () => {
    openWhatsApp(product, quantity);
  };
  
  return (
    <>
      <div className="w-full space-y-16 pb-24">
        <PageBanner
          title={product.name}
          description={product.description}
          backgroundImage={product.image}
          align="left"
        />

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Product Image */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
            
            {/* Product Details */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Header */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="bg-turquoise-100 text-turquoise-800 px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-coffee-800">{product.name}</h1>
                <div className="text-3xl font-bold text-coffee-600">{formatARS(product.price)}</div>
              </div>

              {/* Description */}
              <div className="bg-neutral-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-coffee-800 mb-4">Descripción</h3>
                <p className="text-coffee-700 leading-relaxed text-lg">{product.description}</p>
              </div>

              {/* Tasting Notes */}
              {product.tastingNotes && (
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold text-coffee-800 mb-6">Notas de Cata</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-coffee-700 mb-2">Aroma</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.tastingNotes.aroma.map((note, index) => (
                          <span key={index} className="bg-coffee-100 text-coffee-700 px-3 py-1 rounded-full text-sm">
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-coffee-700 mb-2">Sabor</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.tastingNotes.flavor.map((note, index) => (
                          <span key={index} className="bg-turquoise-100 text-turquoise-700 px-3 py-1 rounded-full text-sm">
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-coffee-700 mb-2">Cuerpo</h4>
                      <p className="text-coffee-600">{product.tastingNotes.body}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-coffee-700 mb-2">Acidez</h4>
                      <p className="text-coffee-600">{product.tastingNotes.acidity}</p>
                    </div>
                    <div className="md:col-span-2">
                      <h4 className="font-semibold text-coffee-700 mb-2">Final</h4>
                      <p className="text-coffee-600">{product.tastingNotes.finish}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Carbon Footprint */}
              {product.carbonFootprintSaved && (
                <div className="bg-green-50 rounded-xl p-6 border border-green-200 shadow-sm">
                  <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                    <span className="text-2xl">🌱</span>
                    Impacto Ambiental
                  </h3>
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 rounded-full p-4">
                      <span className="text-3xl">♻️</span>
                    </div>
                    <div>
                      <p className="text-green-700 font-semibold text-lg">
                        {product.carbonFootprintSaved} kg CO₂ ahorrados
                      </p>
                      <p className="text-green-600 text-sm">
                        Al elegir nuestro café sostenible contribuís al cuidado del planeta
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Shipping Options */}
              {product.shippingOptions && (
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold text-coffee-800 mb-6 flex items-center gap-2">
                    <span className="text-2xl">📦</span>
                    Opciones de Envío
                  </h3>
                  <div className="space-y-4">
                    {product.shippingOptions.map((option, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-turquoise-300 transition-colors">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <h4 className="font-semibold text-coffee-800">{option.company}</h4>
                            {option.isBCorp && (
                              <span className="bg-turquoise-100 text-turquoise-800 px-2 py-1 rounded-full text-xs font-medium">
                                B Corp ✓
                              </span>
                            )}
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-coffee-800">{formatARS(option.cost)}</p>
                            <p className="text-sm text-coffee-600">{option.deliveryTime}</p>
                          </div>
                        </div>
                        <p className="text-coffee-600 text-sm">{option.description}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-turquoise-50 rounded-lg border border-turquoise-200">
                    <p className="text-sm text-turquoise-700">
                      <strong>💡 Tip:</strong> Las empresas B Corp están certificadas por su compromiso con el impacto social y ambiental positivo.
                    </p>
                  </div>
                </div>
              )}

              {/* Quantity Selector */}
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-semibold text-coffee-800 mb-4">Cantidad</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                      className="bg-gray-100 hover:bg-gray-200 px-4 py-3 text-coffee-700 font-semibold transition-colors"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-20 text-center py-3 border-0 focus:ring-0 text-coffee-800 font-semibold"
                    />
                    <button
                      onClick={() => setQuantity(prev => prev + 1)}
                      className="bg-gray-100 hover:bg-gray-200 px-4 py-3 text-coffee-700 font-semibold transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <div className="text-lg font-semibold text-coffee-800">
                    Total: {formatARS(product.price * quantity)}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Buy Button */}
      <div className="fixed bottom-6 left-6 right-6 z-50 max-w-md mx-auto">
        <motion.button
          onClick={handleBuyWhatsApp}
          className="w-full bg-turquoise-500 hover:bg-turquoise-600 backdrop-blur-sm text-white font-bold py-4 px-6 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 border border-turquoise-400/50"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center justify-between">
            <span className="text-lg">Comprar por WhatsApp</span>
            <span className="text-lg font-bold">{formatARS(product.price * quantity)}</span>
          </div>
        </motion.button>
      </div>
    </>
  );
};

export default ProductDetailPage;
