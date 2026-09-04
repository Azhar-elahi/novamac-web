import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Globe, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Web Development Agency USA | NovaMac Solutions",
  description: "Elite Next.js web development, custom AI CRMs, and software engineering for US startups & enterprises. Fast delivery, PST/EST timezone alignment.",
  alternates: {
    canonical: "https://novamacsolutions.com/us",
    languages: {
      "en-US": "https://novamacsolutions.com/us",
      "en-GB": "https://novamacsolutions.com/uk",
      "en-CA": "https://novamacsolutions.com/ca",
      "en-EU": "https://novamacsolutions.com/eu",
      "x-default": "https://novamacsolutions.com",
    },
  },
  openGraph: {
    title: "Custom Web Development Agency USA | NovaMac Solutions",
    description: "Elite Next.js web development, custom AI CRMs, and software engineering for US startups & enterprises.",
    url: "https://novamacsolutions.com/us",
    locale: "en_US",
  },
};

export default function USLandingPage() {
  return (
    <div className="min-h-screen bg-[#FAF2F2] text-[#202020] pt-24 pb-24 px-6 md:px-12 xl:px-20 max-w-[1400px] mx-auto font-sans">
      {/* Hero */}
      <div className="max-w-4xl mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] font-mono text-xs font-bold uppercase tracking-widest mb-6">
          <Globe className="w-3.5 h-3.5" /> UNITED STATES ENGINEERING STUDIO
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight mb-6">
          Custom Web & AI Software Agency for <span className="text-[#FF5733]">US Companies</span>.
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
          We partner with US startups, real estate firms, and growing tech enterprises to engineer sub-second Next.js web applications, custom CRMs, and autonomous AI agents with full PST/EST alignment.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="px-8 py-4 bg-[#FF5733] hover:bg-[#202020] text-white font-extrabold rounded-full shadow-lg transition-all flex items-center gap-2"
          >
            Start Your US Project <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/work"
            className="px-8 py-4 bg-white hover:bg-[#FAF2F2] border border-[#F0DCDC] text-[#202020] font-bold rounded-full transition-all"
          >
            View US Case Studies
          </Link>
        </div>
      </div>

      {/* US Benefits Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {[
          {
            title: "PST / EST Timezone Alignment",
            desc: "Daily Slack updates, weekly demo calls, and zero communication friction across all US timezones."
          },
          {
            title: "100% Code & Data Ownership",
            desc: "Full transfer of Git repositories, database schemas, and intellectual property with zero ongoing licensing fees."
          },
          {
            title: "Sub-Second Performance SLA",
            desc: "Hand-coded Next.js architecture deployed on US edge nodes for sub-0.8s LCP and 98+ PageSpeed scores."
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
        <h2 className="text-3xl font-black mb-4 text-white">Ready to Accelerate Your US Business?</h2>
        <p className="text-gray-300 mb-8">Packages start from $299 USD with 2-4 week guaranteed delivery.</p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF5733] hover:bg-white hover:text-[#202020] text-white font-extrabold rounded-full shadow-xl transition-all"
        >
          Book US Strategy Call <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}

