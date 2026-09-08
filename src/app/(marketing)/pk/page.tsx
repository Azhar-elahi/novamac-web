import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Globe, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Web Development & Software Agency Pakistan | NovaMac Solutions",
  description: "High-performance Next.js web application development, custom CRMs, SaaS platforms, and AI automation for Pakistani startups & international businesses. PKT timezone alignment.",
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
    title: "Custom Web Development & Software Agency Pakistan | NovaMac Solutions",
    description: "High-performance Next.js web application development, custom CRMs, SaaS platforms, and AI automation for Pakistani startups & international businesses.",
    url: "https://novamacsolutions.com/pk",
    locale: "en_PK",
  },
};

export default function PakistanLandingPage() {
  return (
    <div className="min-h-screen bg-[#FAF2F2] text-[#202020] pt-24 pb-24 px-6 md:px-12 xl:px-20 max-w-[1400px] mx-auto font-sans">
      {/* Hero */}
      <div className="max-w-4xl mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] font-mono text-xs font-bold uppercase tracking-widest mb-6">
          <Globe className="w-3.5 h-3.5" /> PAKISTAN SOFTWARE ENGINEERING STUDIO
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight mb-6">
          Custom Web Development & AI Engineering in <span className="text-[#FF5733]">Pakistan</span>.
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
          We engineer enterprise Next.js web platforms, custom ERP & CRM software, and automated AI agents for fast-growing Pakistani startups, exporters, real estate firms, and international companies.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="px-8 py-4 bg-[#FF5733] hover:bg-[#202020] text-white font-extrabold rounded-full shadow-lg transition-all flex items-center gap-2"
          >
            Start Your Project <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/work"
            className="px-8 py-4 bg-white hover:bg-[#FAF2F2] border border-[#F0DCDC] text-[#202020] font-bold rounded-full transition-all"
          >
            View Portfolio
          </Link>
        </div>
      </div>

      {/* Pakistan Benefits Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {[
          {
            title: "PKT Local & Global Timezone Support",
            desc: "Direct communication via WhatsApp, Phone, and daily updates in PKT, EST, & GST timezones."
          },
          {
            title: "Custom CRM & Inventory ERP Solutions",
            desc: "Tailored software for Pakistani businesses replacing spreadsheets with automated role-based management portals."
          },
          {
            title: "100% Code Ownership & Security",
            desc: "Complete transfer of Git repositories, database schemas, and IP assets with zero monthly lock-in fees."
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
        <h2 className="text-3xl font-black mb-4 text-white">Ready to Build Your Platform in Pakistan?</h2>
        <p className="text-gray-300 mb-8">High-speed web platforms & custom software delivered in 2-4 weeks.</p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF5733] hover:bg-white hover:text-[#202020] text-white font-extrabold rounded-full shadow-xl transition-all"
        >
          Book Consultation Call <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
