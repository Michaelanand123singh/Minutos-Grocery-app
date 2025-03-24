// app/policy/disclaimers/page.tsx
import Disclaimers from '@/components/disclaimers/Disclaimers'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disclaimers',
  description: 'Important legal disclaimers and notices'
}

export default function DisclaimersPage() {
  return <Disclaimers />
}