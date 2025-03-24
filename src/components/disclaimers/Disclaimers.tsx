// components/policy/Disclaimers.tsx
import React from 'react'

const Disclaimers: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-6">Disclaimers</h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">1. Accuracy of Information</h2>
        <p className="text-gray-700">
          We strive to provide accurate and up-to-date information, but we do not guarantee the completeness or accuracy of the content.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">2. External Links</h2>
        <p className="text-gray-700">
          Our service may contain links to external websites. We are not responsible for the content or privacy practices of these sites.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">3. No Warranty</h2>
        <p className="text-gray-700">
          Our service is provided "as is" without any representations or warranties, express or implied.
        </p>
      </section>
    </div>
  )
}

export default Disclaimers