"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface CategoryItem {
  id: string;
  title: string;
  image: string;
  link: string;
}

interface CategorySectionProps {
  title: string;
  items: CategoryItem[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ title, items }) => {
  // Determine if horizontal scrolling is needed
  const shouldScrollHorizontally = items.length > 6;

  return (
    <div className="my-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-red-500">{title}</h2>
        <Link 
          href={`/categories/${title.toLowerCase().replace(/\s+/g, '-')}`} 
          className="text-sm text-blue-500"
        >
          See All
        </Link>
      </div>
      
      {/* Container for horizontal scrolling */}
      <div className={`${shouldScrollHorizontally ? 'overflow-x-auto' : ''}`}>
        <div className={`
          ${shouldScrollHorizontally 
            ? 'flex space-x-4 pb-4' 
            : 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4'
          }`}
        >
          {items.map((item) => (
            <Link 
              key={item.id} 
              href={item.link} 
              className={`
                flex flex-col items-center 
                ${shouldScrollHorizontally ? 'flex-shrink-0 w-36' : ''}
              `}
            >
              <div className="bg-gray-200 w-full aspect-square rounded-lg mb-2 flex items-center justify-center">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  width={100} 
                  height={100} 
                  className="object-contain"
                />
              </div>
              <span className="text-xs text-center font-medium">{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;