// src/app/profile/referrals/page.tsx
import { Metadata } from 'next';
import ProfileLayout from '@/components/profile/ProfileLayout';
import ProfileSidebar from '@/components/profile/ProfileSidebar';
import ReferralsSection from '@/components/profile/ReferralsSection';

export const metadata: Metadata = {
  title: 'Manage Referrals | Minutos',
  description: 'Manage your referrals and earn rewards',
};

export default function ReferralsPage() {
  return (
    <div className="bg-pink-50 min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <ProfileLayout>
          <ProfileSidebar activePage="referrals" />
          <ReferralsSection />
        </ProfileLayout>
      </div>
    </div>
  );
}