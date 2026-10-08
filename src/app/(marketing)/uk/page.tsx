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
  title: "Bespoke Web, Software, ERP, POS & CRM Development Agency UK | NovaMac",
  description: "Bespoke Next.js web applications, custom software, enterprise cloud ERPs, EPOS systems & CRM pipelines for UK businesses. Full GMT alignment, GDPR compliance & transparent GBP (£) pricing.",
  keywords: [
    "custom software development agency UK",
    "bespoke web development London UK",
    "custom ERP software developers UK",
    "EPOS software development UK",
    "custom CRM development UK businesses",
    "hire Next.js developers London UK",
    "GDPR compliant web development UK"
  ],
  alternates: {
    canonical: "https://novamacsolutions.com/uk",
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
    title: "Bespoke Web, Software, ERP, POS & CRM Development Agency UK | NovaMac",
    description: "Bespoke Next.js web applications, custom software, enterprise cloud ERPs, EPOS systems & CRM pipelines for UK businesses. Full GMT timezone alignment and GDPR compliance.",
    url: "https://novamacsolutions.com/uk",
    locale: "en_GB",
    images: [
      {
        url: "https://novamacsolutions.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "NovaMac Solutions UK Engineering Studio",
      },
    ],
  },
};

export default function UKLandingPage() {
  const ukSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://novamacsolutions.com/uk/#service",
        "name": "NovaMac Solutions UK - Bespoke Web, Software, ERP, POS & CRM",
        "description": "Bespoke Next.js web platforms, custom software engineering, enterprise cloud ERPs, retail EPOS systems, and GDPR-compliant CRM pipelines for UK enterprises and scaling businesses.",
        "url": "https://novamacsolutions.com/uk",
        "priceRange": "££",
        "currenciesAccepted": "GBP, EUR, USD",
        "paymentAccepted": "Stripe, Wise Business, BACS Bank Transfer, Credit Card",
        "areaServed": [
          { "@type": "Country", "name": "United Kingdom" },
          { "@type": "City", "name": "London" },
          { "@type": "City", "name": "Manchester" },
          { "@type": "City", "name": "Birmingham" },
          { "@type": "City", "name": "Edinburgh" }
        ],
        "provider": {
          "@type": "Organization",
          "name": "NovaMac Solutions",
          "url": "https://novamacsolutions.com"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "UK Software Engineering Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Bespoke Next.js Web Development UK",
                "description": "Sub-0.8s LCP web platforms engineered with Next.js 16 and React 19."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Bespoke Custom Software Engineering UK",
                "description": "Tailored business applications, workflow automation, and GDPR-compliant cloud databases."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Business CRM Platforms UK",
                "description": "Tailored CRM systems with zero monthly per-seat licensing fees and GDPR compliance."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Enterprise Cloud ERP Systems UK",
                "description": "Connected multi-location inventory, purchase orders, and financial management portals."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Retail EPOS & Point of Sale Systems UK",
                "description": "Fast touchscreen EPOS checkout systems with offline sync, thermal printing, and zero per-till fees."
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://novamacsolutions.com/uk/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does NovaMac align with UK business hours (GMT/BST)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our engineering studio provides 6 to 8 hours of live overlap with UK standard business hours (9:00 AM – 5:30 PM GMT). All client communications occur via dedicated Slack channels, Loom screen recordings, and weekly sprint calls."
            }
          },
          {
            "@type": "Question",
            "name": "Is your software engineering compliant with UK GDPR regulations?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, absolutely. We architect all databases, authentication flows, and data storage in compliance with UK and EU GDPR standards, including right-to-be-forgotten endpoints and encrypted European cloud deployments."
            }
          },
          {
            "@type": "Question",
            "name": "How much does custom web development cost for UK clients?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Bespoke Next.js web platforms start from £950 to £2,800 GBP, while custom CRMs and full-scale SaaS software range from £2,000 to £4,900 GBP. Compared to London agency rates (£95–£160/hour), our clients save up to 70% in project costs."
            }
          },
          {
            "@type": "Question",
            "name": "How are payments handled for UK businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We accept seamless payments in GBP (£) via Wise Business, direct UK bank transfers (BACS/Faster Payments), and credit/debit card processing via Stripe with complete corporate VAT-friendly invoices."
            }
          }
        ]
      }
    ]
  };

  const ukPhoneWa = "https://wa.me/923256611920?text=Hi%20NovaMac%20Team%2C%20I%20am%20based%20in%20the%20UK%20and%20looking%20for%20bespoke%20web%2Fsoftware%20development.";

  return (
    <div className="min-h-screen bg-[#FAF2F2] text-[#202020] pt-24 pb-24 px-6 md:px-12 xl:px-20 max-w-[1400px] mx-auto font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ukSchema) }}
      />

      {/* HERO SECTION */}
      <div className="max-w-4xl mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] font-mono text-xs font-bold uppercase tracking-widest mb-6">
          <Globe className="w-3.5 h-3.5" /> UNITED KINGDOM & EUROPE DESK
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight mb-6">
          Bespoke Next.js & AI Software Studio for <span className="text-[#FF5733]">UK Brands</span>.
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl font-medium">
          Save up to 70% compared to central London agency retainers without compromising architectural rigor. Engineered for UK startups, agencies, and enterprises with guaranteed GMT alignment, GDPR compliance, and sub-second page performance.
        </p>
        
        {/* ACTION BUTTONS */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <Link
            href="/book"
            className="px-8 py-4 bg-[#FF5733] hover:bg-[#202020] text-white font-extrabold rounded-full shadow-lg transition-all flex items-center gap-2 text-sm sm:text-base"
          >
            Book 15-Min UK Strategy Call <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={ukPhoneWa}
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
            Free UK Site Speed Audit
          </Link>
        </div>

        {/* TRUST SIGNALS PILLS */}
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono font-bold text-gray-600">
          <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-[#F0DCDC]">
            <Clock className="w-3.5 h-3.5 text-[#FF5733]" /> Full GMT / BST Business Hours Overlap
          </span>
          <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-[#F0DCDC]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#FF5733]" /> UK GDPR & Mutual NDA Compliant
          </span>
          <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-[#F0DCDC]">
            <DollarSign className="w-3.5 h-3.5 text-[#FF5733]" /> GBP (£) Invoices via Wise & Stripe
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
            UK AGENCY VS NOVAMAC
          </span>
          <h2 className="text-3xl font-black text-[#202020]">
            Why UK Businesses Switch Away From London Agencies
          </h2>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-[#F0DCDC] bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#202020] text-white font-mono text-xs uppercase">
              <tr>
                <th className="p-4 sm:p-5">Comparison Metric</th>
                <th className="p-4 sm:p-5 text-gray-300">London In-House Dev</th>
                <th className="p-4 sm:p-5 text-gray-300">Central London Agency</th>
                <th className="p-4 sm:p-5 text-[#FF5733] font-black bg-white/5">NovaMac Studio Desk</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F0DCDC]">
              <tr>
                <td className="p-4 sm:p-5 font-bold text-[#202020]">Cost Expectation</td>
                <td className="p-4 sm:p-5 text-gray-600">£75,000 – £95,000 + NI/pension</td>
                <td className="p-4 sm:p-5 text-gray-600">£95 – £160 per hour</td>
                <td className="p-4 sm:p-5 font-black text-[#FF5733] bg-[#FF5733]/5">£950 – £3,500 fixed scope</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-[#202020]">Billing Certainty</td>
                <td className="p-4 sm:p-5 text-gray-600">Fixed ongoing salary liability</td>
                <td className="p-4 sm:p-5 text-gray-600">Open-ended time & material bills</td>
                <td className="p-4 sm:p-5 font-bold text-[#202020] bg-[#FF5733]/5">Fixed sprint quote. Zero surprises</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-[#202020]">Sprint Speed</td>
                <td className="p-4 sm:p-5 text-gray-600">Slow ramp-up & onboarding</td>
                <td className="p-4 sm:p-5 text-gray-600">Multiple account management delays</td>
                <td className="p-4 sm:p-5 font-bold text-[#202020] bg-[#FF5733]/5">Live staging deployment in 10-14 days</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-[#202020]">Compliance & Legal</td>
                <td className="p-4 sm:p-5 text-gray-600">Standard employment contract</td>
                <td className="p-4 sm:p-5 text-gray-600">Rigid agency proprietary agreements</td>
                <td className="p-4 sm:p-5 font-bold text-[#202020] bg-[#FF5733]/5">Full UK GDPR & mutual NDA protection</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* UK PACKAGES & TRANSPARENT PRICING */}
      <div className="mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold text-[#FF5733] uppercase tracking-widest block mb-2">
            TRANSPARENT UK PRICING TIERS
          </span>
          <h2 className="text-3xl font-black text-[#202020]">
            Fixed-Price Engineering In British Pounds (£ GBP)
          </h2>
          <p className="text-gray-600 mt-2 text-sm">
            All prices in GBP. Invoicing with full company details for tax and accounting.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-8 rounded-3xl bg-white border border-[#F0DCDC] shadow-sm flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Bespoke Web Platform</div>
              <div className="text-4xl font-black text-[#202020] mb-2">£950 <span className="text-sm font-normal text-gray-500">GBP</span></div>
              <p className="text-xs text-gray-600 mb-6">Complete bespoke Next.js web application built for speed, SEO, and lead conversion in 14 days.</p>
              <ul className="space-y-3 text-xs text-gray-700 font-medium mb-8">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> Hand-coded Next.js 16 + React 19</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> Sub-0.8s LCP Edge Performance</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> Technical SEO & UK Local Schema</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> Mobile & Tablet Responsiveness</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> 100% Codebase Ownership</li>
              </ul>
            </div>
            <Link
              href="/book?plan=starter-uk"
              className="w-full py-3.5 text-center bg-[#FAF2F2] hover:bg-[#FF5733] text-[#202020] hover:text-white font-extrabold rounded-2xl border border-[#F0DCDC] hover:border-transparent transition-all block text-xs"
            >
              Start Web Project &rarr;
            </Link>
          </div>

          {/* Card 2 - Popular */}
          <div className="p-8 rounded-3xl bg-[#202020] text-white border-2 border-[#FF5733] shadow-xl relative flex flex-col justify-between">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FF5733] text-white font-mono text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-widest">
              POPULAR UK BUSINESS CHOICE
            </div>
            <div>
              <div className="font-mono text-xs font-bold text-[#FF5733] uppercase tracking-wider mb-2">Custom Business CRM & ERP</div>
              <div className="text-4xl font-black text-white mb-2">£1,950 <span className="text-sm font-normal text-gray-400">GBP</span></div>
              <p className="text-xs text-gray-300 mb-6">Replace expensive per-seat SaaS licenses with your own secure, private business management software.</p>
              <ul className="space-y-3 text-xs text-gray-300 font-medium mb-8">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> Custom Sales Pipeline & Lead Boards</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> Role-Based Access Control (RBAC)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> Automated Email & WhatsApp Workflows</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> ZERO Recurring Monthly Per-Seat Fees</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> UK GDPR Data Protection Ready</li>
              </ul>
            </div>
            <Link
              href="/book?plan=crm-uk"
              className="w-full py-3.5 text-center bg-[#FF5733] hover:bg-white hover:text-[#202020] text-white font-extrabold rounded-2xl transition-all block text-xs"
            >
              Build Custom CRM &rarr;
            </Link>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-3xl bg-white border border-[#F0DCDC] shadow-sm flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Custom AI & SaaS Software</div>
              <div className="text-4xl font-black text-[#202020] mb-2">£3,500+ <span className="text-sm font-normal text-gray-500">GBP</span></div>
              <p className="text-xs text-gray-600 mb-6">Production-ready SaaS software or AI agent automation pipelines ready for market scale.</p>
              <ul className="space-y-3 text-xs text-gray-700 font-medium mb-8">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> Multi-Tenant Architecture</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> Stripe Billing & Customer Portal</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> Autonomous AI Customer Agents</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> Vector Embeddings & RAG Knowledgebase</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> 30-Day Post-Launch SLA Support</li>
              </ul>
            </div>
            <Link
              href="/book?plan=saas-uk"
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
            Common Questions From UK Companies
          </h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "How does NovaMac align with UK business hours (GMT/BST)?",
              a: "Our engineering studio provides 6 to 8 hours of live overlap with UK standard business hours (9:00 AM – 5:30 PM GMT). All client communications occur via dedicated Slack channels, Loom screen recordings, and weekly sprint calls."
            },
            {
              q: "Is your software engineering compliant with UK GDPR regulations?",
              a: "Yes, absolutely. We architect all databases, authentication flows, and data storage in compliance with UK and EU GDPR standards, including right-to-be-forgotten endpoints and encrypted European cloud deployments."
            },
            {
              q: "How much does custom web development cost for UK clients?",
              a: "Bespoke Next.js web platforms start from £950 to £2,800 GBP, while custom CRMs and full-scale SaaS software range from £2,000 to £4,900 GBP. Compared to London agency rates (£95–£160/hour), our clients save up to 70% in project costs."
            },
            {
              q: "How are payments handled for UK businesses?",
              a: "We accept seamless payments in GBP (£) via Wise Business, direct UK bank transfers (BACS/Faster Payments), and credit/debit card processing via Stripe with complete corporate VAT-friendly invoices."
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

      {/* FINAL UK CTA BANNER */}
      <div className="p-10 rounded-3xl bg-[#202020] text-white border border-white/10 text-center max-w-3xl mx-auto shadow-2xl">
        <h2 className="text-3xl font-black mb-4 text-white">Ready to Modernise Your UK Digital Architecture?</h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto text-sm">
          Book a 15-minute technical discovery call with our tech lead or connect via WhatsApp for an immediate project appraisal.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/book"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF5733] hover:bg-white hover:text-[#202020] text-white font-extrabold rounded-full shadow-xl transition-all text-sm"
          >
            Book Discovery Call <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={ukPhoneWa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-white hover:text-[#202020] text-white font-extrabold rounded-full shadow-xl transition-all text-sm"
          >
            WhatsApp Tech Lead <PhoneCall className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
