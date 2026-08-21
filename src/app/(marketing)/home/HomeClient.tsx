"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap, CheckCircle2, Star, Shield, Activity, Cpu, Server, Sparkles, ChevronLeft, ChevronRight, Layers, ArrowUpRight, Lock, Key, ShieldCheck } from "lucide-react";
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
    tag: "Web Engineering",
    stats: [
      { label: "Latency", val: "<50ms" },
      { label: "Lighthouse", val: "100/100" },
      { label: "SEO Score", val: "A+" }
    ]
  },
  {
    id: "ui-ux",
    title: "UI/UX Design Studio",
    subtitle: "Pixel-Perfect Digital Experiences",
    desc: "Bespoke design systems, interactive Figma prototypes, and editorial aesthetics that captivate users.",
    img: "/images/ui_ux.jpg",
    href: "/services",
    tag: "Creative Studio",
    stats: [
      { label: "Fidelity", val: "Vector 4K" },
      { label: "Conversion", val: "+45%" },
      { label: "Revisions", val: "Unlimited" }
    ]
  },
  {
    id: "web-apps",
    title: "Web Applications & SaaS",
    subtitle: "Full-Stack Enterprise Portals",
    desc: "Scalable cloud applications powered by React, Node.js, PostgreSQL, and real-time data streaming.",
    img: "/images/web_app.webp",
    href: "/services",
    tag: "SaaS Architecture",
    stats: [
      { label: "Capacity", val: "100k Req/s" },
      { label: "Uptime", val: "99.99%" },
      { label: "Stack", val: "Next/Prisma" }
    ]
  },
  {
    id: "ai-crm",
    title: "AI & CRM Automation",
    subtitle: "Autonomous Operations & LLMs",
    desc: "Bespoke CRMs and autonomous AI workflows that eliminate 90% of manual operational tasks.",
    img: "/images/ai_automation.webp",
    href: "/services",
    tag: "AI Automation",
    stats: [
      { label: "Pipeline", val: "Active" },
      { label: "Time Saved", val: "-30hrs/wk" },
      { label: "Models", val: "GPT-4o/Claude" }
    ]
  },
  {
    id: "ecommerce",
    title: "Headless E-Commerce",
    subtitle: "High-Converting Storefronts",
    desc: "Custom Shopify & Stripe shopping experiences engineered for ultra-fast checkout and seamless catalog search.",
    img: "/images/ecommerce.jpg",
    href: "/services/ecommerce-development",
    tag: "Storefronts",
    stats: [
      { label: "Checkout", val: "Instant" },
      { label: "Load Time", val: "<300ms" },
      { label: "Gateways", val: "Stripe/Crypto" }
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
    <div className="bg-[#0B1220] text-[#F8FAFC] min-h-screen pt-4 overflow-hidden relative font-sans">
      
      {/* ── 1. HERO SECTION WITH SUBTLE BACKGROUND ART (SUBTLE 2% OPACITY) ── */}
      <section className="px-6 md:px-12 xl:px-20 pt-6 pb-16 max-w-[1400px] mx-auto relative z-10 border-b border-[#1E2E4A]">
        <RichBackgroundArt mouseX={mouseX} mouseY={mouseY} opacity="opacity-90" />
        
        <div className="grid lg:grid-cols-12 gap-10 items-center relative z-10">
          
          {/* LEFT COLUMN: HERO HEADLINE */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#0F1C33] to-[#091222] border border-[#1E2E4A] border-t-white/10 rounded-full text-xs font-mono tracking-widest text-[#3B82F6] font-bold shadow-[0_10px_25px_rgba(0,0,0,0.4)] mb-4 sm:mb-6">
              <Zap className="w-4 h-4 text-[#3B82F6] animate-pulse" />
              NovaMac Digital Studio
            </div>
            
            {/* SINGLE UNIQUE H1 HEADLINE */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] sm:leading-[0.95] text-[#F8FAFC] mb-4 sm:mb-6 relative">
              Next-Gen<br />
              Digital<br />
              <span className="relative inline-block text-[#3B82F6]">
                Studio.
                <DoodleUnderline />
              </span>
            </h1>
            
            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-6 sm:mb-8 font-normal max-w-xl bg-gradient-to-b from-[#0F1C33]/90 via-[#091222]/95 to-[#050A14] backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-[#1E2E4A] border-t-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
              We engineer pixel-perfect websites, custom web applications, and intelligent business automations built for speed, conversion, and global scale.
            </p>
            
            {/* PRIMARY & SECONDARY CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-[#3B82F6] text-white px-8 py-4 font-black text-xs sm:text-sm tracking-widest uppercase hover:bg-white hover:text-[#0B1220] transition-all duration-300 rounded-full group shadow-[0_10px_30px_rgba(59,130,246,0.35)] text-center min-h-[44px]">
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
              <Link href="/work"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#0F1C33] to-[#091222] text-[#F8FAFC] border border-[#1E2E4A] border-t-white/10 px-8 py-4 font-bold text-xs sm:text-sm tracking-widest uppercase hover:border-[#3B82F6] hover:text-[#3B82F6] hover:shadow-[0_0_25px_rgba(59,130,246,0.25)] transition-all duration-300 rounded-full shadow-md text-center min-h-[44px]">
                Explore Work
              </Link>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: UNIFIED SLIDESHOW CARD (CLEAR ACCESSIBLE CONTROLS) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-6 relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="bg-gradient-to-b from-[#0F1C33] via-[#091222] to-[#050A14] border border-[#1E2E4A] border-t-white/15 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.75),0_0_30px_rgba(59,130,246,0.15)] relative overflow-hidden group hover:border-[#3B82F6]/70 transition-all duration-500 transform-gpu">
              
              {/* Slideshow Top Control Bar: Category Tag, Counter, Pagination Dots, & Large Touch Arrow Buttons (44px) */}
              <div className="flex items-center justify-between border-b border-[#1E2E4A] pb-4 mb-4 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3B82F6] animate-pulse" />
                  <span className="font-extrabold text-[#F8FAFC] tracking-wider uppercase text-xs">{activeService.tag}</span>
                </div>

                <div className="flex items-center gap-4">
                  {/* Slide Counter */}
                  <span className="text-xs text-[#94A3B8] font-bold">
                    0{currentSlide + 1} / 0{SERVICE_SLIDES.length}
                  </span>

                  {/* Pagination Dots */}
                  <div className="hidden sm:flex items-center gap-1.5">
                    {SERVICE_SLIDES.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-2.5 rounded-full transition-all duration-300 ${idx === currentSlide ? "w-6 bg-[#3B82F6] shadow-[0_0_10px_#3B82F6]" : "w-2.5 bg-[#1E2E4A]"}`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Accessible 44px Navigation Arrows */}
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => setCurrentSlide((prev) => (prev === 0 ? SERVICE_SLIDES.length - 1 : prev - 1))}
                      className="w-10 h-10 rounded-full hover:bg-[#0B1220] border border-[#1E2E4A] text-[#F8FAFC] hover:border-[#3B82F6] hover:text-[#3B82F6] flex items-center justify-center transition-all min-h-[44px] min-w-[44px]"
                      aria-label="Previous service"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={() => setCurrentSlide((prev) => (prev + 1) % SERVICE_SLIDES.length)}
                      className="w-10 h-10 rounded-full hover:bg-[#0B1220] border border-[#1E2E4A] text-[#F8FAFC] hover:border-[#3B82F6] hover:text-[#3B82F6] flex items-center justify-center transition-all min-h-[44px] min-w-[44px]"
                      aria-label="Next service"
                    >
                      <ChevronRight className="w-5 h-5" />
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
                    <div className="h-60 w-full rounded-2xl overflow-hidden relative bg-[#040810] shadow-inner">
                      <img 
                        src={activeService.img} 
                        alt={activeService.title} 
                        className="w-full h-full object-cover opacity-85 group-hover/img:scale-105 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050A14] via-transparent to-transparent flex items-end justify-between p-5">
                        <div>
                          <div className="text-xs font-mono text-white font-black uppercase bg-[#3B82F6] px-3.5 py-1 rounded-full inline-block mb-1.5 shadow-md">
                            {activeService.subtitle}
                          </div>
                          <div className="text-white font-extrabold text-xl sm:text-2xl leading-tight">{activeService.title}</div>
                        </div>
                        
                        {/* CLEAR ACCESSIBLE ACTION BUTTON (NO AMBIGUOUS UNLABELED CIRCLE) */}
                        <div className="inline-flex items-center gap-2 bg-[#3B82F6] text-white px-4 py-2 rounded-full font-mono text-xs font-bold shadow-md group-hover/img:scale-105 transition-transform">
                          <span>View Details</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>

                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed font-normal">
                    {activeService.desc}
                  </p>

                  <div className="grid grid-cols-3 gap-2 font-mono text-xs pt-2 border-t border-[#1E2E4A]">
                    {activeService.stats.map((stat, idx) => (
                      <div key={idx} className="p-3 bg-gradient-to-b from-[#0B1426] to-[#040810] border border-[#1E2E4A] border-t-white/10 rounded-2xl text-center shadow-inner">
                        <div className="text-xs text-[#94A3B8] font-bold">{stat.label}</div>
                        <div className="font-extrabold text-sm text-[#F8FAFC] mt-0.5">{stat.val}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>
          </motion.div>

        </div>
      </section>

      {/* ── 2. INFINITE MARQUEE BELT ── */}
      <TechMarqueeBelt />

      {/* ── 3. REALISTIC VALUE STATS BAR ── */}
      <section className="px-4 sm:px-6 md:px-12 xl:px-20 py-8 sm:py-14 bg-gradient-to-r from-[#0F1C33] via-[#091222] to-[#0F1C33] border-y border-[#1E2E4A] border-t-white/15 relative overflow-hidden z-10 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 relative z-10">
          {[
            { label: "Custom Architecture", val: "100%", desc: "Zero Bloated Builders" },
            { label: "Sub-Second Loading", val: "<50ms", desc: "Global Edge CDN" },
            { label: "Direct Engineer Access", val: "Senior", desc: "Dedicated Dev Team" },
            { label: "On-Time Delivery", val: "99.4%", desc: "Agile Production" },
          ].map((stat) => (
            <div key={stat.label} className="border-l-3 sm:border-l-4 border-[#3B82F6] pl-4 sm:pl-7">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F8FAFC] tracking-tight">{stat.val}</div>
              <div className="text-xs font-mono font-bold text-[#3B82F6] uppercase mt-1 tracking-wider">{stat.label}</div>
              <div className="text-xs text-[#94A3B8] mt-0.5 font-medium">{stat.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. EXPERTISE & CAPABILITIES GRID (ALL CARDS HAVE UNIFORM TECH TAGS & UNIQUE IMAGES) ── */}
      <section className="px-4 sm:px-6 md:px-12 xl:px-20 py-16 sm:py-24 max-w-[1400px] mx-auto relative z-10 overflow-hidden border-b border-[#1E2E4A]">
        <RichBackgroundArt mouseX={mouseX} mouseY={mouseY} opacity="opacity-90" />

        {/* VERTICALLY CENTERED HEADING CONTAINER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sm:gap-6 mb-12 sm:mb-16 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#0F1C33] to-[#091222] border border-[#1E2E4A] border-t-white/10 rounded-full text-xs font-mono font-bold text-[#3B82F6] tracking-wider mb-3 shadow-md">
              <Sparkles className="w-4 h-4 text-[#3B82F6]" />
              System Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#F8FAFC]">
              Deep Technical Expertise.
            </h2>
          </div>
          <Link href="/services" className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#0F1C33] to-[#091222] border border-[#1E2E4A] border-t-white/10 hover:border-[#3B82F6] text-[#3B82F6] hover:text-white text-xs font-mono font-bold uppercase tracking-wider rounded-full transition-all shadow-md shrink-0">
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* UNIFORM GRID CARDS WITH UNIQUE IMAGES & UNIFORM TECH TAGS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 relative z-10">
          {[
            { title: "Custom Web Development", desc: "Hand-coded Next.js & React websites built for sub-second speeds, SEO dominance, and scale.", img: "/images/web_dev.webp", href: "/services/custom-web-development", tags: ["Next.js", "React", "TypeScript"] },
            { title: "UI/UX Design Studio", desc: "Pixel-perfect interfaces and design systems crafted for high conversion.", img: "/images/ui_ux.webp", href: "/services/ui-ux-design", tags: ["Figma", "Design System", "Prototypes"] },
            { title: "Web Applications & SaaS", desc: "Scalable full-stack SaaS platforms, portals, and dashboards.", img: "/images/web_app.webp", href: "/services/crm-custom-software", tags: ["PostgreSQL", "Node.js", "Prisma"] },
            { title: "AI & CRM Automation", desc: "Bespoke CRMs and autonomous AI workflows that eliminate manual operational tasks.", img: "/images/ai_automation.webp", href: "/services/ai-automation", tags: ["GPT-4o", "Claude 3.5", "Python"] },
            { title: "E-Commerce Storefronts", desc: "Headless e-commerce platforms engineered for speed and seamless checkout.", img: "/images/ecommerce.jpg", href: "/services/ecommerce-development", tags: ["Shopify", "Stripe", "Next.js"] },
            { title: "SEO & Digital Growth", desc: "Technical SEO audits and keyword dominance to get you found organically.", img: "/images/marketing_seo.webp", href: "/services", tags: ["Technical SEO", "AEO", "Growth"] },
          ].map((s, i) => (
            <motion.div 
              key={s.title} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6, delay: i * 0.05 }}
              whileHover={{ y: -6, scale: 1.01 }}
            >
              <Link href={s.href} className="block border border-[#1E2E4A] border-t-white/15 bg-gradient-to-b from-[#0F1C33] via-[#091222] to-[#050A14] hover:border-[#3B82F6]/80 shadow-[0_20px_50px_rgba(0,0,0,0.65)] hover:shadow-[0_25px_65px_rgba(0,0,0,0.85),0_0_45px_rgba(59,130,246,0.3)] transition-all duration-300 rounded-3xl group h-full overflow-hidden flex flex-col justify-between transform-gpu">
                <div className="h-48 w-full relative overflow-hidden bg-[#040810]">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#091222] via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#040810] border border-[#1E2E4A] text-[#F8FAFC] group-hover:bg-[#3B82F6] group-hover:border-[#3B82F6] group-hover:text-white flex items-center justify-center transition-all shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-extrabold text-xl sm:text-2xl text-[#F8FAFC] mb-2.5 group-hover:text-[#3B82F6] transition-colors">{s.title}</h3>
                  <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed mb-6 font-normal">{s.desc}</p>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1E2E4A]">
                    {s.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs font-mono px-3 py-1 bg-gradient-to-r from-[#0B1426] to-[#040810] border border-[#1E2E4A] border-t-white/10 rounded-full text-[#94A3B8] font-bold">
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
      <section className="px-6 md:px-12 xl:px-20 py-20 sm:py-28 bg-[#0B1220] border-b border-[#1E2E4A] relative overflow-hidden z-10">
        <RichBackgroundArt mouseX={mouseX} mouseY={mouseY} opacity="opacity-90" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#0F1C33] to-[#091222] border border-[#1E2E4A] border-t-white/10 rounded-full text-xs font-mono font-bold text-[#3B82F6] uppercase tracking-widest mb-4 shadow-md">
              <Zap className="w-4 h-4 text-[#3B82F6]" />
              How We Deliver
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#F8FAFC] mb-4">Our 4-Step Process.</h2>
            <p className="text-[#94A3B8] text-base sm:text-lg font-normal">Predictable, fast, and transparent engineering.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Discovery & Blueprint", desc: "Mapping out business goals, tech stack, data models, and performance benchmarks." },
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
                className="bg-gradient-to-b from-[#0F1C33] via-[#091222] to-[#050A14] p-8 sm:p-9 rounded-3xl border border-[#1E2E4A] border-t-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.65)] hover:shadow-[0_25px_65px_rgba(0,0,0,0.85),0_0_45px_rgba(59,130,246,0.3)] hover:border-[#3B82F6]/80 transition-all relative group"
              >
                <div className="text-5xl sm:text-6xl font-black text-[#3B82F6] mb-4 font-mono">{step.num}</div>
                <h3 className="text-xl font-extrabold text-[#F8FAFC] mb-2.5">{step.title}</h3>
                <p className="text-[#94A3B8] text-xs sm:text-sm font-normal leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. VERIFIED GOOGLE REVIEWS SECTION ── */}
      <GoogleReviewsSection />

      {/* ── 7. FINAL CALL TO ACTION ── */}
      <section className="px-6 md:px-12 xl:px-20 py-28 sm:py-36 text-center relative overflow-hidden bg-[#0B1220]">
        <RichBackgroundArt mouseX={mouseX} mouseY={mouseY} opacity="opacity-100" />
        
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#F8FAFC] mb-6 leading-tight">
            Ready to Build Something Extraordinary?
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] mb-10 max-w-2xl mx-auto font-normal">
            Let's talk. We reply within 24 hours with a clear, honest architectural assessment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#3B82F6] text-white px-9 py-4.5 font-black text-xs sm:text-sm tracking-widest uppercase hover:bg-white hover:text-[#0B1220] transition-all duration-300 rounded-full shadow-[0_15px_40px_rgba(59,130,246,0.4)] hover:scale-105 transform-gpu min-h-[44px]">
              Book a Strategy Call
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/work" className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#0F1C33] to-[#091222] text-[#F8FAFC] border border-[#1E2E4A] border-t-white/10 px-8 py-4.5 font-bold text-xs sm:text-sm tracking-widest uppercase hover:border-[#3B82F6] hover:text-[#3B82F6] transition-all duration-300 rounded-full shadow-md min-h-[44px]">
              View Case Studies
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}

