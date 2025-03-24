// components/policy/ReturnPolicy.tsx
import React from 'react'

const ReturnPolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-6">Return and Refund Policy</h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">1. Eligibility</h2>
        <p className="text-gray-700">
          Returns are accepted within 30 days of purchase for unused and unopened items.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">2. Refund Process</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Refunds processed within 5-7 business days</li>
          <li>Original payment method will be credited</li>
          <li>Shipping costs are non-refundable</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">3. Exceptions</h2>
        <p className="text-gray-700">
          Digital products, custom orders, and downloadable items are not eligible for return.
        </p>
      </section>
    </div>
  )
}

export default ReturnPolicy