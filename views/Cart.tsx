
import React from 'react';
import { CartItem } from '../types';

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
  onCheckout: () => void;
  setView: (view: any) => void;
}

const Cart: React.FC<CartProps> = ({ items, onUpdateQuantity, onRemove, onCheckout, setView }) => {
  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = items.length > 0 ? 15 : 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="animate-fadeIn max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-black text-gray-900 mb-12">Shopping Basket</h1>
      
      {items.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Item List */}
          <div className="lg:col-span-2 space-y-8">
            {items.map((item) => (
              <div key={item.id} className="flex gap-6 p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-32 h-32 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">{item.category}</p>
                      <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                    </div>
                    <button 
                      onClick={() => onRemove(item.id)}
                      className="text-gray-300 hover:text-red-500 transition-colors"
                    >
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50 px-2 py-1">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-blue-600"
                      >
                        <i className="fa-solid fa-minus"></i>
                      </button>
                      <span className="w-10 text-center font-bold text-gray-900">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-blue-600"
                      >
                        <i className="fa-solid fa-plus"></i>
                      </button>
                    </div>
                    <p className="text-xl font-black text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))}
            
            <button 
              onClick={() => setView('shop')}
              className="flex items-center gap-2 text-blue-600 font-bold hover:underline"
            >
              <i className="fa-solid fa-arrow-left"></i> Continue Shopping
            </button>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xl sticky top-24">
              <h3 className="text-xl font-bold mb-8">Order Summary</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-gray-500">
                  <span>Subtotal</span>
                  <span className="font-bold text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Flat Shipping</span>
                  <span className="font-bold text-gray-900">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Estimated Tax (8%)</span>
                  <span className="font-bold text-gray-900">${tax.toFixed(2)}</span>
                </div>
                <div className="pt-6 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-2xl font-black text-blue-600">${total.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <button 
                  onClick={onCheckout}
                  className="w-full py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-all shadow-xl active:scale-[0.98]"
                >
                  Secure Checkout
                </button>
                <div className="flex justify-center items-center gap-4 text-gray-300">
                  <i className="fa-brands fa-cc-visa text-2xl"></i>
                  <i className="fa-brands fa-cc-mastercard text-2xl"></i>
                  <i className="fa-brands fa-cc-apple-pay text-2xl"></i>
                </div>
                <p className="text-xs text-center text-gray-400">Secure 256-bit SSL encrypted checkout.</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-32 bg-white rounded-3xl border border-dashed border-gray-200">
           <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-8">
             <i className="fa-solid fa-cart-arrow-down text-blue-600 text-4xl"></i>
           </div>
           <h2 className="text-3xl font-black text-gray-900 mb-4">Your basket is empty</h2>
           <p className="text-gray-500 mb-10 max-w-sm text-center">Looks like you haven't added anything to your cart yet. Explore our latest arrivals!</p>
           <button 
             onClick={() => setView('shop')}
             className="px-10 py-4 bg-blue-600 text-white rounded-full font-bold shadow-xl shadow-blue-100 hover:scale-105 transition-all"
           >
             Start Exploring
           </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
