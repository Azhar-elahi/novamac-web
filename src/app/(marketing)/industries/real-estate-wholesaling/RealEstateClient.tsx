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
    <main className="bg-[#f6f1e7] text-[#211f1a] min-h-screen">
      {/* Hero */}
      <section className="pt-40 pb-20 px-6 md:px-12 xl:px-20 border-b border-black/10 ">
        <div className="max-w-[1400px] mx-auto">
          <div className="inline-flex items-center gap-2 mb-8">
            <MapPinned className="w-4 h-4 text-[#2f6b45]" />
            <span className="annotation-label -rotate-2">Industries / Real Estate Wholesaling</span>
          </div>
          <h1 className="font-heading font-medium text-[clamp(2.4rem,6.5vw,5.4rem)] leading-[1.03] tracking-[-0.02em] mb-8">
            Real estate wholesaling,<br />
            <span className="text-script">systemized.</span>
          </h1>
          <p className="text-lg text-[#211f1a]/60 font-light max-w-2xl leading-relaxed">
            Finding leads, chasing owners, tracking partners, and matching buyers is a full-time job on its own &mdash; before you&apos;ve closed a single deal. We build the CRM and automation layer that turns that chaos into a repeatable pipeline.
          </p>
        </div>
      </section>

      {/* Pain points */}
      <section className="py-24 px-6 md:px-12 xl:px-20">
        <div className="max-w-[1400px] mx-auto">
          <span className="annotation-label -rotate-2 inline-block mb-4">— the problem</span>
          <h2 className="font-heading font-medium text-3xl md:text-5xl tracking-[-0.01em] mb-14 max-w-2xl">
            If this sounds familiar, you&apos;re not alone.
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {PAIN_POINTS.map((p, i) => (
              <div key={i} className="bg-white border border-black/5 shadow-sm rounded-2xl p-8">
                <div className="w-11 h-11 flex items-center justify-center bg-[#2f6b45]/10 rounded-xl mb-5">
                  <p.icon className="w-5 h-5 text-[#2f6b45]" />
                </div>
                <h3 className="font-heading font-medium text-xl mb-2">{p.title}</h3>
                <p className="text-[#211f1a]/55 font-light text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-24 px-6 md:px-12 xl:px-20 border-t border-black/10">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="annotation-label -rotate-2 inline-block mb-4">— what we build</span>
            <h2 className="font-heading font-medium text-3xl md:text-5xl tracking-[-0.01em] mb-8">
              One system.<br />Every deal, tracked.
            </h2>
            <p className="text-[#211f1a]/55 font-light leading-relaxed mb-10">
              Instead of juggling spreadsheets, text threads, and sticky notes, you get a single custom-built platform that handles the whole pipeline &mdash; from the first lead pulled to the signed purchase agreement.
            </p>
            <Link href="/contact" className="hover-trigger inline-flex items-center gap-2 bg-[#211f1a] text-[#f6f1e7] font-medium text-sm px-7 py-3.5 rounded-full hover:bg-[#2f6b45] transition-all duration-300">
              Book a Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="paper-sheet rounded-2xl p-8 md:p-10">
            <div className="flex items-center gap-3 mb-8">
              <LayoutDashboard className="w-5 h-5 text-[#2f6b45]" />
              <span className="text-[11px] uppercase tracking-widest text-[#211f1a]/50">Included in your system</span>
            </div>
            <ul className="space-y-4">
              {SOLUTIONS.map((s, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#211f1a]/75">
                  <CheckCircle2 className="w-4 h-4 text-[#2f6b45] shrink-0 mt-0.5" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 px-6 md:px-12 xl:px-20 bg-[#211f1a] text-[#f6f1e7] border-t border-black/10 text-center overflow-hidden">
        <div className="max-w-[900px] mx-auto relative z-10">
          <h2 className="font-heading font-medium text-[clamp(2.2rem,6vw,4.5rem)] leading-[1.05] tracking-[-0.01em] mb-8">
            Stop losing deals to <span className="text-script" style={{ color: "#7fc79a" }}>disorganization.</span>
          </h2>
          <p className="text-[#f6f1e7]/60 font-light text-lg mb-10">
            Tell us how your wholesaling process works today, and we&apos;ll show you what a system built specifically for it looks like.
          </p>
          <Link href="/contact" className="hover-trigger inline-flex items-center gap-2 bg-[#f6f1e7] text-[#211f1a] font-medium text-sm px-8 py-4 rounded-full hover:bg-[#2f6b45] hover:text-[#211f1a] transition-all duration-300">
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
