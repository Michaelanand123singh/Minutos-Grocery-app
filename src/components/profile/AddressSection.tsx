// src/app/components/profile/AddressSection.tsx
'use client';

import React, { useState } from 'react';

interface Address {
  id: string;
  type: 'Home' | 'Work' | 'Other';
  street: string;
  city: string;
  state: string;
  pincode: string;
  isDefault: boolean;
}

const AddressSection: React.FC = () => {
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: 'addr1',
      type: 'Home',
      street: '123 Main Street, Apartment 4B',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400001',
      isDefault: true
    },
    {
      id: 'addr2',
      type: 'Work',
      street: '456 Office Complex, Building C',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400051',
      isDefault: false
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingAddress, setEditingAddress] = useState<Address | null>(null);
  
  const [formData, setFormData] = useState<Omit<Address, 'id'>>({
    type: 'Home',
    street: '',
    city: '',
    state: '',
    pincode: '',
    isDefault: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingAddress) {
      // Update existing address
      const updatedAddresses = addresses.map(addr => 
        addr.id === editingAddress.id 
          ? { ...formData, id: editingAddress.id } 
          : (formData.isDefault ? { ...addr, isDefault: false } : addr)
      );
      setAddresses(updatedAddresses);
    } else {
      // Create new address
      const newAddress: Address = {
        ...formData,
        id: `addr${Date.now()}`
      };
      
      // If this is set as default, remove default from other addresses
      if (newAddress.isDefault) {
        const updatedAddresses = addresses.map(addr => ({
          ...addr,
          isDefault: false
        }));
        setAddresses([...updatedAddresses, newAddress]);
      } else {
        setAddresses([...addresses, newAddress]);
      }
    }
    
    resetForm();
  };

  const handleEdit = (address: Address) => {
    setEditingAddress(address);
    setFormData({
      type: address.type,
      street: address.street,
      city: address.city,
      state: address.state,
      pincode: address.pincode,
      isDefault: address.isDefault
    });
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    setAddresses(addresses.filter(addr => addr.id !== id));
  };

  const resetForm = () => {
    setFormData({
      type: 'Home',
      street: '',
      city: '',
      state: '',
      pincode: '',
      isDefault: false
    });
    setEditingAddress(null);
    setShowForm(false);
  };

  return (
    <div className="flex-grow bg-white rounded-lg shadow-sm">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-medium">Manage Addresses</h2>
          <button 
            onClick={() => {
              resetForm();
              setShowForm(!showForm);
            }}
            className="px-4 py-2 bg-red-500 text-white rounded-md"
          >
            {showForm ? 'Cancel' : 'Add New Address'}
          </button>
        </div>

        {showForm && (
          <form onSubmit={handleSubmit} className="mb-8 border rounded-md p-4">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address Type
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="Home">Home</option>
                  <option value="Work">Work</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Street Address
                </label>
                <input
                  type="text"
                  name="street"
                  value={formData.street}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    State
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Pincode
                </label>
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isDefault"
                  name="isDefault"
                  checked={formData.isDefault}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 text-red-500"
                />
                <label htmlFor="isDefault" className="ml-2 text-sm text-gray-700">
                  Set as default address
                </label>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-red-500 text-white rounded-md"
                >
                  {editingAddress ? 'Update Address' : 'Save Address'}
                </button>
              </div>
            </div>
          </form>
        )}
        
        <div className="space-y-4">
          {addresses.length === 0 ? (
            <p className="text-center text-gray-500 py-8">No addresses saved yet</p>
          ) : (
            addresses.map((address) => (
              <div key={address.id} className="border rounded-md p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center">
                      <h3 className="font-medium">{address.type}</h3>
                      {address.isDefault && (
                        <span className="ml-2 px-2 py-0.5 text-xs bg-green-100 text-green-800 rounded-full">
                          Default
                        </span>
                      )}
                    </div>
                    <p className="text-gray-700 mt-1">{address.street}</p>
                    <p className="text-gray-700">{address.city}, {address.state} - {address.pincode}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => handleEdit(address)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDelete(address.id)}
                      className="text-red-500 hover:text-red-700"
                      disabled={address.isDefault}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AddressSection;