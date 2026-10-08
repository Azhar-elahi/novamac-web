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
  HelpCircle,
  MessageSquare
} from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Web Development & Software Engineering Agency Pakistan | NovaMac Solutions",
  description: "High-performance Next.js web applications, custom ERPs, CRMs, and AI automation for Pakistani enterprises, exporters, and startups. Transparent PKR pricing & direct WhatsApp desk.",
  keywords: [
    "custom software development agency Pakistan",
    "hire Next.js developers Lahore Karachi Islamabad",
    "custom ERP software Pakistan",
    "custom CRM for real estate Pakistan",
    "top software company Pakistan"
  ],
  alternates: {
    canonical: "https://novamacsolutions.com/pk",
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
    title: "Custom Web Development & Software Engineering Agency Pakistan | NovaMac Solutions",
    description: "High-performance Next.js web applications, custom ERPs, CRMs, and AI automation for Pakistani enterprises and startups.",
    url: "https://novamacsolutions.com/pk",
    locale: "en_PK",
    images: [
      {
        url: "https://novamacsolutions.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "NovaMac Solutions Pakistan Engineering Studio",
      },
    ],
  },
};

export default function PakistanLandingPage() {
  const pkSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://novamacsolutions.com/pk/#service",
        "name": "NovaMac Solutions Pakistan",
        "description": "High-performance Next.js web platforms, custom ERP & CRM software, and AI automation for Pakistani enterprises and international clients.",
        "url": "https://novamacsolutions.com/pk",
        "priceRange": "₨₨",
        "currenciesAccepted": "PKR, USD",
        "paymentAccepted": "Bank Transfer, Raast, Credit Card, Cash/Cheque",
        "areaServed": [
          { "@type": "Country", "name": "Pakistan" },
          { "@type": "City", "name": "Lahore" },
          { "@type": "City", "name": "Karachi" },
          { "@type": "City", "name": "Islamabad" }
        ],
        "provider": {
          "@type": "Organization",
          "name": "NovaMac Solutions",
          "url": "https://novamacsolutions.com"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://novamacsolutions.com/pk/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What payment methods are supported for clients in Pakistan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We accept direct online bank transfers (IBFT), Raast instant payment, and company cheque/invoicing in Pakistani Rupees (PKR)."
            }
          },
          {
            "@type": "Question",
            "name": "How quickly can you deliver a custom business portal or web app?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "High-performance business websites and landing platforms are delivered in 10 to 14 days, while complex custom ERP/CRM portals are completed in 3 to 4 weeks with weekly sprint demonstrations."
            }
          }
        ]
      }
    ]
  };

  const pkPhoneWa = "https://wa.me/923256611920?text=Salam%20NovaMac%20Team%2C%20I%20am%20looking%20for%20custom%20software%20or%20website%20development%20in%20Pakistan.";

  return (
    <div className="min-h-screen bg-[#FAF2F2] text-[#202020] pt-24 pb-24 px-6 md:px-12 xl:px-20 max-w-[1400px] mx-auto font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pkSchema) }}
      />

      {/* HERO SECTION */}
      <div className="max-w-4xl mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] font-mono text-xs font-bold uppercase tracking-widest mb-6">
          <Globe className="w-3.5 h-3.5" /> PAKISTAN SOFTWARE ENGINEERING STUDIO
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight mb-6">
          Custom Web & Software Engineering in <span className="text-[#FF5733]">Pakistan</span>.
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl font-medium">
          We engineer enterprise Next.js web platforms, custom ERP & CRM software, and automated AI agents for fast-growing Pakistani startups, exporters, real estate firms, and international companies.
        </p>
        
        {/* ACTION BUTTONS */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <a
            href={pkPhoneWa}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#25D366] hover:bg-[#202020] text-white font-extrabold rounded-full shadow-lg transition-all flex items-center gap-2 text-sm sm:text-base"
          >
            <MessageSquare className="w-4 h-4" /> WhatsApp Us Directly
          </a>
          <Link
            href="/book"
            className="px-6 py-4 bg-[#FF5733] hover:bg-[#202020] text-white font-extrabold rounded-full shadow-md transition-all flex items-center gap-2 text-sm sm:text-base"
          >
            Book Strategy Call <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/audit"
            className="px-6 py-4 bg-white hover:bg-[#FAF2F2] border border-[#F0DCDC] text-[#202020] font-bold rounded-full transition-all text-sm sm:text-base"
          >
            Free Website Speed Audit
          </Link>
        </div>

        {/* TRUST SIGNALS PILLS */}
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono font-bold text-gray-600">
          <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-[#F0DCDC]">
            <Clock className="w-3.5 h-3.5 text-[#FF5733]" /> Real-Time Collaboration in PKT
          </span>
          <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-[#F0DCDC]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#FF5733]" /> Complete NDA & Source Code Handoff
          </span>
          <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-[#F0DCDC]">
            <DollarSign className="w-3.5 h-3.5 text-[#FF5733]" /> PKR Invoicing & Raast / IBFT
          </span>
          <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-[#F0DCDC]">
            <FileCode2 className="w-3.5 h-3.5 text-[#FF5733]" /> 100% Private GitHub Transfer
          </span>
        </div>
      </div>

      {/* PAKISTAN PACKAGES & TRANSPARENT PRICING */}
      <div className="mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold text-[#FF5733] uppercase tracking-widest block mb-2">
            TRANSPARENT PAKISTAN PRICING TIERS
          </span>
          <h2 className="text-3xl font-black text-[#202020]">
            Fixed-Price Engineering in Pakistani Rupees (PKR)
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-[#F0DCDC] shadow-sm flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Business Web Platform</div>
              <div className="text-4xl font-black text-[#202020] mb-2">₨ 150,000 <span className="text-sm font-normal text-gray-500">PKR</span></div>
              <p className="text-xs text-gray-600 mb-6">Complete high-performance Next.js web application built for speed, SEO, and lead conversion in 14 days.</p>
              <ul className="space-y-3 text-xs text-gray-700 font-medium mb-8">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> Hand-coded Next.js 16 + React 19</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> Sub-0.8s LCP Edge Performance</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> Technical SEO & Schema Markup</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> 100% Codebase Ownership</li>
              </ul>
            </div>
            <Link
              href="/book?plan=starter-pk"
              className="w-full py-3.5 text-center bg-[#FAF2F2] hover:bg-[#FF5733] text-[#202020] hover:text-white font-extrabold rounded-2xl border border-[#F0DCDC] transition-all block text-xs"
            >
              Start Web Project &rarr;
            </Link>
          </div>

          <div className="p-8 rounded-3xl bg-[#202020] text-white border-2 border-[#FF5733] shadow-xl relative flex flex-col justify-between">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FF5733] text-white font-mono text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-widest">
              MOST POPULAR IN PAKISTAN
            </div>
            <div>
              <div className="font-mono text-xs font-bold text-[#FF5733] uppercase tracking-wider mb-2">Custom ERP / CRM System</div>
              <div className="text-4xl font-black text-white mb-2">₨ 350,000 <span className="text-sm font-normal text-gray-400">PKR</span></div>
              <p className="text-xs text-gray-300 mb-6">Custom sales pipeline, inventory management, invoice generation, and automated WhatsApp inquiry responses.</p>
              <ul className="space-y-3 text-xs text-gray-300 font-medium mb-8">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> Custom Sales Pipeline & Lead Boards</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> Role-Based Access Control (RBAC)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> WhatsApp Meta Cloud API Integration</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> ZERO Recurring Monthly Per-Seat Fees</li>
              </ul>
            </div>
            <Link
              href="/book?plan=crm-pk"
              className="w-full py-3.5 text-center bg-[#FF5733] hover:bg-white hover:text-[#202020] text-white font-extrabold rounded-2xl transition-all block text-xs"
            >
              Build Custom CRM &rarr;
            </Link>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-[#F0DCDC] shadow-sm flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Enterprise Software & SaaS</div>
              <div className="text-4xl font-black text-[#202020] mb-2">₨ 650,000+ <span className="text-sm font-normal text-gray-500">PKR</span></div>
              <p className="text-xs text-gray-600 mb-6">Complete multi-branch business management portal or SaaS web application with high concurrency.</p>
              <ul className="space-y-3 text-xs text-gray-700 font-medium mb-8">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> Multi-Tenant Software Infrastructure</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> Automated AI Customer Support Agents</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> Enterprise PostgreSQL & Cloud Hosting</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> 30-Day Post-Launch SLA Support</li>
              </ul>
            </div>
            <Link
              href="/book?plan=saas-pk"
              className="w-full py-3.5 text-center bg-[#FAF2F2] hover:bg-[#FF5733] text-[#202020] hover:text-white font-extrabold rounded-2xl border border-[#F0DCDC] transition-all block text-xs"
            >
              Launch Custom Software &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* FINAL PK CTA BANNER */}
      <div className="p-10 rounded-3xl bg-[#202020] text-white border border-white/10 text-center max-w-3xl mx-auto shadow-2xl">
        <h2 className="text-3xl font-black mb-4 text-white">Direct Connect With Our Senior Engineers</h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto text-sm">
          Discuss your project scope immediately on WhatsApp or schedule a 15-minute discovery consultation.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={pkPhoneWa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-white hover:text-[#202020] text-white font-extrabold rounded-full shadow-xl transition-all text-sm"
          >
            WhatsApp Tech Lead Directly <PhoneCall className="w-4 h-4" />
          </a>
          <Link
            href="/book"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF5733] hover:bg-white hover:text-[#202020] text-white font-extrabold rounded-full shadow-xl transition-all text-sm"
          >
            Book Discovery Call <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
