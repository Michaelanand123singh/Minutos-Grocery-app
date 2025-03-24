// components/FeaturedCategories.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define the category interface
interface Category {
  id: string;
  name: string;
  imageUrl: string;
  slug: string;
}

interface FeaturedCategoriesProps {
  categories: Category[];
}

const FeaturedCategories: React.FC<FeaturedCategoriesProps> = ({ categories }) => {
  return (
    <div className="my-8">
      {/* Grid layout for categories */}
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4">
        {categories.map((category) => (
          <Link 
            key={category.id} 
            href={`/categories/${category.slug}`}
            className="flex justify-center"
          >
            <div className="flex flex-col items-center bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-all duration-300 w-full max-w-[120px] hover:scale-105">
              <div className="w-16 h-16 md:w-20 md:h-20 relative mb-3">
                <Image
                  src={category.imageUrl}
                  alt={category.name}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h3 className="text-center text-sm font-medium text-gray-800 truncate w-full">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategories;