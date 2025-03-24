// app/policy/terms/page.tsx
import TermsAndConditions from '@/components/terms&condistions/TermsAndConditions'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: 'Terms of service and usage agreement'
}

export default function TermsAndConditionsPage() {
  return <TermsAndConditions />
}