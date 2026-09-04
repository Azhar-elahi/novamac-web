"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Award, Users, Globe2, Sparkles, CheckCircle2, Shield, Zap } from "lucide-react";
import Link from "next/link";

export default function AboutClient() {
  return (
    <div className="bg-[#FAF2F2] text-[#202020] min-h-screen pt-0 pb-20 overflow-hidden font-sans">
      
      {/* HERO SECTION WITH VIDEO BACKGROUND */}
      <section className="relative px-6 sm:px-12 lg:px-20 py-24 lg:py-32 border-b border-white/10 overflow-hidden min-h-[70vh] flex items-center bg-[#0D0D0D] text-white">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-90">
            <source src="/videos/sunset-road.mp4" type="video/mp4" />
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
          <span className="px-4 py-1.5 bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] font-mono text-xs font-bold uppercase tracking-widest rounded-full inline-block mb-6">
            ABOUT NOVAMAC SOLUTIONS
          </span>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-8">
            Engineered For High-Stakes Growth Since 2020.
          </h1>

          <p className="text-gray-300 text-base sm:text-xl font-light leading-relaxed mb-10 max-w-2xl">
            NovaMac Solutions is an award-winning web engineering, UI/UX design, and AI software studio. We partner with ambitious startups, scale-ups, and enterprises across the U.S., U.K., Canada, Europe, and Australia to build digital products that drive measurable ROI.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="bg-[#FF5733] text-white hover:bg-white hover:text-black font-extrabold text-xs tracking-widest uppercase px-8 py-4 rounded-full transition-all duration-300 shadow-xl inline-flex items-center gap-2"
            >
              <span>Schedule Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/work"
              className="bg-white/10 text-white hover:bg-white/20 font-extrabold text-xs tracking-widest uppercase px-8 py-4 rounded-full transition-all duration-300"
            >
              Explore Portfolio
            </Link>
          </div>
        </motion.div>
      </section>

      {/* STATS COUNTER ROW */}
      <section className="py-20 px-6 bg-[#141414] border-b border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-5xl lg:text-7xl font-black text-white mb-2">150+</div>
            <div className="text-xs font-mono uppercase tracking-widest text-gray-400">Projects Delivered</div>
          </div>
          <div>
            <div className="text-5xl lg:text-7xl font-black text-[#FF5733] mb-2">98%</div>
            <div className="text-xs font-mono uppercase tracking-widest text-gray-400">Client Retention</div>
          </div>
          <div>
            <div className="text-5xl lg:text-7xl font-black text-white mb-2">&lt;50ms</div>
            <div className="text-xs font-mono uppercase tracking-widest text-gray-400">Edge Latency</div>
          </div>
          <div>
            <div className="text-5xl lg:text-7xl font-black text-[#FF5733] mb-2">100%</div>
            <div className="text-xs font-mono uppercase tracking-widest text-gray-400">Code Ownership</div>
          </div>
        </div>
      </section>

      {/* OUR PHILOSOPHY & VALUES */}
      <section className="py-24 px-6 bg-[#FAF2F2] text-[#0D0D0D]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[#FF5733] font-mono text-xs font-bold uppercase tracking-widest mb-3 block">
              OUR CORE PHILOSOPHY
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0D0D0D] tracking-tight leading-tight">
              The NovaMac Engineering Standards
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-[#F0DCDC] shadow-sm">
              <Sparkles className="w-8 h-8 text-[#FF5733] mb-4" />
              <h3 className="text-2xl font-extrabold text-[#0D0D0D] mb-3">Strategic UX & Design</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-light">
                We combine editorial aesthetics, custom Figma component systems, and clean interfaces designed for clarity and usability.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#F0DCDC] shadow-sm">
              <Zap className="w-8 h-8 text-[#FF5733] mb-4" />
              <h3 className="text-2xl font-extrabold text-[#0D0D0D] mb-3">Fast & Scalable Code</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-light">
                Hand-coded Next.js 15 & React 19 architecture engineered for high speed, stability, and clean maintainability.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#F0DCDC] shadow-sm">
              <Shield className="w-8 h-8 text-[#FF5733] mb-4" />
              <h3 className="text-2xl font-extrabold text-[#0D0D0D] mb-3">Full Code Ownership</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-light">
                100% full source code ownership on delivery with complete Git repository access and zero ongoing platform lock-in.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 px-6 bg-[#FF5733] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight mb-6">
            Ready to Build Something Extraordinary?
          </h2>
          <p className="text-white/90 text-base sm:text-lg mb-8 max-w-xl mx-auto font-light">
            Book a free strategy session with our engineering team and get a detailed project scope within 24 hours.
          </p>
          <Link
            href="/contact"
            className="bg-black text-white hover:bg-white hover:text-black font-extrabold text-xs tracking-widest uppercase px-10 py-5 rounded-full transition-all duration-300 shadow-2xl inline-flex items-center gap-2"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}

