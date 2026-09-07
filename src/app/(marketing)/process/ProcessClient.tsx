"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Compass, Palette, Code2, Rocket, TrendingUp, ArrowRight, ShieldCheck, Clock, Terminal, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { PreFooterCTASection } from "@/components/sections/PreFooterCTASection";

const PROCESS_STEPS_DETAILED = [
  {
    step: "01",
    title: "Discover & Research",
    icon: Search,
    phase: "PHASE 01 // DISCOVERY",
    summary: "Deep dive into your business goals, target audience, technical requirements, and current bottlenecks.",
    deliverables: ["Technical Requirements Doc", "System Architecture Outline", "Project Roadmap"],
  },
  {
    step: "02",
    title: "Plan & Scope",
    icon: Compass,
    phase: "PHASE 02 // PLANNING",
    summary: "Defining exact deliverables, milestones, tech stack selection, and fixed project timeline.",
    deliverables: ["Wireframes & UX Flow", "Database Schema Design", "Milestone Schedule"],
  },
  {
    step: "03",
    title: "UI/UX & Systems Architecture",
    icon: Palette,
    phase: "PHASE 03 // DESIGN",
    summary: "Crafting modern, high-converting interfaces and robust backend system blueprints.",
    deliverables: ["Figma UI Prototypes", "Component Design System", "API & Integration Specs"],
  },
  {
    step: "04",
    title: "Build & Integrate",
    icon: Code2,
    phase: "PHASE 04 // DEVELOPMENT",
    summary: "Custom Next.js frontend engineering, API development, CRM/ERP integration, and AI workflow buildout.",
    deliverables: ["Clean Production Code", "Staging URL Access", "Automated Testing"],
  },
  {
    step: "05",
    title: "QA & Deployment",
    icon: Rocket,
    phase: "PHASE 05 // LAUNCH",
    summary: "Rigorous cross-browser testing, speed optimization, security audits, and production domain launch.",
    deliverables: ["Sub-second Speed Tuning", "Security Audit", "Production Live Launch"],
  },
  {
    step: "06",
    title: "Handoff & Growth",
    icon: TrendingUp,
    phase: "PHASE 06 // OPTIMIZATION",
    summary: "Full repository & IP transfer to your team, comprehensive documentation, and post-launch support.",
    deliverables: ["100% Code Ownership", "Admin Documentation", "Ongoing Maintenance Options"],
  },
];

export default function ProcessClient() {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div className="bg-[#FAF2F2] text-[#202020] min-h-screen pt-0 pb-0 overflow-hidden font-sans">
      
      {/* HERO SECTION WITH VIDEO BACKGROUND */}
      <section className="relative px-6 sm:px-12 lg:px-20 py-24 lg:py-32 border-b border-white/10 overflow-hidden min-h-[65vh] flex items-center bg-[#0D0D0D] text-white">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover opacity-90 pointer-events-none transform-gpu"
          >
            <source src="/videos/sunset-road.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/90 via-[#0D0D0D]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-black/40" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl relative z-10"
        >
          <span className="px-4 py-1.5 bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] font-mono text-xs font-bold uppercase tracking-widest rounded-full inline-flex items-center gap-2 mb-6">
            <Terminal className="w-3.5 h-3.5" /> HOW WE WORK
          </span>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-8">
            Our 6-Step Engineering & Delivery Methodology.
          </h1>

          <p className="text-gray-300 text-base sm:text-xl font-light leading-relaxed mb-10 max-w-3xl">
            A structured, transparent engineering process designed to take your web platform, custom software, or AI automation from idea to production on time and on budget.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="bg-[#FF5733] text-white hover:bg-white hover:text-black font-extrabold text-xs tracking-widest uppercase px-8 py-4 rounded-full transition-all duration-300 shadow-xl inline-flex items-center gap-2"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="bg-white/10 text-white hover:bg-white/20 font-extrabold text-xs tracking-widest uppercase px-8 py-4 rounded-full transition-all duration-300"
            >
              View Services
            </Link>
          </div>
        </motion.div>
      </section>

      {/* PROCESS GUARANTEES STRIP */}
      <section className="py-12 px-6 bg-[#141414] border-b border-white/10 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="flex items-center justify-center gap-3 p-4">
            <ShieldCheck className="w-6 h-6 text-[#FF5733]" />
            <div className="text-left">
              <div className="font-bold text-sm text-white uppercase tracking-wider">Fixed Milestones</div>
              <div className="text-xs text-gray-400 font-light">No unexpected charges or scope creep</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 p-4">
            <Clock className="w-6 h-6 text-[#FF5733]" />
            <div className="text-left">
              <div className="font-bold text-sm text-white uppercase tracking-wider">Live Staging Access</div>
              <div className="text-xs text-gray-400 font-light">Test and preview progress in real time</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 p-4">
            <CheckCircle2 className="w-6 h-6 text-[#FF5733]" />
            <div className="text-left">
              <div className="font-bold text-sm text-white uppercase tracking-wider">100% IP Transfer</div>
              <div className="text-xs text-gray-400 font-light">Full source code & asset ownership</div>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED 6-STEP PROCESS GRID */}
      <section className="py-24 px-6 bg-[#FAF2F2] text-[#0D0D0D]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-[#FF5733] font-mono text-xs font-bold uppercase tracking-widest block">
              STEP-BY-STEP ROADMAP
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0D0D0D] tracking-tight">
              From Concept to High-Growth Production
            </h2>
            <p className="text-gray-600 text-sm sm:text-base font-light">
              Clear deliverables and transparent progress at every single milestone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROCESS_STEPS_DETAILED.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="bg-white border border-[#F0DCDC] hover:border-[#FF5733] rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-3xl font-black text-[#FF5733]">
                        {item.step}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-[#FF5733]" />
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] font-mono text-gray-400 font-bold uppercase tracking-wider mb-2">
                        {item.phase}
                      </div>
                      <h3 className="text-2xl font-extrabold text-[#0D0D0D] group-hover:text-[#FF5733] transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-light">
                      {item.summary}
                    </p>

                    <div className="pt-4 border-t border-[#F0DCDC]">
                      <div className="text-[11px] font-mono text-[#FF5733] font-bold uppercase tracking-wider mb-2">
                        KEY DELIVERABLES:
                      </div>
                      <ul className="space-y-1.5">
                        {item.deliverables.map((deliv, i) => (
                          <li key={i} className="text-xs text-gray-700 font-medium flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5733]" />
                            {deliv}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRE-FOOTER CTA */}
      <PreFooterCTASection />

    </div>
  );
}
