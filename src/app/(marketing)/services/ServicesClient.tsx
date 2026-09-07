"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2, 
  Code2, 
  Cpu, 
  Database, 
  Layers, 
  Bot, 
  TrendingUp, 
  Cloud,
  ShieldCheck
} from "lucide-react";
import Link from "next/link";
import { SERVICES } from "@/lib/services-data";
import { ProcessTimelineSection } from "@/components/sections/ProcessTimelineSection";
import { PreFooterCTASection } from "@/components/sections/PreFooterCTASection";

const ICON_MAP = {
  Code2,
  Cpu,
  Database,
  Layers,
  Bot,
  TrendingUp,
  Cloud
};

export default function ServicesClient() {
  const [activeSlug, setActiveSlug] = useState(SERVICES[0].slug);

  const activeService = SERVICES.find((s) => s.slug === activeSlug) || SERVICES[0];
  const ActiveIcon = ICON_MAP[activeService.iconName as keyof typeof ICON_MAP] || Code2;

  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div className="bg-[#FAF2F2] text-[#202020] min-h-screen pt-0 pb-0 overflow-hidden font-sans">
      
      {/* HERO SECTION WITH VIDEO BACKGROUND */}
      <section className="relative px-6 sm:px-12 lg:px-20 py-24 lg:py-32 border-b border-white/10 overflow-hidden min-h-[60vh] flex items-center bg-[#0D0D0D] text-white">
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
            <source src="/videos/tech-innovation.mp4" type="video/mp4" />
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
            OUR CORE CAPABILITIES
          </span>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-8">
            Digital Systems Built Around Your Business.
          </h1>

          <p className="text-gray-300 text-base sm:text-xl font-light leading-relaxed mb-10 max-w-3xl">
            We design, build, and deploy custom web platforms, software, CRM, ERP, and automated workflows engineered to move your business forward.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="bg-[#FF5733] text-white hover:bg-white hover:text-black font-extrabold text-xs tracking-widest uppercase px-8 py-4 rounded-full transition-all duration-300 shadow-xl inline-flex items-center gap-2"
            >
              <span>Start Your Project Scope</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* SCOPED PRICING GUARANTEE STRIP */}
      <section className="py-12 px-6 bg-[#141414] border-b border-white/10 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FF5733]/10 border border-[#FF5733]/30 flex items-center justify-center text-[#FF5733] flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="font-extrabold text-lg text-white">Custom Scoped Around Your Business Requirements</div>
              <div className="text-xs text-gray-400 font-light mt-0.5">Every build is tailored to your workflow — zero template bloat or hidden charges.</div>
            </div>
          </div>

          <Link
            href="/contact"
            className="px-6 py-3 bg-[#FF5733] hover:bg-white hover:text-black border border-transparent text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all flex-shrink-0"
          >
            Get a Project Proposal
          </Link>
        </div>
      </section>

      {/* INTERACTIVE 7 CORE SERVICES MATRIX */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-[#FF5733] font-mono text-xs font-bold uppercase tracking-widest block">
            EXPLORE CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0D0D0D] tracking-tight">
            The 7 Core Business Systems We Build
          </h2>
          <p className="text-gray-600 text-sm sm:text-base font-light">
            Select a service below to explore features, technical deliverables, and business benefits.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* LEFT: 7 Core Service Selector Buttons */}
          <div className="w-full lg:w-4/12 flex flex-col gap-3">
            {SERVICES.map((serv) => {
              const Icon = ICON_MAP[serv.iconName as keyof typeof ICON_MAP] || Code2;
              const isActive = activeSlug === serv.slug;
              return (
                <button
                  key={serv.slug}
                  onClick={() => setActiveSlug(serv.slug)}
                  className={`w-full p-4 sm:p-5 rounded-2xl flex items-center justify-between text-left transition-all duration-300 font-bold text-sm sm:text-base ${
                    isActive 
                      ? "bg-[#FF5733] text-white shadow-xl scale-[1.02]" 
                      : "bg-white text-[#0D0D0D] hover:bg-[#FF5733]/10 hover:text-[#FF5733] border border-[#F0DCDC]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    <span>{serv.shortTitle}</span>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${isActive ? "translate-x-1" : ""}`} />
                </button>
              );
            })}
          </div>

          {/* RIGHT: Active Service Details Panel */}
          <div className="w-full lg:w-8/12 bg-white border border-[#F0DCDC] text-[#0D0D0D] rounded-3xl p-8 sm:p-12 relative overflow-hidden flex flex-col justify-between shadow-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.slug}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {/* HEADER */}
                <div className="flex items-center justify-between border-b border-[#F0DCDC] pb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] flex items-center justify-center">
                      <ActiveIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-[#FF5733] font-bold uppercase tracking-wider block">
                        {activeService.category}
                      </span>
                      <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0D0D0D]">
                        {activeService.title}
                      </h2>
                    </div>
                  </div>
                </div>

                {/* TAGLINE & DESCRIPTION */}
                <p className="text-gray-600 text-base leading-relaxed font-light">
                  {activeService.tagline}
                </p>

                {/* BUSINESS PAIN POINTS SOLVED */}
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-[#FF5733] mb-4 font-bold">
                    PROBLEMS THIS SOLVES
                  </h3>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {activeService.painPoints.map((pt, idx) => (
                      <div key={idx} className="bg-[#FAF2F2] p-4 rounded-2xl border border-[#F0DCDC]">
                        <div className="font-bold text-xs text-[#0D0D0D] mb-1">{pt.title}</div>
                        <div className="text-[11px] text-gray-500 leading-normal">{pt.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* DELIVERABLES */}
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-[#FF5733] mb-4 font-bold">
                    CORE INCLUDED DELIVERABLES
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {activeService.included.map((inc, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#FF5733] flex-shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* TECH STACK BADGES */}
                {activeService.techStack && activeService.techStack.length > 0 && (
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-3 font-bold">
                      ENGINEERING STACK:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {activeService.techStack.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-100 border border-gray-200 text-gray-700 font-mono text-xs font-semibold rounded-lg">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            <div className="pt-8 mt-8 border-t border-[#F0DCDC] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Link
                  href={`/services/${activeService.slug}`}
                  className="bg-[#0D0D0D] text-white hover:bg-[#FF5733] font-extrabold text-xs tracking-widest uppercase px-6 py-3.5 rounded-full transition-all duration-300 inline-flex items-center gap-2"
                >
                  <span>Detailed Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href="/contact"
                  className="bg-[#FF5733] text-white hover:bg-black font-extrabold text-xs tracking-widest uppercase px-6 py-3.5 rounded-full transition-all duration-300 inline-flex items-center gap-2 shadow-md"
                >
                  <span>Start Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <span className="text-xs font-mono text-gray-400">
                Custom Scoped • 100% IP Transfer
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* PROCESS SECTION */}
      <ProcessTimelineSection />

      {/* PRE-FOOTER CTA */}
      <PreFooterCTASection />

    </div>
  );
}
