'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cart, { CartItem } from '@/components/cart/Cart';

export default function CartPage() {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(true);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Load cart items from localStorage
    const savedCart = localStorage.getItem('cartItems');

    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart) as CartItem[]);
      } catch (error) {
        console.error('Failed to parse cart items', error);
        setCartItems([]);
      }
    } else {
      // Set dummy cart data if no cart data is found
      const dummyData: CartItem[] = [
        {
          id: '1',
          name: 'Amul Shakti Fresh Milk',
          image: '/images/milk.png', // Update with actual image path
          quantity: 1,
          price: 30,
          size: '500 ml',
          deliveryTime: 'Delivery in 8 minutes',
          shipmentDetails: 'Shipment of 1 item',
          deliveryCharge: 25,
          handlingCharge: 4,
        },
      ];
      setCartItems(dummyData);
      localStorage.setItem('cartItems', JSON.stringify(dummyData));
    }
  }, []);

  const saveCartToStorage = (items: CartItem[]) => {
    localStorage.setItem('cartItems', JSON.stringify(items));
  };

  const closeCart = () => {
    setIsCartOpen(false);
    router.push('/'); // Redirect to home page when cart is closed
  };

  const removeItem = (id: string) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    saveCartToStorage(updatedCart);
  };

  const updateQuantity = (id: string, quantity: number) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    setCartItems(updatedCart);
    saveCartToStorage(updatedCart);
  };

  // Calculate total bill
  const itemsTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const deliveryCharge = cartItems.length > 0 ? cartItems[0].deliveryCharge : 0;
  const handlingCharge = cartItems.length > 0 ? cartItems[0].handlingCharge : 0;
  const grandTotal = itemsTotal + deliveryCharge + handlingCharge;

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Cart
        isOpen={isCartOpen}
        onClose={closeCart}
        items={cartItems}
        removeItem={removeItem}
        updateQuantity={updateQuantity}
        deliveryTime="Delivery in 8 minutes"
        shipmentDetails="Shipment of 1 item"
        billDetails={{
          itemsTotal,
          deliveryCharge,
          handlingCharge,
          grandTotal,
        }}
        cancellationPolicy="Orders cannot be cancelled once packed for delivery. In case of unexpected delays, a refund will be provided, if applicable."
      />
    </div>
  );
}
