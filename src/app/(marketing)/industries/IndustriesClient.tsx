"use client";

import Link from "next/link";
import { ArrowRight, MapPin, Building2 } from "lucide-react";

const INDUSTRIES = [
  {
    slug: "real-estate-wholesaling",
    icon: MapPin,
    title: "Real Estate Wholesaling",
    desc: "Automated lead pipelines, skip-tracing workflows, and buyer-matching CRMs built for wholesalers who are done chasing spreadsheets.",
    live: true,
  },
  {
    slug: "e-commerce",
    icon: Building2,
    title: "E-Commerce & Retail",
    desc: "Coming soon.",
    live: false,
  },
];

export default function IndustriesClient() {
  return (
    <main className="bg-[#0B1220] text-[#F8FAFC] min-h-screen pt-12 sm:pt-20 pb-24 px-6 md:px-12 xl:px-20 font-sans">
      <section className="max-w-[1400px] mx-auto relative z-10">
        <span className="px-4 py-1.5 bg-gradient-to-r from-[#0F1C33] to-[#091222] border border-[#1E2E4A] border-t-white/10 text-[#3B82F6] font-mono text-xs sm:text-sm font-bold uppercase tracking-widest rounded-full inline-block mb-5 shadow-md">
          INDUSTRIES WE SERVE
        </span>
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black tracking-tight leading-[1.05] sm:leading-[0.9] mb-6 text-[#F8FAFC]">
          Built for your industry,<br /><span className="text-[#3B82F6]">not a generic template.</span>
        </h1>
        <p className="text-sm sm:text-lg md:text-xl text-[#94A3B8] font-normal max-w-2xl mb-16 leading-relaxed bg-gradient-to-b from-[#0F1C33]/90 via-[#091222]/95 to-[#050A14] p-5 sm:p-7 rounded-2xl border border-[#1E2E4A] border-t-white/10 shadow-md">
          Every industry has its own workflow, its own bottlenecks, and its own way of losing deals to disorganization. We build systems around how your industry actually works.
        </p>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
          {INDUSTRIES.map((ind) => (
            <div key={ind.slug} className={`p-8 sm:p-10 rounded-3xl transition-all ${ind.live ? "bg-gradient-to-b from-[#0F1C33] via-[#091222] to-[#050A14] border border-[#1E2E4A] border-t-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.65),0_0_20px_rgba(59,130,246,0.08)] hover:shadow-[0_25px_65px_rgba(0,0,0,0.85),0_0_45px_rgba(59,130,246,0.3)] hover:border-[#3B82F6]/80" : "border border-[#1E2E4A] bg-[#091222]/40 opacity-60"}`}>
              <div className="w-12 h-12 flex items-center justify-center bg-[#040810] border border-[#1E2E4A] border-t-white/10 text-[#3B82F6] rounded-2xl mb-6 shadow-inner">
                <ind.icon className="w-6 h-6 text-[#3B82F6]" />
              </div>
              <h3 className="font-extrabold text-2xl sm:text-3xl text-[#F8FAFC] mb-3">{ind.title}</h3>
              <p className="text-[#94A3B8] font-normal text-xs sm:text-sm leading-relaxed mb-6">{ind.desc}</p>
              {ind.live ? (
                <Link href={`/industries/${ind.slug}`} className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-extrabold uppercase tracking-widest text-[#3B82F6] hover:text-[#F8FAFC] transition-colors">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              ) : (
                <span className="text-xs font-mono uppercase tracking-widest text-[#94A3B8]/50">Coming Soon</span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-[#1E2E4A] pt-10">
          <p className="text-[#94A3B8] font-light mb-4 text-sm sm:text-base">Don&apos;t see your industry listed?</p>
          <Link href="/contact" className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-[#3B82F6] hover:text-[#F8FAFC] transition-colors">
            Tell us what you need <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
