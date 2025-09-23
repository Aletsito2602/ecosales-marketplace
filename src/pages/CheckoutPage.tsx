import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useCartStore } from '../store/cartStore';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  cardNumber: string;
  cardName: string;
  expiryDate: string;
  cvv: string;
};

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { items, getTotalPrice, clearCart } = useCartStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  
  if (items.length === 0) {
    navigate('/cart');
    return null;
  }
  
  const onSubmit = async (_data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Clear cart and redirect to success page
    clearCart();
    setIsSubmitting(false);
    
    // In a real app, you would redirect to a success page
    alert('Order placed successfully!');
    navigate('/');
  };
  
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Checkout</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Order Summary */}
        <div className="md:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Order Summary</h2>
            
            <div className="space-y-3">
              {items.map((item) => (
                <div key={item.product.id} className="flex justify-between">
                  <div>
                    <span className="text-gray-800 dark:text-white">{item.product.name}</span>
                    <span className="text-gray-500 dark:text-gray-400 ml-2">x{item.quantity}</span>
                  </div>
                  <span className="text-gray-800 dark:text-white">${(item.product.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            
            <div className="border-t border-gray-200 dark:border-gray-700 my-4 pt-4">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">Subtotal:</span>
                <span className="text-gray-800 dark:text-white">${getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-gray-600 dark:text-gray-300">Shipping:</span>
                <span className="text-gray-800 dark:text-white">Free</span>
              </div>
              <div className="flex justify-between mt-4 text-lg font-bold">
                <span className="text-gray-800 dark:text-white">Total:</span>
                <span className="text-gray-800 dark:text-white">${getTotalPrice().toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Checkout Form */}
        <div className="md:col-span-2">
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 space-y-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Shipping Information</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  {...register('firstName', { required: 'First name is required' })}
                  className="w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                />
                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  {...register('lastName', { required: 'Last name is required' })}
                  className="w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                />
                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                {...register('email', { 
                  required: 'Email is required',
                  pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                })}
                className="w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
            
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Address</label>
              <input
                type="text"
                id="address"
                {...register('address', { required: 'Address is required' })}
                className="w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              />
              {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">City</label>
                <input
                  type="text"
                  id="city"
                  {...register('city', { required: 'City is required' })}
                  className="w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                />
                {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
              </div>
              
              <div>
                <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Postal Code</label>
                <input
                  type="text"
                  id="postalCode"
                  {...register('postalCode', { required: 'Postal code is required' })}
                  className="w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                />
                {errors.postalCode && <p className="text-red-500 text-sm mt-1">{errors.postalCode.message}</p>}
              </div>
              
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Country</label>
                <input
                  type="text"
                  id="country"
                  {...register('country', { required: 'Country is required' })}
                  className="w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                />
                {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>}
              </div>
            </div>
            
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mt-8 mb-4">Payment Information</h2>
            
            <div>
              <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                {...register('cardNumber', { 
                  required: 'Card number is required',
                  pattern: { value: /^\d{16}$/, message: 'Invalid card number' }
                })}
                placeholder="1234 5678 9012 3456"
                className="w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              />
              {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber.message}</p>}
            </div>
            
            <div>
              <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name on Card</label>
              <input
                type="text"
                id="cardName"
                {...register('cardName', { required: 'Name on card is required' })}
                className="w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              />
              {errors.cardName && <p className="text-red-500 text-sm mt-1">{errors.cardName.message}</p>}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Expiry Date</label>
                <input
                  type="text"
                  id="expiryDate"
                  {...register('expiryDate', { 
                    required: 'Expiry date is required',
                    pattern: { value: /^(0[1-9]|1[0-2])\/\d{2}$/, message: 'Format: MM/YY' }
                  })}
                  placeholder="MM/YY"
                  className="w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                />
                {errors.expiryDate && <p className="text-red-500 text-sm mt-1">{errors.expiryDate.message}</p>}
              </div>
              
              <div>
                <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">CVV</label>
                <input
                  type="text"
                  id="cvv"
                  {...register('cvv', { 
                    required: 'CVV is required',
                    pattern: { value: /^\d{3,4}$/, message: 'Invalid CVV' }
                  })}
                  className="w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                />
                {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv.message}</p>}
              </div>
            </div>
            
            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={() => navigate('/cart')}
                className="bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white px-6 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                Back to Cart
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-coffee-500 text-white px-6 py-3 rounded-lg hover:bg-coffee-600 transition-colors disabled:opacity-70"
              >
                {isSubmitting ? 'Processing...' : 'Place Order'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
