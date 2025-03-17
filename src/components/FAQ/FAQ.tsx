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

const FAQ = () => {
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
      answer: "We accept multiple payment methods, including UPI, wallets, credit/debit cards, and cash on delivery (COD)."
    },
    {
      question: "Can I schedule a delivery for later?",
      answer: "Yes, you can schedule your order for a later time or date during the checkout process."
    },
    {
      question: "What happens if an item I ordered is out of stock?",
      answer: "If an item is unavailable, the store will inform you, and you may choose a replacement or opt for a refund."
    },
    {
      question: "How do I track my order?",
      answer: "After placing an order, you can track its status in real time through the app's tracking feature."
    },
    {
      question: "Can I cancel my order?",
      answer: "Yes, you can cancel your order before it is dispatched. Cancellation policies may vary for each kirana store."
    },
    {
      question: "What if I receive the wrong items or damaged products?",
      answer: "If there's an issue with your delivery, please contact our support team within the app. We'll resolve the matter promptly by offering replacements or refunds."
    },
    {
      question: "Is there a delivery fee?",
      answer: "Delivery fees depend on the kirana store and your location. Fees (if any) will be shown at checkout."
    },
    {
      question: "How do I contact customer support?",
      answer: "You can reach out to our customer support team through the \"Help\" section in the app. We're happy to assist you with any concerns."
    },
    {
      question: "Can I return products I don't need anymore?",
      answer: "Returns depend on the store's policy. Perishable items, such as vegetables and dairy, are generally non-returnable, but non-perishable goods may have a return window."
    },
    {
      question: "Are there any offers or discounts?",
      answer: "Yes, we often have promotional offers, discounts, and cashback deals. Check the app's \"Offers\" section for the latest deals."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Frequently Asked Questions</h1>
        <p className="mt-4 text-xl text-gray-600">
          Find answers to common questions about our grocery delivery service
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
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
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help.
          </p>
          <Link href="#" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQ;