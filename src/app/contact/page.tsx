import React from 'react';
import Head from 'next/head';
import Layout from '@/components/layout/Layout';


const Contact = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 py-12">
      {/* Contact main content section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact us</h1>
        <p className="text-gray-600">We'd love to hear from you. Please fill out this form.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left column: Contact information */}
        <div className="w-full md:w-1/3 space-y-8">
          {/* Address section */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-900">Our address</h3>
            </div>
            <div className="ml-8 space-y-4">
              <p className="text-gray-600">KiranaPro Software Private Limited</p>
              
              <div>
                <p className="font-medium text-gray-900">Bangalore</p>
                <p className="text-gray-600">136, 1st Cross Rd, 5th Block, Koramangala, Bengaluru, Karnataka 560034</p>
              </div>
              
              <div>
                <p className="font-medium text-gray-900">Thrissur</p>
                <p className="text-gray-600">MC Tower, C Achutha Menon Road, G6H2+WRV, Chakkamukku, Thrissur, Kerala 680020</p>
              </div>
            </div>
          </div>

          {/* Email section */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-900">Email us</h3>
            </div>
            <div className="ml-8">
              <p className="text-gray-600">We'll get back to you within 24-48 hours.</p>
              <p className="text-green-600 mt-1">support@kirana.pro</p>
            </div>
          </div>

          {/* Call section */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-900">Call us</h3>
            </div>
            <div className="ml-8">
              <p className="text-gray-600">Delhi, Bangalore : <span className="text-gray-900">+91 90191 36078</span></p>
              <p className="text-gray-600 mt-1">Kerala : <span className="text-gray-900">+91 97411 53635</span></p>
            </div>
          </div>
        </div>
        
        {/* Right column: Contact form */}
        <div className="w-full md:w-2/3">
          <form className="space-y-4">
            <div>
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full p-3 bg-gray-100 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <input 
                type="tel" 
                placeholder="Phone" 
                className="w-full p-3 bg-gray-100 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full p-3 bg-gray-100 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <textarea 
                placeholder="Your message" 
                rows={4}
                className="w-full p-3 bg-gray-100 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              ></textarea>
            </div>
            <div>
              <button 
                type="submit" 
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-md flex items-center justify-center gap-2 transition-colors duration-200"
              >
                Send message
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;