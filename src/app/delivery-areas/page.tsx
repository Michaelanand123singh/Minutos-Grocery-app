// app/delivery-areas/page.tsx
import DeliveryAreas from '@/components/delivery-areas/delivery-areas'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Delivery Areas | Minutos',
  description: 'Check our delivery coverage and service areas'
}

export default function DeliveryAreasPage() {
  return <DeliveryAreas />
}