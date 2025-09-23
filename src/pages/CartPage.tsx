import { Link } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { useScrollToTop } from '../hooks/useScrollToTop';

const CartPage = () => {
  // Scroll to top on page load
  useScrollToTop();
  
  const { items, removeItem, updateQuantity, clearCart, getTotalPrice } = useCartStore();
  
  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Your Cart</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">Your cart is empty.</p>
        <Link
          to="/products"
          className="bg-coffee-500 text-white px-6 py-3 rounded-lg hover:bg-coffee-600 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }
  
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Your Cart</h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Quantity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Total</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {items.map((item) => (
                <tr key={item.product.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-16 w-16 flex-shrink-0">
                        <img 
                          src={item.product.image} 
                          alt={item.product.name} 
                          className="h-full w-full object-cover rounded"
                        />
                      </div>
                      <div className="ml-4">
                        <Link 
                          to={`/products/${item.product.id}`}
                          className="text-sm font-medium text-gray-800 dark:text-white hover:text-coffee-500 dark:hover:text-coffee-300"
                        >
                          {item.product.name}
                        </Link>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                    ${item.product.price.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <button
                        onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                        className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-l"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.product.id, Math.max(1, parseInt(e.target.value) || 1))}
                        className="w-12 text-center border-y border-gray-300 dark:border-gray-600 py-1 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                      />
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-r"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Cart Summary */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div className="flex justify-between mb-4">
          <span className="text-gray-600 dark:text-gray-300">Subtotal:</span>
          <span className="text-gray-800 dark:text-white font-medium">${getTotalPrice().toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-4">
          <span className="text-gray-600 dark:text-gray-300">Shipping:</span>
          <span className="text-gray-800 dark:text-white font-medium">Free</span>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 my-4 pt-4">
          <div className="flex justify-between">
            <span className="text-lg font-bold text-gray-800 dark:text-white">Total:</span>
            <span className="text-lg font-bold text-gray-800 dark:text-white">${getTotalPrice().toFixed(2)}</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6">
          <button
            onClick={() => clearCart()}
            className="bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white px-6 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            Clear Cart
          </button>
          <div className="flex gap-4">
            <Link
              to="/products"
              className="bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white px-6 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Continue Shopping
            </Link>
            <Link
              to="/checkout"
              className="bg-coffee-500 text-white px-6 py-3 rounded-lg hover:bg-coffee-600 transition-colors"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
