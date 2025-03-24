// components/policy/TermsAndConditions.tsx
import React from 'react'

const TermsAndConditions: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
        <p className="text-gray-700">
          By accessing our service, you agree to be bound by these terms and conditions.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">2. User Responsibilities</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Provide accurate information</li>
          <li>Maintain account confidentiality</li>
          <li>Comply with all applicable laws</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property</h2>
        <p className="text-gray-700">
          All content on this platform is the property of our company and protected by copyright laws.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">4. Limitation of Liability</h2>
        <p className="text-gray-700">
          We are not liable for any indirect, incidental, or consequential damages arising from your use of our service.
        </p>
      </section>
    </div>
  )
}

export default TermsAndConditions