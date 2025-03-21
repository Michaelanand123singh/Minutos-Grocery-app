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
  return (
    <div className="my-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-red-500">{title}</h2>
        <Link href={`/categories/${title.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm text-blue-500">
          See All
        </Link>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {items.map((item) => (
          <Link key={item.id} href={item.link} className="flex flex-col items-center">
            <div className="bg-gray-200 w-full aspect-square rounded-lg mb-2 flex items-center justify-center">
              {/* Placeholder for actual images */}
              <Image src={item.image} alt={item.title} width={100} height={100} />
            </div>
            <span className="text-xs text-center font-medium">{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;