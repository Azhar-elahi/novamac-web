"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, ListChecks, PhoneCall, Users, Target, LayoutDashboard, MapPinned } from "lucide-react";

const PAIN_POINTS = [
  {
    icon: ListChecks,
    title: "Manual lead-list building",
    desc: "Pulling records one by one from county tax assessor sites and Zillow filters eats hours you should be spending on outreach.",
  },
  {
    icon: PhoneCall,
    title: "Skip-tracing bottlenecks",
    desc: "Looking up owner contact info manually for every single lead doesn't scale past a handful of properties a day.",
  },
  {
    icon: Users,
    title: "Untracked partner relationships",
    desc: "Split agreements living in text threads and DMs, with no record of who gets what on which deal.",
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
  "Bulk SMS/outreach workflows with AI-drafted follow-up messages",
  "A structured partner and buyer database with automatic matching logic",
  "One dashboard showing exactly where every deal stands, no spreadsheets",
];

export default function RealEstateClient() {
  return (
    <main className="bg-slate-50 text-slate-800 min-h-screen">
      {/* Hero */}
      <section className="pt-40 pb-20 px-6 md:px-12 xl:px-20 bg-white border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto">
          <div className="inline-flex items-center gap-2 mb-8 border border-slate-300 px-4 py-2 rounded-full">
            <MapPinned className="w-4 h-4 text-blue-600" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-600">Industries / Real Estate Wholesaling</span>
          </div>
          <h1 className="font-heading font-extrabold text-[clamp(2.5rem,7vw,6rem)] leading-[0.9] tracking-[-0.04em] mb-8">
            Real estate wholesaling,<br />
            <span className="text-blue-600">systemized.</span>
          </h1>
          <p className="text-lg text-slate-600 font-light max-w-2xl leading-relaxed">
            Finding leads, chasing owners, tracking partners, and matching buyers is a full-time job on its own &mdash; before you&apos;ve closed a single deal. We build the CRM and automation layer that turns that chaos into a repeatable pipeline.
          </p>
        </div>
      </section>

      {/* Pain points */}
      <section className="py-24 px-6 md:px-12 xl:px-20">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-slate-600 mb-4">/ The Problem</p>
          <h2 className="font-heading font-bold text-3xl md:text-5xl tracking-tight mb-14 max-w-2xl">
            If this sounds familiar, you&apos;re not alone.
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {PAIN_POINTS.map((p, i) => (
              <div key={i} className="border border-slate-200 bg-white rounded-2xl p-8">
                <div className="w-11 h-11 flex items-center justify-center border border-slate-300 bg-slate-50 rounded-lg mb-5">
                  <p.icon className="w-5 h-5 text-slate-800" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-2">{p.title}</h3>
                <p className="text-slate-600 font-light text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-24 px-6 md:px-12 xl:px-20 bg-white border-t border-slate-200">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-slate-600 mb-4">/ What We Build</p>
            <h2 className="font-heading font-bold text-3xl md:text-5xl tracking-tight mb-8">
              One system.<br />Every deal, tracked.
            </h2>
            <p className="text-slate-600 font-light leading-relaxed mb-10">
              Instead of juggling spreadsheets, text threads, and sticky notes, you get a single custom-built platform that handles the whole pipeline &mdash; from the first lead pulled to the signed purchase agreement.
            </p>
            <Link href="/contact" className="hover-trigger inline-flex items-center gap-3 bg-blue-600 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 hover:bg-blue-700 transition-all duration-300 rounded-full">
              Book a Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="border border-slate-200 rounded-2xl p-8 md:p-10 bg-slate-50">
            <div className="flex items-center gap-3 mb-8">
              <LayoutDashboard className="w-5 h-5 text-blue-600" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-slate-600">Included in your system</span>
            </div>
            <ul className="space-y-4">
              {SOLUTIONS.map((s, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 md:px-12 xl:px-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 border-t border-slate-200 text-center">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-heading font-extrabold text-[clamp(2rem,6vw,4.5rem)] leading-[0.9] tracking-[-0.04em] mb-8 text-white">
            Stop losing deals to disorganization.
          </h2>
          <p className="text-blue-100 font-light text-lg mb-10">
            Tell us how your wholesaling process works today, and we&apos;ll show you what a system built specifically for it looks like.
          </p>
          <Link href="/contact" className="hover-trigger inline-flex items-center gap-3 bg-white text-blue-700 font-bold text-xs uppercase tracking-widest px-10 py-5 hover:scale-105 transition-all duration-300 rounded-full shadow-[0_0_40px_rgba(255,255,255,0.3)]">
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
