"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion, useMotionValue } from "framer-motion";
import { ArrowRight, CheckCircle2, LayoutDashboard, Sparkles, Shield, Cpu, Zap, type LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";
import type { ServiceDetail } from "@/lib/services-data";
import { DoodleUnderline } from "@/components/immersive/Doodles";
import { RichBackgroundArt } from "@/components/immersive/RichBackgroundArt";

const SERVICE_IMAGES_MAP: Record<string, string> = {
  "custom-web-development": "/images/web_dev.jpg",
  "ecommerce-development": "/images/ecommerce.jpg",
  "shopify-development": "/images/ecommerce.jpg",
  "ui-ux-design": "/images/ui_ux.jpg",
  "custom-crm-development": "/images/ai_automation.jpg",
  "web-application-development": "/images/web_app.jpg",
};

export default function ServicePageClient({ service }: { service: ServiceDetail }) {
  const Icon = (Icons as unknown as Record<string, LucideIcon>)[service.iconName] ?? Icons.Sparkles;
  const imageSrc = SERVICE_IMAGES_MAP[service.slug] || "/images/web_dev.jpg";

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
    <main className="bg-[#F0EDE6] text-[#1C1917] min-h-screen pt-4 pb-32 overflow-hidden relative font-sans">
      <RichBackgroundArt mouseX={mouseX} mouseY={mouseY} />

      {/* ── HERO WITH SERVICE IMAGE CARD ── */}
      <section className="px-6 md:px-12 xl:px-20 pt-10 pb-16 max-w-[1400px] mx-auto relative z-10 border-b border-[#D6D1C8]">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: TITLE & TAGLINE */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#0F52BA]/30 rounded-full text-xs font-mono text-[#0F52BA] font-bold uppercase tracking-widest mb-6 shadow-sm">
              <Icon className="w-4 h-4 text-[#0F52BA]" />
              Services / {service.category} / {service.shortTitle}
            </div>

            <h1 className="text-[clamp(3.2rem,7vw,6rem)] font-black tracking-tighter leading-[0.9] text-[#1C1917] mb-6 relative">
              <span className="relative inline-block text-[#1C1917]">
                {service.title}
                <DoodleUnderline />
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[#57534E] max-w-2xl leading-relaxed mb-8 font-normal bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-white/90 shadow-sm">
              {service.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-3 bg-[#0F52BA] text-white px-8 py-4 font-bold text-xs tracking-widest uppercase hover:bg-[#1C1917] transition-all rounded-full shadow-lg hover:scale-[1.02]">
                Get a {service.shortTitle} Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <span className="text-xs font-mono font-bold text-[#0F52BA] bg-white px-4 py-2 rounded-full border border-[#D6D1C8] shadow-sm">
                {service.startingPrice}
              </span>
            </div>
          </motion.div>

          {/* RIGHT: HIGH-RES SERVICE MOCKUP IMAGE CARD */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="bg-white border-2 border-[#D6D1C8] rounded-3xl p-5 shadow-2xl relative overflow-hidden group hover:border-[#0F52BA] transition-all duration-500 transform-gpu backdrop-blur-xl">
              
              {/* Image Header Pill */}
              <div className="flex items-center justify-between border-b border-[#D6D1C8] pb-3 mb-4 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0F52BA] animate-pulse" />
                  <span className="font-bold text-[#1C1917] tracking-wider uppercase">{service.shortTitle} ARCHITECTURE</span>
                </div>
                <span className="text-[10px] text-[#0F52BA] font-bold bg-[#0F52BA]/10 px-2 py-0.5 rounded-full uppercase">
                  VERIFIED
                </span>
              </div>

              {/* Service Mockup Image */}
              <div className="h-64 w-full rounded-2xl overflow-hidden relative bg-[#1C1917] mb-4">
                <img 
                  src={imageSrc} 
                  alt={service.title} 
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-between p-4">
                  <div>
                    <div className="text-[10px] font-mono text-[#0F52BA] font-bold uppercase bg-white/95 px-2.5 py-0.5 rounded-full inline-block mb-1 shadow-sm">
                      {service.category}
                    </div>
                    <div className="text-white font-bold text-base leading-tight">{service.title}</div>
                  </div>
                </div>
              </div>

              {/* Quick Tech Badge Summary */}
              {service.techStack && (
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#D6D1C8]">
                  {service.techStack.map((tech, idx) => (
                    <span key={idx} className="text-[10px] font-mono px-2.5 py-1 bg-[#FAF8F4] border border-[#D6D1C8] rounded-full text-[#57534E]">
                      {tech}
                    </span>
                  ))}
                </div>
              )}

            </div>
          </motion.div>

        </div>
      </section>

      {/* ── PAIN POINTS SECTION ── */}
      <section className="px-6 md:px-12 xl:px-20 py-20 max-w-[1400px] mx-auto relative z-10">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#0F52BA]/30 rounded-full text-[10px] font-mono font-bold text-[#0F52BA] uppercase tracking-widest mb-3 shadow-sm">
            <Zap className="w-3 h-3 text-[#0F52BA]" />
            THE CHALLENGE
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-[#1C1917]">
            If this sounds familiar, you&apos;re not alone.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {service.painPoints.map((p, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white/95 backdrop-blur-md border border-[#D6D1C8] shadow-sm hover:shadow-xl rounded-3xl p-8 transition-all duration-300"
            >
              <h3 className="font-bold text-xl text-[#1C1917] mb-3">{p.title}</h3>
              <p className="text-[#78716C] text-xs leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── SOLUTION & INCLUDED FEATURES SECTION ── */}
      <section className="px-6 md:px-12 xl:px-20 py-20 border-t border-[#D6D1C8] relative z-10">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#0F52BA]/30 rounded-full text-[10px] font-mono font-bold text-[#0F52BA] uppercase tracking-widest mb-3 shadow-sm">
              <Cpu className="w-3 h-3 text-[#0F52BA]" />
              WHAT WE ARCHITECT
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-[#1C1917] mb-6">
              Built around your business, not a template.
            </h2>
            <p className="text-[#57534E] text-base leading-relaxed mb-8 bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white/80">
              Every engagement starts with understanding your specific workflows, conversion funnels, and performance benchmarks — then we build the custom platform around that.
            </p>

            {service.techStack && (
              <div className="flex flex-wrap gap-2 mb-8">
                {service.techStack.map((t) => (
                  <span key={t} className="text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-white border border-[#D6D1C8] text-[#57534E] shadow-sm">
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-6 bg-white/95 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-[#D6D1C8] shadow-lg">
            <div className="flex items-center gap-3 mb-8 border-b border-[#D6D1C8] pb-4">
              <LayoutDashboard className="w-5 h-5 text-[#0F52BA]" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0F52BA]">Included Features & Architecture</span>
            </div>
            <ul className="space-y-4">
              {service.included.map((s, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#1C1917] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#0F52BA] shrink-0 mt-0.5" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 md:px-12 xl:px-20 py-28 text-center relative overflow-hidden bg-[#FAF8F4] border-t border-[#D6D1C8]">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[#1C1917] mb-6">
            Ready to initiate your project?
          </h2>
          <p className="text-lg text-[#78716C] mb-8 max-w-xl mx-auto font-light">
            Tell us about your requirements and we&apos;ll get back to you with a clear, honest assessment within 24 hours.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-[#0F52BA] text-white px-10 py-5 font-black text-xs tracking-widest uppercase hover:bg-[#1C1917] transition-all duration-300 rounded-full shadow-2xl hover:scale-105 transform-gpu">
            Get Started Now
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </main>
  );
}
