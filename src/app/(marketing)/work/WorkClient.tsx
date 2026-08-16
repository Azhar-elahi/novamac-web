"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { ArrowRight, Sparkles, Filter } from "lucide-react";
import Link from "next/link";
import { Project } from "@prisma/client";
import { DoodleUnderline } from "@/components/immersive/Doodles";
import { RichBackgroundArt } from "@/components/immersive/RichBackgroundArt";

const NDA_PROJECTS = [
  { title: "Global FinTech SaaS Platform", category: "Web Apps", desc: "High-frequency dashboard & trading platform architecture built under strict NDA.", img: "/images/web_app.webp" },
  { title: "Automated Logistics CRM", category: "AI & Automation", desc: "Autonomous AI dispatching system managing 500+ daily transport pipelines.", img: "/images/ai_automation.webp" },
  { title: "Luxury Retail E-Commerce", category: "E-Commerce", desc: "Headless Shopify storefront with custom 3D web configurator.", img: "/images/ecommerce.webp" },
  { title: "HealthTech Patient Portal", category: "Web Apps", desc: "HIPAA compliant web application with real-time biometric telemetry.", img: "/images/web_dev.webp" },
  { title: "Enterprise Design System", category: "Design", desc: "Comprehensive UI/UX design system for Fortune 500 tech enterprise.", img: "/images/ui_ux.webp" },
  { title: "Real Estate Wholesale Hub", category: "Web Dev", desc: "Lead generation & contract pipeline automation web platform.", img: "/images/web_dev.webp" },
];

export default function WorkClient({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState("All");
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
            SELECTED CASE STUDIES
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black tracking-tight leading-[1.05] sm:leading-[0.9] text-[#F8FAFC] mb-4 sm:mb-6 relative">
            Work That Speaks<br />
            <span className="relative inline-block text-[#3B82F6]">
              For Itself.
              <DoodleUnderline />
            </span>
          </h1>

          <p className="text-sm sm:text-lg md:text-xl text-[#94A3B8] max-w-2xl leading-relaxed mb-6 sm:mb-8 font-normal bg-gradient-to-b from-[#0F1C33]/90 via-[#091222]/95 to-[#050A14] p-5 sm:p-7 rounded-2xl border border-[#1E2E4A] border-t-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
            A showcase of web applications, platforms, custom tools, and design systems we have engineered for ambitious brands worldwide.
          </p>
        </motion.div>
      </section>

      {/* ── PROJECTS GRID ── */}
      <section className="px-6 md:px-12 xl:px-20 py-20 max-w-[1400px] mx-auto relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {NDA_PROJECTS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -6 }}
            >
              <div className="bg-gradient-to-b from-[#0F1C33] via-[#091222] to-[#050A14] border border-[#1E2E4A] border-t-white/15 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.65),0_0_20px_rgba(59,130,246,0.08)] hover:shadow-[0_25px_65px_rgba(0,0,0,0.85),0_0_45px_rgba(59,130,246,0.3)] hover:border-[#3B82F6]/80 transition-all duration-300 group h-full flex flex-col justify-between transform-gpu">
                <div className="h-52 w-full relative overflow-hidden bg-[#040810]">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#091222] via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#091222]/90 border border-[#3B82F6]/40 text-[#3B82F6] font-mono text-xs uppercase tracking-widest rounded-full font-bold shadow-sm">
                      {p.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-extrabold text-2xl text-[#F8FAFC] mb-2.5 group-hover:text-[#3B82F6] transition-colors">{p.title}</h3>
                    <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed mb-6 font-normal">{p.desc}</p>
                  </div>
                  <Link 
                    href="/contact"
                    className="inline-flex items-center justify-between w-full px-6 py-3.5 bg-gradient-to-r from-[#0B1426] to-[#040810] border border-[#1E2E4A] border-t-white/10 text-[#F8FAFC] font-extrabold text-xs sm:text-sm tracking-widest uppercase rounded-full group-hover:bg-[#3B82F6] group-hover:text-white transition-all duration-300 shadow-md"
                  >
                    <span>Request NDA Demo</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
