"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-kirana-green text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start col-span-2 sm:col-span-2 md:col-span-1 mb-6 md:mb-0">
            
            <div className="hidden md:block mt-4">
              <p className="text-2xl text-white/80">
                Connecting local stores to digital shoppers across India
              </p>
            </div>
          </div>
          
          {/* Legal Links */}
          <div className="flex flex-col">
            <h3 className="font-semibold text-lg mb-3 md:mb-4 border-b border-white/20 pb-2">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="hover:underline text-white/80 hover:text-white transition-colors duration-200 text-sm md:text-base">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:underline text-white/80 hover:text-white transition-colors duration-200 text-sm md:text-base">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/return" className="hover:underline text-white/80 hover:text-white transition-colors duration-200 text-sm md:text-base">
                  Return Policy
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company Links */}
          <div className="flex flex-col">
            <h3 className="font-semibold text-lg mb-3 md:mb-4 border-b border-white/20 pb-2">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:underline text-white/80 hover:text-white transition-colors duration-200 text-sm md:text-base">
                  About us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline text-white/80 hover:text-white transition-colors duration-200 text-sm md:text-base">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Quick Links and Social Media */}
          <div className="flex flex-col">
            <h3 className="font-semibold text-lg mb-3 md:mb-4 border-b border-white/20 pb-2">Social Media</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://www.facebook.com/profile.php?id=61573695005908" className="hover:underline text-white/80 hover:text-white transition-colors duration-200 flex items-center text-sm md:text-base" target="_blank" rel="noopener noreferrer">
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.429v-3.622h3.391V8.413c0-3.36 2.055-5.187 5.059-5.187 1.435 0 2.663.107 3.021.155v3.5h-2.074c-1.623 0-1.939.773-1.939 1.905v2.498h3.873l-.505 3.622h-3.368V24h6.609C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z"/>
                  </svg>
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/minutosinstantly?igsh=c3F5Zm1mMzYyaDNv&utm_source=qr" className="hover:underline text-white/80 hover:text-white transition-colors duration-200 flex items-center text-sm md:text-base" target="_blank" rel="noopener noreferrer">
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="https://linkedin.com" className="hover:underline text-white/80 hover:text-white transition-colors duration-200 flex items-center text-sm md:text-base" target="_blank" rel="noopener noreferrer">
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 001.88-2.37 8.42 8.42 0 01-2.7 1.03 4.2 4.2 0 00-7.17 3.83 12 12 0 01-8.72-4.42 4.19 4.19 0 001.3 5.6 4.15 4.15 0 01-1.9-.52v.05a4.2 4.2 0 003.37 4.1 4.26 4.26 0 01-1.89.07 4.2 4.2 0 003.92 2.9 8.42 8.42 0 01-5.21 1.8A8.63 8.63 0 012 18.12a12 12 0 006.29 1.85c7.54 0 11.67-6.25 11.67-11.67v-.53A8.4 8.4 0 0022.46 6z" />
                  </svg>
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="https://linkedin.com" className="hover:underline text-white/80 hover:text-white transition-colors duration-200 flex items-center text-sm md:text-base" target="_blank" rel="noopener noreferrer">
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-12 md:mt-16 pt-6 border-t border-white/20 flex flex-col md:flex-row md:justify-between items-center">
          <img src="/images/minitos-White.png" alt="Minutos Logo" className="h-16 md:h-20 opacity-75 mb-4 md:mb-0" />
          <p className="text-sm text-white/70">©2025 Minutos Pvt Ltd. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;