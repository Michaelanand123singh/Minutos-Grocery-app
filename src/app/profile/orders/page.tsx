// src/app/profile/orders/page.tsx
import { Metadata } from 'next';
import ProfileLayout from '@/components/profile/ProfileLayout';
import ProfileSidebar from '@/components/profile/ProfileSidebar';
import OrderHistorySection from '@/components/profile/OrderHistorySection';

export const metadata: Metadata = {
  title: 'Order History | Minutos',
  description: 'View your order history and reorder items',
};

export default function OrdersPage() {
  return (
    <div className="bg-pink-50 min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <ProfileLayout>
          <ProfileSidebar activePage="orders" />
          <OrderHistorySection />
        </ProfileLayout>
      </div>
    </div>
  );
}