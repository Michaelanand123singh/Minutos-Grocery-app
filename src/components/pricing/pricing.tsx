// components/policy/Pricing.tsx
import React from 'react'

const PricingPage: React.FC = () => {
  const pricingPlans = [
    {
      name: 'Basic',
      price: '$9.99',
      features: ['Basic Features', 'Limited Support', '1 User']
    },
    {
      name: 'Pro',
      price: '$19.99',
      features: ['Advanced Features', 'Priority Support', '5 Users']
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: ['All Features', '24/7 Support', 'Unlimited Users']
    }
  ]

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-6 text-center">Pricing Plans</h1>
      
      <div className="grid md:grid-cols-3 gap-6">
        {pricingPlans.map((plan, index) => (
          <div 
            key={index} 
            className="border rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-4">{plan.name}</h2>
            <p className="text-3xl font-bold mb-4">{plan.price}</p>
            <ul className="mb-6">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="mb-2">{feature}</li>
              ))}
            </ul>
            <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PricingPage