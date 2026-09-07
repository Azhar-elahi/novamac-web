"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Shield, Zap, CheckCircle2, Cpu, Layers, Lock, Terminal } from "lucide-react";
import Link from "next/link";
import { PreFooterCTASection } from "@/components/sections/PreFooterCTASection";

export default function AboutClient() {
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
          <span className="px-4 py-1.5 bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] font-mono text-xs font-bold uppercase tracking-widest rounded-full inline-block mb-6">
            ABOUT NOVAMAC
          </span>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-8">
            A digital engineering studio helping businesses build better digital experiences, software and automated systems.
          </h1>

          <p className="text-gray-300 text-base sm:text-xl font-light leading-relaxed mb-10 max-w-3xl">
            We partner directly with founders and business teams to design and build custom web platforms, tailored operational systems, and AI workflows engineered around real operational goals.
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
              Explore Capabilities
            </Link>
          </div>
        </motion.div>
      </section>

      {/* CAPABILITY PROOF ROW */}
      <section className="py-16 px-6 bg-[#141414] border-b border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-2xl lg:text-3xl font-black text-white mb-2">CUSTOM CODE</div>
            <div className="text-xs font-mono uppercase tracking-widest text-gray-400">Next.js & Cloud Arch</div>
          </div>
          <div>
            <div className="text-2xl lg:text-3xl font-black text-[#FF5733] mb-2">100% OWNERSHIP</div>
            <div className="text-xs font-mono uppercase tracking-widest text-gray-400">Full Code & IP Transfer</div>
          </div>
          <div>
            <div className="text-2xl lg:text-3xl font-black text-white mb-2">DIRECT BUILD</div>
            <div className="text-xs font-mono uppercase tracking-widest text-gray-400">Zero Middlemen</div>
          </div>
          <div>
            <div className="text-2xl lg:text-3xl font-black text-[#FF5733] mb-2">GLOBAL STANDARDS</div>
            <div className="text-xs font-mono uppercase tracking-widest text-gray-400">Serving Businesses Worldwide</div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK & PHILOSOPHY */}
      <section className="py-24 px-6 bg-[#FAF2F2] text-[#0D0D0D]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-3xl">
            <span className="text-[#FF5733] font-mono text-xs font-bold uppercase tracking-widest mb-3 block">
              OUR APPROACH
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0D0D0D] tracking-tight leading-tight">
              Practical Technology. Zero Agency Bloat.
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-4 font-light leading-relaxed">
              Most software projects fail due to bloated timelines, layers of account managers, and cookie-cutter frameworks. We cut out the fluff and deliver clean, scalable engineering tailored to your business rules.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-[#F0DCDC] shadow-sm hover:shadow-md transition-shadow">
              <Code2 className="w-8 h-8 text-[#FF5733] mb-4" />
              <h3 className="text-2xl font-extrabold text-[#0D0D0D] mb-3">What We Build</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-light">
                High-speed websites, tailored CRM/ERP systems, internal operational tools, AI process automations, and custom SaaS software platforms.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#F0DCDC] shadow-sm hover:shadow-md transition-shadow">
              <Zap className="w-8 h-8 text-[#FF5733] mb-4" />
              <h3 className="text-2xl font-extrabold text-[#0D0D0D] mb-3">How We Work</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-light">
                Direct engineering collaboration, transparent milestones, constant code access, and clear technical communication without sales fluff.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#F0DCDC] shadow-sm hover:shadow-md transition-shadow">
              <Shield className="w-8 h-8 text-[#FF5733] mb-4" />
              <h3 className="text-2xl font-extrabold text-[#0D0D0D] mb-3">Our Focus</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-light">
                System scalability, clean UX, long-term maintainability, and tangible business value that drives growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE ENGINEERING PRINCIPLES */}
      <section className="py-24 px-6 bg-[#141414] text-white border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-[#FF5733] font-mono text-xs font-bold uppercase tracking-widest block">
              ENGINEERING PRINCIPLES
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Built on Modern Standards & Transparency
            </h2>
            <p className="text-gray-400 text-sm sm:text-base font-light">
              Four non-negotiable principles that guide every system we design, develop, and deploy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#1C1C1C] border border-white/10 p-8 rounded-3xl space-y-4">
              <Cpu className="w-8 h-8 text-[#FF5733]" />
              <h3 className="text-xl font-bold text-white">Custom Next.js Stack</h3>
              <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
                Zero bloated themes or generic page builders. Modern Next.js, React, TypeScript, and serverless backend setups.
              </p>
            </div>

            <div className="bg-[#1C1C1C] border border-white/10 p-8 rounded-3xl space-y-4">
              <Lock className="w-8 h-8 text-[#FF5733]" />
              <h3 className="text-xl font-bold text-white">Full IP Transfer</h3>
              <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
                100% client code ownership. Complete repository rights handed over upon project completion.
              </p>
            </div>

            <div className="bg-[#1C1C1C] border border-white/10 p-8 rounded-3xl space-y-4">
              <Layers className="w-8 h-8 text-[#FF5733]" />
              <h3 className="text-xl font-bold text-white">Global Tech Standards</h3>
              <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
                Responsive layouts, accessibility considerations, pre-deployment security testing, and structured code handoffs.
              </p>
            </div>

            <div className="bg-[#1C1C1C] border border-white/10 p-8 rounded-3xl space-y-4">
              <CheckCircle2 className="w-8 h-8 text-[#FF5733]" />
              <h3 className="text-xl font-bold text-white">Direct Engineer Access</h3>
              <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
                Work directly with senior engineers and UI designers building your product. Clear communication with zero middleman errors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LINK BANNER TO DEDICATED PROCESS PAGE */}
      <section className="py-16 px-6 bg-[#FAF2F2] border-t border-[#F0DCDC] text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-[#FF5733] font-mono text-xs font-bold uppercase tracking-widest block">
            HOW WE DELIVER
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0D0D0D]">
            Want to see how we build & deploy projects?
          </h2>
          <p className="text-gray-600 text-sm max-w-xl mx-auto font-light">
            Check out our structured 6-step engineering methodology with clear deliverables at every milestone.
          </p>
          <div className="pt-2">
            <Link
              href="/process"
              className="inline-flex items-center gap-2 bg-[#0D0D0D] hover:bg-[#FF5733] text-white font-extrabold text-xs tracking-widest uppercase px-8 py-4 rounded-full transition-all duration-300 shadow-md"
            >
              <span>Explore Our 6-Step Process</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PRE-FOOTER CTA */}
      <PreFooterCTASection />

    </div>
  );
}

