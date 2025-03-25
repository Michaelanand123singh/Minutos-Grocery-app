import React from "react";

// Product interface
interface Product {
  id: number;
  name: string;
  weight: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
}

// Mock data exactly matching the image
const mockProducts: Product[] = [
  {
    id: 1,
    name: "Capsicum Green",
    weight: "500 - 600 g",
    price: 23,
    originalPrice: 44,
    discount: 72,
    image: "/path/to/capsicum-green.jpg"
  },
  {
    id: 2,
    name: "Carrot Local",
    weight: "500 g",
    price: 32,
    originalPrice: 44,
    discount: 52,
    image: "/path/to/carrot-local.jpg"
  },
  {
    id: 3,
    name: "Lady Finger",
    weight: "500 g",
    price: 36,
    originalPrice: 44,
    discount: 18,
    image: "/path/to/lady-finger.jpg"
  },
  {
    id: 4,
    name: "Mango Banganapalli",
    weight: "1 kg",
    price: 225,
    originalPrice: 364,
    discount: 40,
    image: "/path/to/mango-banganapalli.jpg"
  },
  {
    id: 5,
    name: "Mango Sindhura",
    weight: "1 kg (Approx. 6pcs)",
    price: 222,
    originalPrice: 364,
    discount: 35,
    image: "/path/to/mango-sindhura.jpg"
  },
  {
    id: 6,
    name: "Apple Red Delicious",
    weight: "4 x (500 - 540 g)",
    price: 182,
    originalPrice: 242,
    discount: 45,
    image: "/path/to/apple-red-delicious.jpg"
  }
];

// Sidebar Categories
const categories = [
  { icon: "🍎", name: "All", active: true },
  { icon: "🥦", name: "Fresh Vegetables" },
  { icon: "🍎", name: "Fresh Fruits" },
  { icon: "🌺", name: "Flowers & Leaves" },
  { icon: "🥭", name: "Mangoes & Melons" },
  { icon: "🌿", name: "Leafy, Herbs & Seasonings" },
  { icon: "🍄", name: "Exotics & Premium" },
  { icon: "🌱", name: "Organics & Hydroponics" },
  { icon: "✂️", name: "Cuts & Sprouts" },
  { icon: "🌱", name: "Plants & Gardening" },
  { icon: "🍠", name: "Dried & Others" }
];

export default function ZeptoGroceryPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-6">
      <div className="flex w-full max-w-screen-xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r h-[800px] overflow-y-auto p-4">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className={`flex items-center p-2 rounded-lg mb-2 cursor-pointer ${
                category.active 
                  ? 'bg-purple-100 text-purple-800 font-semibold' 
                  : 'hover:bg-gray-100'
              }`}
            >
              <span className="mr-3">{category.icon}</span>
              <span>{category.name}</span>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Promotional Banner */}
          <div className="bg-yellow-50 rounded-lg p-4 mb-6 flex items-center">
            <div>
              <h2 className="text-green-800 font-bold text-lg">Season of the King</h2>
              <p className="text-xs text-gray-600">Naturally ripened, from handpicked farms</p>
              <div className="flex items-center mt-2">
                <button className="bg-green-700 text-white text-xs px-3 py-1 rounded-full mr-2">
                  Explore now
                </button>
                <div className="text-xs text-green-700 flex items-center">
                  <span className="bg-green-700 text-white rounded-full px-2 py-0.5 mr-1">✓</span>
                  Carbide Free
                </div>
              </div>
            </div>
            <img 
              src="/path/to/fruits-banner.jpg" 
              alt="Fruits" 
              className="w-32 h-24 object-cover ml-auto rounded-lg"
            />
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-6 gap-4">
            {mockProducts.map((product) => (
              <div 
                key={product.id} 
                className="bg-white border rounded-lg p-2 relative"
              >
                <div className="absolute top-2 left-2 bg-purple-600 text-white px-2 py-0.5 rounded-full text-xs">
                  {product.discount}% Off
                </div>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-32 object-cover rounded-t-lg"
                />
                <div className="p-2">
                  <h3 className="text-sm font-semibold truncate">{product.name}</h3>
                  <p className="text-xs text-gray-500">{product.weight}</p>
                  <div className="flex items-center mt-1">
                    <span className="font-bold text-sm mr-2">₹{product.price}</span>
                    <span className="text-xs text-gray-400 line-through">₹{product.originalPrice}</span>
                  </div>
                  <button className="w-full bg-pink-500 text-white text-xs py-1.5 rounded-full mt-2 hover:bg-pink-600">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}