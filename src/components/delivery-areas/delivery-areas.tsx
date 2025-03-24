// components/delivery-areas/DeliveryAreas.tsx
'use client'

import React, { useState } from 'react'
import { MapPin, Search } from 'lucide-react'

interface City {
  name: string
  state: string
  status: 'Active' | 'Coming Soon'
}

const DeliveryAreas: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const cities: City[] = [
    { name: 'Mumbai', state: 'Maharashtra', status: 'Active' },
    { name: 'Pune', state: 'Maharashtra', status: 'Active' },
    { name: 'Bangalore', state: 'Karnataka', status: 'Active' },
    { name: 'Hyderabad', state: 'Telangana', status: 'Active' },
    { name: 'Chennai', state: 'Tamil Nadu', status: 'Active' },
    { name: 'Delhi', state: 'Delhi NCR', status: 'Active' },
    { name: 'Kolkata', state: 'West Bengal', status: 'Coming Soon' },
    { name: 'Ahmedabad', state: 'Gujarat', status: 'Coming Soon' },
    { name: 'Jaipur', state: 'Rajasthan', status: 'Coming Soon' }
  ]

  const filteredCities = cities.filter(city => 
    city.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    city.state.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Delivery Areas</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We're expanding our services across India. Check if we deliver in your city!
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-md mx-auto mb-8 relative">
        <input 
          type="text" 
          placeholder="Search city or state" 
          className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className="absolute left-3 top-3.5 text-gray-400" size={20} />
      </div>

      {/* City Grid */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {filteredCities.map((city, index) => (
          <div 
            key={index} 
            className={`
              border rounded-lg p-6 flex items-center justify-between
              ${city.status === 'Active' 
                ? 'bg-green-50 border-green-200' 
                : 'bg-gray-100 border-gray-200'}
            `}
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{city.name}</h3>
              <p className="text-sm text-gray-600">{city.state}</p>
            </div>
            <div className="flex items-center">
              <MapPin 
                size={24} 
                className={
                  city.status === 'Active' 
                    ? 'text-green-600' 
                    : 'text-gray-400'
                } 
              />
              <span 
                className={`ml-2 text-sm font-medium ${
                  city.status === 'Active' 
                    ? 'text-green-600' 
                    : 'text-gray-500'
                }`}
              >
                {city.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {filteredCities.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">
            No cities found matching your search. Stay tuned for future expansions!
          </p>
        </div>
      )}

      <div className="text-center mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Want Us in Your City?
        </h2>
        <p className="text-gray-600 mb-6">
          Help us prioritize our next locations by sharing your interest.
        </p>
        <button 
          className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors"
        >
          Suggest a City
        </button>
      </div>
    </div>
  )
}

export default DeliveryAreas