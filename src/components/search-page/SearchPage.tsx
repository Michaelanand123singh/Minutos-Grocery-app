'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Product, popularProductsData } from '@/components/data/popularProductsData';

interface SearchPageProps {
  searchQuery: string;
}

export default function SearchPage({ searchQuery }: SearchPageProps) {
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Validate search query exists and is not empty
    if (!searchQuery || searchQuery.trim() === '') {
      setFilteredProducts([]);
      return;
    }

    // Trim and convert search query to lowercase for consistent matching
    const normalizedQuery = searchQuery.trim().toLowerCase();

    // Improved filtering with more robust search logic
    const results = popularProductsData.filter(product => {
      // Check if any of these fields contain the search query
      return (
        product.name.toLowerCase().includes(normalizedQuery) ||
        product.category.toLowerCase().includes(normalizedQuery) ||
        (product.description && product.description.toLowerCase().includes(normalizedQuery))
      );
    });

    setFilteredProducts(results);

    // Update recent searches
    const storedSearches = JSON.parse(localStorage.getItem('recentSearches') || '[]');
    const updatedSearches = storedSearches.includes(searchQuery) 
      ? storedSearches 
      : [searchQuery, ...storedSearches].slice(0, 5); // Limit to 5 recent searches
    
    localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
    setRecentSearches(updatedSearches);
  }, [searchQuery]);

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      {/* Banner */}
      <div className="bg-gray-100 rounded-lg p-6 mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Search Results</h1>
        <p className="text-gray-600 mt-2">Showing results for: "{searchQuery}"</p>
      </div>

      {/* Recent Searches */}
      {recentSearches.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Recent Searches</h2>
          <div className="flex flex-wrap gap-3">
            {recentSearches.map((search, index) => (
              <span 
                key={index} 
                className="bg-gray-200 px-3 py-1 rounded-full text-sm text-gray-700 hover:bg-gray-300 cursor-pointer"
              >
                {search}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Search Results */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          {filteredProducts.length} Result{filteredProducts.length !== 1 ? 's' : ''} Found
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <div 
                key={product.id} 
                className="border rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="relative w-full h-40 mb-4">
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <h3 className="font-medium text-lg">{product.name}</h3>
                <p className="text-gray-600 text-sm">{product.category}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="font-bold">
                    ${product.discountedPrice || product.price}
                  </span>
                  {product.discountedPrice && (
                    <span className="text-red-500 line-through text-sm">
                      ${product.price}
                    </span>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-600">
              No products found matching your search.
            </div>
          )}
        </div>
      </section>

      {/* Popular Products Section (Static) */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Popular Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {popularProductsData.map(product => (
            <div 
              key={product.id} 
              className="border rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="relative w-full h-40 mb-4">
                <Image 
                  src={product.image} 
                  alt={product.name}
                  fill
                  className="object-cover rounded"
                />
              </div>
              <h3 className="font-medium text-lg">{product.name}</h3>
              <p className="text-gray-600 text-sm">{product.category}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="font-bold">
                  ${product.discountedPrice || product.price}
                </span>
                {product.discountedPrice && (
                  <span className="text-red-500 line-through text-sm">
                    ${product.price}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}