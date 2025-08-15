'use client'

import { Navigation } from '@/components/Navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Book, Shield, Users, Activity, FileText, Video, Download, ExternalLink } from 'lucide-react'

export default function ResourcesPage() {
  const resources = [
    {
      title: 'Blog',
      description: 'Latest insights, updates, and thought leadership on privacy-preserving verification',
      icon: FileText,
      href: '/blog',
      category: 'Content',
      items: [
        'Industry insights',
        'Product updates',
        'Technical deep dives',
        'Compliance guides'
      ]
    },
    {
      title: 'Security Documentation',
      description: 'Comprehensive security and privacy details for enterprise customers',
      icon: Shield,
      href: '/resources/security',
      category: 'Security',
      items: [
        'Security architecture',
        'Privacy framework',
        'Compliance certifications',
        'Audit reports'
      ]
    },
    {
      title: 'Help Center',
      description: 'Support articles, tutorials, and troubleshooting guides',
      icon: Users,
      href: '/help',
      category: 'Support',
      items: [
        'Getting started guides',
        'Integration tutorials',
        'Troubleshooting',
        'FAQ'
      ]
    },
    {
      title: 'System Status',
      description: 'Real-time system status and uptime monitoring',
      icon: Activity,
      href: '/status',
      category: 'Operations',
      items: [
        'Service uptime',
        'Performance metrics',
        'Incident reports',
        'Maintenance windows'
      ]
    }
  ]

  const whitepapers = [
    {
      title: 'Zero-Knowledge Proofs in Identity Verification',
      description: 'Technical overview of how ZK proofs enable privacy-preserving verification',
      downloadUrl: '/whitepapers/zk-proofs-identity.pdf',
      pages: 24,
      category: 'Technical'
    },
    {
      title: 'GDPR Compliance in Web3 Identity Systems', 
      description: 'How PersonaPass ensures GDPR compliance while maintaining decentralization',
      downloadUrl: '/whitepapers/gdpr-compliance.pdf',
      pages: 18,
      category: 'Compliance'
    },
    {
      title: 'The Future of Privacy-Preserving KYC',
      description: 'Industry analysis and predictions for the evolution of digital identity',
      downloadUrl: '/whitepapers/future-kyc.pdf',
      pages: 32,
      category: 'Industry'
    },
    {
      title: 'Cost-Benefit Analysis: Traditional vs Zero-Knowledge KYC',
      description: 'Comprehensive analysis of cost savings and efficiency gains',
      downloadUrl: '/whitepapers/cost-benefit-analysis.pdf',
      pages: 16,
      category: 'Business'
    }
  ]

  const videos = [
    {
      title: 'PersonaPass Overview: Privacy-First Verification',
      description: 'Complete overview of PersonaPass technology and use cases',
      duration: '8:42',
      thumbnail: '/videos/overview-thumb.jpg',
      videoUrl: '/videos/personapass-overview'
    },
    {
      title: 'Technical Deep Dive: Zero-Knowledge Proofs',
      description: 'How ZK proofs work and why they matter for privacy',
      duration: '15:30',
      thumbnail: '/videos/zk-deepdive-thumb.jpg',
      videoUrl: '/videos/zk-technical-deepdive'
    },
    {
      title: 'Integration Tutorial: Adding Age Verification',
      description: 'Step-by-step guide to implementing age verification',
      duration: '12:15',
      thumbnail: '/videos/integration-thumb.jpg',
      videoUrl: '/videos/integration-tutorial'
    },
    {
      title: 'Case Study: Gaming Platform Success Story',
      description: 'How a major gaming platform reduced costs by 90%',
      duration: '6:30',
      thumbnail: '/videos/casestudy-thumb.jpg',
      videoUrl: '/videos/gaming-case-study'
    }
  ]

  const tools = [
    {
      title: 'API Postman Collection',
      description: 'Pre-configured Postman collection for testing PersonaPass APIs',
      downloadUrl: '/tools/personapass-postman.json',
      type: 'JSON'
    },
    {
      title: 'SDK Code Generator',
      description: 'Generate boilerplate code for your preferred language',
      downloadUrl: '/tools/sdk-generator',
      type: 'Tool'
    },
    {
      title: 'Compliance Checklist',
      description: 'Ensure your implementation meets regulatory requirements',
      downloadUrl: '/tools/compliance-checklist.pdf',
      type: 'PDF'
    },
    {
      title: 'ROI Calculator',
      description: 'Calculate potential cost savings with PersonaPass',
      downloadUrl: '/tools/roi-calculator.xlsx',
      type: 'Excel'
    }
  ]

  const certifications = [
    {
      name: 'SOC 2 Type II',
      description: 'Security, availability, and confidentiality controls',
      status: 'Certified',
      validUntil: '2025-06-30'
    },
    {
      name: 'ISO 27001',
      description: 'Information security management system',
      status: 'Certified', 
      validUntil: '2025-12-15'
    },
    {
      name: 'GDPR Compliance',
      description: 'General Data Protection Regulation compliance',
      status: 'Compliant',
      validUntil: 'Ongoing'
    },
    {
      name: 'CCPA Compliance',
      description: 'California Consumer Privacy Act compliance',
      status: 'Compliant',
      validUntil: 'Ongoing'
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
              Resources & Documentation
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Everything you need to understand, implement, and optimize PersonaPass 
              for your privacy-preserving verification needs.
            </p>
          </div>

          {/* Main Resources */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {resources.map((resource) => {
              const Icon = resource.icon
              return (
                <Card key={resource.title} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{resource.title}</CardTitle>
                        <div className="text-xs text-gray-500">{resource.category}</div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">{resource.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {resource.items.map((item) => (
                        <li key={item} className="flex items-center text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4">
                      <a
                        href={resource.href}
                        className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center"
                      >
                        Explore <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Whitepapers Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Whitepapers & Research</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whitepapers.map((paper) => (
                <div key={paper.title} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{paper.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{paper.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>{paper.pages} pages</span>
                        <span className="px-2 py-1 bg-gray-100 rounded text-xs">{paper.category}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => window.open(paper.downloadUrl)}
                      className="ml-4 p-2 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors"
                    >
                      <Download className="w-5 h-5 text-blue-600" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video Resources */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Video Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {videos.map((video) => (
                <div key={video.title} className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200">
                  <div className="aspect-video bg-gray-200 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Video className="w-12 h-12 text-gray-400" />
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{video.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{video.description}</p>
                    <button
                      onClick={() => window.open(video.videoUrl)}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                    >
                      Watch Video →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Downloads */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Tools & Downloads</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tools.map((tool) => (
                <div key={tool.title} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{tool.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{tool.description}</p>
                      <span className="inline-block px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">
                        {tool.type}
                      </span>
                    </div>
                    <button
                      onClick={() => window.open(tool.downloadUrl)}
                      className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                    >
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Compliance */}
          <div className="bg-white rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Certifications & Compliance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert) => (
                <div key={cert.name} className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{cert.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{cert.description}</p>
                  <div className="text-xs text-green-600 font-medium">{cert.status}</div>
                  <div className="text-xs text-gray-500">Valid until {cert.validUntil}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Support Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Need Additional Support?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Our team is here to help you succeed with PersonaPass implementation and optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Contact Support
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}