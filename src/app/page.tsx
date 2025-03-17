'use client';
import { useEffect, useState } from "react";
import HeroSection from "@/components/home/HeroSection";
import GrowthDrivers from "@/components/home/GrowthDrivers";
import RetailTransformation from "@/components/home/RetailTransformation";
import EmpoweringCommunities from "@/components/home/EmpoweringCommunities";
import Link from "next/link";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
        onClick={onClose}
      />
      <div className="relative bg-gradient-to-br from-red-500 to-red-700 rounded-xl shadow-2xl p-8 max-w-md w-full mx-4 border border-red-400 transition-opacity opacity-100">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white/80 hover:text-white transition-colors"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-3">
            Grow your kirana business 10x faster.
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Connecting local stores to digital shoppers across India
          </p>
         <Link href="/signup-form"> 
           <button 
              className="px-8 py-4 bg-white text-red-600 font-bold text-lg rounded-lg hover:bg-red-50 transition-colors shadow-lg hover:shadow-xl"
            >
              Join us for free
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  useEffect(() => {
    setIsModalOpen(true); // Open modal when page loads
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      <main className="flex-1 overflow-x-hidden">
        <HeroSection />
        <EmpoweringCommunities />
        <RetailTransformation />
        <GrowthDrivers />
      </main>
    </div>
  );
}