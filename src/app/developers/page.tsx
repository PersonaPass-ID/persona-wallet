'use client'

import { Navigation } from '@/components/Navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Code, Book, Zap, Shield, Copy, CheckCircle } from 'lucide-react'
import { useState } from 'react'

export default function DevelopersPage() {
  const [copied, setCopied] = useState('')

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopied(id)
    setTimeout(() => setCopied(''), 2000)
  }

  const resources = [
    {
      title: 'API Documentation',
      description: 'Complete API reference with examples and use cases',
      icon: Book,
      href: '/developers/docs',
      features: [
        'REST API endpoints',
        'Authentication guides',
        'Response schemas',
        'Error handling'
      ]
    },
    {
      title: 'SDKs & Libraries',
      description: 'Pre-built integrations for popular languages and frameworks',
      icon: Code,
      href: '/developers/sdks',
      features: [
        'JavaScript/TypeScript',
        'React components',
        'Python SDK',
        'Node.js library'
      ]
    },
    {
      title: 'Sandbox Environment',
      description: 'Test environment for development and integration testing',
      icon: Zap,
      href: '/developers/sandbox',
      features: [
        'Test API endpoints',
        'Mock verifications',
        'Debug tools',
        'Rate limiting testing'
      ]
    },
    {
      title: 'Code Examples',
      description: 'Implementation guides and working code examples',
      icon: Shield,
      href: '/developers/examples',
      features: [
        'Integration patterns',
        'Best practices',
        'Common use cases',
        'Troubleshooting'
      ]
    }
  ]

  const quickStart = {
    installation: `npm install @personapass/verify`,
    initialization: `import { PersonaPass } from '@personapass/verify';

const personapass = new PersonaPass({
  apiKey: 'your-api-key',
  environment: 'sandbox' // or 'production'
});`,
    verification: `// Age verification
const session = await personapass.verifyAge({
  minimumAge: 21,
  onSuccess: (result) => {
    console.log('Verification successful:', result);
  },
  onError: (error) => {
    console.error('Verification failed:', error);
  }
});

// Identity verification  
const identitySession = await personapass.verifyIdentity({
  verificationType: 'basic',
  returnUrl: 'https://yourapp.com/callback'
});`
  }

  const examples = [
    {
      title: 'Age Verification for Gaming',
      description: 'Verify user age for gaming platform compliance',
      code: `const ageVerification = await personapass.verifyAge({
  minimumAge: 18,
  purpose: 'gaming_access',
  metadata: {
    gameTitle: 'Age Restricted Game',
    region: 'US'
  }
});`
    },
    {
      title: 'KYC for Financial Services',
      description: 'Complete KYC verification for fintech applications',
      code: `const kycVerification = await personapass.verifyKYC({
  verificationType: 'enhanced',
  requiredDocuments: ['id', 'address_proof'],
  complianceLevel: 'tier2',
  returnUrl: 'https://yourapp.com/kyc-complete'
});`
    },
    {
      title: 'Income Verification for Lending',
      description: 'Verify user income for loan applications',
      code: `const incomeVerification = await personapass.verifyIncome({
  minimumIncome: 50000,
  currency: 'USD',
  timeframe: '12_months',
  purpose: 'loan_application'
});`
    }
  ]

  const sdks = [
    {
      language: 'JavaScript/TypeScript',
      description: 'Full-featured SDK with TypeScript support',
      installation: 'npm install @personapass/verify',
      docs: '/docs/javascript'
    },
    {
      language: 'React',
      description: 'Pre-built React components and hooks',
      installation: 'npm install @personapass/react',
      docs: '/docs/react'
    },
    {
      language: 'Python',
      description: 'Python SDK for backend integrations',
      installation: 'pip install personapass-python',
      docs: '/docs/python'
    },
    {
      language: 'Node.js',
      description: 'Server-side Node.js library',
      installation: 'npm install @personapass/node',
      docs: '/docs/nodejs'
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
              Build with PersonaPass
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Developer-friendly APIs and SDKs for privacy-preserving verification. 
              Get started in minutes with comprehensive documentation and code examples.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Start Building
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                View Documentation
              </button>
            </div>
          </div>

          {/* Quick Start */}
          <div className="bg-gray-900 rounded-2xl p-8 mb-16 text-white">
            <h2 className="text-2xl font-bold mb-8 text-center">Quick Start Guide</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-400">1. Install</h3>
                <div className="bg-gray-800 rounded-lg p-4 relative">
                  <code className="text-sm text-gray-300">{quickStart.installation}</code>
                  <button
                    onClick={() => copyCode(quickStart.installation, 'install')}
                    className="absolute top-2 right-2 p-1 hover:bg-gray-700 rounded"
                  >
                    {copied === 'install' ? (
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-400">2. Initialize</h3>
                <div className="bg-gray-800 rounded-lg p-4 relative">
                  <pre className="text-sm text-gray-300 overflow-x-auto">{quickStart.initialization}</pre>
                  <button
                    onClick={() => copyCode(quickStart.initialization, 'init')}
                    className="absolute top-2 right-2 p-1 hover:bg-gray-700 rounded"
                  >
                    {copied === 'init' ? (
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-400">3. Verify</h3>
                <div className="bg-gray-800 rounded-lg p-4 relative">
                  <pre className="text-sm text-gray-300 overflow-x-auto">{quickStart.verification}</pre>
                  <button
                    onClick={() => copyCode(quickStart.verification, 'verify')}
                    className="absolute top-2 right-2 p-1 hover:bg-gray-700 rounded"
                  >
                    {copied === 'verify' ? (
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Developer Resources */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Developer Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource) => {
                const Icon = resource.icon
                return (
                  <Card key={resource.title} className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <Icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <CardTitle className="text-lg">{resource.title}</CardTitle>
                      </div>
                      <p className="text-gray-600 text-sm">{resource.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {resource.features.map((feature) => (
                          <li key={feature} className="flex items-center text-sm text-gray-700">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4">
                        <a
                          href={resource.href}
                          className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                        >
                          Explore →
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* SDKs Section */}
          <div className="bg-white rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              SDKs & Libraries
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sdks.map((sdk) => (
                <div key={sdk.language} className="border border-gray-200 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{sdk.language}</h3>
                  <p className="text-gray-600 mb-4">{sdk.description}</p>
                  
                  <div className="bg-gray-100 rounded-lg p-3 mb-4">
                    <code className="text-sm text-gray-800">{sdk.installation}</code>
                  </div>
                  
                  <a
                    href={sdk.docs}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    View Documentation →
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Code Examples */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Code Examples
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {examples.map((example, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <div className="p-6 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{example.title}</h3>
                    <p className="text-gray-600 text-sm">{example.description}</p>
                  </div>
                  <div className="bg-gray-900 p-4 relative">
                    <pre className="text-sm text-gray-300 overflow-x-auto">{example.code}</pre>
                    <button
                      onClick={() => copyCode(example.code, `example-${index}`)}
                      className="absolute top-2 right-2 p-1 hover:bg-gray-700 rounded"
                    >
                      {copied === `example-${index}` ? (
                        <CheckCircle className="w-4 h-4 text-green-400" />
                      ) : (
                        <Copy className="w-4 h-4 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Features */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Technical Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-2">&lt;1s</div>
                <div className="text-lg font-medium mb-2">Response Time</div>
                <div className="text-sm text-gray-300">Lightning fast verification</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-2">99.9%</div>
                <div className="text-lg font-medium mb-2">Uptime SLA</div>
                <div className="text-sm text-gray-300">Enterprise reliability</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-2">Zero</div>
                <div className="text-lg font-medium mb-2">Data Storage</div>
                <div className="text-sm text-gray-300">Privacy by design</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-2">Global</div>
                <div className="text-lg font-medium mb-2">Compliance</div>
                <div className="text-sm text-gray-300">GDPR, COPPA, AML ready</div>
              </div>
            </div>
          </div>

          {/* Support Section */}
          <div className="bg-white rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Developer Support
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Book className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Documentation</h3>
                <p className="text-gray-600 mb-4">Comprehensive guides and API reference</p>
                <a href="/developers/docs" className="text-blue-600 hover:text-blue-800 font-medium">
                  Browse Docs →
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Community</h3>
                <p className="text-gray-600 mb-4">Join our developer community for help and updates</p>
                <a href="/community" className="text-blue-600 hover:text-blue-800 font-medium">
                  Join Community →
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Priority Support</h3>
                <p className="text-gray-600 mb-4">Get dedicated support for enterprise customers</p>
                <a href="/support" className="text-blue-600 hover:text-blue-800 font-medium">
                  Contact Support →
                </a>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Building?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Get your API key and start integrating privacy-preserving verification today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Get API Key
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Try Sandbox
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}