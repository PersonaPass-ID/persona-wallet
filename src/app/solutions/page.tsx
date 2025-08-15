'use client'

import { Navigation } from '@/components/Navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, Clock, Users, Zap, Lock, Globe } from 'lucide-react'

export default function SolutionsPage() {
  const solutions = [
    {
      title: 'Age Verification',
      description: 'Verify user age for compliance with regulations like COPPA, GDPR, and local laws.',
      icon: Shield,
      features: [
        'Instant age verification',
        'No personal data required',
        'COPPA & GDPR compliant',
        'Zero-knowledge proofs'
      ],
      href: '/solutions/age-verification'
    },
    {
      title: 'Financial KYC',
      description: 'Streamlined KYC for banking, fintech, and financial services.',
      icon: Lock,
      features: [
        'AML/KYC compliance',
        'Real-time verification',
        'Risk scoring',
        'Regulatory reporting'
      ],
      href: '/solutions/financial-kyc'
    },
    {
      title: 'Identity Confirmation',
      description: 'Basic identity verification for secure account creation and access.',
      icon: Users,
      features: [
        'Identity document verification',
        'Liveness detection',
        'Fraud prevention',
        'Multi-factor authentication'
      ],
      href: '/solutions/identity'
    },
    {
      title: 'Professional Credentials',
      description: 'Verify licenses, certifications, and professional qualifications.',
      icon: Globe,
      features: [
        'License verification',
        'Education credentials',
        'Professional certifications',
        'Skills validation'
      ],
      href: '/solutions/professional'
    },
    {
      title: 'Address Verification',
      description: 'Confirm user residence and address for compliance and security.',
      icon: Clock,
      features: [
        'Address confirmation',
        'Residence verification',
        'Geographic compliance',
        'Anti-fraud protection'
      ],
      href: '/solutions/address'
    },
    {
      title: 'Income Verification',
      description: 'Verify financial status and income for lending and financial services.',
      icon: Zap,
      features: [
        'Income verification',
        'Employment confirmation',
        'Credit assessment',
        'Financial health scoring'
      ],
      href: '/solutions/income'
    }
  ]

  const benefits = [
    {
      title: 'Privacy-First',
      description: 'Zero-knowledge proofs ensure user privacy while maintaining verification integrity.',
      icon: Shield
    },
    {
      title: 'Lightning Fast',
      description: 'Complete verifications in seconds, not days. 95% faster than traditional KYC.',
      icon: Zap
    },
    {
      title: 'Globally Compliant',
      description: 'Built-in compliance with GDPR, COPPA, AML, and other international regulations.',
      icon: Globe
    },
    {
      title: 'Developer Friendly',
      description: 'Simple APIs, SDKs, and pre-built components for quick integration.',
      icon: Users
    }
  ]

  const industries = [
    {
      name: 'Gaming & Entertainment',
      description: 'Age verification for gaming platforms, streaming services, and digital content.',
      useCases: ['Age-gated content', 'Gaming compliance', 'Parental controls']
    },
    {
      name: 'Financial Services',
      description: 'KYC compliance for banks, fintech, cryptocurrency, and lending platforms.',
      useCases: ['Banking onboarding', 'Crypto exchanges', 'P2P lending']
    },
    {
      name: 'Healthcare',
      description: 'Identity verification for telehealth, prescription services, and patient portals.',
      useCases: ['Patient verification', 'Prescription validation', 'Provider credentials']
    },
    {
      name: 'E-commerce & Marketplaces',
      description: 'Seller verification, buyer protection, and fraud prevention.',
      useCases: ['Seller onboarding', 'High-value transactions', 'Marketplace trust']
    },
    {
      name: 'Web3 & DeFi',
      description: 'Decentralized identity verification for DApps, DeFi protocols, and DAOs.',
      useCases: ['DeFi compliance', 'DAO membership', 'Token gating']
    },
    {
      name: 'Real Estate',
      description: 'Identity and income verification for property transactions and rentals.',
      useCases: ['Tenant screening', 'Property purchases', 'Mortgage applications']
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Privacy-Preserving Verification Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Verify user credentials without compromising privacy. Our zero-knowledge proof technology 
              enables instant verification while keeping personal data completely private.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Try Demo
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                View Documentation
              </button>
            </div>
          </div>

          {/* Solutions Grid */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Verification Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution) => {
                const Icon = solution.icon
                return (
                  <Card key={solution.title} className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <Icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <CardTitle className="text-xl">{solution.title}</CardTitle>
                      </div>
                      <p className="text-gray-600">{solution.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {solution.features.map((feature) => (
                          <li key={feature} className="flex items-center text-sm text-gray-700">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4">
                        <a
                          href={solution.href}
                          className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                        >
                          Learn More →
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-white rounded-2xl p-8 mb-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Why Choose PersonaPass
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit) => {
                const Icon = benefit.icon
                return (
                  <div key={benefit.title} className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Industries Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Industries We Serve
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry) => (
                <div key={industry.name} className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{industry.name}</h3>
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Use Cases:</h4>
                    <ul className="space-y-1">
                      {industry.useCases.map((useCase) => (
                        <li key={useCase} className="text-sm text-gray-700 flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Overview */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">How PersonaPass Works</h2>
              <p className="text-xl text-gray-300 mb-8">
                Our zero-knowledge proof technology enables verification without revealing sensitive data
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div>
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">User Connects Wallet</h3>
                  <p className="text-gray-300">User connects their Web3 wallet to initiate verification</p>
                </div>
                
                <div>
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Zero-Knowledge Proof</h3>
                  <p className="text-gray-300">Credentials are verified using ZK proofs without data exposure</p>
                </div>
                
                <div>
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Instant Verification</h3>
                  <p className="text-gray-300">Results delivered instantly with cryptographic proof</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Implement Privacy-First Verification?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Start building with PersonaPass today. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}