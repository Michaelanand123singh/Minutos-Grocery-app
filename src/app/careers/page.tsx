// app/careers/page.tsx
import CareersPage from '@/components/careers/CareersPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers at Minutos | Join Our Team',
  description: 'Explore exciting career opportunities at Minutos. We are looking for talented individuals to help us grow and innovate.'
}

export default function CareersRoute() {
  return <CareersPage />
}