import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, items, removeItem, updateQuantity }) => {
  if (!isOpen) return null;

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      
      <div className="absolute top-0 right-0 w-full max-w-md h-full bg-white shadow-xl flex flex-col">
        <div className="p-4 bg-white flex items-center">
          <h2 className="text-lg font-medium">&lt; Your Cart</h2>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <div className="bg-white rounded-lg shadow p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center">
                <div className="w-24 h-24 bg-gray-200 rounded mb-4"></div>
                <p className="text-gray-800 font-medium mb-4">Your cart is empty</p>
                <Link 
                  href="/ " 
                  className="bg-gray-700 text-white py-2 px-4 rounded text-sm hover:bg-gray-800 transition w-full text-center"
                  onClick={onClose}
                >
                  Browse Products
                </Link>
              </div>
            ) : (
              <>
                <div className="max-h-96 overflow-y-auto">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center py-4 border-b border-gray-200 last:border-0">
                      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <Image 
                          src={item.image} 
                          alt={item.name} 
                          width={64} 
                          height={64} 
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      
                      <div className="ml-4 flex flex-1 flex-col">
                        <div className="flex justify-between text-base font-medium text-gray-800">
                          <h3>{item.name}</h3>
                          <p className="ml-4">₹{(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm mt-2">
                          <div className="flex items-center border rounded-md">
                            <button 
                              onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                              className="px-2 py-1 text-gray-600 hover:text-gray-800"
                            >
                              -
                            </button>
                            <span className="px-2 py-1">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-2 py-1 text-gray-600 hover:text-gray-800"
                            >
                              +
                            </button>
                          </div>
                          <button 
                            type="button" 
                            onClick={() => removeItem(item.id)}
                            className="font-medium text-red-500 hover:text-red-600"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-gray-200 pt-4 mt-2">
                  <div className="flex justify-between text-base font-medium text-gray-800 mb-4">
                    <p>Subtotal</p>
                    <p>₹{calculateTotal().toFixed(2)}</p>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <Link 
                      href="/checkout" 
                      className="w-full bg-red-400 text-white py-3 px-4 rounded text-sm font-medium hover:bg-red-500 transition text-center"
                      onClick={onClose}
                    >
                      Checkout
                    </Link>
                    <Link 
                      href="/products" 
                      className="w-full bg-gray-100 text-gray-800 py-3 px-4 rounded text-sm font-medium hover:bg-gray-200 transition text-center"
                      onClick={onClose}
                    >
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;