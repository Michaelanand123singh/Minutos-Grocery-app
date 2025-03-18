'use client';

import React from 'react';
import { ChevronRight } from 'lucide-react';

// Define types for support categories
interface SupportCategory {
  title: string;
}

const SupportSection: React.FC = () => {
  // Categories from the image
  const categories: SupportCategory[] = [
    { title: 'Coupons & Offers' },
    { title: 'General Inquiry' },
    { title: 'Payment Related' },
    { title: 'Order / Products Related' },
    { title: 'Wallet Related' },
    { title: 'Gift Card' },
    { title: 'Feedback & Suggestions' },
    { title: 'Write Us' },
  ];

  return (
    <div className="flex-grow">
      <div className="max-w-3xl mx-auto bg-gray-100 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">FAQs</h2>
        
        {/* Support Categories */}
        <div className="bg-white rounded-md overflow-hidden">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="border-b last:border-b-0"
            >
              <button className="w-full py-4 px-6 flex justify-between items-center hover:bg-gray-50 transition">
                <span className="text-gray-800">{category.title}</span>
                <ChevronRight className="text-red-500" size={18} />
              </button>
            </div>
          ))}
        </div>

        {/* Contact Support Button */}
        <div className="mt-8 text-center">
          <button className="px-12 py-3 bg-cyan-400 text-white rounded-full hover:bg-cyan-500 transition">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupportSection;