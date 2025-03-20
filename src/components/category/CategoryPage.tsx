// components/category/CategoryPage.tsx
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Define the interface for subcategories
interface Subcategory {
  id: string;
  name: string;
  slug: string;
}

// Extend the Category interface to include subcategories
interface Category {
  id: string;
  name: string;
  imageUrl: string;
  slug: string;
  subcategories?: Subcategory[];
  description?: string;
}

interface CategoryPageProps {
  categories: Category[];
}

// Sample subcategory data - you would likely fetch this from an API or have it in your data files
const subcategoriesData: Record<string, Subcategory[]> = {
  // Grocery related subcategories
  'paan-corner': [
    { id: 'pc-1', name: 'Paan Masala', slug: 'paan-masala' },
    { id: 'pc-2', name: 'Mouth Fresheners', slug: 'mouth-fresheners' },
  ],
  'dairy-bread-eggs': [
    { id: 'dbe-1', name: 'Milk', slug: 'milk' },
    { id: 'dbe-2', name: 'Bread', slug: 'bread' },
    { id: 'dbe-3', name: 'Eggs', slug: 'eggs' },
    { id: 'dbe-4', name: 'Butter & Cheese', slug: 'butter-cheese' },
    { id: 'dbe-5', name: 'Yogurt', slug: 'yogurt' },
  ],
  'fruits-vegetables': [
    { id: 'fv-1', name: 'Fresh Fruits', slug: 'fresh-fruits' },
    { id: 'fv-2', name: 'Fresh Vegetables', slug: 'fresh-vegetables' },
    { id: 'fv-3', name: 'Herbs & Seasonings', slug: 'herbs-seasonings' },
    { id: 'fv-4', name: 'Exotic Fruits & Vegetables', slug: 'exotic-fruits-vegetables' },
  ],
  'cold-drinks-juices': [
    { id: 'cdj-1', name: 'Soft Drinks', slug: 'soft-drinks' },
    { id: 'cdj-2', name: 'Fruit Juices', slug: 'fruit-juices' },
    { id: 'cdj-3', name: 'Water', slug: 'water' },
    { id: 'cdj-4', name: 'Energy Drinks', slug: 'energy-drinks' },
  ],
  'snacks-munchies': [
    { id: 'sm-1', name: 'Chips & Crisps', slug: 'chips-crisps' },
    { id: 'sm-2', name: 'Namkeen', slug: 'namkeen' },
    { id: 'sm-3', name: 'Popcorn', slug: 'popcorn' },
    { id: 'sm-4', name: 'Nuts & Dry Fruits', slug: 'nuts-dry-fruits' },
  ],
  'breakfast-instant-food': [
    { id: 'bif-1', name: 'Cereals', slug: 'cereals' },
    { id: 'bif-2', name: 'Instant Noodles', slug: 'instant-noodles' },
    { id: 'bif-3', name: 'Breakfast Mixes', slug: 'breakfast-mixes' },
    { id: 'bif-4', name: 'Ready to Eat', slug: 'ready-to-eat' },
  ],
  
  // Other category subcategories
  'sweet-tooth': [
    { id: 'st-1', name: 'Chocolates', slug: 'chocolates' },
    { id: 'st-2', name: 'Candies', slug: 'candies' },
    { id: 'st-3', name: 'Desserts', slug: 'desserts' },
    { id: 'st-4', name: 'Ice Creams', slug: 'ice-creams' },
  ],
  'bakery-biscuits': [
    { id: 'bb-1', name: 'Cookies', slug: 'cookies' },
    { id: 'bb-2', name: 'Pastries', slug: 'pastries' },
    { id: 'bb-3', name: 'Cakes', slug: 'cakes' },
    { id: 'bb-4', name: 'Biscuits', slug: 'biscuits' },
  ],
  'tea-coffee-health-drink': [
    { id: 'tchd-1', name: 'Tea', slug: 'tea' },
    { id: 'tchd-2', name: 'Coffee', slug: 'coffee' },
    { id: 'tchd-3', name: 'Health Drinks', slug: 'health-drinks' },
    { id: 'tchd-4', name: 'Green Tea', slug: 'green-tea' },
  ],
  
  // Add more subcategories for other categories...
  'atta-rice-dal': [
    { id: 'ard-1', name: 'Atta & Flours', slug: 'atta-flours' },
    { id: 'ard-2', name: 'Rice & Rice Products', slug: 'rice-products' },
    { id: 'ard-3', name: 'Dals & Pulses', slug: 'dals-pulses' },
  ],
  
  // Home essentials
  'cleaning-essentials': [
    { id: 'ce-1', name: 'Floor Cleaners', slug: 'floor-cleaners' },
    { id: 'ce-2', name: 'Detergents', slug: 'detergents' },
    { id: 'ce-3', name: 'Dishwash', slug: 'dishwash' },
    { id: 'ce-4', name: 'Bathroom Cleaners', slug: 'bathroom-cleaners' },
  ],
  'home-office': [
    { id: 'ho-1', name: 'Stationery', slug: 'stationery' },
    { id: 'ho-2', name: 'Home Decor', slug: 'home-decor' },
    { id: 'ho-3', name: 'Office Supplies', slug: 'office-supplies' },
  ],
  'personal-care': [
    { id: 'pc-1', name: 'Skin Care', slug: 'skin-care' },
    { id: 'pc-2', name: 'Hair Care', slug: 'hair-care' },
    { id: 'pc-3', name: 'Oral Care', slug: 'oral-care' },
    { id: 'pc-4', name: 'Body Care', slug: 'body-care' },
  ],
  'pet-care': [
    { id: 'petc-1', name: 'Dog Food', slug: 'dog-food' },
    { id: 'petc-2', name: 'Cat Food', slug: 'cat-food' },
    { id: 'petc-3', name: 'Pet Accessories', slug: 'pet-accessories' },
  ],
};

// Category descriptions
const categoryDescriptions: Record<string, string> = {
  'paan-corner': 'Traditional Indian mouth fresheners and paan-related products.',
  'dairy-bread-eggs': 'Fresh dairy products, bread varieties, and farm-fresh eggs for your daily needs.',
  'fruits-vegetables': 'Farm-fresh fruits and vegetables, including exotic varieties and seasonal produce.',
  'cold-drinks-juices': 'Refreshing beverages, sodas, and fruit juices to quench your thirst.',
  'snacks-munchies': 'Tasty snacks and munchies for any time of the day.',
  'breakfast-instant-food': 'Quick and easy breakfast options and instant meals for busy days.',
  'sweet-tooth': 'Delightful treats and desserts to satisfy your sweet cravings.',
  'bakery-biscuits': 'Freshly baked goods and biscuit varieties for tea time and more.',
  'tea-coffee-health-drink': 'Premium tea, coffee, and nutritional beverages for health and wellness.',
  'atta-rice-dal': 'Essential grains, flours, and pulses for your kitchen staples.',
  'masala-oil-more': 'Authentic spices, cooking oils, and other kitchen essentials.',
  'sauces-spreads': 'Flavorful sauces, dips, jams, and spreads to enhance your meals.',
  'chicken-meat-fish': 'Fresh and frozen meat, poultry, and seafood products.',
  'organic-healthy-living': 'Organic foods and products for a healthier lifestyle.',
  'baby-care': 'Essential products for baby needs and care.',
  'pharma-wellness': 'Healthcare products, supplements, and wellness essentials.',
  'cleaning-essentials': 'Home cleaning products to keep your space spotless.',
  'home-office': 'Essential items for home and office organization.',
  'personal-care': 'Products for personal hygiene and beauty needs.',
  'pet-care': 'Food and accessories for your furry friends.',
};

// Helper function to enrich categories with subcategories and descriptions
const enrichCategoriesWithData = (categories: Category[]): Category[] => {
  return categories.map(category => ({
    ...category,
    subcategories: subcategoriesData[category.slug] || [],
    description: categoryDescriptions[category.slug] || 'Explore our wide range of products.',
  }));
};

const CategoryPage: React.FC<CategoryPageProps> = ({ categories }) => {
  const enrichedCategories = enrichCategoriesWithData(categories);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [filterQuery, setFilterQuery] = useState('');
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  // Filter categories based on search query
  const filteredCategories = filterQuery 
    ? enrichedCategories.filter(cat => 
        cat.name.toLowerCase().includes(filterQuery.toLowerCase()) ||
        cat.subcategories?.some(subcat => 
          subcat.name.toLowerCase().includes(filterQuery.toLowerCase())
        )
      )
    : enrichedCategories;

  // Group categories for better visual organization
  const groupCategories = () => {
    const groups = {
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

    const result: Record<string, Category[]> = {};
    
    Object.entries(groups).forEach(([groupName, slugs]) => {
      result[groupName] = filteredCategories.filter(cat => slugs.includes(cat.slug));
    });
    
    return result;
  };

  const groupedCategories = groupCategories();
  const groupNames = Object.keys(groupedCategories);

  // Set initial active group if not set
  if (!activeGroup && groupNames.length > 0 && !filterQuery) {
    setActiveGroup(groupNames[0]);
  }

  // Get active categories based on active group or search results
  const activeCategoriesList = filterQuery 
    ? filteredCategories 
    : (activeGroup ? groupedCategories[activeGroup] : []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4 text-center">Categories</h1>
        
        {/* Search bar */}
        <div className="mb-8 max-w-lg mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search categories..."
              className="w-full p-3 pl-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              value={filterQuery}
              onChange={(e) => {
                setFilterQuery(e.target.value);
                if (e.target.value) setActiveGroup(null);
              }}
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            {filterQuery && (
              <button 
                onClick={() => setFilterQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <svg className="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
        
        {/* Categories layout */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Group navigation sidebar */}
          {!filterQuery && (
            <div className="md:w-1/4 lg:w-1/5">
              <div className="sticky top-4 bg-white rounded-lg shadow p-4">
                <h2 className="font-bold text-lg mb-4 pb-2 border-b">Browse Categories</h2>
                <ul className="space-y-2">
                  {groupNames.map(groupName => (
                    <li key={groupName}>
                      <button
                        onClick={() => setActiveGroup(groupName)}
                        className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                          activeGroup === groupName 
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
          )}
          
          {/* Categories and subcategories list */}
          <div className={`${filterQuery ? 'w-full' : 'md:w-3/4 lg:w-4/5'}`}>
            {filterQuery && filteredCategories.length > 0 && (
              <h2 className="text-xl font-semibold mb-4">
                Search Results: {filteredCategories.length} {filteredCategories.length === 1 ? 'category' : 'categories'}
              </h2>
            )}
            
            {(!filterQuery && activeGroup) && (
              <h2 className="text-xl font-semibold mb-4">{activeGroup}</h2>
            )}
            
            <div className="space-y-8">
              {activeCategoriesList.map(category => (
                <div 
                  key={category.id} 
                  className="bg-white rounded-lg shadow-sm overflow-hidden"
                >
                  <div className="border-b p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 relative bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <Image 
                          src={category.imageUrl} 
                          alt={category.name}
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium">{category.name}</h3>
                        <p className="text-sm text-gray-500">{category.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  {category.subcategories && category.subcategories.length > 0 && (
                    <div className="p-4">
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                        {category.subcategories.map(subcat => (
                          <Link 
                            href={`/category/${category.slug}/${subcat.slug}`}
                            key={subcat.id}
                            className="px-3 py-2 border border-gray-200 rounded-lg hover:bg-green-50 hover:border-green-200 transition-colors text-center text-sm"
                          >
                            {subcat.name}
                          </Link>
                        ))}
                      </div>
                      <div className="text-center mt-4">
                        <Link 
                          href={`/category/${category.slug}`}
                          className="inline-block text-green-600 text-sm font-medium hover:text-green-800"
                        >
                          View all {category.name} products →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* If no categories match the filter */}
            {filteredCategories.length === 0 && filterQuery && (
              <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-xl font-medium mb-2">No categories found</h3>
                <p className="text-gray-500">Try adjusting your search query</p>
                <button 
                  onClick={() => setFilterQuery('')}
                  className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Clear search
                </button>
              </div>
            )}
            
            {/* If no active group is selected and no search */}
            {!activeGroup && !filterQuery && (
              <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-2">Please select a category group</h3>
                <p className="text-gray-500">Choose from the category groups on the left</p>
              </div>
            )}
          </div>
        </div>
        
        {/* Category detail modal/overlay - Simplified for the new layout */}
        {selectedCategory && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-auto"
            >
              <div className="flex justify-between items-center p-6 border-b">
                <h2 className="text-2xl font-bold">{selectedCategory.name}</h2>
                <button 
                  onClick={() => setSelectedCategory(null)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-24 h-24 relative bg-gray-100 rounded-lg overflow-hidden">
                    <Image 
                      src={selectedCategory.imageUrl} 
                      alt={selectedCategory.name}
                      width={96}
                      height={96}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-gray-600 mb-2">{selectedCategory.description}</p>
                  </div>
                </div>
                
                {selectedCategory.subcategories && selectedCategory.subcategories.length > 0 ? (
                  <div>
                    <h3 className="font-semibold text-lg mb-4">Subcategories</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {selectedCategory.subcategories.map(subcat => (
                        <Link 
                          href={`/category/${selectedCategory.slug}/${subcat.slug}`} 
                          key={subcat.id}
                          className="p-3 border border-gray-200 rounded-lg hover:bg-green-50 hover:border-green-200 transition-colors"
                        >
                          <p className="font-medium">{subcat.name}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-500 italic">No subcategories available</p>
                )}
                
                <div className="mt-8 text-center">
                  <Link 
                    href={`/category/${selectedCategory.slug}`}
                    className="inline-block px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Browse All {selectedCategory.name} Products
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;