'use client';

import React, { useState, useEffect } from 'react';
import Cart, { CartItem } from '@/components/cart/Cart';

export default function CartPage() {
  const [isCartOpen, setIsCartOpen] = useState(true);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  
  useEffect(() => {
    // Load cart items from localStorage
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error("Failed to parse cart items", error);
        setCartItems([]);
      }
    }
  }, []);

  const saveCartToStorage = (items: CartItem[]) => {
    localStorage.setItem('cartItems', JSON.stringify(items));
  };

  const closeCart = () => {
    setIsCartOpen(false);
    // Redirect to home page when cart is closed
    window.location.href = '/';
  };

  const removeItem = (id: string) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    saveCartToStorage(updatedCart);
  };

  const updateQuantity = (id: string, quantity: number) => {
    const updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, quantity } : item
    );
    setCartItems(updatedCart);
    saveCartToStorage(updatedCart);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Cart 
        isOpen={isCartOpen}
        onClose={closeCart}
        items={cartItems}
        removeItem={removeItem}
        updateQuantity={updateQuantity}
      />
    </div>
  );
}