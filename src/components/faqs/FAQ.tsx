// components/policy/FAQs.tsx
"use client"

import React, { useState } from 'react'

const FAQs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'How do I create an account?',
      answer: 'You can create an account by clicking on the "Sign Up" button and filling out the registration form.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept credit cards, PayPal, and bank transfers.'
    },
    {
      question: 'Can I cancel my subscription?',
      answer: 'Yes, you can cancel your subscription at any time from your account settings.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h1>
      
      <div className="max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="border-b py-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">{faq.question}</h2>
              <span>{activeIndex === index ? '−' : '+'}</span>
            </div>
            {activeIndex === index && (
              <p className="text-gray-700 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQs