import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Globe, 
  Clock, 
  DollarSign, 
  Lock, 
  Zap, 
  PhoneCall, 
  Sparkles,
  TrendingUp,
  Cpu,
  FileCode2,
  Building2,
  HelpCircle
} from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Web, Software, ERP, POS & CRM Development Agency USA | NovaMac Solutions",
  description: "Elite custom Next.js web applications, bespoke software, cloud ERPs, retail POS systems & AI CRMs for US startups & enterprises. 100% PST/EST alignment, US NDA & W-8BEN compliant.",
  keywords: [
    "custom software development company USA",
    "custom website development agency USA",
    "custom ERP software developers USA",
    "cloud POS software development USA",
    "custom CRM development company USA",
    "hire Next.js developers USA",
    "offshore web development US timezone",
    "WordPress to Next.js migration agency USA"
  ],
  alternates: {
    canonical: "https://novamacsolutions.com/us",
    languages: {
      "en-US": "https://novamacsolutions.com/us",
      "en-GB": "https://novamacsolutions.com/uk",
      "en-CA": "https://novamacsolutions.com/ca",
      "en-EU": "https://novamacsolutions.com/eu",
      "en-AE": "https://novamacsolutions.com/middle-east",
      "en-PK": "https://novamacsolutions.com/pk",
      "x-default": "https://novamacsolutions.com",
    },
  },
  openGraph: {
    title: "Custom Web, Software, ERP, POS & CRM Development Agency USA | NovaMac Solutions",
    description: "Elite custom Next.js web applications, bespoke software, cloud ERPs, retail POS systems & AI CRMs for US startups. PST/EST timezone overlap, W-8BEN & NDA compliant.",
    url: "https://novamacsolutions.com/us",
    locale: "en_US",
    images: [
      {
        url: "https://novamacsolutions.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "NovaMac Solutions USA Engineering Desk",
      },
    ],
  },
};

export default function USLandingPage() {
  const usSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://novamacsolutions.com/us/#service",
        "name": "NovaMac Solutions USA - Custom Web, Software, ERP, POS & CRM",
        "description": "Premier Next.js web development, bespoke software engineering, enterprise cloud ERPs, retail POS systems, and custom AI CRMs for US startups, founders, and enterprises.",
        "url": "https://novamacsolutions.com/us",
        "priceRange": "$$",
        "currenciesAccepted": "USD",
        "paymentAccepted": "Stripe, ACH, Wire Transfer, Credit Card",
        "areaServed": [
          { "@type": "Country", "name": "United States" },
          { "@type": "AdministrativeArea", "name": "California" },
          { "@type": "AdministrativeArea", "name": "New York" },
          { "@type": "AdministrativeArea", "name": "Texas" },
          { "@type": "AdministrativeArea", "name": "Florida" }
        ],
        "provider": {
          "@type": "Organization",
          "name": "NovaMac Solutions",
          "url": "https://novamacsolutions.com"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "US Software Engineering Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Next.js Web Application Development USA",
                "description": "Sub-0.8s LCP web applications engineered with Next.js 16 and React 19."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Software Engineering USA",
                "description": "Full-stack tailored web apps, multi-tenant databases, and private cloud architecture."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Business CRM Systems",
                "description": "Tailored CRM systems with zero monthly per-seat licensing fees."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Enterprise Cloud ERP Systems",
                "description": "Multi-location inventory, purchase order automation, and operations dashboards."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Retail POS Systems",
                "description": "Offline-first cloud POS software with thermal receipt printing and zero per-terminal fees."
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://novamacsolutions.com/us/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does NovaMac handle US timezone alignment (PST & EST)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our engineering leads maintain 4 to 6 hours of direct daily live overlap with US Pacific (PST) and Eastern (EST) business hours. We coordinate via dedicated Slack channels, Loom asynchronous video updates, and weekly scheduled Zoom/Google Meet demo sprints."
            }
          },
          {
            "@type": "Question",
            "name": "How much does custom web development cost for US businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Fixed-scope Next.js web platforms range from $1,200 to $3,500 USD, while enterprise custom CRMs and SaaS MVPs range from $2,500 to $6,500 USD. Compared to US domestic agency rates ($175–$250/hour), our clients save 65% to 75% on total engineering spend."
            }
          },
          {
            "@type": "Question",
            "name": "Who owns the code, intellectual property (IP), and Git repositories?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You retain 100% intellectual property ownership from day one. All code is committed directly to your private GitHub/GitLab organization under a mutual US-compliant Non-Disclosure Agreement (NDA)."
            }
          },
          {
            "@type": "Question",
            "name": "What payment methods are supported for US clients?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We support frictionless US domestic payments via Stripe (credit/debit cards), direct ACH bank transfer, Wise Business, and domestic wire transfers with standard US W-8BEN tax documentation."
            }
          }
        ]
      }
    ]
  };

  const usPhoneWa = "https://wa.me/923256611920?text=Hi%20NovaMac%20Team%2C%20I%20am%20based%20in%20the%20US%20and%20looking%20for%20custom%20web%2Fsoftware%20development.";

  return (
    <div className="min-h-screen bg-[#FAF2F2] text-[#202020] pt-24 pb-24 px-6 md:px-12 xl:px-20 max-w-[1400px] mx-auto font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(usSchema) }}
      />

      {/* HERO SECTION */}
      <div className="max-w-4xl mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] font-mono text-xs font-bold uppercase tracking-widest mb-6">
          <Globe className="w-3.5 h-3.5" /> UNITED STATES ENGINEERING DESK
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight mb-6">
          Custom Next.js & AI Software Studio for <span className="text-[#FF5733]">US Companies</span>.
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl font-medium">
          Cut your software development overhead by 65% without sacrificing Silicon Valley-grade code quality. We partner with US startups, real estate firms, and growing tech enterprises with full PST/EST live alignment, US-compliant NDAs, and sub-second edge speeds.
        </p>
        
        {/* ACTION BUTTONS */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <Link
            href="/book"
            className="px-8 py-4 bg-[#FF5733] hover:bg-[#202020] text-white font-extrabold rounded-full shadow-lg transition-all flex items-center gap-2 text-sm sm:text-base"
          >
            Book 15-Min US Strategy Call <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={usPhoneWa}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 bg-[#25D366] hover:bg-[#202020] text-white font-extrabold rounded-full shadow-md transition-all flex items-center gap-2 text-sm sm:text-base"
          >
            <PhoneCall className="w-4 h-4" /> Chat on WhatsApp Now
          </a>
          <Link
            href="/audit"
            className="px-6 py-4 bg-white hover:bg-[#FAF2F2] border border-[#F0DCDC] text-[#202020] font-bold rounded-full transition-all text-sm sm:text-base"
          >
            Free Website Speed & SEO Audit
          </Link>
        </div>

        {/* TRUST SIGNALS PILLS */}
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono font-bold text-gray-600">
          <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-[#F0DCDC]">
            <Clock className="w-3.5 h-3.5 text-[#FF5733]" /> 4-6h Daily PST/EST Overlap
          </span>
          <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-[#F0DCDC]">
            <Lock className="w-3.5 h-3.5 text-[#FF5733]" /> Mutual US NDA & W-8BEN Ready
          </span>
          <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-[#F0DCDC]">
            <DollarSign className="w-3.5 h-3.5 text-[#FF5733]" /> USD Stripe & ACH Domestic Payments
          </span>
          <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-[#F0DCDC]">
            <FileCode2 className="w-3.5 h-3.5 text-[#FF5733]" /> 100% Private GitHub Transfer
          </span>
        </div>
      </div>

      {/* COMPARISON MATRIX (AEO & GEO CONVERSION MAGNET) */}
      <div className="mb-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-mono font-bold text-[#FF5733] uppercase tracking-widest block mb-2">
            THE ECONOMIC ADVANTAGE
          </span>
          <h2 className="text-3xl font-black text-[#202020]">
            Why US Founders Choose NovaMac Over Domestic Agencies
          </h2>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-[#F0DCDC] bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#202020] text-white font-mono text-xs uppercase">
              <tr>
                <th className="p-4 sm:p-5">Comparison Metric</th>
                <th className="p-4 sm:p-5 text-gray-300">US In-House Senior Dev</th>
                <th className="p-4 sm:p-5 text-gray-300">US Domestic Agency</th>
                <th className="p-4 sm:p-5 text-[#FF5733] font-black bg-white/5">NovaMac Engineering Studio</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F0DCDC]">
              <tr>
                <td className="p-4 sm:p-5 font-bold text-[#202020]">Annual / Project Cost</td>
                <td className="p-4 sm:p-5 text-gray-600">$140,000 – $180,000 + benefits</td>
                <td className="p-4 sm:p-5 text-gray-600">$20,000 – $50,000 min contract</td>
                <td className="p-4 sm:p-5 font-black text-[#FF5733] bg-[#FF5733]/5">$1,200 – $4,500 fixed scope</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-[#202020]">Billing Model</td>
                <td className="p-4 sm:p-5 text-gray-600">Fixed salary + payroll tax</td>
                <td className="p-4 sm:p-5 text-gray-600">$175 – $250 / billed hour</td>
                <td className="p-4 sm:p-5 font-bold text-[#202020] bg-[#FF5733]/5">Fixed sprint milestone or flat monthly</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-[#202020]">Time to First Deploy</td>
                <td className="p-4 sm:p-5 text-gray-600">4–8 weeks (recruiting lag)</td>
                <td className="p-4 sm:p-5 text-gray-600">6–10 weeks (account manager red tape)</td>
                <td className="p-4 sm:p-5 font-bold text-[#202020] bg-[#FF5733]/5">10–14 days guaranteed live sprint</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-[#202020]">Modern Architecture</td>
                <td className="p-4 sm:p-5 text-gray-600">Depends on individual skill</td>
                <td className="p-4 sm:p-5 text-gray-600">Often bloated WordPress / Webflow</td>
                <td className="p-4 sm:p-5 font-bold text-[#202020] bg-[#FF5733]/5">Sub-second Next.js 16 + React 19 + Edge</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-[#202020]">IP & Source Code</td>
                <td className="p-4 sm:p-5 text-gray-600">Company owned</td>
                <td className="p-4 sm:p-5 text-gray-600">Often held in proprietary CMS</td>
                <td className="p-4 sm:p-5 font-black text-[#202020] bg-[#FF5733]/5">100% transferred to client GitHub</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* US PACKAGES & TRANSPARENT PRICING */}
      <div className="mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold text-[#FF5733] uppercase tracking-widest block mb-2">
            TRANSPARENT US PRICING TIERS
          </span>
          <h2 className="text-3xl font-black text-[#202020]">
            Fixed-Price Engineering. Zero Surprise Invoices.
          </h2>
          <p className="text-gray-600 mt-2 text-sm">
            All prices in USD. Milestone payments via Stripe or ACH. 100% source code transfer included.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-8 rounded-3xl bg-white border border-[#F0DCDC] shadow-sm flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Starter Web Platform</div>
              <div className="text-4xl font-black text-[#202020] mb-2">$1,200 <span className="text-sm font-normal text-gray-500">USD</span></div>
              <p className="text-xs text-gray-600 mb-6">Complete custom Next.js web application built for speed, SEO, and lead conversion in 14 days.</p>
              <ul className="space-y-3 text-xs text-gray-700 font-medium mb-8">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> Hand-coded Next.js 16 + React 19</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> Sub-0.8s LCP Edge Performance</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> Technical SEO & Schema Markup</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> Mobile & Tablet Responsiveness</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> 100% Codebase Ownership</li>
              </ul>
            </div>
            <Link
              href="/book?plan=starter-us"
              className="w-full py-3.5 text-center bg-[#FAF2F2] hover:bg-[#FF5733] text-[#202020] hover:text-white font-extrabold rounded-2xl border border-[#F0DCDC] hover:border-transparent transition-all block text-xs"
            >
              Start Starter Project &rarr;
            </Link>
          </div>

          {/* Card 2 - Popular */}
          <div className="p-8 rounded-3xl bg-[#202020] text-white border-2 border-[#FF5733] shadow-xl relative flex flex-col justify-between">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FF5733] text-white font-mono text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-widest">
              MOST POPULAR FOR US TEAMS
            </div>
            <div>
              <div className="font-mono text-xs font-bold text-[#FF5733] uppercase tracking-wider mb-2">Custom Business CRM & ERP</div>
              <div className="text-4xl font-black text-white mb-2">$2,500 <span className="text-sm font-normal text-gray-400">USD</span></div>
              <p className="text-xs text-gray-300 mb-6">Replace $250/mo per-seat Salesforce or HubSpot licenses with your own custom, private software.</p>
              <ul className="space-y-3 text-xs text-gray-300 font-medium mb-8">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> Custom Sales Pipeline & Lead Boards</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> Role-Based Access Control (RBAC)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> Automated Email & SMS Workflows</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> ZERO Recurring Per-Seat Fees</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> PostgreSQL Database on AWS/Vercel</li>
              </ul>
            </div>
            <Link
              href="/book?plan=crm-us"
              className="w-full py-3.5 text-center bg-[#FF5733] hover:bg-white hover:text-[#202020] text-white font-extrabold rounded-2xl transition-all block text-xs"
            >
              Build Custom CRM &rarr;
            </Link>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-3xl bg-white border border-[#F0DCDC] shadow-sm flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">AI Software & SaaS MVP</div>
              <div className="text-4xl font-black text-[#202020] mb-2">$4,500+ <span className="text-sm font-normal text-gray-500">USD</span></div>
              <p className="text-xs text-gray-600 mb-6">Production-ready SaaS software or AI agent automation pipelines ready for US venture backing.</p>
              <ul className="space-y-3 text-xs text-gray-700 font-medium mb-8">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> Multi-Tenant SaaS Architecture</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> Stripe Billing & Customer Portal</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> OpenAI / Anthropic Claude API Pipelines</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> Vector Embeddings & RAG Knowledgebase</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> 30-Day Post-Launch SLA Support</li>
              </ul>
            </div>
            <Link
              href="/book?plan=saas-us"
              className="w-full py-3.5 text-center bg-[#FAF2F2] hover:bg-[#FF5733] text-[#202020] hover:text-white font-extrabold rounded-2xl border border-[#F0DCDC] hover:border-transparent transition-all block text-xs"
            >
              Launch Custom SaaS &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* FREQUENTLY ASKED QUESTIONS (AEO / GEO TARGET) */}
      <div className="mb-20 max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs font-mono font-bold text-[#FF5733] uppercase tracking-widest block mb-2">
            AEO DIRECT ANSWERS
          </span>
          <h2 className="text-3xl font-black text-[#202020]">
            Common Questions From US Founders & Executives
          </h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "How does NovaMac handle US timezone alignment (PST & EST)?",
              a: "Our engineering leads maintain 4 to 6 hours of direct daily live overlap with US Pacific (PST) and Eastern (EST) business hours. We coordinate via dedicated Slack channels, Loom asynchronous video updates, and weekly scheduled Zoom/Google Meet demo sprints."
            },
            {
              q: "How much does custom web development cost for US businesses?",
              a: "Fixed-scope Next.js web platforms range from $1,200 to $3,500 USD, while enterprise custom CRMs and SaaS MVPs range from $2,500 to $6,500 USD. Compared to US domestic agency rates ($175–$250/hour), our clients save 65% to 75% on total engineering spend."
            },
            {
              q: "Who owns the code, intellectual property (IP), and Git repositories?",
              a: "You retain 100% intellectual property ownership from day one. All code is committed directly to your private GitHub/GitLab organization under a mutual US-compliant Non-Disclosure Agreement (NDA)."
            },
            {
              q: "What payment methods are supported for US clients?",
              a: "We support frictionless US domestic payments via Stripe (credit/debit cards), direct ACH bank transfer, Wise Business, and domestic wire transfers with standard US W-8BEN tax documentation."
            },
            {
              q: "How fast can you start our US project?",
              a: "We can begin sprint onboarding within 48 to 72 hours following the discovery call and statement of work (SOW) agreement."
            }
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-[#F0DCDC] shadow-sm">
              <h3 className="font-extrabold text-base text-[#202020] mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#FF5733] shrink-0" /> {item.q}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pl-6">{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FINAL US CTA BANNER */}
      <div className="p-10 rounded-3xl bg-[#202020] text-white border border-white/10 text-center max-w-3xl mx-auto shadow-2xl">
        <h2 className="text-3xl font-black mb-4 text-white">Ready to Build With Senior Software Architects?</h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto text-sm">
          Book a 15-minute technical discovery call to review your architecture, estimate costs, and lock in your sprint schedule.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/book"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF5733] hover:bg-white hover:text-[#202020] text-white font-extrabold rounded-full shadow-xl transition-all text-sm"
          >
            Book Discovery Call <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={usPhoneWa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-white hover:text-[#202020] text-white font-extrabold rounded-full shadow-xl transition-all text-sm"
          >
            WhatsApp Lead Architect <PhoneCall className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
