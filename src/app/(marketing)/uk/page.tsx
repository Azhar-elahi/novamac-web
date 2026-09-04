import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Web Development Agency UK | NovaMac Solutions",
  description: "Bespoke Next.js web applications, custom software & AI development for UK businesses. GMT timezone aligned engineering studio.",
  alternates: {
    canonical: "https://novamacsolutions.com/uk",
    languages: {
      "en-US": "https://novamacsolutions.com/us",
      "en-GB": "https://novamacsolutions.com/uk",
      "en-CA": "https://novamacsolutions.com/ca",
      "en-EU": "https://novamacsolutions.com/eu",
      "x-default": "https://novamacsolutions.com",
    },
  },
  openGraph: {
    title: "Custom Web Development Agency UK | NovaMac Solutions",
    description: "Bespoke Next.js web applications, custom software & AI development for UK businesses.",
    url: "https://novamacsolutions.com/uk",
    locale: "en_GB",
  },
};

export default function UKLandingPage() {
  return (
    <div className="min-h-screen bg-[#FAF2F2] text-[#202020] pt-24 pb-24 px-6 md:px-12 xl:px-20 max-w-[1400px] mx-auto font-sans">
      {/* Hero */}
      <div className="max-w-4xl mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] font-mono text-xs font-bold uppercase tracking-widest mb-6">
          <Globe className="w-3.5 h-3.5" /> UNITED KINGDOM & EUROPE DESK
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight mb-6">
          Custom Web & Software Agency for <span className="text-[#FF5733]">UK Brands</span>.
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
          Engineered for UK startups, agencies, and enterprises needing bespoke Next.js web platforms, custom CRMs, and GDPR-compliant AI workflows with full GMT alignment.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="px-8 py-4 bg-[#FF5733] hover:bg-[#202020] text-white font-extrabold rounded-full shadow-lg transition-all flex items-center gap-2"
          >
            Start UK Project <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/pricing"
            className="px-8 py-4 bg-white hover:bg-[#FAF2F2] border border-[#F0DCDC] text-[#202020] font-bold rounded-full transition-all"
          >
            View Pricing (£ GBP / $ USD)
          </Link>
        </div>
      </div>

      {/* UK Benefits Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {[
          {
            title: "GMT Timezone Synchronization",
            desc: "Seamless communication, live sprint reviews, and direct developer access during standard UK business hours."
          },
          {
            title: "GDPR & Data Privacy Ready",
            desc: "Built with zero-trust architecture, cookie compliance, and strict UK/EU data protection standards."
          },
          {
            title: "Sub-Second UK Edge Delivery",
            desc: "Deployed across London & Frankfurt Vercel edge nodes for instantaneous sub-0.5s response times."
          }
        ].map((b, i) => (
          <div key={i} className="p-8 rounded-3xl bg-white border border-[#F0DCDC] shadow-sm">
            <CheckCircle2 className="w-8 h-8 text-[#FF5733] mb-4" />
            <h2 className="text-xl font-extrabold mb-2 text-[#202020]">{b.title}</h2>
            <p className="text-sm text-gray-600 leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>

      {/* Pricing & CTA */}
      <div className="p-10 rounded-3xl bg-[#202020] text-white border border-white/10 text-center max-w-3xl mx-auto shadow-2xl">
        <h2 className="text-3xl font-black mb-4 text-white">Elevate Your UK Business Online</h2>
        <p className="text-gray-300 mb-8">Transparent pricing with 100% source code ownership.</p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF5733] hover:bg-white hover:text-[#202020] text-white font-extrabold rounded-full shadow-xl transition-all"
        >
          Book UK Consultation <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}

