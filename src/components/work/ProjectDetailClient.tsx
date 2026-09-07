"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Code2, Cpu, ShieldCheck, Terminal, Layers, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { DetailedProjectItem } from "@/data/projectsData";
import { PreFooterCTASection } from "@/components/sections/PreFooterCTASection";

export default function ProjectDetailClient({ project }: { project: DetailedProjectItem }) {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div className="bg-[#FAF2F2] text-[#202020] min-h-screen pt-0 pb-0 overflow-hidden font-sans">
      
      {/* HERO SECTION */}
      <section className="relative px-6 sm:px-12 lg:px-20 py-20 lg:py-28 border-b border-white/10 overflow-hidden min-h-[60vh] flex items-center bg-[#0D0D0D] text-white">
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/95 via-[#0D0D0D]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-black/50" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl relative z-10 space-y-6"
        >
          <div className="flex items-center gap-3">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mono text-xs font-bold uppercase tracking-widest rounded-full transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Work
            </Link>
            <span className="px-3.5 py-1.5 bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] font-mono text-xs font-bold uppercase tracking-widest rounded-full">
              {project.badge}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
            {project.title}
          </h1>

          <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed max-w-3xl">
            {project.fullDesc}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/contact"
              className="bg-[#FF5733] text-white hover:bg-white hover:text-black font-extrabold text-xs tracking-widest uppercase px-8 py-4 rounded-full transition-all duration-300 shadow-xl inline-flex items-center gap-2"
            >
              <span>Build a System Like This</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* METRIC & TECH BAR */}
      <section className="py-10 px-6 bg-[#141414] border-b border-white/10 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-4">
            <div className="text-3xl sm:text-4xl font-black text-[#FF5733] font-mono">
              {project.statVal}
            </div>
            <div>
              <div className="font-extrabold text-sm text-white uppercase tracking-wider">{project.statLabel}</div>
              <div className="text-xs text-gray-400 font-light">{project.category} Architecture</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-gray-400 mr-2 font-bold uppercase">STACK:</span>
            {project.techStack.map((tech, idx) => (
              <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 font-mono text-xs font-bold rounded-lg">
                {tech}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* DETAILED PROJECT BREAKDOWN */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-16">
        
        {/* MOCKUP IMAGE CONTAINER */}
        <div className="bg-[#0D0D0D] border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative">
          <div className="p-4 border-b border-white/10 flex items-center justify-between font-mono text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5733]" />
              <span className="text-white font-bold uppercase">{project.title} — System Architecture</span>
            </div>
            <span className="text-[#FF5733] font-bold">LIVE STAGING ARCHITECTURE</span>
          </div>
          <div className="aspect-[16/9] w-full relative overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 3-COLUMN DEEP DIVE: PROBLEM, APPROACH, SOLUTION */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          <div className="bg-white border border-[#F0DCDC] p-8 rounded-3xl space-y-4 shadow-sm">
            <div className="w-10 h-10 rounded-2xl bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] flex items-center justify-center">
              <Terminal className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-extrabold text-[#0D0D0D]">The Challenge</h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-light">
              {project.challenge}
            </p>
          </div>

          <div className="bg-white border border-[#F0DCDC] p-8 rounded-3xl space-y-4 shadow-sm">
            <div className="w-10 h-10 rounded-2xl bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] flex items-center justify-center">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-extrabold text-[#0D0D0D]">Our Approach</h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-light">
              {project.approach}
            </p>
          </div>

          <div className="bg-white border border-[#F0DCDC] p-8 rounded-3xl space-y-4 shadow-sm">
            <div className="w-10 h-10 rounded-2xl bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-extrabold text-[#0D0D0D]">The Solution</h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-light">
              {project.solution}
            </p>
          </div>

        </div>

        {/* DELIVERABLES & EXPECTED OUTCOME */}
        <div className="bg-white border border-[#F0DCDC] rounded-3xl p-8 sm:p-12 grid lg:grid-cols-12 gap-8 items-center shadow-sm">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono text-[#FF5733] font-bold uppercase tracking-widest block">
              SYSTEM DELIVERABLES
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#0D0D0D]">
              What Was Architected & Handed Over
            </h3>
            <ul className="grid sm:grid-cols-2 gap-3">
              {project.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5733] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 bg-[#0D0D0D] text-white p-8 rounded-2xl border border-white/10 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF5733] font-bold uppercase tracking-wider">
              <Layers className="w-4 h-4" /> EXPECTED SYSTEM IMPACT
            </div>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
              {project.expectedOutcome}
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="w-full bg-[#FF5733] hover:bg-white hover:text-black text-white font-extrabold text-xs uppercase tracking-widest py-3.5 px-6 rounded-full transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Request Similar System Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

      </section>

      {/* PRE-FOOTER CTA */}
      <PreFooterCTASection />

    </div>
  );
}
