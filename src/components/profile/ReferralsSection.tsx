// src/app/components/profile/ReferralsSection.tsx
'use client';

import React, { useState } from 'react';

interface Referral {
  name: string;
  phone: string;
  status: 'Invited' | 'Registered' | 'Completed';
  date: string;
  reward?: number;
}

const ReferralsSection: React.FC = () => {
  const [referrals, setReferrals] = useState<Referral[]>([
    {
      name: 'Rahul Sharma',
      phone: '+91 98765 43210',
      status: 'Completed',
      date: '15th Jan 2025',
      reward: 100
    },
    {
      name: 'Priya Patel',
      phone: '+91 87654 32109',
      status: 'Registered',
      date: '28th Jan 2025'
    },
    {
      name: 'Amit Kumar',
      phone: '+91 76543 21098',
      status: 'Invited',
      date: '5th Feb 2025'
    }
  ]);

  const [newReferral, setNewReferral] = useState({
    name: '',
    phone: ''
  });

  const [showForm, setShowForm] = useState(false);
  const [copied, setCopied] = useState(false);

  const referralCode = 'MINUTOS100';
  const referralLink = `https://minutos.com/refer/${referralCode}`;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewReferral(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create a new referral
    const referral: Referral = {
      name: newReferral.name,
      phone: newReferral.phone,
      status: 'Invited',
      date: new Date().toLocaleDateString('en-US', { 
        day: 'numeric', 
        month: 'short', 
        year: 'numeric' 
      })
    };

    setReferrals([...referrals, referral]);
    setNewReferral({ name: '', phone: '' });
    setShowForm(false);
  };

  return (
    <div className="flex-grow bg-white rounded-lg shadow-sm">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-medium">Manage Referrals</h2>
          <button 
            onClick={() => setShowForm(!showForm)}
            className="px-4 py-2 bg-red-500 text-white rounded-md"
          >
            {showForm ? 'Cancel' : 'Invite Friend'}
          </button>
        </div>

        <div className="bg-gray-50 p-4 rounded-md mb-6">
          <h3 className="font-medium mb-2">Your Referral Code</h3>
          <div className="flex items-center">
            <span className="bg-white px-4 py-2 border rounded-l-md font-mono">{referralCode}</span>
            <button 
              onClick={handleCopyLink}
              className="bg-red-500 text-white px-4 py-2 rounded-r-md"
            >
              {copied ? 'Copied!' : 'Copy Link'}
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Share this code with friends and earn ₹100 when they complete their first order!
          </p>
        </div>

        {showForm && (
          <form onSubmit={handleSubmit} className="mb-8 border rounded-md p-4">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Friend's Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={newReferral.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Friend's Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={newReferral.phone}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              
              <div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-red-500 text-white rounded-md"
                >
                  Send Invitation
                </button>
              </div>
            </div>
          </form>
        )}
        
        <h3 className="font-medium mb-3">Your Referrals</h3>
        <div className="space-y-4">
          {referrals.length === 0 ? (
            <p className="text-center text-gray-500 py-8">No referrals yet</p>
          ) : (
            referrals.map((referral, index) => (
              <div key={index} className="border rounded-md p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{referral.name}</h3>
                    <p className="text-sm text-gray-500">
                      {referral.phone} | Invited: {referral.date}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      referral.status === 'Completed' 
                        ? 'bg-green-100 text-green-800' 
                        : referral.status === 'Registered' 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {referral.status}
                    </span>
                    {referral.reward && (
                      <p className="text-sm font-medium text-green-600 mt-1">
                        Earned: ₹{referral.reward}
                      </p>
                    )}
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

export default ReferralsSection;