// components/category/CategoryPage.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

// Define interfaces
interface Subcategory {
  id: string;
  name: string;
  slug: string;
}

interface Category {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
  description?: string;
  subcategories?: Subcategory[];
}

interface CategoryPageProps {
  categories: Category[];
}

const CategoryPage: React.FC<CategoryPageProps> = ({ categories }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  // Extract category slug from URL
  const categorySlug = pathname.split('/').pop();

  // Determine initial active category
  const initialActiveCategory = () => {
    // First, try to find category by URL slug
    const categoryBySlug = categories.find(cat => cat.slug === categorySlug);
    
    // If not found, fall back to first category
    return categoryBySlug || (categories.length > 0 ? categories[0] : null);
  };

  // State management
  const [activeCategory, setActiveCategory] = useState<Category | null>(initialActiveCategory());
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);

  // Categorize groups
  const categoryGroups = {
    'Kitchen needs & Food': [
      'paan-corner', 'dairy-bread-eggs', 'fruits-vegetables', 'cold-drinks-juices',
      'snacks-munchies', 'breakfast-instant-food', 'sweet-tooth', 'bakery-biscuits',
      'tea-coffee-health-drink', 'atta-rice-dal', 'masala-oil-more', 'sauces-spreads',
      'chicken-meat-fish', 'organic-healthy-living'
    ],
    'Home & Cleaning': ['cleaning-essentials', 'home-office'],
    'Personal Care': ['baby-care', 'pharma-wellness', 'personal-care'],
    'Pet Care': ['pet-care'],
  };

  // Determine group for active category
  useEffect(() => {
    if (activeCategory) {
      for (const [groupName, slugs] of Object.entries(categoryGroups)) {
        if (slugs.includes(activeCategory.slug)) {
          setSelectedGroup(groupName);
          break;
        }
      }
    }
  }, [activeCategory]);

  // Group categories
  const groupCategories = () => {
    const result: Record<string, Category[]> = {};
    
    Object.entries(categoryGroups).forEach(([groupName, slugs]) => {
      result[groupName] = categories.filter(cat => slugs.includes(cat.slug));
    });
    
    return result;
  };

  const groupedCategories = groupCategories();
  const groupNames = Object.keys(groupedCategories);

  // If no categories or no matching group found, return null
  if (categories.length === 0) {
    return <div>No categories found</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Sidebar - Category Groups */}
          <div className="md:w-1/4 lg:w-1/5">
            <div className="sticky top-4 bg-white rounded-lg shadow p-4">
              <h2 className="font-bold text-lg mb-4 pb-2 border-b">Category Groups</h2>
              <ul className="space-y-2">
                {groupNames.map(groupName => (
                  <li key={groupName}>
                    <button
                      onClick={() => {
                        setSelectedGroup(groupName);
                        // Set the first category in the group as active if not already set
                        if (groupedCategories[groupName].length > 0) {
                          setActiveCategory(groupedCategories[groupName][0]);
                        }
                      }}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                        selectedGroup === groupName 
                          ? 'bg-green-100 text-green-800 font-medium'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {groupName}
                      <span className="text-xs ml-2 text-gray-500">
                        ({groupedCategories[groupName].length})
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side - Category Details */}
          <div className="md:w-3/4 lg:w-4/5">
            {/* Category List */}
            {selectedGroup && (
              <div className="space-y-6">
                {/* Title for the selected group */}
                <h2 className="text-2xl font-bold mb-4">{selectedGroup}</h2>

                {/* Categories in the selected group */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {groupedCategories[selectedGroup].map(category => (
  <Link key={category.id} href={`/category/${category.slug}`}>
    <div 
      className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg ${
        activeCategory?.id === category.id 
          ? 'border-2 border-green-500 scale-105' 
          : 'hover:scale-105'
      }`}
    >
      <div className="p-4 flex items-center">
        <div className="w-16 h-16 mr-4 flex-shrink-0">
          <Image 
            src={category.imageUrl} 
            alt={category.name}
            width={64}
            height={64}
            className="object-contain"
          />
        </div>
        <div>
          <h3 className="font-semibold text-lg">{category.name}</h3>
          <p className="text-gray-500 text-sm">
            {category.subcategories ? 
              `${category.subcategories.length} Subcategories` : 
              'No subcategories'
            }
          </p>
        </div>
      </div>
    </div>
  </Link>
))}
                </div>

                {/* Detailed View for Active Category */}
                {activeCategory && (
                  <div className="mt-8 bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold mb-4">{activeCategory.name}</h2>
                    
                    {/* Subcategories */}
                    {activeCategory.subcategories && activeCategory.subcategories.length > 0 ? (
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Subcategories</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                          {activeCategory.subcategories.map(subcategory => (
                            <Link 
                              key={subcategory.id}
                              href={`/category/${activeCategory.slug}/${subcategory.slug}`}
                              className="bg-gray-100 rounded-lg p-3 text-center hover:bg-green-50 transition-colors"
                            >
                              {subcategory.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <p className="text-gray-500">No subcategories available</p>
                    )}

                    {/* View All Products Button */}
                    <div className="mt-6 text-center">
                      <Link 
                        href={`/category/${activeCategory.slug}`}
                        className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                      >
                        View All {activeCategory.name} Products
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Default State */}
            {!selectedGroup && (
              <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-2">Select a Category Group</h3>
                <p className="text-gray-500">Choose a category group from the sidebar to get started</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;