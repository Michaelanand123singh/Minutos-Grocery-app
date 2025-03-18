// src/app/profile/page.tsx
import { Metadata } from 'next';
import ProfileLayout from '@/components/profile/ProfileLayout';
import ProfileSidebar from '@/components/profile/ProfileSidebar';
import ProfileDetailsSection from '@/components/profile/ProfileDetailsSection';

export const metadata: Metadata = {
  title: 'Profile | Minutos',
  description: 'Manage your Minutos profile and account settings',
};

export default function ProfilePage() {
  return (
    <div className="bg-pink-50 min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <ProfileLayout>
          <ProfileSidebar activePage="profile" />
          <ProfileDetailsSection />
        </ProfileLayout>
      </div>
    </div>
  );
}