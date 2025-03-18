'use client';

import { useState } from 'react';
import Image from 'next/image';

interface PhoneVerificationProps {
  onSubmit: (phoneNumber: string) => void;
}

const PhoneVerification = ({ onSubmit }: PhoneVerificationProps) => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation - you might want to improve this
    if (phoneNumber.length >= 10) {
      onSubmit(phoneNumber);
    } else {
      setIsValid(false);
    }
  };

  return (
    <div className="px-6 py-8">
      <div className="flex flex-col items-center mb-6">
        <div className="w-32 h-12 relative mb-2">
          <Image 
            src="/images/minutos-logo.png" 
            alt="Minutos Logo"
            layout="fill"
            objectFit="contain"
            className="w-full h-auto"
          />
        </div>
        <h2 className="text-xl font-semibold text-center">
          <span className="text-gray-900">Minut</span>
          <span className="text-red-500">o</span>
          <span className="text-gray-900">s</span>
        </h2>
        <p className="text-red-500 text-sm mt-1">Your Local Delivery partner</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <div className={`flex border rounded-md overflow-hidden ${!isValid ? 'border-red-500' : 'border-gray-300'}`}>
            <div className="bg-gray-100 px-3 py-2 text-gray-600 border-r">
              +91
            </div>
            <input
              type="tel"
              placeholder="Enter Mobile Number"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
                setIsValid(true);
              }}
              className="flex-1 py-2 px-3 outline-none"
            />
          </div>
          {!isValid && (
            <p className="text-red-500 text-xs mt-1">Please enter a valid phone number</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-gray-400 text-white py-2 rounded-md hover:bg-gray-500 transition"
        >
          Continue
        </button>
      </form>

      <p className="text-xs text-gray-500 text-center mt-4">
        By continuing, you agree to our Terms of Service & Privacy Policy
      </p>
    </div>
  );
};

export default PhoneVerification;