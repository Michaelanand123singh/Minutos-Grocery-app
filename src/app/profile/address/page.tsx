// src/app/profile/address/page.tsx
import { Metadata } from 'next';
import ProfileLayout from '@/components/profile/ProfileLayout';
import ProfileSidebar from '@/components/profile/ProfileSidebar';
import AddressSection from '@/components/profile/AddressSection';

export const metadata: Metadata = {
  title: 'Addresses | Minutos',
  description: 'Manage your delivery addresses',
};

export default function AddressPage() {
  return (
    <div className="bg-pink-50 min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <ProfileLayout>
          <ProfileSidebar activePage="address" />
          <AddressSection />
        </ProfileLayout>
      </div>
    </div>
  );
}