import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Globe, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Web Development Agency USA | NovaMac Solutions",
  description: "Elite Next.js web development, custom AI CRMs, and software engineering for US startups & enterprises. Fast delivery, PST/EST timezone alignment.",
  alternates: {
    canonical: "https://novamacsolutions.com/us",
  },
};

export default function USLandingPage() {
  return (
    <div className="min-h-screen bg-[#0B1220] text-[#F8FAFC] pt-32 pb-24 px-6 md:px-12 xl:px-20 max-w-[1400px] mx-auto">
      {/* Hero */}
      <div className="max-w-4xl mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/30 text-[#3B82F6] font-mono text-xs font-bold uppercase tracking-widest mb-6">
          <Globe className="w-3.5 h-3.5" /> UNITED STATES ENGINEERING STUDIO
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight mb-6">
          Custom Web & AI Software Agency for <span className="text-[#3B82F6]">US Companies</span>.
        </h1>
        <p className="text-lg text-[#94A3B8] leading-relaxed mb-8 max-w-2xl">
          We partner with US startups, real estate firms, and growing tech enterprises to engineer sub-second Next.js web applications, custom CRMs, and autonomous AI agents with full PST/EST alignment.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="px-8 py-4 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-extrabold rounded-2xl shadow-lg shadow-[#3B82F6]/25 transition-all flex items-center gap-2"
          >
            Start Your US Project <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/work"
            className="px-8 py-4 bg-[#0F1C33] hover:bg-[#1E2E4A] border border-[#1E2E4A] text-white font-bold rounded-2xl transition-all"
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
          <div key={i} className="p-8 rounded-3xl bg-[#0F1C33] border border-[#1E2E4A] border-t-white/10">
            <CheckCircle2 className="w-8 h-8 text-[#3B82F6] mb-4" />
            <h2 className="text-xl font-extrabold mb-2">{b.title}</h2>
            <p className="text-sm text-[#94A3B8] leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>

      {/* Pricing & CTA */}
      <div className="p-10 rounded-3xl bg-gradient-to-r from-[#0F1C33] via-[#091222] to-[#050A14] border border-[#1E2E4A] text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-black mb-4">Ready to Accelerate Your US Business?</h2>
        <p className="text-[#94A3B8] mb-8">Packages start from $299 USD with 2-4 week guaranteed delivery.</p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-extrabold rounded-2xl shadow-xl transition-all"
        >
          Book US Strategy Call <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
