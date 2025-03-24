"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Search, ShoppingCart, MapPin, Menu, X, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import LoginModal from "@/components/login/LoginModal";

// Define types for state management
type LocationType = {
  name: string;
  id: string;
};

const Header: React.FC = () => {
  // State management
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [cartItems, setCartItems] = useState<number>(0);
  const [currentLocation, setCurrentLocation] = useState<LocationType>({ name: "Select Location", id: "" });
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  
  const pathname = usePathname();
  const router = useRouter();

  // Sample locations - in a real app, these would come from an API or context
  const locations = [
    { name: "New York", id: "ny" },
    { name: "Los Angeles", id: "la" },
    { name: "Chicago", id: "chi" },
    { name: "Miami", id: "mia" }
  ];

  // Memoized scroll handler to improve performance
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    
    // Load cart items from localStorage or context in a real app
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(parseInt(storedCartItems));
    }
    
    // Cleanup function
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close mobile menu when navigating to a new page
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setShowMobileSearch(false);
  }, [pathname]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Trim and validate search query
    const trimmedQuery = searchQuery.trim();
    
    if (trimmedQuery) {
      // Redirect to search page with query parameter
      router.push(`/search-page?query=${encodeURIComponent(trimmedQuery)}`);
      
      // Close mobile search if open
      setShowMobileSearch(false);
      
      // Optional: Store recent searches (you could implement this with localStorage)
      const recentSearches = JSON.parse(localStorage.getItem('recentSearches') || '[]');
      if (!recentSearches.includes(trimmedQuery)) {
        const updatedSearches = [trimmedQuery, ...recentSearches].slice(0, 5);
        localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
      }
    }
  };

  const selectLocation = (location: LocationType) => {
    setCurrentLocation(location);
    setShowLocationDropdown(false);
    // In a real app, you might store this in localStorage or context
    localStorage.setItem("userLocation", JSON.stringify(location));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (showMobileSearch) setShowMobileSearch(false);
  };

  const toggleMobileSearch = () => {
    setShowMobileSearch(!showMobileSearch);
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    // Close mobile menu if it's open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full px-4 sm:px-6 py-3 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-white"
        }`}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* Mobile menu button */}
            <button 
              className="mr-2 md:hidden" 
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X size={24} className="text-gray-800" />
              ) : (
                <Menu size={24} className="text-gray-800" />
              )}
            </button>
            
            <Link href="/" className="flex items-center space-x-5">
              <Image src="/images/logo1.jpg" alt="Minutos Logo" width={100} height={100} />
            </Link>
          </div>
          
          {/* Location Selector - Desktop */}
          <div className="hidden md:flex relative ml-6">
            <button 
              className="flex items-center text-gray-700 hover:text-gray-900"
              onClick={() => setShowLocationDropdown(!showLocationDropdown)}
            >
              <MapPin size={16} className="mr-1" />
              <span className="text-sm">{currentLocation.name}</span>
            </button>
            
            {/* Location dropdown */}
            {showLocationDropdown && (
              <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md py-2 w-48 z-50">
                {locations.map((location) => (
                  <button
                    key={location.id}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => selectLocation(location)}
                  >
                    {location.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:block flex-grow max-w-xl mx-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder='Search for "Rice"'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2 pl-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
                aria-label="Search products"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                aria-label="Submit search"
              >
                <Search size={18} className="text-gray-500" />
              </button>
            </form>
          </div>

          {/* Rest of the code remains the same as in the original implementation */}
          {/* Right Side Navigation */}
          <div className="flex items-center space-x-3 sm:space-x-6">
            {/* Mobile Search Toggle Button */}
            <button 
              className="md:hidden text-gray-800" 
              onClick={toggleMobileSearch}
              aria-label="Toggle search"
            >
              <Search size={20} />
            </button>
            
            {/* Login Button - Desktop */}
            <button 
              onClick={openLoginModal}
              className="hidden md:flex items-center text-gray-800 hover:text-gray-600 font-medium"
              aria-label="Login"
            >
              <User size={18} className="mr-1" />
              <span>Login</span>
            </button>
            
            {/* Profile Button - Desktop */}
            <Link 
              href="/profile" 
              className="hidden md:flex items-center text-gray-800 hover:text-gray-600 font-medium"
              aria-label="Profile"
            >
              <User size={18} className="mr-1" />
              <span>Profile</span>
            </Link>
            
            {/* Cart Button with counter */}
            <Link 
              href="/cart" 
              className="relative flex items-center text-gray-800 hover:text-gray-600 font-medium"
              aria-label="Shopping cart"
            >
              <ShoppingCart size={20} />
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
              <span className="hidden sm:inline ml-1">Cart</span>
            </Link>
          </div>
        </div>
        
        {/* Mobile Search Bar - Expandable in Navbar */}
        {showMobileSearch && (
          <div className="md:hidden mt-3 pb-2">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2 pl-4 pr-10 border border-gray-300 rounded-md focus:outline-none"
                aria-label="Search products"
                autoFocus
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                aria-label="Submit search"
              >
                <Search size={18} className="text-gray-500" />
              </button>
            </form>
          </div>
        )}
      </header>

      {/* Rest of the component remains the same */}
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-16 pb-6">
          <div className="container mx-auto px-4 py-6">
            {/* Mobile Navigation Links */}
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-lg font-medium text-gray-800 hover:text-gray-600 py-2 border-b border-gray-100"
              >
                Home
              </Link>
              <Link 
                href="/category" 
                className="text-lg font-medium text-gray-800 hover:text-gray-600 py-2 border-b border-gray-100"
              >
                Category
              </Link>
              <Link 
                href="/deals" 
                className="text-lg font-medium text-gray-800 hover:text-gray-600 py-2 border-b border-gray-100"
              >
                Deals
              </Link>
              <button 
                onClick={openLoginModal}
                className="text-left text-lg font-medium text-gray-800 hover:text-gray-600 py-2 border-b border-gray-100 w-full"
              >
                Login
              </button>
              <Link 
                href="/profile" 
                className="text-lg font-medium text-gray-800 hover:text-gray-600 py-2 border-b border-gray-100"
              >
                <User size={18} className="inline mr-2" />
                Profile
              </Link>
            </nav>
            
            {/* Mobile Location Selector */}
            <div className="mt-6">
              <p className="text-sm font-medium text-gray-500 mb-2">Select Location</p>
              <div className="flex flex-col space-y-2">
                {locations.map((location) => (
                  <button
                    key={location.id}
                    className={`text-left px-3 py-2 rounded-md ${
                      currentLocation.id === location.id 
                        ? "bg-gray-100 text-gray-900" 
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                    onClick={() => selectLocation(location)}
                  >
                    <MapPin size={16} className="inline mr-2" />
                    {location.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Login Modal */}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </>
  );
};

export default Header;