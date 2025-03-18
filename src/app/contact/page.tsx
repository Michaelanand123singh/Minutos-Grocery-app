import type { Metadata } from 'next';
import Contact from '@/components/contact/Contact';

export const metadata: Metadata = {
  title: 'Contact Us | Minutos',
  description: 'Get in touch with Minutos. We\'d love to hear from you.',
};

export default function ContactPage() {
  return <Contact />;
}