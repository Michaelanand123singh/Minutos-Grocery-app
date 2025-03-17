"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-800 py-8">
      <div className="container mx-auto px-4 border-t pt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Download App Section */}
          <div className="flex flex-col">
            <p className="font-medium mb-4">Download <span className="text-red-500">Minutos</span> Mobile App Now!!</p>
            <div className="space-y-3">
              <Link href="#" className="block">
                <button className="border border-gray-400 rounded-md w-full py-3 text-center font-medium">
                  IOS
                </button>
              </Link>
              <Link href="#" className="block">
                <button className="border border-gray-400 rounded-md w-full py-3 text-center font-medium">
                  ANDROID
                </button>
              </Link>
            </div>
          </div>
          
          {/* Information Links */}
          <div className="flex flex-col">
            <ul className="space-y-3">
              <li>
                <Link href="/faqs" className="hover:text-red-500 transition-colors duration-200">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-red-500 transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-red-500 transition-colors duration-200">
                  Pricing, Return & Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-red-500 transition-colors duration-200">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-red-500 transition-colors duration-200">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Links */}
          <div className="flex flex-col">
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="hover:text-red-500 transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/join" className="hover:text-red-500 transition-colors duration-200">
                  Join us
                </Link>
              </li>
              <li className="mt-6">
                <Link href="/feedback" className="hover:text-red-500 transition-colors duration-200">
                  Feedback & Complaints
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="mt-8 text-center border-t pt-6">
          <p className="text-sm">Copyright © 2025 Minutos Technologies Pvt.Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;