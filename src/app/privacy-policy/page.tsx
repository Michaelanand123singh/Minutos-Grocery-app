// app/policy/privacy/page.tsx
import PrivacyPolicy from '@/components/privacy-policy/PrivacyPolicy'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Our commitment to protecting your privacy'
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />
}