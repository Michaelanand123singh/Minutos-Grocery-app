"use client";

import React from 'react';
import Link from 'next/link';

interface BannerProps {
  id?: string;
}

const Banner: React.FC<BannerProps> = ({ id }) => {
  return (
    <div id={id} className="bg-red-400 rounded-lg p-4 sm:p-6 my-4 sm:my-6 text-white relative">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
        <Link href="/order" className="z-10 order-2 sm:order-1">
          <button className="bg-white text-red-500 text-xs sm:text-sm font-medium px-3 sm:px-4 py-1 rounded-full hover:bg-gray-100 transition-colors">
            ORDER NOW
          </button>
        </Link>
        <h2 className="text-xl sm:text-2xl font-bold text-white sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 order-1 sm:order-2 mb-2 sm:mb-0">
          Banner Adds
        </h2>
      </div>
    </div>
  );
};

export default Banner;