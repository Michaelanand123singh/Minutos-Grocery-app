// components/policy/PrivacyPolicy.tsx
import React from 'react'

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
        <p className="text-gray-700 mb-4">
          We collect information you provide directly to us, such as when you create an account, 
          make a purchase, or contact our support team.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>To provide and maintain our service</li>
          <li>To notify you about changes to our service</li>
          <li>To allow you to participate in interactive features</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">3. Data Protection</h2>
        <p className="text-gray-700 mb-4">
          We implement a variety of security measures to maintain the safety of your personal information.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">4. Your Rights</h2>
        <p className="text-gray-700">
          You have the right to access, correct, or delete your personal information at any time.
        </p>
      </section>
    </div>
  )
}

export default PrivacyPolicy