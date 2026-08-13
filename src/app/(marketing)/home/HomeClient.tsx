"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap, CheckCircle2, Star, Shield, Activity, Cpu, Server, Sparkles, ChevronLeft, ChevronRight, Layers, ArrowUpRight } from "lucide-react";
import { DoodleUnderline } from "@/components/immersive/Doodles";
import { RichBackgroundArt } from "@/components/immersive/RichBackgroundArt";
import { TechMarqueeBelt } from "@/components/ui/TechMarqueeBelt";
import { GoogleReviewsSection } from "@/components/reviews/GoogleReviewsSection";
import { useUIStore } from "@/store/useUIStore";

const SERVICE_SLIDES = [
  {
    id: "web-dev",
    title: "Custom Web Development",
    subtitle: "High-Performance Next.js & React",
    desc: "Hand-coded, sub-second loading web platforms engineered for search dominance and maximum conversion.",
    img: "/images/web_dev.jpg",
    href: "/services/custom-web-development",
    tag: "WEB ENGINEERING",
    stats: [
      { label: "LATENCY", val: "<50ms" },
      { label: "LIGHTHOUSE", val: "100/100" },
      { label: "SEO SCORE", val: "A+" }
    ]
  },
  {
    id: "ui-ux",
    title: "UI/UX Design Studio",
    subtitle: "Pixel-Perfect Digital Experiences",
    desc: "Bespoke design systems, interactive Figma prototypes, and editorial aesthetics that captivate users.",
    img: "/images/ui_ux.jpg",
    href: "/services",
    tag: "CREATIVE STUDIO",
    stats: [
      { label: "FIDELITY", val: "Vector 4K" },
      { label: "CONVERSION", val: "+45%" },
      { label: "REVISIONS", val: "Unlimited" }
    ]
  },
  {
    id: "web-apps",
    title: "Web Applications & SaaS",
    subtitle: "Full-Stack Enterprise Portals",
    desc: "Scalable cloud applications powered by React, Node.js, PostgreSQL, and real-time data streaming.",
    img: "/images/web_app.jpg",
    href: "/services",
    tag: "SAAS ARCHITECTURE",
    stats: [
      { label: "CAPACITY", val: "100k Req/s" },
      { label: "UPTIME", val: "99.99%" },
      { label: "STACK", val: "Next/Prisma" }
    ]
  },
  {
    id: "ai-crm",
    title: "AI & CRM Automation",
    subtitle: "Autonomous Operations & LLMs",
    desc: "Bespoke CRMs and autonomous AI workflows that eliminate 90% of manual operational tasks.",
    img: "/images/ai_automation.jpg",
    href: "/services",
    tag: "AI AUTOMATION",
    stats: [
      { label: "PIPELINE", val: "Active" },
      { label: "TIME SAVED", val: "-30hrs/wk" },
      { label: "MODELS", val: "GPT-4o/Claude" }
    ]
  },
  {
    id: "ecommerce",
    title: "Headless E-Commerce",
    subtitle: "High-Converting Storefronts",
    desc: "Custom Shopify & Stripe shopping experiences engineered for ultra-fast checkout and seamless catalog search.",
    img: "/images/ecommerce.jpg",
    href: "/services/ecommerce-development",
    tag: "STORE FRONTS",
    stats: [
      { label: "CHECKOUT", val: "Instant" },
      { label: "LOAD TIME", val: "<300ms" },
      { label: "GATEWAYS", val: "Stripe/Crypto" }
    ]
  }
];

