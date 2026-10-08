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
  title: "Bespoke Next.js & AI Web Development Agency Canada | NovaMac Solutions",
  description: "Bespoke Next.js web applications, custom CRM platforms & SaaS engineering for Canadian businesses in Toronto, Vancouver, Montreal & nationwide. Full EST/PST alignment.",
  keywords: [
    "hire Next.js developers Canada",
    "custom software development agency Toronto",
    "web development company Vancouver Montreal",
    "Next.js agency Canada",
    "custom CRM development Canadian businesses"
  ],
  alternates: {
    canonical: "https://novamacsolutions.com/ca",
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
    title: "Bespoke Next.js & AI Web Development Agency Canada | NovaMac Solutions",
    description: "Bespoke Next.js web applications, custom CRM platforms & SaaS engineering for Canadian businesses in Toronto, Vancouver, Montreal & nationwide.",
    url: "https://novamacsolutions.com/ca",
    locale: "en_CA",
    images: [
      {
        url: "https://novamacsolutions.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "NovaMac Solutions Canada Engineering Studio",
      },
    ],
  },
};

export default function CALandingPage() {
  const caSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://novamacsolutions.com/ca/#service",
        "name": "NovaMac Solutions Canada - Web & Software Engineering",
        "description": "Bespoke Next.js web applications, custom CRM systems, and AI software engineering for Canadian enterprises and startups.",
        "url": "https://novamacsolutions.com/ca",
        "priceRange": "C$$",
        "currenciesAccepted": "CAD, USD",
        "paymentAccepted": "Stripe, Interac / Wire Transfer, Credit Card",
        "areaServed": [
          { "@type": "Country", "name": "Canada" },
          { "@type": "City", "name": "Toronto" },
          { "@type": "City", "name": "Vancouver" },
          { "@type": "City", "name": "Montreal" },
          { "@type": "City", "name": "Calgary" }
        ],
        "provider": {
          "@type": "Organization",
          "name": "NovaMac Solutions",
          "url": "https://novamacsolutions.com"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Canada Software Engineering Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Bespoke Next.js Web Development Canada",
                "description": "Sub-0.8s LCP web applications engineered with Next.js 16 and React 19."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Business CRM & ERP Platforms",
                "description": "Tailored CRM systems with zero monthly per-seat licensing fees."
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://novamacsolutions.com/ca/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does NovaMac handle Canadian timezone alignment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We provide 4 to 6 hours of live daily overlap with Canadian Eastern Time (Toronto/Montreal) and Pacific Time (Vancouver), communicating via dedicated Slack channels, Loom recordings, and weekly sprints."
            }
          },
          {
            "@type": "Question",
            "name": "How much does custom web development cost for Canadian businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "High-performance Next.js web platforms range from $1,600 to $4,500 CAD, while custom CRMs and SaaS MVPs range from $3,400 to $8,500 CAD. Compared to domestic Toronto or Vancouver agency retainers ($130–$200/hr CAD), you save 65% on total development spend."
            }
          },
          {
            "@type": "Question",
            "name": "What payment methods are supported for Canadian clients?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We accept payments in CAD or USD via Stripe (credit/debit cards), Wise Business, and international wire transfer with complete corporate invoices."
            }
          }
        ]
      }
    ]
  };

  const caPhoneWa = "https://wa.me/923256611920?text=Hi%20NovaMac%20Team%2C%20I%20am%20based%20in%20Canada%20and%20interested%20in%20custom%20web%2Fsoftware%20development.";

  return (
    <div className="min-h-screen bg-[#FAF2F2] text-[#202020] pt-24 pb-24 px-6 md:px-12 xl:px-20 max-w-[1400px] mx-auto font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caSchema) }}
      />

      {/* HERO SECTION */}
      <div className="max-w-4xl mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] font-mono text-xs font-bold uppercase tracking-widest mb-6">
          <Globe className="w-3.5 h-3.5" /> CANADA ENGINEERING DESK
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight mb-6">
          Custom Next.js & AI Software Studio for <span className="text-[#FF5733]">Canadian Companies</span>.
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl font-medium">
          Cut software development costs by 65% compared to Toronto and Vancouver agency retainers. Engineered for Canadian tech startups, real estate companies, and national brands with full EST/PST live alignment, mutual NDAs, and sub-second edge speeds.
        </p>
        
        {/* ACTION BUTTONS */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <Link
            href="/book"
            className="px-8 py-4 bg-[#FF5733] hover:bg-[#202020] text-white font-extrabold rounded-full shadow-lg transition-all flex items-center gap-2 text-sm sm:text-base"
          >
            Book 15-Min Strategy Call <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={caPhoneWa}
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
            Free Canada Site Speed Audit
          </Link>
        </div>

        {/* TRUST SIGNALS PILLS */}
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono font-bold text-gray-600">
          <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-[#F0DCDC]">
            <Clock className="w-3.5 h-3.5 text-[#FF5733]" /> Live Overlap with EST (Toronto) & PST (Vancouver)
          </span>
          <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-[#F0DCDC]">
            <Lock className="w-3.5 h-3.5 text-[#FF5733]" /> Mutual NDA & PIPEDA Conscious Security
          </span>
          <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-[#F0DCDC]">
            <DollarSign className="w-3.5 h-3.5 text-[#FF5733]" /> CAD & USD Invoices via Stripe
          </span>
          <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-[#F0DCDC]">
            <FileCode2 className="w-3.5 h-3.5 text-[#FF5733]" /> 100% Private GitHub Transfer
          </span>
        </div>
      </div>

      {/* CANADIAN COMPARISON MATRIX */}
      <div className="mb-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-mono font-bold text-[#FF5733] uppercase tracking-widest block mb-2">
            CANADIAN MARKET ADVANTAGE
          </span>
          <h2 className="text-3xl font-black text-[#202020]">
            Why Canadian Businesses Choose NovaMac
          </h2>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-[#F0DCDC] bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#202020] text-white font-mono text-xs uppercase">
              <tr>
                <th className="p-4 sm:p-5">Comparison Metric</th>
                <th className="p-4 sm:p-5 text-gray-300">Toronto In-House Dev</th>
                <th className="p-4 sm:p-5 text-gray-300">Canadian Domestic Agency</th>
                <th className="p-4 sm:p-5 text-[#FF5733] font-black bg-white/5">NovaMac Studio Desk</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F0DCDC]">
              <tr>
                <td className="p-4 sm:p-5 font-bold text-[#202020]">Cost Expectation</td>
                <td className="p-4 sm:p-5 text-gray-600">$120,000 – $150,000 CAD + benefits</td>
                <td className="p-4 sm:p-5 text-gray-600">$130 – $200 CAD / hour</td>
                <td className="p-4 sm:p-5 font-black text-[#FF5733] bg-[#FF5733]/5">$1,600 – $4,800 CAD fixed</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-[#202020]">Sprint Speed</td>
                <td className="p-4 sm:p-5 text-gray-600">Hiring delay 4–6 weeks</td>
                <td className="p-4 sm:p-5 text-gray-600">6–8 weeks onboarding buffer</td>
                <td className="p-4 sm:p-5 font-bold text-[#202020] bg-[#FF5733]/5">10–14 days guaranteed deployment</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-[#202020]">IP & Code Handoff</td>
                <td className="p-4 sm:p-5 text-gray-600">Company owned</td>
                <td className="p-4 sm:p-5 text-gray-600">Often complex vendor lock-in</td>
                <td className="p-4 sm:p-5 font-bold text-[#202020] bg-[#FF5733]/5">100% full transfer to client GitHub</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* CANADA PRICING TIERS */}
      <div className="mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold text-[#FF5733] uppercase tracking-widest block mb-2">
            TRANSPARENT CANADIAN PRICING TIERS
          </span>
          <h2 className="text-3xl font-black text-[#202020]">
            Fixed-Price Engineering in Canadian Dollars ($ CAD)
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-[#F0DCDC] shadow-sm flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Web Platform</div>
              <div className="text-4xl font-black text-[#202020] mb-2">$1,600 <span className="text-sm font-normal text-gray-500">CAD</span></div>
              <p className="text-xs text-gray-600 mb-6">Complete Next.js web application engineered for speed, SEO, and lead capture in 14 days.</p>
              <ul className="space-y-3 text-xs text-gray-700 font-medium mb-8">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> Next.js 16 + React 19 UI Engine</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> Sub-0.8s LCP Edge Performance</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> Technical SEO & Schema Markup</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> 100% Codebase Ownership</li>
              </ul>
            </div>
            <Link
              href="/book?plan=starter-ca"
              className="w-full py-3.5 text-center bg-[#FAF2F2] hover:bg-[#FF5733] text-[#202020] hover:text-white font-extrabold rounded-2xl border border-[#F0DCDC] transition-all block text-xs"
            >
              Start Web Project &rarr;
            </Link>
          </div>

          <div className="p-8 rounded-3xl bg-[#202020] text-white border-2 border-[#FF5733] shadow-xl relative flex flex-col justify-between">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FF5733] text-white font-mono text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-widest">
              POPULAR CANADIAN CHOICE
            </div>
            <div>
              <div className="font-mono text-xs font-bold text-[#FF5733] uppercase tracking-wider mb-2">Custom CRM & ERP System</div>
              <div className="text-4xl font-black text-white mb-2">$3,400 <span className="text-sm font-normal text-gray-400">CAD</span></div>
              <p className="text-xs text-gray-300 mb-6">Custom sales pipeline, inventory management, and automated client notifications with zero monthly seat fees.</p>
              <ul className="space-y-3 text-xs text-gray-300 font-medium mb-8">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> Custom Pipelines & Contact Boards</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> Role-Based Access Control (RBAC)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> ZERO Recurring Per-Seat Fees</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> PostgreSQL Cloud Database</li>
              </ul>
            </div>
            <Link
              href="/book?plan=crm-ca"
              className="w-full py-3.5 text-center bg-[#FF5733] hover:bg-white hover:text-[#202020] text-white font-extrabold rounded-2xl transition-all block text-xs"
            >
              Build Custom CRM &rarr;
            </Link>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-[#F0DCDC] shadow-sm flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">AI Software & SaaS MVP</div>
              <div className="text-4xl font-black text-[#202020] mb-2">$6,000+ <span className="text-sm font-normal text-gray-500">CAD</span></div>
              <p className="text-xs text-gray-600 mb-6">Scalable SaaS architecture or AI agent pipelines ready for immediate Canadian market launch.</p>
              <ul className="space-y-3 text-xs text-gray-700 font-medium mb-8">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> Multi-Tenant SaaS Infrastructure</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> Stripe Subscription Billing</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> Autonomous AI Customer Agents</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> 30-Day Post-Launch SLA Support</li>
              </ul>
            </div>
            <Link
              href="/book?plan=saas-ca"
              className="w-full py-3.5 text-center bg-[#FAF2F2] hover:bg-[#FF5733] text-[#202020] hover:text-white font-extrabold rounded-2xl border border-[#F0DCDC] transition-all block text-xs"
            >
              Launch Custom SaaS &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* FINAL CA CTA BANNER */}
      <div className="p-10 rounded-3xl bg-[#202020] text-white border border-white/10 text-center max-w-3xl mx-auto shadow-2xl">
        <h2 className="text-3xl font-black mb-4 text-white">Ready to Build With Senior Software Architects?</h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto text-sm">
          Book a 15-minute technical discovery call to review your architecture or message us directly on WhatsApp.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/book"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF5733] hover:bg-white hover:text-[#202020] text-white font-extrabold rounded-full shadow-xl transition-all text-sm"
          >
            Book Discovery Call <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={caPhoneWa}
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
