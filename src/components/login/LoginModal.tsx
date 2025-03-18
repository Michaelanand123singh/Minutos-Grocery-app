'use client';

import { useState, useEffect, useRef } from 'react';
import PhoneVerification from './PhoneVerification';
import OtpVerification from './OtpVerification';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
      // Prevent scrolling when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      // Restore scrolling when modal is closed
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      // Small delay to reset after animation
      const timeout = setTimeout(() => {
        setStep('phone');
        setPhoneNumber('');
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePhoneSubmit = (phone: string) => {
    setPhoneNumber(phone);
    setStep('otp');
  };

  const handleOtpSubmit = () => {
    // Handle successful verification here
    onClose();
    // You might want to update user state here
    console.log('User authenticated with phone', phoneNumber);
  };

  const handleResendOtp = () => {
    // Implement OTP resend logic here
    console.log('Resending OTP to', phoneNumber);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div 
        ref={modalRef}
        className="bg-gray-100 rounded-lg w-full max-w-md overflow-hidden shadow-xl"
      >
        {step === 'phone' ? (
          <PhoneVerification onSubmit={handlePhoneSubmit} />
        ) : (
          <OtpVerification 
            phoneNumber={phoneNumber} 
            onSubmit={handleOtpSubmit}
            onResend={handleResendOtp}
            onBack={() => setStep('phone')}
          />
        )}
      </div>
    </div>
  );
};

export default LoginModal;