import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'DMSP - Global SEO Strategy Case Study',
  description: 'Enterprise-level international SEO architecture with hreflang optimization, multi-regional content strategy, and technical infrastructure.',
  openGraph: {
    title: 'DMSP - Global SEO Strategy Case Study',
    description: 'Enterprise-level international SEO architecture',
  },
}

export default function DMSPCaseStudy() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'DMSP - Global SEO Strategy Case Study',
    description: 'Enterprise-level international SEO architecture implementation',
    author: {
      '@type': 'Person',
      name: 'SEO Professional',
    },
    datePublished: '2024-01-01',
    keywords: 'SEO, Enterprise, International, Global Strategy',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="min-h-screen py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Back Link */}
          <Link
            href="/#case-studies"
            className="inline-flex items-center text-luxury-gold hover:text-luxury-platinum mb-8 transition-colors"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 19l-7-7 7-7"></path>
            </svg>
            Back to Portfolio
          </Link>

          {/* Header */}
          <header className="mb-12">
  <div className="text-luxury-gold text-sm font-semibold mb-4">
    CASE STUDY / AGENCY LEADERSHIP
  </div>
  <h1 className="text-5xl font-bold mb-6 font-serif gradient-text">
    DMSP
  </h1>
  <p className="text-xl text-gray-300 leading-relaxed">
    Founded and scaled a digital agency serving the EU, Dubai and Americas. Bridging the gap 
    between traditional SEO and modern performance engineering through omnichannel visibility.
  </p>
</header>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 p-8 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl">
  <div className="text-center">
    <div className="text-4xl font-bold text-luxury-gold mb-2">EU & AM</div>
    <div className="text-gray-400">Global Markets</div>
  </div>
  <div className="text-center">
    <div className="text-4xl font-bold text-luxury-gold mb-2">Omnichannel</div>
    <div className="text-gray-400">Visibility Strategy</div>
  </div>
  <div className="text-center">
    <div className="text-4xl font-bold text-luxury-gold mb-2">100/100</div>
    <div className="text-gray-400">Target Performance</div>
  </div>
</div>

          {/* Content Sections */}
          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold mb-4 text-luxury-gold font-serif">
                The Growth
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                 As the founder of DMSP, I assisted global clients in establishing their digital footprint. 
                  While we achieved significant visibility through traditional tools, I identified a critical 
                  performance ceiling in standard CMS architectures—often resulting in sub-optimal Core Web Vitals.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Helped EU brands localize for the Americas.</li>
                  <li>Leveraging social media channels to boost brand authority and Google visibility.</li>
                  <li>Transitioning from legacy stacks to high-performance coding to ensure 100/100 SEO scores.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-luxury-gold font-serif">
                The Solution
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  Developed and implemented a comprehensive international SEO framework 
                  combining technical excellence with strategic content planning:
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="p-6 bg-gray-900 rounded-lg border border-gray-800">
                    <h3 className="font-bold text-lg mb-3 text-luxury-platinum">
                      Technical Architecture
                    </h3>
                    <ul className="text-sm space-y-2 text-gray-400">
                      <li>• Multi-regional site structure</li>
                      <li>• Advanced hreflang implementation</li>
                      <li>• Global CDN optimization</li>
                      <li>• Regional server routing</li>
                      <li>• Automated schema markup</li>
                    </ul>
                  </div>
                  <div className="p-6 bg-gray-900 rounded-lg border border-gray-800">
                    <h3 className="font-bold text-lg mb-3 text-luxury-platinum">
                      Performance Engineering 
                    </h3>
                    <ul className="text-sm space-y-2 text-gray-400">
                      <li>• Transitioning legacy stacks to Next.js for sub-second speeds.</li>
                      <li>• Connecting social signals to search authority.</li>
                      <li>• Minimizing global latency for international clients.</li>
                      <li>• Continuous Core Web Vitals monitoring.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-luxury-gold font-serif">
                Implementation Highlights
              </h2>
              <div className="space-y-6">
                <div className="p-6 bg-gradient-to-r from-gray-900 to-black border-l-4 border-luxury-gold rounded">
                  <h3 className="font-bold text-lg mb-2 text-luxury-platinum">
                    Technical Pivot 
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Faced with a 37/100 performance on. legacy CMS platforms. When moved toward a code-first approach and mastering Next.js & Vercel, i now engineer sites that maintain 100/100 Lighthouse scores.
                  </p>
                </div>
                <div className="p-6 bg-gradient-to-r from-gray-900 to-black border-l-4 border-luxury-gold rounded">
                  <h3 className="font-bold text-lg mb-2 text-luxury-platinum">
                    Social Search Synergy
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Developed a "Visibility loop" where social media strategies were engineered to trigger Google's brand authority signals, significantly boosting organic rankings for DMSP and Clients.
                  </p>
                </div>
                <div className="p-6 bg-gradient-to-r from-gray-900 to-black border-l-4 border-luxury-gold rounded">
                  <h3 className="font-bold text-lg mb-2 text-luxury-platinum">
                    Regional Content Strategy
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Developed market-specific content strategies with local keyword research, 
                    cultural adaptation, and regional trend analysis for each target market.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-luxury-gold font-serif">
                The Results
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  Helped clients in EU and Dubai based markets in a high-competition markets.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-luxury-gold mr-3">✓</span>
                    <span><strong>100/100 SEO Baseline</strong> Established a new technical standard, moving from legacy scores to perfect performance.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-luxury-gold mr-3">✓</span>
                    <span><strong>Integrated Automation</strong> SEO + Email workflows.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-luxury-gold mr-3">✓</span>
                    <span><strong>Global performance</strong> maintained across all regions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-luxury-gold mr-3">✓</span>
                    <span><strong>Scalable architecture</strong> supporting future expansion</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="border-t border-gray-800 pt-8">
              <h2 className="text-3xl font-bold mb-4 text-luxury-gold font-serif">
                Technologies & Tools
              </h2>
              <div className="flex flex-wrap gap-3">
                {['Next.js', 'Hreflang', 'CDN', 'Schema.org', 'Go', 'Core Web Vitals', 'International SEO', 'Analytics'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gray-900 text-gray-300 rounded-lg border border-gray-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </article>
    </>
  )
}
