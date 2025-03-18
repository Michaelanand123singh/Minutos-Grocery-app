'use client';

import { useState } from 'react';
import LoginModal from '@/components/login/LoginModal';

export default function LoginPage() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <div className="container mx-auto py-20 px-4">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-6">Welcome to Minutos</h1>
        <p className="mb-8">Your Local Delivery partner</p>
        
        <button
          onClick={() => setIsLoginModalOpen(true)}
          className="w-full bg-red-500 text-white py-3 px-4 rounded-md hover:bg-red-600 transition"
        >
          Login / Sign Up
        </button>
        
        <LoginModal 
          isOpen={isLoginModalOpen} 
          onClose={() => setIsLoginModalOpen(false)} 
        />
      </div>
    </div>
  );
}