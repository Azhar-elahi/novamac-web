"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import { ArrowRight, CheckCircle2, Award, Users, Globe2, Sparkles, Shield, Cpu } from "lucide-react";
import Link from "next/link";
import { DoodleUnderline } from "@/components/immersive/Doodles";
import { RichBackgroundArt } from "@/components/immersive/RichBackgroundArt";

export default function AboutClient() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth) - 0.5);
      mouseY.set((e.clientY / window.innerHeight) - 0.5);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="bg-[#0B1220] text-[#F8FAFC] min-h-screen pt-4 pb-32 overflow-hidden relative font-sans">
      <RichBackgroundArt mouseX={mouseX} mouseY={mouseY} />

      {/* ── HERO ── */}
      <section className="px-4 sm:px-8 md:px-12 xl:px-20 pt-6 sm:pt-10 pb-10 sm:pb-16 max-w-[1400px] mx-auto relative z-10 border-b border-[#1E2E4A]">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#0F1C33] to-[#091222] border border-[#1E2E4A] border-t-white/10 rounded-full text-xs sm:text-sm font-mono text-[#3B82F6] font-bold uppercase tracking-widest mb-4 sm:mb-6 shadow-md">
            <Sparkles className="w-4 h-4 text-[#3B82F6]" />
            COMPANY MANIFESTO
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black tracking-tight leading-[1.05] sm:leading-[0.9] text-[#F8FAFC] mb-6 sm:mb-8 relative">
            Engineered<br />
            <span className="relative inline-block text-[#3B82F6]">
              Without Compromise.
              <DoodleUnderline />
            </span>
          </h1>
          
          <p className="text-sm sm:text-lg md:text-xl text-[#94A3B8] max-w-2xl leading-relaxed mb-6 sm:mb-10 font-normal bg-gradient-to-b from-[#0F1C33]/90 via-[#091222]/95 to-[#050A14] p-5 sm:p-7 rounded-2xl border border-[#1E2E4A] border-t-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
            NovaMac Solutions is a remote-first collective of senior architects, designers, and AI engineers building high-stakes web applications, custom CRMs, and scalable digital products.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <Link href="/work" className="inline-flex items-center justify-center gap-3 bg-[#3B82F6] text-white px-7 sm:px-9 py-4 sm:py-4.5 font-black text-xs sm:text-sm tracking-widest uppercase hover:bg-white hover:text-[#0B1220] transition-all rounded-full shadow-[0_10px_30px_rgba(59,130,246,0.35)] text-center">
              Explore Our Work <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#0F1C33] to-[#091222] text-[#F8FAFC] border border-[#1E2E4A] border-t-white/10 px-7 sm:px-9 py-4 sm:py-4.5 font-bold text-xs sm:text-sm tracking-widest uppercase hover:border-[#3B82F6] hover:text-[#3B82F6] transition-all rounded-full shadow-sm text-center">
              Contact Team
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="px-6 md:px-12 xl:px-20 py-12 max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-gradient-to-r from-[#0F1C33] via-[#091222] to-[#0F1C33] p-8 sm:p-10 rounded-3xl border border-[#1E2E4A] border-t-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.65)]">
          {[
            { val: "150+", label: "Projects Delivered", desc: "Global Client Portfolio" },
            { val: "98%", label: "Client Satisfaction", desc: "Verified 5-Star Reviews" },
            { val: "50+", label: "Global Brands", desc: "US, EU & Worldwide" },
            { val: "5 Yrs", label: "Studio Experience", desc: "Founded in 2020" },
          ].map((stat, i) => (
            <div key={i} className="border-l-4 border-[#3B82F6] pl-5 sm:pl-7">
              <div className="text-3xl sm:text-5xl font-black text-[#F8FAFC]">{stat.val}</div>
              <div className="text-xs sm:text-sm font-mono font-bold text-[#3B82F6] uppercase mt-1">{stat.label}</div>
              <div className="text-xs text-[#94A3B8] mt-0.5">{stat.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="px-6 md:px-12 xl:px-20 py-20 max-w-[1400px] mx-auto relative z-10">
        <div className="mb-12">
          <div className="text-[#3B82F6] font-mono text-xs sm:text-sm tracking-widest mb-2 font-bold uppercase">OUR PHILOSOPHY</div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-[#F8FAFC]">Driven by Engineering Rigor.</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Cpu, title: "Zero Templates", desc: "Every project is custom architected in Next.js/React from line 1 of code." },
            { icon: Shield, title: "Zero-Trust Security", desc: "Enterprise data isolation, biometrics, and SOC2 compliant architecture." },
            { icon: Globe2, title: "Global Edge Scale", desc: "Sub-50ms latency CDN deployment across 300+ global edge locations." },
            { icon: Users, title: "Senior Talent Only", desc: "Direct collaboration with senior engineers — no junior middle managers." },
          ].map((v, i) => (
            <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-gradient-to-b from-[#0F1C33] via-[#091222] to-[#050A14] p-8 sm:p-9 rounded-3xl border border-[#1E2E4A] border-t-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.65),0_0_20px_rgba(59,130,246,0.08)] hover:shadow-[0_25px_65px_rgba(0,0,0,0.85),0_0_45px_rgba(59,130,246,0.3)] hover:border-[#3B82F6]/80 transition-all">
              <v.icon className="w-9 h-9 text-[#3B82F6] mb-5" />
              <h3 className="text-xl font-extrabold text-[#F8FAFC] mb-2.5">{v.title}</h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed font-normal">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
