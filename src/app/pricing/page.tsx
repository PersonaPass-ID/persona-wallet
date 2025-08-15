'use client'

import { Navigation } from '@/components/Navigation'
import { useState } from 'react'
import { Check } from 'lucide-react'

export default function PricingPage() {
  const [billing, setBilling] = useState<'monthly' | 'annually'>('monthly')

  const plans = [
    {
      name: 'Starter',
      price: { monthly: 0, annually: 0 },
      description: 'Perfect for small projects and testing',
      features: [
        '1,000 verifications/month',
        'Basic age verification',
        'Web3 wallet integration',
        'Community support',
        'Basic analytics'
      ],
      cta: 'Get Started Free',
      popular: false
    },
    {
      name: 'Professional',
      price: { monthly: 49, annually: 490 },
      description: 'For growing businesses with higher volume',
      features: [
        '50,000 verifications/month',
        'All verification types',
        'Priority support',
        'Advanced analytics',
        'Custom branding',
        'API access',
        'Webhook integrations'
      ],
      cta: 'Start Professional',
      popular: true
    },
    {
      name: 'Enterprise',
      price: { monthly: 199, annually: 1990 },
      description: 'For large organizations with custom needs',
      features: [
        'Unlimited verifications',
        'Custom verification flows',
        'Dedicated account manager',
        'SLA guarantees',
        'Custom integrations',
        'On-premise deployment',
        'Advanced compliance features'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ]

  const features = [
    {
      category: 'Core Features',
      items: [
        'Age Verification',
        'Identity Confirmation', 
        'Income Verification',
        'Address Verification',
        'Professional Credentials',
        'Financial KYC'
      ]
    },
    {
      category: 'Technical',
      items: [
        'REST API',
        'JavaScript SDK',
        'React Components',
        'Webhook Support',
        'Real-time Verification',
        'Zero-Knowledge Proofs'
      ]
    },
    {
      category: 'Security & Compliance',
      items: [
        'GDPR Compliant',
        'SOC 2 Certified',
        'End-to-End Encryption',
        'Privacy by Design',
        'No Data Storage',
        'Audit Logs'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start free and scale as you grow. No hidden fees, no complex contracts.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center mt-8">
              <span className={`mr-3 ${billing === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBilling(billing === 'monthly' ? 'annually' : 'monthly')}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <span
                  className={`${
                    billing === 'annually' ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                />
              </button>
              <span className={`ml-3 ${billing === 'annually' ? 'text-gray-900' : 'text-gray-500'}`}>
                Annually
              </span>
              {billing === 'annually' && (
                <span className="ml-2 text-sm font-medium text-green-600">Save 17%</span>
              )}
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border-2 bg-white p-8 ${
                  plan.popular
                    ? 'border-blue-500 shadow-xl'
                    : 'border-gray-200 shadow-lg'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gray-900">
                      ${plan.price[billing]}
                    </span>
                    <span className="text-gray-600 ml-1">
                      /{billing === 'monthly' ? 'mo' : 'yr'}
                    </span>
                  </div>
                  
                  <button
                    className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
                
                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Feature Comparison */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Everything You Need
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((category) => (
                <div key={category.category}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {category.category}
                  </h3>
                  <ul className="space-y-3">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-center">
                        <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How does verification work?
                </h3>
                <p className="text-gray-600">
                  Users connect their Web3 wallet and verify their credentials using zero-knowledge proofs. 
                  No personal data is stored or shared.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What verification types are supported?
                </h3>
                <p className="text-gray-600">
                  Age verification, identity confirmation, income verification, address verification, 
                  professional credentials, and financial KYC.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Is PersonaPass GDPR compliant?
                </h3>
                <p className="text-gray-600">
                  Yes, PersonaPass is built privacy-first with zero data storage and full GDPR compliance.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Can I integrate with my existing system?
                </h3>
                <p className="text-gray-600">
                  Yes, PersonaPass provides REST APIs, SDKs, and pre-built components for easy integration.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white mt-16">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8">
              Join thousands of developers using PersonaPass for privacy-preserving verification
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}