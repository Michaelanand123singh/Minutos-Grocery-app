"use client"

import React, { useState } from 'react';
import Link from 'next/link';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        className="flex justify-between items-center w-full text-left font-medium text-gray-900 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg">{question}</span>
        <svg 
          className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="mt-2 text-gray-600 pl-1">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const GrowthDrivers = () => {
  const faqItems = [
    {
      question: "How does the grocery delivery service work?",
      answer: "Our platform connects you with the nearest kirana stores based on your location. Simply browse the app, select the items you need, place your order, and we'll deliver them right to your doorstep."
    },
    {
      question: "How do I find nearby kirana stores?",
      answer: "Once you enable location access on the app, we'll display a list of kirana stores closest to you, along with their available products."
    },
    {
      question: "What products are available for delivery?",
      answer: "Products range from groceries, fresh produce, and dairy to snacks, beverages, and personal care items. Availability may vary depending on the stock of the kirana store you select."
    },
    {
      question: "What are the delivery timings?",
      answer: "Delivery timings depend on the operating hours of the kirana store and the availability of delivery agents. Typically, orders are delivered within 10 min – 2 hours."
    },
    {
      question: "Is there a minimum order value?",
      answer: "Yes, some kirana stores may set a minimum order value for delivery. This will be clearly mentioned during checkout."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept multiple payment methods, including UPI, wallets, credit/debit cards, and cash on delivery (COD)"
    }
  ];

  return (
    <div className="max-w-3xl mx-auto rounded-lg shadow-lg p-6 my-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">FAQ</h2>
        <p className="mt-2 text-gray-600">Understanding what propels our business forward</p>
      </div>
      
      <div className="divide-y divide-gray-200">
        {faqItems.map((item, index) => (
          <FAQItem 
            key={index} 
            question={item.question} 
            answer={item.answer} 
          />
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <Link href="/faq" className="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Read More FAQs
          <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default GrowthDrivers;