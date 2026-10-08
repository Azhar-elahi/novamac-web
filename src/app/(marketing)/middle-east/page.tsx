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
  title: "Custom Web, Software, ERP, POS & CRM Agency Dubai, UAE | NovaMac Solutions",
  description: "Elite Next.js web applications, custom software, bilingual ERPs, retail POS systems & real estate CRMs for UAE, Dubai & Saudi Arabia. GST timezone alignment & direct WhatsApp desk.",
  keywords: [
    "custom software development agency Dubai",
    "custom web development company Dubai UAE",
    "custom ERP software development Dubai",
    "retail POS system development Dubai UAE",
    "real estate CRM development Dubai",
    "hire Next.js developers UAE",
    "bilingual Arabic English web applications",
    "web development company Abu Dhabi Riyadh"
  ],
  alternates: {
    canonical: "https://novamacsolutions.com/middle-east",
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
    title: "Custom Web, Software, ERP, POS & CRM Agency Dubai, UAE | NovaMac Solutions",
    description: "Elite Next.js web applications, custom software, bilingual ERPs, retail POS systems & real estate CRMs for UAE & GCC enterprises.",
    url: "https://novamacsolutions.com/middle-east",
    locale: "en_AE",
    images: [
      {
        url: "https://novamacsolutions.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "NovaMac Solutions Middle East & UAE Engineering Studio",
      },
    ],
  },
};

