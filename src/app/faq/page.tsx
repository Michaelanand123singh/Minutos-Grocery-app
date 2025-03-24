// app/faqs/page.tsx
import FAQs from '@/components/faqs/FAQ'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Answers to common questions about our service'
}

export default function FAQsPage() {
  return <FAQs />
}