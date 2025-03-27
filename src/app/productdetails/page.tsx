"use client";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const dummyProduct = {
  id: 1,
  name: "Amul Shakti Fresh Milk",
  weight: "500 ml",
  price: 30,
  originalPrice: 40,
  discount: 25,
  image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-900,ar-900-900,pr-true,f-auto,q-80/cms/product_variant/9fd06b82-ae57-41f3-8f6b-b5c57be26d5e/Keshar-Kali-Wada-Kolam-Rice.jpg",
};

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="min-h-screen bg-gray-50 p-4 mt-20">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 bg-white p-6 rounded-lg shadow-md">
        <div>
          <img src={dummyProduct.image} alt={dummyProduct.name} className="w-full h-auto object-contain mb-2" />
          <div className="flex space-x-2 mt-2">
            <img src={dummyProduct.image} alt="Thumbnail" className="w-16 h-16 border rounded-lg cursor-pointer" />
            <img src={dummyProduct.image} alt="Thumbnail" className="w-16 h-16 border rounded-lg cursor-pointer" />
          </div>
        </div>

        <div>
          <p className="text-sm text-gray-500">Home / Milk / {dummyProduct.name}</p>
          <h1 className="text-2xl font-bold">{dummyProduct.name}</h1>
          <p className="text-green-600 text-sm">8 MINS</p>
          <p className="text-gray-700 mt-2">{dummyProduct.weight}</p>

          <div className="flex items-center space-x-2 mt-2">
            <span className="text-2xl font-bold text-pink-600">₹{dummyProduct.price}</span>
            <span className="text-gray-400 line-through">₹{dummyProduct.originalPrice}</span>
            <span className="text-green-600 font-semibold">{dummyProduct.discount}% OFF</span>
          </div>

          <div className="flex items-center space-x-4 mt-4">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 border rounded-lg">
              <Minus size={16} />
            </button>
            <span className="text-lg font-semibold">{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)} className="p-2 border rounded-lg">
              <Plus size={16} />
            </button>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold">Why shop from us?</h3>
            <ul className="mt-2 space-y-2">
              <li className="flex items-center">
                <span className="w-6 h-6 bg-yellow-300 rounded-full inline-block mr-2"></span>
                <p className="text-gray-600">Superfast Delivery - Get your order in minutes.</p>
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 bg-yellow-300 rounded-full inline-block mr-2"></span>
                <p className="text-gray-600">Best Prices & Offers - Get direct manufacturer deals.</p>
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 bg-yellow-300 rounded-full inline-block mr-2"></span>
                <p className="text-gray-600">Wide Assortment - 5000+ products available.</p>
              </li>
            </ul>
          </div>

          <button className="mt-6 w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