export default function MiddleEastLandingPage() {
  const meSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://novamacsolutions.com/middle-east/#service",
        "name": "NovaMac Solutions Middle East - Web, Software, ERP, POS & CRM",
        "description": "Custom Next.js web platforms, bespoke software engineering, bilingual Arabic/English real estate CRMs, cloud ERPs, and retail POS systems for UAE, Dubai, Abu Dhabi, and Saudi Arabia.",
        "url": "https://novamacsolutions.com/middle-east",
        "priceRange": "د.إد.إ",
        "currenciesAccepted": "AED, SAR, USD",
        "paymentAccepted": "Bank Transfer, Stripe, Credit Card, Corporate Wire",
        "areaServed": [
          { "@type": "Country", "name": "United Arab Emirates" },
          { "@type": "City", "name": "Dubai" },
          { "@type": "City", "name": "Abu Dhabi" },
          { "@type": "Country", "name": "Saudi Arabia" },
          { "@type": "City", "name": "Riyadh" },
          { "@type": "Country", "name": "Qatar" }
        ],
        "provider": {
          "@type": "Organization",
          "name": "NovaMac Solutions",
          "url": "https://novamacsolutions.com"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Middle East Digital Engineering Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Bilingual Next.js Web Development (Arabic & English)",
                "description": "Sub-0.8s LCP web applications with native RTL/LTR support engineered with Next.js 16 and React 19."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Bespoke Custom Software Development UAE",
                "description": "Tailored business software, custom APIs, and high-security cloud portals."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Dubai Real Estate CRM & Lead Portals",
                "description": "Tailored CRM systems with WhatsApp lead automation, Bayut/PropertyFinder webhooks, and agent commission tracking."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Enterprise ERP & Inventory Portals GCC",
                "description": "Bespoke trading and supply-chain ERP systems with zero recurring monthly per-user licensing fees."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Cloud Retail POS Systems UAE",
                "description": "Fast touchscreen POS checkouts with thermal receipt printing, UAE VAT invoice compliance, and multi-branch inventory."
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://novamacsolutions.com/middle-east/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do you provide live support in Gulf Standard Time (GST)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, completely. Our engineering leads work directly in Gulf Standard Time (GST - Dubai & Abu Dhabi) and AST (Riyadh), providing real-time communication via WhatsApp, Slack, and scheduled video demos."
            }
          },
          {
            "@type": "Question",
            "name": "Can you engineer bilingual Arabic and English websites with RTL layout?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We engineer complete bilingual web applications with seamless Right-to-Left (RTL) Arabic typography, instant language switching, and localized SEO schemas for both GCC Arabic and English search engines."
            }
          },
          {
            "@type": "Question",
            "name": "How much does custom web or ERP software cost in UAE dirhams (AED)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "High-performance Next.js web applications start from 4,500 AED, while custom real estate CRMs and ERP systems range from 8,500 AED to 18,000 AED. Compared to local Dubai software agencies (25,000–60,000 AED), you save over 60% with full source code ownership."
            }
          },
          {
            "@type": "Question",
            "name": "How does WhatsApp integration work for lead qualification?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We integrate the official Meta Cloud WhatsApp Business API directly into your custom CRM, allowing automated 24/7 lead responses, brochure dispatch, and automatic agent routing without missing any inquiry."
            }
          }
        ]
      }
    ]
  };

  const uaePhoneWa = "https://wa.me/923256611920?text=Hi%20NovaMac%20Team%2C%20I%20am%20in%20UAE%20%2F%20GCC%20and%20interested%20in%20custom%20web%20or%20CRM%20development.";

  return (
    <div className="min-h-screen bg-[#FAF2F2] text-[#202020] pt-24 pb-24 px-6 md:px-12 xl:px-20 max-w-[1400px] mx-auto font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(meSchema) }}
      />

      {/* HERO SECTION */}
      <div className="max-w-4xl mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] font-mono text-xs font-bold uppercase tracking-widest mb-6">
          <Globe className="w-3.5 h-3.5" /> MIDDLE EAST & GCC DIGITAL ENGINEERING STUDIO
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight mb-6">
          Custom Web & ERP/CRM Engineering for <span className="text-[#FF5733]">UAE & GCC Enterprises</span>.
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl font-medium">
          Cut your software development costs by 60% compared to local Dubai agency retainers. We partner with enterprises, real estate brokerages, and logistics leaders across Dubai, Abu Dhabi, Riyadh, and Doha with complete Gulf Standard Time (GST) alignment and direct WhatsApp desk access.
        </p>
        
        {/* ACTION BUTTONS */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <a
            href={uaePhoneWa}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#25D366] hover:bg-[#202020] text-white font-extrabold rounded-full shadow-lg transition-all flex items-center gap-2 text-sm sm:text-base"
          >
            <MessageSquare className="w-4 h-4" /> Chat on WhatsApp with Tech Lead
          </a>
          <Link
            href="/book"
            className="px-6 py-4 bg-[#FF5733] hover:bg-[#202020] text-white font-extrabold rounded-full shadow-md transition-all flex items-center gap-2 text-sm sm:text-base"
          >
            Book 15-Min Strategy Call <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/audit"
            className="px-6 py-4 bg-white hover:bg-[#FAF2F2] border border-[#F0DCDC] text-[#202020] font-bold rounded-full transition-all text-sm sm:text-base"
          >
            Free UAE Site Speed Audit
          </Link>
        </div>

        {/* TRUST SIGNALS PILLS */}
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono font-bold text-gray-600">
          <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-[#F0DCDC]">
            <Clock className="w-3.5 h-3.5 text-[#FF5733]" /> Gulf Standard Time (GST - Dubai) Alignment
          </span>
          <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-[#F0DCDC]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#FF5733]" /> Bilingual Arabic & English RTL/LTR
          </span>
          <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-[#F0DCDC]">
            <DollarSign className="w-3.5 h-3.5 text-[#FF5733]" /> AED & SAR Invoicing / Bank Transfer
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
            GCC COST EFFICIENCY
          </span>
          <h2 className="text-3xl font-black text-[#202020]">
            Why Dubai & GCC Businesses Build With NovaMac
          </h2>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-[#F0DCDC] bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#202020] text-white font-mono text-xs uppercase">
              <tr>
                <th className="p-4 sm:p-5">Comparison Metric</th>
                <th className="p-4 sm:p-5 text-gray-300">Local Dubai Agency</th>
                <th className="p-4 sm:p-5 text-gray-300">Off-the-shelf SaaS Software</th>
                <th className="p-4 sm:p-5 text-[#FF5733] font-black bg-white/5">NovaMac Dedicated Studio</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F0DCDC]">
              <tr>
                <td className="p-4 sm:p-5 font-bold text-[#202020]">Project Investment</td>
                <td className="p-4 sm:p-5 text-gray-600">AED 25,000 – AED 60,000+</td>
                <td className="p-4 sm:p-5 text-gray-600">AED 1,500 – AED 3,500/month recurring</td>
                <td className="p-4 sm:p-5 font-black text-[#FF5733] bg-[#FF5733]/5">AED 4,500 – AED 14,000 fixed</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-[#202020]">Bilingual RTL Capability</td>
                <td className="p-4 sm:p-5 text-gray-600">Often outsourced or clumsy plugin</td>
                <td className="p-4 sm:p-5 text-gray-600">Poor Arabic formatting & translation</td>
                <td className="p-4 sm:p-5 font-bold text-[#202020] bg-[#FF5733]/5">Native Next.js RTL/LTR typography</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-[#202020]">Delivery Speed</td>
                <td className="p-4 sm:p-5 text-gray-600">8–12 weeks of bureaucratic meetings</td>
                <td className="p-4 sm:p-5 text-gray-600">Complex setup & vendor lock-in</td>
                <td className="p-4 sm:p-5 font-bold text-[#202020] bg-[#FF5733]/5">14–21 days guaranteed deployment</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-[#202020]">WhatsApp CRM Workflows</td>
                <td className="p-4 sm:p-5 text-gray-600">Charged as expensive custom add-on</td>
                <td className="p-4 sm:p-5 text-gray-600">Separate subscription per seat</td>
                <td className="p-4 sm:p-5 font-bold text-[#202020] bg-[#FF5733]/5">Native Meta Cloud API direct integration</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* GCC PACKAGES & TRANSPARENT PRICING */}
      <div className="mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold text-[#FF5733] uppercase tracking-widest block mb-2">
            GCC TRANSPARENT PRICING TIERS
          </span>
          <h2 className="text-3xl font-black text-[#202020]">
            Fixed Scope In AED / SAR. Zero Ongoing Per-User Licenses.
          </h2>
          <p className="text-gray-600 mt-2 text-sm">
            All prices in UAE Dirhams (AED) and Saudi Riyals (SAR equivalent). Direct bank transfer or Stripe card payment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-8 rounded-3xl bg-white border border-[#F0DCDC] shadow-sm flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Corporate Web Platform</div>
              <div className="text-4xl font-black text-[#202020] mb-2">AED 4,500 <span className="text-sm font-normal text-gray-500">AED</span></div>
              <p className="text-xs text-gray-600 mb-6">High-performance bilingual Next.js web application built for speed, Arabic/English SEO, and conversion in 14 days.</p>
              <ul className="space-y-3 text-xs text-gray-700 font-medium mb-8">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> Next.js 16 + React 19 UI Engine</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> Sub-0.8s LCP Edge Performance</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> Bilingual Arabic RTL & English LTR</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> Direct WhatsApp Click-to-Chat</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> 100% Codebase Ownership</li>
              </ul>
            </div>
            <Link
              href="/book?plan=corporate-gcc"
              className="w-full py-3.5 text-center bg-[#FAF2F2] hover:bg-[#FF5733] text-[#202020] hover:text-white font-extrabold rounded-2xl border border-[#F0DCDC] hover:border-transparent transition-all block text-xs"
            >
              Start Web Project &rarr;
            </Link>
          </div>

          {/* Card 2 - Popular */}
          <div className="p-8 rounded-3xl bg-[#202020] text-white border-2 border-[#FF5733] shadow-xl relative flex flex-col justify-between">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FF5733] text-white font-mono text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-widest">
              POPULAR DUBAI REAL ESTATE & TRADING CHOICE
            </div>
            <div>
              <div className="font-mono text-xs font-bold text-[#FF5733] uppercase tracking-wider mb-2">Real Estate CRM & ERP Portal</div>
              <div className="text-4xl font-black text-white mb-2">AED 8,500 <span className="text-sm font-normal text-gray-400">AED</span></div>
              <p className="text-xs text-gray-300 mb-6">Custom sales pipeline, inventory management, agent commission tracking, and automated WhatsApp inquiry responses.</p>
              <ul className="space-y-3 text-xs text-gray-300 font-medium mb-8">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> WhatsApp Meta Cloud API Automation</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> Lead Distribution & Agent Pipelines</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> Property / Inventory Listing Management</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> ZERO Recurring Per-Seat Fees</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> Role-Based Access Control (RBAC)</li>
              </ul>
            </div>
            <Link
              href="/book?plan=crm-gcc"
              className="w-full py-3.5 text-center bg-[#FF5733] hover:bg-white hover:text-[#202020] text-white font-extrabold rounded-2xl transition-all block text-xs"
            >
              Build Custom CRM &rarr;
            </Link>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-3xl bg-white border border-[#F0DCDC] shadow-sm flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Enterprise ERP & AI Portal</div>
              <div className="text-4xl font-black text-[#202020] mb-2">AED 16,000+ <span className="text-sm font-normal text-gray-500">AED</span></div>
              <p className="text-xs text-gray-600 mb-6">Complete supply chain, retail invoicing, customer portal, and autonomous AI agents for large operations.</p>
              <ul className="space-y-3 text-xs text-gray-700 font-medium mb-8">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> Complete Multi-Branch ERP System</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> UAE Tax Invoice & Finance Automation</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> 24/7 AI WhatsApp Customer Service Bot</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> Enterprise PostgreSQL & Cloud Hosting</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5733]" /> 30-Day Post-Launch SLA Support</li>
              </ul>
            </div>
            <Link
              href="/book?plan=erp-gcc"
              className="w-full py-3.5 text-center bg-[#FAF2F2] hover:bg-[#FF5733] text-[#202020] hover:text-white font-extrabold rounded-2xl border border-[#F0DCDC] hover:border-transparent transition-all block text-xs"
            >
              Launch Enterprise ERP &rarr;
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
            Common Questions From Dubai & GCC Executives
          </h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "Do you provide live support in Gulf Standard Time (GST)?",
              a: "Yes, completely. Our engineering leads work directly in Gulf Standard Time (GST - Dubai & Abu Dhabi) and AST (Riyadh), providing real-time communication via WhatsApp, Slack, and scheduled video demos."
            },
            {
              q: "Can you engineer bilingual Arabic and English websites with RTL layout?",
              a: "Yes. We engineer complete bilingual web applications with seamless Right-to-Left (RTL) Arabic typography, instant language switching, and localized SEO schemas for both GCC Arabic and English search engines."
            },
            {
              q: "How much does custom web or ERP software cost in UAE dirhams (AED)?",
              a: "High-performance Next.js web applications start from 4,500 AED, while custom real estate CRMs and ERP systems range from 8,500 AED to 18,000 AED. Compared to local Dubai software agencies (25,000–60,000 AED), you save over 60% with full source code ownership."
            },
            {
              q: "How does WhatsApp integration work for lead qualification?",
              a: "We integrate the official Meta Cloud WhatsApp Business API directly into your custom CRM, allowing automated 24/7 lead responses, brochure dispatch, and automatic agent routing without missing any inquiry."
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

      {/* FINAL GCC CTA BANNER */}
      <div className="p-10 rounded-3xl bg-[#202020] text-white border border-white/10 text-center max-w-3xl mx-auto shadow-2xl">
        <h2 className="text-3xl font-black mb-4 text-white">Direct Connect With Our GCC Tech Lead</h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto text-sm">
          Discuss your project scope immediately on WhatsApp or schedule a structured 15-minute video consultation.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={uaePhoneWa}
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
