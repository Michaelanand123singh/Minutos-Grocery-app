// app/policy/return/page.tsx
import ReturnPolicy from '@/components/Return-and-Refund-Policy/ReturnPolicy'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Return and Refund Policy',
  description: 'Our guidelines for returns and refunds'
}

export default function ReturnPolicyPage() {
  return <ReturnPolicy />
}