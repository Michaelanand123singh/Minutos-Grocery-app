'use client';

import { useState } from 'react';
import LoginModal from './LoginModal';

interface LoginButtonProps {
  className?: string;
  buttonText?: string;
}

export default function LoginButton({ 
  className = "bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition", 
  buttonText = "Login / Sign Up" 
}: LoginButtonProps) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsLoginModalOpen(true)}
        className={className}
      >
        {buttonText}
      </button>
      
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </>
  );
}