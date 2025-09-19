import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../lib/data';
import { useCartStore } from '../store/cartStore';

const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const addToCart = useCartStore((state) => state.addItem);
  
  const product = PRODUCTS.find(p => p.id === productId);
  
  if (!product) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Product Not Found</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">The product you're looking for doesn't exist or has been removed.</p>
        <button
          onClick={() => navigate('/products')}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Back to Products
        </button>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
    navigate('/cart');
  };
  
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-auto object-cover"
          />
        </div>
        
        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">{product.name}</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Category: {product.category}</p>
          </div>
          
          <div className="text-2xl font-bold text-gray-800 dark:text-white">
            ${product.price.toFixed(2)}
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Description</h3>
            <p className="text-gray-600 dark:text-gray-300">{product.description}</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <label htmlFor="quantity" className="text-gray-700 dark:text-gray-300">Quantity:</label>
            <div className="flex items-center">
              <button
                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-l"
              >
                -
              </button>
              <input
                type="number"
                id="quantity"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-16 text-center border-y border-gray-300 dark:border-gray-600 py-1 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
              />
              <button
                onClick={() => setQuantity(prev => prev + 1)}
                className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-r"
              >
                +
              </button>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <button
              onClick={handleAddToCart}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex-1"
            >
              Add to Cart
            </button>
            <button
              onClick={() => navigate('/products')}
              className="bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white px-6 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Back to Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
