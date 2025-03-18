// src/app/components/profile/ProfileDetailsSection.tsx
'use client';

import React, { useState } from 'react';

interface ProfileFormData {
  name: string;
  email: string;
  phone: string;
}

const ProfileDetailsSection: React.FC = () => {
  const [formData, setFormData] = useState<ProfileFormData>({
    name: 'Subhan',
    email: 'subhan@example.com',
    phone: '+91 88854 42200',
  });
  
  const [isEditing, setIsEditing] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save the form data to backend
    console.log('Saving profile data:', formData);
    setIsEditing(false);
  };
  
  return (
    <div className="flex-grow bg-white rounded-lg shadow-sm">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-medium">Profile Details</h2>
          {!isEditing && (
            <button 
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 bg-red-500 text-white rounded-md"
            >
              Edit Profile
            </button>
          )}
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              ) : (
                <p className="p-2 bg-gray-50 rounded-md">{formData.name}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              ) : (
                <p className="p-2 bg-gray-50 rounded-md">{formData.email}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              {isEditing ? (
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              ) : (
                <p className="p-2 bg-gray-50 rounded-md">{formData.phone}</p>
              )}
            </div>
            
            {isEditing && (
              <div className="flex space-x-4 pt-4">
                <button
                  type="submit"
                  className="px-4 py-2 bg-red-500 text-white rounded-md"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 bg-gray-200 rounded-md"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileDetailsSection;