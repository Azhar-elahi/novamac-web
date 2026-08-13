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
    <div className="bg-[#F0EDE6] text-[#1C1917] min-h-screen pt-4 pb-32 overflow-hidden relative font-sans">
      <RichBackgroundArt mouseX={mouseX} mouseY={mouseY} />

      {/* ── HERO ── */}
      <section className="px-6 md:px-12 xl:px-20 pt-10 pb-16 max-w-[1400px] mx-auto relative z-10 border-b border-[#D6D1C8]">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#0F52BA]/30 rounded-full text-xs font-mono text-[#0F52BA] font-bold uppercase tracking-widest mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#0F52BA]" />
            COMPANY MANIFESTO
          </div>
          
          <h1 className="text-[clamp(3.5rem,7.5vw,6.5rem)] font-black tracking-tighter leading-[0.9] text-[#1C1917] mb-8 relative">
            Engineered<br />
            <span className="relative inline-block text-[#0F52BA]">
              Without Compromise.
              <DoodleUnderline />
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-[#57534E] max-w-2xl leading-relaxed mb-10 font-normal bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-white/90 shadow-sm">
            NovaMac Solutions is a remote-first collective of senior architects, designers, and AI engineers building high-stakes web applications, custom CRMs, and scalable digital products.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/work" className="inline-flex items-center gap-3 bg-[#1C1917] text-white px-8 py-4 font-bold text-xs tracking-widest uppercase hover:bg-[#0F52BA] transition-all rounded-full shadow-lg hover:scale-[1.02]">
              Explore Our Work <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-3 bg-white text-[#1C1917] border border-[#D6D1C8] px-8 py-4 font-bold text-xs tracking-widest uppercase hover:border-[#0F52BA] transition-all rounded-full shadow-sm">
              Contact Team
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="px-6 md:px-12 xl:px-20 py-12 max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white/90 backdrop-blur-xl p-8 rounded-3xl border border-[#D6D1C8] shadow-sm">
          {[
            { val: "150+", label: "Projects Delivered", desc: "Global Client Portfolio" },
            { val: "98%", label: "Client Satisfaction", desc: "Verified 5-Star Reviews" },
            { val: "50+", label: "Global Brands", desc: "US, EU & Worldwide" },
            { val: "5 Yrs", label: "Studio Experience", desc: "Founded in 2020" },
          ].map((stat, i) => (
            <div key={i} className="border-l-3 border-[#0F52BA] pl-5">
              <div className="text-3xl md:text-4xl font-black text-[#1C1917]">{stat.val}</div>
              <div className="text-xs font-mono font-bold text-[#0F52BA] uppercase mt-1">{stat.label}</div>
              <div className="text-xs text-[#78716C] mt-0.5">{stat.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="px-6 md:px-12 xl:px-20 py-20 max-w-[1400px] mx-auto relative z-10">
        <div className="mb-12">
          <div className="text-[#0F52BA] font-mono text-xs tracking-widest mb-2 font-bold uppercase">OUR PHILOSOPHY</div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-[#1C1917]">Driven by Engineering Rigor.</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Cpu, title: "Zero Templates", desc: "Every project is custom architected in Next.js/React from line 1 of code." },
            { icon: Shield, title: "Zero-Trust Security", desc: "Enterprise data isolation, biometrics, and SOC2 compliant architecture." },
            { icon: Globe2, title: "Global Edge Scale", desc: "Sub-50ms latency CDN deployment across 300+ global edge locations." },
            { icon: Users, title: "Senior Talent Only", desc: "Direct collaboration with senior engineers — no junior middle managers." },
          ].map((v, i) => (
            <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white/95 backdrop-blur-md p-8 rounded-3xl border border-[#D6D1C8] shadow-sm">
              <v.icon className="w-8 h-8 text-[#0F52BA] mb-4" />
              <h3 className="text-lg font-bold text-[#1C1917] mb-2">{v.title}</h3>
              <p className="text-xs text-[#78716C] leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
