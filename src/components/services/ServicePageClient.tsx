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
  "woocommerce-development": "/images/ecommerce.jpg",
  "wordpress-development": "/images/web_dev.jpg",
  "ai-automation": "/images/ai_automation.jpg",
  "crm-business-automation": "/images/ai_automation.jpg",
  "performance-marketing": "/images/marketing_seo.jpg",
  "social-media-marketing": "/images/marketing_seo.jpg",
  "seo-technical-audits": "/images/marketing_seo.jpg",
  "mobile-app-development": "/images/mobile_app.jpg",
  "ui-ux-design": "/images/ui_ux.jpg",
  "graphic-design-branding": "/images/graphic_branding.jpg",
  "lead-generation-funnels": "/images/lead_gen.jpg",
  "cloud-devops": "/images/cloud_devops.jpg",
  "maintenance-support": "/images/cloud_devops.jpg",
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

  const titleWords = service.title.split(" ");
  const firstText = titleWords.length > 1 ? titleWords.slice(0, -1).join(" ") : service.title;
  const secondText = titleWords.length > 1 ? titleWords.slice(-1).join(" ") : "";

  return (
    <main className="bg-[#0B1220] text-[#F8FAFC] min-h-screen pt-4 pb-32 overflow-hidden relative font-sans">
      <RichBackgroundArt mouseX={mouseX} mouseY={mouseY} />

      {/* ── HERO WITH SERVICE IMAGE CARD ── */}
      <section className="px-4 sm:px-8 md:px-12 xl:px-20 pt-6 sm:pt-10 pb-10 sm:pb-16 max-w-[1400px] mx-auto relative z-10 border-b border-[#1E2E4A]">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* LEFT: TITLE & TAGLINE */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#0F1C33] to-[#091222] border border-[#1E2E4A] border-t-white/10 rounded-full text-xs sm:text-sm font-mono text-[#3B82F6] font-bold uppercase tracking-widest mb-4 sm:mb-6 shadow-md">
              <Icon className="w-4 h-4 text-[#3B82F6]" />
              Services / {service.category} / {service.shortTitle}
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black tracking-tight leading-[1.05] sm:leading-[0.9] mb-4 sm:mb-6 relative">
              <span className="text-[#F8FAFC] inline-block mr-3">{firstText}</span>
              {secondText && (
                <span className="relative inline-block text-[#3B82F6]">
                  {secondText}
                  <DoodleUnderline />
                </span>
              )}
            </h1>

            <p className="text-sm sm:text-lg md:text-xl text-[#94A3B8] max-w-2xl leading-relaxed mb-6 sm:mb-8 font-normal bg-gradient-to-b from-[#0F1C33]/90 via-[#091222]/95 to-[#050A14] p-5 sm:p-7 rounded-2xl border border-[#1E2E4A] border-t-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
              {service.tagline}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#3B82F6] text-white px-7 sm:px-9 py-4 sm:py-4.5 font-black text-xs sm:text-sm tracking-widest uppercase hover:bg-white hover:text-[#0B1220] transition-all rounded-full shadow-[0_10px_30px_rgba(59,130,246,0.35)] text-center">
                Get a {service.shortTitle} Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <span className="text-xs sm:text-sm font-mono font-bold text-[#F8FAFC] bg-gradient-to-r from-[#0F1C33] to-[#091222] px-5 py-3.5 rounded-full border border-[#1E2E4A] border-t-white/10 shadow-sm text-center">
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
            <div className="bg-gradient-to-b from-[#0F1C33] via-[#091222] to-[#050A14] border border-[#1E2E4A] border-t-white/15 rounded-3xl p-6 shadow-[0_25px_60px_rgba(0,0,0,0.75),0_0_30px_rgba(59,130,246,0.15)] relative overflow-hidden group hover:border-[#3B82F6]/70 transition-all duration-500 transform-gpu backdrop-blur-xl">
              
              {/* Image Header Pill */}
              <div className="flex items-center justify-between border-b border-[#1E2E4A] pb-3.5 mb-4 font-mono text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3B82F6] animate-pulse" />
                  <span className="font-extrabold text-[#F8FAFC] tracking-wider uppercase">{service.shortTitle} ARCHITECTURE</span>
                </div>
                <span className="text-xs text-[#3B82F6] font-bold bg-[#040810] border border-[#1E2E4A] px-2.5 py-0.5 rounded-full uppercase">
                  VERIFIED
                </span>
              </div>

              {/* Service Mockup Image */}
              <div className="h-64 w-full rounded-2xl overflow-hidden relative bg-[#040810] mb-4 shadow-inner">
                <img 
                  src={imageSrc} 
                  alt={service.title} 
                  className="w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050A14] via-transparent to-transparent flex items-end justify-between p-4">
                  <div>
                    <div className="text-xs font-mono text-[#3B82F6] font-bold uppercase bg-[#091222] border border-[#1E2E4A] px-3 py-0.5 rounded-full inline-block mb-1 shadow-sm">
                      {service.category}
                    </div>
                    <div className="text-[#F8FAFC] font-extrabold text-lg sm:text-xl leading-tight">{service.title}</div>
                  </div>
                </div>
              </div>

              {/* Quick Tech Badge Summary */}
              {service.techStack && (
                <div className="flex flex-wrap gap-2 pt-2 border-t border-[#1E2E4A]">
                  {service.techStack.map((tech, idx) => (
                    <span key={idx} className="text-[11px] font-mono px-3 py-1 bg-[#040810] border border-[#1E2E4A] border-t-white/10 rounded-full text-[#94A3B8] font-bold">
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#0F1C33] to-[#091222] border border-[#1E2E4A] border-t-white/10 rounded-full text-xs sm:text-sm font-mono font-bold text-[#3B82F6] uppercase tracking-widest mb-4 shadow-md">
            <Zap className="w-4 h-4 text-[#3B82F6]" />
            THE CHALLENGE
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[#F8FAFC]">
            If this sounds familiar, you&apos;re not alone.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {service.painPoints.map((p, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-gradient-to-b from-[#0F1C33] via-[#091222] to-[#050A14] border border-[#1E2E4A] border-t-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.65),0_0_20px_rgba(59,130,246,0.08)] hover:shadow-[0_25px_65px_rgba(0,0,0,0.85),0_0_45px_rgba(59,130,246,0.3)] hover:border-[#3B82F6]/80 rounded-3xl p-8 sm:p-9 transition-all duration-300"
            >
              <h3 className="font-extrabold text-2xl text-[#F8FAFC] mb-3">{p.title}</h3>
              <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed font-normal">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── SOLUTION & INCLUDED FEATURES SECTION ── */}
      <section className="px-6 md:px-12 xl:px-20 py-20 border-t border-[#1E2E4A] relative z-10">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#0F1C33] to-[#091222] border border-[#1E2E4A] border-t-white/10 rounded-full text-xs sm:text-sm font-mono font-bold text-[#3B82F6] uppercase tracking-widest mb-4 shadow-md">
              <Cpu className="w-4 h-4 text-[#3B82F6]" />
              WHAT WE ARCHITECT
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[#F8FAFC] mb-6">
              Built around your business, not a template.
            </h2>
            <p className="text-[#94A3B8] text-sm sm:text-lg leading-relaxed mb-8 bg-gradient-to-b from-[#0F1C33]/90 via-[#091222]/95 to-[#050A14] p-6 sm:p-7 rounded-2xl border border-[#1E2E4A] border-t-white/10 shadow-md">
              Every engagement starts with understanding your specific workflows, conversion funnels, and performance benchmarks — then we build the custom platform around that.
            </p>

            {service.techStack && (
              <div className="flex flex-wrap gap-2 mb-8">
                {service.techStack.map((t) => (
                  <span key={t} className="text-xs font-mono font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#0B1426] to-[#040810] border border-[#1E2E4A] border-t-white/10 text-[#3B82F6] shadow-sm">
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-6 bg-gradient-to-b from-[#0F1C33] via-[#091222] to-[#050A14] rounded-3xl p-8 md:p-10 border border-[#1E2E4A] border-t-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.7)]">
            <div className="flex items-center gap-3 mb-8 border-b border-[#1E2E4A] pb-4">
              <LayoutDashboard className="w-6 h-6 text-[#3B82F6]" />
              <span className="text-xs sm:text-sm font-mono font-extrabold uppercase tracking-widest text-[#3B82F6]">Included Features & Architecture</span>
            </div>
            <ul className="space-y-4">
              {service.included.map((s, i) => (
                <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-[#F8FAFC] font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#3B82F6] shrink-0 mt-0.5" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 md:px-12 xl:px-20 py-28 text-center relative overflow-hidden bg-[#0B1220] border-t border-[#1E2E4A]">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[#F8FAFC] mb-6">
            Ready to initiate your project?
          </h2>
          <p className="text-lg text-[#94A3B8] mb-8 max-w-xl mx-auto font-light">
            Tell us about your requirements and we&apos;ll get back to you with a clear, honest assessment within 24 hours.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-[#3B82F6] text-white px-10 py-5 font-black text-xs tracking-widest uppercase hover:bg-white hover:text-[#0B1220] transition-all duration-300 rounded-full shadow-2xl hover:scale-105 transform-gpu">
            Get Started Now
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </main>
  );
}
