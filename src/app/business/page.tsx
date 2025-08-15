'use client'

import { Navigation } from '@/components/Navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Building, Code, Shield, TrendingUp, Users, Zap } from 'lucide-react'

export default function BusinessPage() {
  const solutions = [
    {
      title: 'Enterprise Solutions',
      description: 'Large-scale verification systems for enterprise organizations',
      icon: Building,
      features: [
        'Custom verification workflows',
        'White-label solutions',
        'Dedicated infrastructure',
        'SLA guarantees',
        'Priority support'
      ],
      href: '/business/enterprise'
    },
    {
      title: 'API Integration',
      description: 'Developer-friendly APIs for seamless integration',
      icon: Code,
      features: [
        'RESTful APIs',
        'Webhook support',
        'Real-time verification',
        'SDKs & libraries',
        'Comprehensive documentation'
      ],
      href: '/business/api'
    },
    {
      title: 'Compliance Dashboard',
      description: 'Monitor and manage compliance across your organization',
      icon: Shield,
      features: [
        'Real-time monitoring',
        'Compliance reporting',
        'Audit trails',
        'Risk management',
        'Regulatory updates'
      ],
      href: '/business/compliance'
    }
  ]

  const benefits = [
    {
      title: 'Reduce Costs',
      description: 'Save up to 90% on verification costs compared to traditional KYC solutions',
      icon: TrendingUp,
      stat: '90%',
      statLabel: 'Cost Reduction'
    },
    {
      title: 'Increase Conversion',
      description: 'Improve user experience with instant verification and higher completion rates',
      icon: Users,
      stat: '85%',
      statLabel: 'Completion Rate'
    },
    {
      title: 'Enhance Security',
      description: 'Zero data storage and cryptographic proofs provide maximum security',
      icon: Shield,
      stat: '100%',
      statLabel: 'Privacy Protected'
    },
    {
      title: 'Scale Globally',
      description: 'Built-in compliance with international regulations and instant scalability',
      icon: Zap,
      stat: '<1s',
      statLabel: 'Verification Time'
    }
  ]

  const testimonials = [
    {
      quote: "PersonaPass transformed our onboarding process. We went from days to seconds for user verification.",
      author: "Sarah Chen",
      title: "CTO, FinTech Startup",
      company: "CryptoBank"
    },
    {
      quote: "The privacy-first approach was exactly what we needed for GDPR compliance. Implementation was seamless.",
      author: "Marcus Weber", 
      title: "Head of Compliance",
      company: "EuroTrade"
    },
    {
      quote: "95% cost reduction on KYC while maintaining the highest security standards. Game-changing technology.",
      author: "Jennifer Park",
      title: "VP Engineering",
      company: "GlobalExchange"
    }
  ]

  const useCases = [
    {
      industry: 'Financial Services',
      description: 'KYC compliance for banks, crypto exchanges, and fintech platforms',
      challenges: ['High KYC costs', 'Slow onboarding', 'Privacy concerns', 'Regulatory compliance'],
      solutions: ['Instant verification', '90% cost reduction', 'Zero data storage', 'Built-in compliance']
    },
    {
      industry: 'Gaming & Entertainment', 
      description: 'Age verification for gaming platforms and digital content',
      challenges: ['COPPA compliance', 'User friction', 'Privacy regulations', 'Global markets'],
      solutions: ['Privacy-preserving age verification', 'One-click verification', 'Global compliance', 'Zero friction UX']
    },
    {
      industry: 'Healthcare',
      description: 'Identity verification for telehealth and patient portals', 
      challenges: ['HIPAA compliance', 'Patient privacy', 'Provider credentials', 'Fraud prevention'],
      solutions: ['Medical-grade privacy', 'Provider verification', 'Zero data exposure', 'Audit trails']
    },
    {
      industry: 'Real Estate',
      description: 'Identity and income verification for property transactions',
      challenges: ['Income verification', 'Identity fraud', 'Document authenticity', 'Process delays'],
      solutions: ['Instant income verification', 'Document validation', 'Fraud prevention', 'Real-time processing']
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
              Enterprise-Grade Verification Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Scale your business with privacy-preserving verification technology. 
              Reduce costs, increase conversion, and ensure compliance with PersonaPass.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Schedule Demo
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {benefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <div key={benefit.title} className="bg-white rounded-xl p-6 shadow-lg text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">{benefit.stat}</div>
                  <div className="text-sm font-medium text-gray-500 mb-3">{benefit.statLabel}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              )
            })}
          </div>

          {/* Solutions Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Business Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {solutions.map((solution) => {
                const Icon = solution.icon
                return (
                  <Card key={solution.title} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="p-3 bg-blue-100 rounded-lg">
                          <Icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <CardTitle className="text-xl">{solution.title}</CardTitle>
                      </div>
                      <p className="text-gray-600">{solution.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {solution.features.map((feature) => (
                          <li key={feature} className="flex items-center text-sm text-gray-700">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6">
                        <a
                          href={solution.href}
                          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-block"
                        >
                          Learn More
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Use Cases Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Industry Use Cases
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase) => (
                <div key={useCase.industry} className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{useCase.industry}</h3>
                  <p className="text-gray-600 mb-6">{useCase.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Challenges</h4>
                      <ul className="space-y-2">
                        {useCase.challenges.map((challenge) => (
                          <li key={challenge} className="text-sm text-gray-700 flex items-start">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2 mt-2"></div>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">PersonaPass Solutions</h4>
                      <ul className="space-y-2">
                        {useCase.solutions.map((solution) => (
                          <li key={solution} className="text-sm text-gray-700 flex items-start">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 mt-2"></div>
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="bg-gray-900 rounded-2xl p-8 mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              What Our Customers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-800 rounded-xl p-6">
                  <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-gray-400">{testimonial.title}</div>
                    <div className="text-sm text-blue-400">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ROI Calculator */}
          <div className="bg-white rounded-2xl p-8 mb-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Calculate Your ROI
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Traditional KYC</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Cost per verification</span>
                      <span className="font-semibold">$2.50</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Average completion time</span>
                      <span className="font-semibold">2-5 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Completion rate</span>
                      <span className="font-semibold">65%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monthly cost (10K verifications)</span>
                      <span className="font-semibold text-red-600">$25,000</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">PersonaPass</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Cost per verification</span>
                      <span className="font-semibold">$0.05</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Average completion time</span>
                      <span className="font-semibold">&lt;1 second</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Completion rate</span>
                      <span className="font-semibold">95%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monthly cost (10K verifications)</span>
                      <span className="font-semibold text-green-600">$500</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-blue-50 rounded-xl text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">$24,500</div>
                <div className="text-lg text-gray-700">Monthly Savings with PersonaPass</div>
                <div className="text-sm text-gray-500 mt-1">Based on 10,000 verifications per month</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join hundreds of companies using PersonaPass to reduce costs, increase conversion, 
              and ensure compliance with privacy-preserving verification.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Schedule Demo
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