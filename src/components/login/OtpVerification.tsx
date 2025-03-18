'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface OtpVerificationProps {
  phoneNumber: string;
  onSubmit: () => void;
  onResend: () => void;
  onBack: () => void;
}

const OtpVerification = ({ phoneNumber, onSubmit, onResend, onBack }: OtpVerificationProps) => {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
  const [timeLeft, setTimeLeft] = useState<number>(19);
  const [isExpired, setIsExpired] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    // Focus first input on mount
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  useEffect(() => {
    // Timer for OTP expiration
    if (timeLeft > 0 && !isExpired) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setIsExpired(true);
    }
  }, [timeLeft, isExpired]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) {
      // If pasting multiple digits, distribute them
      const digits = value.split('').slice(0, 6 - index);
      const newOtp = [...otp];
      
      digits.forEach((digit, i) => {
        if (index + i < 6) {
          newOtp[index + i] = digit;
        }
      });
      
      setOtp(newOtp);
      
      // Move focus to appropriate input
      const nextIndex = Math.min(index + digits.length, 5);
      if (inputRefs.current[nextIndex]) {
        inputRefs.current[nextIndex].focus();
      }
    } else {
      // Handle single digit
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      // Move focus to next input
      if (value && index < 5 && inputRefs.current[index + 1]) {
        inputRefs.current[index + 1].focus();
      }
    }
    
    setError(null);
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      if (!otp[index] && index > 0 && inputRefs.current[index - 1]) {
        // If current input is empty and backspace is pressed, move to previous input
        inputRefs.current[index - 1].focus();
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === 'ArrowRight' && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (otp.join('').length === 6) {
      // Here you would normally validate the OTP with your backend
      onSubmit();
    } else {
      setError('Please enter the complete OTP');
    }
  };

  const handleResend = () => {
    setTimeLeft(19);
    setIsExpired(false);
    setOtp(Array(6).fill(''));
    inputRefs.current[0]?.focus();
    onResend();
  };

  const formatPhoneNumber = (phone: string) => {
    // Format as shown in the design
    const lastFourDigits = phone.slice(-4);
    return `+91 888** ${lastFourDigits}`;
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

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-center mb-2">OTP Verification</h3>
        <p className="text-sm text-center mb-4">
          OTP has been sent to {formatPhoneNumber(phoneNumber)}
        </p>

        <form onSubmit={handleSubmit}>
          <div className="flex justify-between mb-6">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <div key={index} className="w-10 h-12">
                <input
                  ref={(el) => {
                    inputRefs.current[index] = el;
                  }}
                  type="text"
                  maxLength={1}
                  value={otp[index]}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-full h-full border-b-2 border-gray-300 text-center text-lg font-semibold outline-none"
                />
              </div>
            ))}
          </div>

          {error && <p className="text-red-500 text-xs mb-2 text-center">{error}</p>}

          <div className="text-center mb-4">
            <span className="text-gray-500 text-sm">
              {!isExpired ? `00:${timeLeft.toString().padStart(2, '0')}` : 'OTP expired'}
            </span>
          </div>

          <div className="text-center mb-6">
            <button
              type="button"
              className="text-sm text-red-500 font-semibold"
              onClick={handleResend}
            >
              {isExpired ? 'Resend OTP' : "Didn't Get it?"}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-400 text-white py-2 rounded-md hover:bg-gray-500 transition"
          >
            Continue
          </button>
        </form>
      </div>

      <p className="text-xs text-gray-500 text-center">
        By continuing, you agree to our Terms of Service & Privacy Policy
      </p>
    </div>
  );
};

export default OtpVerification;