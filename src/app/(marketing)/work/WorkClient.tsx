"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { ArrowRight, Sparkles, Filter } from "lucide-react";
import Link from "next/link";
import { Project } from "@prisma/client";
import { DoodleUnderline } from "@/components/immersive/Doodles";
import { RichBackgroundArt } from "@/components/immersive/RichBackgroundArt";

const NDA_PROJECTS = [
  { title: "Global FinTech SaaS Platform", category: "Web Apps", desc: "High-frequency dashboard & trading platform architecture built under strict NDA.", img: "/images/web_app.jpg" },
  { title: "Automated Logistics CRM", category: "AI & Automation", desc: "Autonomous AI dispatching system managing 500+ daily transport pipelines.", img: "/images/ai_automation.jpg" },
  { title: "Luxury Retail E-Commerce", category: "E-Commerce", desc: "Headless Shopify storefront with custom 3D web configurator.", img: "/images/ecommerce.jpg" },
  { title: "HealthTech Patient Portal", category: "Web Apps", desc: "HIPAA compliant web application with real-time biometric telemetry.", img: "/images/web_dev.jpg" },
  { title: "Enterprise Design System", category: "Design", desc: "Comprehensive UI/UX design system for Fortune 500 tech enterprise.", img: "/images/ui_ux.jpg" },
  { title: "Real Estate Wholesale Hub", category: "Web Dev", desc: "Lead generation & contract pipeline automation web platform.", img: "/images/web_dev.jpg" },
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
            SELECTED CASE STUDIES
          </div>

          <h1 className="text-[clamp(3.5rem,7.5vw,6.5rem)] font-black tracking-tighter leading-[0.9] text-[#1C1917] mb-6 relative">
            Work That Speaks<br />
            <span className="relative inline-block text-[#0F52BA]">
              For Itself.
              <DoodleUnderline />
            </span>
          </h1>

          <p className="text-lg md:text-xl text-[#57534E] max-w-2xl leading-relaxed mb-8 font-normal bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-white/90 shadow-sm">
            Building digital platforms, web applications, and AI systems for ambitious brands worldwide.
          </p>
        </motion.div>
      </section>

      {/* ── PROJECTS GRID ── */}
      <section className="px-6 md:px-12 xl:px-20 py-20 max-w-[1400px] mx-auto relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NDA_PROJECTS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -6 }}
            >
              <div className="bg-white/95 backdrop-blur-md border border-[#D6D1C8] rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 group h-full flex flex-col justify-between transform-gpu">
                <div className="h-52 w-full relative overflow-hidden bg-[#1C1917]">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/95 backdrop-blur-md text-[#0F52BA] font-mono text-[10px] uppercase tracking-widest rounded-full font-bold shadow-sm">
                      {p.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-xl text-[#1C1917] mb-2 group-hover:text-[#0F52BA] transition-colors">{p.title}</h3>
                    <p className="text-[#78716C] text-xs leading-relaxed mb-6">{p.desc}</p>
                  </div>
                  <Link 
                    href="/contact"
                    className="inline-flex items-center justify-between w-full px-6 py-3 bg-[#FAF8F4] border border-[#D6D1C8] text-[#1C1917] font-bold text-xs tracking-widest uppercase rounded-full group-hover:bg-[#1C1917] group-hover:text-white transition-all duration-300"
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
