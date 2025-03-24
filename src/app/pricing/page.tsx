// app/pricing/page.tsx
import PricingPage from '@/components/pricing/pricing'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Our service pricing and subscription plans'
}

export default function PricingPageRoute() {
  return <PricingPage />
}