// src/app/profile/support/page.tsx
import { Metadata } from 'next';
import ProfileLayout from '@/components/profile/ProfileLayout';
import ProfileSidebar from '@/components/profile/ProfileSidebar';
import SupportSection from '@/components/profile/SupportSection';

export const metadata: Metadata = {
  title: 'Customer Support | Minutos',
  description: 'Get help and support for your Minutos account',
};

export default function SupportPage() {
  return (
    <div className="bg-pink-50 min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <ProfileLayout>
          <ProfileSidebar activePage="support" />
          <SupportSection />
        </ProfileLayout>
      </div>
    </div>
  );
}