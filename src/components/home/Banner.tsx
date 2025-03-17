"use client";

import React from 'react';
import Link from 'next/link';

interface BannerProps {
  id?: string;
}

const Banner: React.FC<BannerProps> = ({ id }) => {
  return (
    <div id={id} className="bg-red-400 rounded-lg p-6 my-6 text-white relative">
      <div className="flex justify-between items-center">
        <Link href="/order">
          <button className="bg-white text-red-500 text-sm font-medium px-4 py-1 rounded-full hover:bg-gray-100 transition-colors">
            ORDER NOW
          </button>
        </Link>
        <h2 className="text-2xl font-bold text-white absolute left-1/2 transform -translate-x-1/2">
          Banner Adds
        </h2>
      </div>
    </div>
  );
};

export default Banner;