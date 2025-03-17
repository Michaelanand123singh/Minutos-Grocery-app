"use client";

import React, { useState, useEffect } from "react";
import { Search, ShoppingCart, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality here
    console.log("Searching for:", searchQuery);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full px-6 py-3 flex justify-between items-center z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      <div className="flex items-center space-x-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold text-gray-800">Minutos</span>
        </Link>
        
        {/* Location Selector */}
        <div className="hidden md:flex items-center text-sm">
          <button className="flex items-center text-gray-700 hover:text-gray-900">
            <span className="mr-1">Select Location</span>
          </button>
        </div>
      </div>

      {/* Search Bar - Center */}
      <div className="hidden md:block flex-grow max-w-xl mx-4">
        <form onSubmit={handleSearch} className="relative">
          <div className="relative">
            <input
              type="text"
              placeholder='Search for "Rice"'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-2 pl-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>
        </form>
      </div>

      {/* Right Side Navigation */}
      <div className="flex items-center space-x-6">
        {/* Login Button */}
        <Link 
          href="/login" 
          className="hidden md:block text-gray-800 hover:text-gray-600 font-medium"
        >
          Login
        </Link>
        
        {/* Cart Button */}
        <Link 
          href="/cart" 
          className="text-gray-800 hover:text-gray-600 font-medium"
        >
          Cart
        </Link>
      </div>

      {/* Mobile Search - Only visible on mobile */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white p-4 shadow-lg">
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-2 pl-4 pr-10 border border-gray-300 rounded-md focus:outline-none"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
          >
            <Search size={18} className="text-gray-500" />
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;