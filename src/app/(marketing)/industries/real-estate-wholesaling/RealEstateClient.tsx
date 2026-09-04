"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ListChecks, PhoneCall, Users, Target, LayoutDashboard, MapPinned } from "lucide-react";

const PAIN_POINTS = [
  {
    icon: ListChecks,
    title: "Manual lead-list building",
    desc: "Pulling records one by one from county tax assessor sites and filters eats hours you should be spending on deal outreach.",
  },
  {
    icon: PhoneCall,
    title: "Skip-tracing bottlenecks",
    desc: "Looking up owner contact info manually for every lead doesn't scale past a handful of properties a day.",
  },
  {
    icon: Users,
    title: "Untracked partner relationships",
    desc: "Split agreements living in text threads and DMs, with no clear record of who gets what on which deal.",
  },
  {
    icon: Target,
    title: "Buyer matching by memory",
    desc: "Trying to remember which builder wants which lot size and price range instead of matching leads systematically.",
  },
];

const SOLUTIONS = [
  "Custom lead-pipeline CRM tracking every deal from prospecting through closing",
  "Automated data pulls from county records and listing sources",
  "Outreach workflows with structured follow-up scheduling",
  "A structured partner and buyer database with automatic matching logic",
  "One unified dashboard showing exactly where every deal stands, zero spreadsheets",
];

export default function RealEstateClient() {
  return (
    <div className="bg-[#FAF2F2] text-[#202020] min-h-screen font-sans pt-24 pb-20">
      
      {/* HERO SECTION WITH VIDEO BACKGROUND */}
      <section className="relative px-6 sm:px-12 lg:px-20 py-24 border-b border-[#F0DCDC] overflow-hidden min-h-[50vh] flex items-center bg-[#0D0D0D] text-white">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-90">
            <source src="/videos/man-laptop.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/90 via-[#0D0D0D]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-black/40" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] font-mono text-xs font-bold uppercase tracking-widest rounded-full mb-6">
            <MapPinned className="w-4 h-4" />
            <span>INDUSTRIES / REAL ESTATE WHOLESALING</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-8">
            Real Estate Wholesaling, Systemized.
          </h1>

          <p className="text-gray-300 text-base sm:text-xl font-light leading-relaxed mb-10 max-w-2xl">
            Finding leads, chasing owners, tracking partners, and matching buyers is a full-time job. We build custom CRM platforms and automation layers that turn that chaos into a repeatable pipeline.
          </p>

          <Link
            href="/contact"
            className="bg-[#FF5733] text-white hover:bg-white hover:text-black font-extrabold text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 shadow-xl inline-flex items-center gap-2"
          >
            <span>Book Wholesaling Strategy Call</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>

      {/* PAIN POINTS SECTION */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <span className="text-[#FF5733] font-mono text-xs font-bold uppercase tracking-widest mb-3 block">
          COMMON OPERATIONAL BOTTLENECKS
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#202020] mb-12 tracking-tight">
          Eliminate Manual Chaos in Real Estate Deals.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {PAIN_POINTS.map((p, i) => (
            <div key={i} className="bg-white border border-[#F0DCDC] rounded-3xl p-8 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#FF5733]/10 border border-[#FF5733]/30 flex items-center justify-center text-[#FF5733] mb-6">
                <p.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-[#202020] mb-3">{p.title}</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section className="py-20 px-6 bg-[#0D0D0D] text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#FF5733] font-mono text-xs font-bold uppercase tracking-widest mb-3 block">
              WHAT WE ENGINEER
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 tracking-tight">
              One System. Every Deal Tracked.
            </h2>
            <p className="text-gray-300 font-light leading-relaxed mb-8">
              Instead of juggling spreadsheets and text threads, you get a single custom platform that handles the whole deal pipeline from lead acquisition to closing.
            </p>
            <Link
              href="/contact"
              className="bg-[#FF5733] text-white hover:bg-white hover:text-black font-extrabold text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 inline-flex items-center gap-2"
            >
              <span>Schedule Architecture Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-[#141414] border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl">
            <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-6">
              <LayoutDashboard className="w-6 h-6 text-[#FF5733]" />
              <span className="text-xs font-mono uppercase tracking-widest text-white">System Deliverables</span>
            </div>
            <ul className="space-y-4">
              {SOLUTIONS.map((s, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#FF5733] shrink-0 mt-0.5" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
}
