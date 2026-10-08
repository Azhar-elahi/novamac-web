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
  FileCode2,
  HelpCircle
} from "lucide-react";

export const metadata: Metadata = {
  title: "Bespoke Web, Software, ERP, POS & CRM Studio Europe | NovaMac Solutions",
  description: "High-performance Next.js web applications, custom software, enterprise cloud ERPs, retail POS & CRM systems for European enterprises. Full CET alignment, GDPR compliance & transparent EUR (€) pricing.",
  keywords: [
    "custom software development company Europe",
    "bespoke web development Germany France Netherlands",
    "custom ERP software development Europe",
    "retail POS software development Europe",
    "custom CRM development European companies",
    "hire Next.js developers Europe",
    "GDPR compliant software engineering Europe"
  ],
  alternates: {
    canonical: "https://novamacsolutions.com/eu",
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
    title: "Bespoke Web, Software, ERP, POS & CRM Studio Europe | NovaMac Solutions",
    description: "High-performance Next.js web applications, custom software, cloud ERPs, retail POS & CRM systems for European enterprises. CET timezone aligned engineering studio.",
    url: "https://novamacsolutions.com/eu",
    locale: "en_IE",
    images: [
      {
        url: "https://novamacsolutions.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "NovaMac Solutions Europe Engineering Desk",
      },
    ],
  },
};

