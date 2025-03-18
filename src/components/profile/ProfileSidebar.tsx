// src/app/components/profile/ProfileSidebar.tsx
import React from 'react';
import Link from 'next/link';

interface SidebarItem {
  id: string;
  title: string;
  path: string;
}

interface ProfileSidebarProps {
  activePage: string;
}

const ProfileSidebar: React.FC<ProfileSidebarProps> = ({ activePage }) => {
  const sidebarItems: SidebarItem[] = [
    { id: 'orders', title: 'Orders', path: '/profile/orders' },
    { id: 'support', title: 'Customer Support', path: '/profile/support' },
    { id: 'referrals', title: 'Manage Referrals', path: '/profile/referrals' },
    { id: 'address', title: 'Address', path: '/profile/address' },
    { id: 'profile', title: 'Profile', path: '/profile' },
    { id: 'wallet', title: 'Wallet', path: '/profile/wallet' },
  ];

  return (
    <div className="w-full md:w-80 bg-white rounded-lg shadow-sm">
      <div className="border-b p-4">
        <div className="flex items-center">
          <div className="h-10 w-10 bg-red-500 rounded-full flex items-center justify-center text-white">
            <span>S</span>
          </div>
          <div className="ml-3">
            <h3 className="font-medium">Subhan</h3>
            <p className="text-gray-500 text-sm">+91 88854 42200</p>
          </div>
        </div>
      </div>
      
      <nav className="flex flex-col">
        {sidebarItems.map((item) => (
          <Link 
            href={item.path} 
            key={item.id}
            className={`flex items-center p-4 border-b ${
              activePage === item.id ? 'bg-gray-50' : ''
            }`}
          >
            <div className="h-6 w-6 bg-red-500 rounded-full flex items-center justify-center mr-3"></div>
            <span>{item.title}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default ProfileSidebar;