export default function HomeClient() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    // Explicitly disable landing intro mode on home page
    useUIStore.getState().setLandingMode(false);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth) - 0.5);
      mouseY.set((e.clientY / window.innerHeight) - 0.5);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Auto-playing slideshow timer
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SERVICE_SLIDES.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [isPaused]);

  const activeService = SERVICE_SLIDES[currentSlide];

  return (
    <div className="bg-[#F0EDE6] text-[#1C1917] min-h-screen pt-4 overflow-hidden relative font-sans">
      
      {/* ── 1. HERO SECTION WITH RICH BACKGROUND ART ── */}
      <section className="px-6 md:px-12 xl:px-20 pt-6 pb-16 max-w-[1400px] mx-auto relative z-10 border-b border-[#D6D1C8]">
        <RichBackgroundArt mouseX={mouseX} mouseY={mouseY} />
        
        <div className="grid lg:grid-cols-12 gap-10 items-center relative z-10">
          
          {/* LEFT COLUMN: HERO HEADLINE */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/90 backdrop-blur-md border border-[#0F52BA]/30 rounded-full text-[10px] sm:text-xs font-mono tracking-widest text-[#0F52BA] uppercase font-bold shadow-sm mb-4 sm:mb-6">
              <Zap className="w-3.5 h-3.5 text-[#0F52BA] animate-pulse" />
              NOVAMAC DIGITAL STUDIO
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[1.05] sm:leading-[0.9] text-[#1C1917] mb-4 sm:mb-6 relative">
              Next-Gen<br />
              Digital<br />
              <span className="relative inline-block text-[#0F52BA]">
                Studio.
                <DoodleUnderline />
              </span>
            </h1>
            
            <p className="text-xs sm:text-base md:text-lg text-[#57534E] leading-relaxed mb-6 sm:mb-8 font-normal max-w-xl bg-white/80 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/90 shadow-sm">
              We engineer pixel-perfect websites, custom web applications, and intelligent business automations built for speed, conversion, and global scale.
            </p>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link href="/work"
                className="inline-flex items-center justify-center gap-3 bg-[#1C1917] text-white px-6 sm:px-8 py-3.5 sm:py-4 font-bold text-xs tracking-widest uppercase hover:bg-[#0F52BA] transition-all duration-300 rounded-full group shadow-lg text-center">
                Explore Platform
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white text-[#1C1917] border border-[#D6D1C8] px-6 sm:px-8 py-3.5 sm:py-4 font-bold text-xs tracking-widest uppercase hover:border-[#0F52BA] hover:text-[#0F52BA] transition-all duration-300 rounded-full shadow-sm text-center">
                Book Strategy Call
              </Link>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: AUTO-PLAYING SERVICE SLIDESHOW CARD */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-6 relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="bg-white border-2 border-[#D6D1C8] rounded-3xl p-6 shadow-2xl relative overflow-hidden group hover:border-[#0F52BA] transition-all duration-500 transform-gpu backdrop-blur-xl">
              
              {/* Slideshow Top Control Bar */}
              <div className="flex items-center justify-between border-b border-[#D6D1C8] pb-4 mb-4 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0F52BA] animate-pulse" />
                  <span className="font-bold text-[#1C1917] tracking-wider uppercase">{activeService.tag}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-[#78716C]">
                    0{currentSlide + 1} / 0{SERVICE_SLIDES.length}
                  </span>
                  <div className="flex items-center gap-1">
                    <button 
                      onClick={() => setCurrentSlide((prev) => (prev === 0 ? SERVICE_SLIDES.length - 1 : prev - 1))}
                      className="p-1 rounded-full hover:bg-[#FAF8F4] border border-[#D6D1C8] text-[#1C1917]"
                      aria-label="Previous service"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                    <button 
                      onClick={() => setCurrentSlide((prev) => (prev + 1) % SERVICE_SLIDES.length)}
                      className="p-1 rounded-full hover:bg-[#FAF8F4] border border-[#D6D1C8] text-[#1C1917]"
                      aria-label="Next service"
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Animated Slide Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4"
                >
                  <Link href={activeService.href} className="block group/img">
                    <div className="h-56 w-full rounded-2xl overflow-hidden relative bg-[#1C1917]">
                      <img 
                        src={activeService.img} 
                        alt={activeService.title} 
                        className="w-full h-full object-cover opacity-90 group-hover/img:scale-105 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-between p-4">
                        <div>
                          <div className="text-[10px] font-mono text-[#0F52BA] font-bold uppercase bg-white/95 px-2.5 py-0.5 rounded-full inline-block mb-1 shadow-sm">
                            {activeService.subtitle}
                          </div>
                          <div className="text-white font-bold text-lg leading-tight">{activeService.title}</div>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-[#0F52BA] text-white flex items-center justify-center group-hover/img:scale-110 transition-transform">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>

                  <p className="text-xs text-[#78716C] leading-relaxed font-normal">
                    {activeService.desc}
                  </p>

                  <div className="grid grid-cols-3 gap-2 font-mono text-[11px] pt-2 border-t border-[#D6D1C8]">
                    {activeService.stats.map((stat, idx) => (
                      <div key={idx} className="p-2.5 bg-[#FAF8F4] border border-[#D6D1C8] rounded-xl text-center">
                        <div className="text-[9px] text-[#78716C] uppercase font-bold">{stat.label}</div>
                        <div className="font-bold text-[#1C1917] mt-0.5">{stat.val}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Indicator Dots */}
              <div className="flex items-center justify-center gap-2 mt-4 pt-3 border-t border-[#D6D1C8]">
                {SERVICE_SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? "w-8 bg-[#0F52BA]" : "w-2 bg-[#D6D1C8]"}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* ── 2. INFINITE MARQUEE BELT ── */}
      <TechMarqueeBelt />

      {/* ── 3. REALISTIC VALUE STATS BAR ── */}
      <section className="px-4 sm:px-6 md:px-12 xl:px-20 py-8 sm:py-12 bg-white/90 backdrop-blur-xl border-b border-[#D6D1C8] relative overflow-hidden z-10 shadow-sm">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 relative z-10">
          {[
            { label: "100% Custom Code", val: "ZERO", desc: "No Page Builders" },
            { label: "Sub-Second Loading", val: "<50ms", desc: "Global Edge Response" },
            { label: "Direct Technical Access", val: "SENIOR", desc: "Senior Dev Team" },
            { label: "On-Time Guarantee", val: "99.4%", desc: "Agile Production" },
          ].map((stat) => (
            <div key={stat.label} className="border-l-2 sm:border-l-3 border-[#0F52BA] pl-3 sm:pl-6">
              <div className="text-2xl sm:text-4xl md:text-5xl font-black text-[#1C1917] tracking-tight">{stat.val}</div>
              <div className="text-[10px] sm:text-xs font-mono font-bold text-[#0F52BA] uppercase mt-1 tracking-wider">{stat.label}</div>
              <div className="text-[10px] sm:text-xs text-[#78716C] mt-0.5 font-light">{stat.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. EXPERTISE & CAPABILITIES GRID ── */}
      <section className="px-4 sm:px-6 md:px-12 xl:px-20 py-12 sm:py-24 max-w-[1400px] mx-auto relative z-10 overflow-hidden border-b border-[#D6D1C8]">
        <RichBackgroundArt mouseX={mouseX} mouseY={mouseY} opacity="opacity-90" />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 sm:gap-6 mb-10 sm:mb-16 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#0F52BA]/30 rounded-full text-[10px] font-mono font-bold text-[#0F52BA] uppercase tracking-widest mb-3 shadow-sm">
              <Sparkles className="w-3 h-3 text-[#0F52BA]" />
              SYSTEM CAPABILITIES
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter text-[#1C1917]">
              Deep Technical Expertise.
            </h2>
          </div>
          <Link href="/services" className="text-xs font-bold tracking-widest uppercase text-[#0F52BA] hover:text-[#1C1917] flex items-center gap-2 transition-colors bg-white px-5 py-2.5 rounded-full border border-[#D6D1C8] shadow-sm">
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {[
            { title: "Custom Web Development", desc: "Hand-coded Next.js & React websites built for sub-second speeds, SEO dominance, and scale.", img: "/images/web_dev.jpg", href: "/services/custom-web-development", tags: ["Next.js", "React", "SEO"] },
            { title: "UI/UX Design Studio", desc: "Pixel-perfect interfaces and design systems crafted for high conversion.", img: "/images/ui_ux.jpg", href: "/services", tags: ["Figma", "Prototypes"] },
            { title: "Web Applications & SaaS", desc: "Scalable full-stack SaaS platforms, portals, and dashboards.", img: "/images/web_app.jpg", href: "/services", tags: ["PostgreSQL", "Prisma"] },
            { title: "AI & CRM Automation", desc: "Bespoke CRMs and autonomous AI workflows that eliminate manual operational tasks.", img: "/images/ai_automation.jpg", href: "/services", tags: ["OpenAI", "Claude"] },
            { title: "E-Commerce Storefronts", desc: "Headless e-commerce platforms engineered for speed and seamless checkout.", img: "/images/ecommerce.jpg", href: "/services/ecommerce-development", tags: ["Shopify", "Stripe"] },
            { title: "SEO & Digital Growth", desc: "Technical SEO audits and keyword dominance to get you found organically.", img: "/images/web_dev.jpg", href: "/services", tags: ["Technical SEO", "Growth"] },
          ].map((s, i) => (
            <motion.div 
              key={s.title} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6, delay: i * 0.05 }}
              whileHover={{ y: -6, scale: 1.01 }}
            >
              <Link href={s.href} className="block border border-[#D6D1C8] bg-white/95 backdrop-blur-md hover:border-[#0F52BA] transition-all duration-300 rounded-3xl group h-full shadow-md hover:shadow-2xl overflow-hidden flex flex-col justify-between transform-gpu">
                <div className="h-44 w-full relative overflow-hidden bg-[#1C1917]">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 text-[#1C1917] group-hover:bg-[#0F52BA] group-hover:text-white flex items-center justify-center transition-all shadow-sm">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="font-bold text-xl text-[#1C1917] mb-2 group-hover:text-[#0F52BA] transition-colors">{s.title}</h3>
                  <p className="text-[#78716C] text-xs leading-relaxed mb-5">{s.desc}</p>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-[#D6D1C8]">
                    {s.tags.map((tag, idx) => (
                      <span key={idx} className="text-[10px] font-mono px-2.5 py-1 bg-[#FAF8F4] border border-[#D6D1C8] rounded-full text-[#57534E]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 5. OUR 4-STEP PROCESS ── */}
      <section className="px-6 md:px-12 xl:px-20 py-24 bg-[#FAF8F4] border-b border-[#D6D1C8] relative overflow-hidden z-10">
        <RichBackgroundArt mouseX={mouseX} mouseY={mouseY} opacity="opacity-80" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#0F52BA]/30 rounded-full text-[10px] font-mono font-bold text-[#0F52BA] uppercase tracking-widest mb-3 shadow-sm">
              <Zap className="w-3 h-3 text-[#0F52BA]" />
              HOW WE DELIVER
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[#1C1917] mb-4">Our 4-Step Process.</h2>
            <p className="text-[#78716C] text-lg font-light">Predictable, fast, and transparent engineering.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Discovery & Architecture", desc: "Mapping out business goals, tech stack, data models, and performance benchmarks." },
              { num: "02", title: "UI/UX Prototyping", desc: "Crafting pixel-perfect design systems, interactive prototypes, and user flows." },
              { num: "03", title: "Agile Development", desc: "Clean, modular Next.js code with zero-trust security and sub-second load times." },
              { num: "04", title: "Deployment & Scale", desc: "Automated CI/CD deployment to global edge servers with 24/7 monitoring." },
            ].map((step, i) => (
              <motion.div 
                key={step.num} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white/95 backdrop-blur-md p-8 rounded-3xl border border-[#D6D1C8] shadow-md relative group hover:border-[#0F52BA] transition-all"
              >
                <div className="text-5xl font-black text-[#0F52BA] mb-4 font-mono">{step.num}</div>
                <h3 className="text-xl font-bold text-[#1C1917] mb-3">{step.title}</h3>
                <p className="text-[#78716C] text-xs font-normal leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. VERIFIED GOOGLE REVIEWS SECTION ── */}
      <GoogleReviewsSection />

      {/* ── 7. FINAL CALL TO ACTION ── */}
      <section className="px-6 md:px-12 xl:px-20 py-36 text-center relative overflow-hidden bg-[#FAF8F4]">
        <RichBackgroundArt mouseX={mouseX} mouseY={mouseY} opacity="opacity-100" />
        
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-[#1C1917] mb-6 leading-[0.9]">
            Ready to build something<br />extraordinary?
          </h2>
          <p className="text-lg text-[#78716C] mb-8 max-w-xl mx-auto font-light">
            Let's talk. We reply within 24 hours with a clear, honest architectural assessment.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-[#0F52BA] text-white px-10 py-5 font-black text-xs tracking-widest uppercase hover:bg-[#1C1917] transition-all duration-300 rounded-full shadow-2xl hover:scale-105 transform-gpu">
            Book a Strategy Call
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