export default function EULandingPage() {
  const euSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://novamacsolutions.com/eu/#service",
        "name": "NovaMac Solutions Europe - Web, Software, ERP, POS & CRM",
        "description": "High-performance Next.js web platforms, bespoke software engineering, enterprise cloud ERPs, retail POS systems, and GDPR-compliant CRM systems for European enterprises.",
        "url": "https://novamacsolutions.com/eu",
        "priceRange": "€€",
        "currenciesAccepted": "EUR, USD",
        "paymentAccepted": "SEPA Bank Transfer, Stripe, Credit Card, Wise",
        "areaServed": [
          { "@type": "Country", "name": "Germany" },
          { "@type": "Country", "name": "France" },
          { "@type": "Country", "name": "Netherlands" },
          { "@type": "Country", "name": "Switzerland" },
          { "@type": "Country", "name": "Ireland" }
        ],
        "provider": {
          "@type": "Organization",
          "name": "NovaMac Solutions",
          "url": "https://novamacsolutions.com"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "European Digital Engineering Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Next.js Web Application Development Europe",
                "description": "Sub-0.8s LCP web applications engineered with Next.js 16 and React 19."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Bespoke Custom Software Development Europe",
                "description": "Tailored business software, custom APIs, and high-security cloud portals."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Enterprise Cloud ERP Systems Europe",
                "description": "Connected multi-location inventory, purchase orders, and financial management portals."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Retail POS & Point of Sale Systems Europe",
                "description": "Fast touchscreen POS checkout systems with offline sync, thermal receipt printing, and zero per-terminal fees."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "GDPR-Compliant CRM Systems Europe",
                "description": "Tailored CRM systems with zero monthly per-seat licensing fees and GDPR compliance."
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://novamacsolutions.com/eu/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does NovaMac align with Central European Time (CET)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our engineering leads maintain 6 to 8 hours of direct daily live overlap with CET business hours. We coordinate via Slack, asynchronous Loom recordings, and weekly scheduled sprint calls."
            }
          },
          {
            "@type": "Question",
            "name": "Are your applications fully GDPR compliant?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, absolutely. We strictly implement European GDPR requirements including encrypted databases, consent cookies, right-to-be-forgotten triggers, and European data sovereignty options."
            }
          },
          {
            "@type": "Question",
            "name": "What are your payment terms for European companies?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We accept SEPA direct bank transfers, Wise Business, and Stripe card processing in EUR (€) with full EU tax and company documentation."
            }
          }
        ]
      }
    ]
  };

  const euPhoneWa = "https://wa.me/923256611920?text=Hi%20NovaMac%20Team%2C%20I%20am%20based%20in%20Europe%20and%20interested%20in%20custom%20web%2Fsoftware%20development.";

  return (
    <div className="min-h-screen bg-[#FAF2F2] text-[#202020] pt-24 pb-24 px-6 md:px-12 xl:px-20 max-w-[1400px] mx-auto font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(euSchema) }}
      />

      {/* HERO SECTION */}
      <div className="max-w-4xl mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] font-mono text-xs font-bold uppercase tracking-widest mb-6">
          <Globe className="w-3.5 h-3.5" /> EUROPEAN UNION & CONTINENTAL DESK
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight mb-6">
          Bespoke Next.js & AI Software Studio for <span className="text-[#FF5733]">European Brands</span>.
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl font-medium">
          Cut your software development overhead by up to 65% compared to Berlin, Amsterdam, and Paris agency retainers. Engineered with full CET alignment, European GDPR compliance, and sub-0.8s edge load speeds.
        </p>
        
        {/* ACTION BUTTONS */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <Link
            href="/book"
            className="px-8 py-4 bg-[#FF5733] hover:bg-[#202020] text-white font-extrabold rounded-full shadow-lg transition-all flex items-center gap-2 text-sm sm:text-base"
          >
            Book 15-Min EU Strategy Call <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={euPhoneWa}
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
            Free EU Site Speed Audit
          </Link>
        </div>

        {/* TRUST SIGNALS PILLS */}
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono font-bold text-gray-600">
          <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-[#F0DCDC]">
            <Clock className="w-3.5 h-3.5 text-[#FF5733]" /> Full CET / CEST Business Hours Overlap
          </span>
          <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-[#F0DCDC]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#FF5733]" /> Strict EU GDPR & Mutual NDA
          </span>
          <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-[#F0DCDC]">
            <DollarSign className="w-3.5 h-3.5 text-[#FF5733]" /> EUR (€) Invoices & SEPA Transfers
          </span>
          <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-[#F0DCDC]">
            <FileCode2 className="w-3.5 h-3.5 text-[#FF5733]" /> 100% Private GitHub Transfer
          </span>
        </div>
      </div>

      {/* EUROPEAN PRICING TIERS */}
      <div className="mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold text-[#FF5733] uppercase tracking-widest block mb-2">
            TRANSPARENT EUROPEAN PRICING
          </span>
          <h2 className="text-3xl font-black text-[#202020]">
            Fixed-Price Engineering in Euros (€ EUR)
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-[#F0DCDC] shadow-sm flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Web Platform</div>
              <div className="text-4xl font-black text-[#202020] mb-2">€1,100 <span className="text-sm font-normal text-gray-500">EUR</span></div>
              <p className="text-xs text-gray-600 mb-6">Complete Next.js web application built for speed, SEO, and lead conversion in 14 days.</p>
              <ul className="space-y-3 text-xs text-gray-700 font-medium mb-8">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> Next.js 16 + React 19 UI Engine</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> Sub-0.8s LCP Edge Performance</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> Technical SEO & Schema Markup</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> 100% Codebase Ownership</li>
              </ul>
            </div>
            <Link
              href="/book?plan=starter-eu"
              className="w-full py-3.5 text-center bg-[#FAF2F2] hover:bg-[#FF5733] text-[#202020] hover:text-white font-extrabold rounded-2xl border border-[#F0DCDC] transition-all block text-xs"
            >
              Start Web Project &rarr;
            </Link>
          </div>

          <div className="p-8 rounded-3xl bg-[#202020] text-white border-2 border-[#FF5733] shadow-xl relative flex flex-col justify-between">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FF5733] text-white font-mono text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-widest">
              POPULAR EU BUSINESS CHOICE
            </div>
            <div>
              <div className="font-mono text-xs font-bold text-[#FF5733] uppercase tracking-wider mb-2">Custom CRM & ERP System</div>
              <div className="text-4xl font-black text-white mb-2">€2,300 <span className="text-sm font-normal text-gray-400">EUR</span></div>
              <p className="text-xs text-gray-300 mb-6">Custom sales pipeline, inventory management, and automated client notifications with zero monthly seat fees.</p>
              <ul className="space-y-3 text-xs text-gray-300 font-medium mb-8">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> Custom Pipelines & Contact Boards</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> Role-Based Access Control (RBAC)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> ZERO Recurring Per-Seat Fees</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> Strict EU GDPR Compliance</li>
              </ul>
            </div>
            <Link
              href="/book?plan=crm-eu"
              className="w-full py-3.5 text-center bg-[#FF5733] hover:bg-white hover:text-[#202020] text-white font-extrabold rounded-2xl transition-all block text-xs"
            >
              Build Custom CRM &rarr;
            </Link>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-[#F0DCDC] shadow-sm flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">AI Software & SaaS MVP</div>
              <div className="text-4xl font-black text-[#202020] mb-2">€4,200+ <span className="text-sm font-normal text-gray-500">EUR</span></div>
              <p className="text-xs text-gray-600 mb-6">Scalable SaaS architecture or AI agent pipelines ready for rapid European expansion.</p>
              <ul className="space-y-3 text-xs text-gray-700 font-medium mb-8">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> Multi-Tenant SaaS Infrastructure</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> Stripe Subscription Billing</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> Autonomous AI Customer Agents</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> 30-Day Post-Launch SLA Support</li>
              </ul>
            </div>
            <Link
              href="/book?plan=saas-eu"
              className="w-full py-3.5 text-center bg-[#FAF2F2] hover:bg-[#FF5733] text-[#202020] hover:text-white font-extrabold rounded-2xl border border-[#F0DCDC] transition-all block text-xs"
            >
              Launch Custom SaaS &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* FINAL EU CTA BANNER */}
      <div className="p-10 rounded-3xl bg-[#202020] text-white border border-white/10 text-center max-w-3xl mx-auto shadow-2xl">
        <h2 className="text-3xl font-black mb-4 text-white">Ready to Build With Senior Software Architects?</h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto text-sm">
          Schedule a 15-minute technical discovery call or chat with our lead architect directly on WhatsApp.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/book"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF5733] hover:bg-white hover:text-[#202020] text-white font-extrabold rounded-full shadow-xl transition-all text-sm"
          >
            Book Discovery Call <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={euPhoneWa}
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
