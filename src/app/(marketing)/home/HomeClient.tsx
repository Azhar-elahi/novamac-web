"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, X, ChevronRight, ChevronLeft, Check, Sparkles, Star, Award, Zap, Shield, Globe } from "lucide-react";
import { TechMarqueeBelt } from "@/components/ui/TechMarqueeBelt";
import { GoogleReviewsSection } from "@/components/reviews/GoogleReviewsSection";
import { useUIStore } from "@/store/useUIStore";

// =========================================
// CASE STUDY SLIDES DATA (Matching Screenshot 659)
// =========================================
const CASE_STUDIES = [
  {
    id: "mind-games",
    category: "MIND GAMES FRAGRANCES",
    statVal: "90%+",
    statLabel: "Increase in Engagement Rate",
    title: "High-Performance E-Commerce & Luxury Brand Architecture",
    desc: "Engineered a headless Next.js digital experience with sub-300ms checkout, custom 3D product visualizers, and exponential conversion growth.",
    image: "/images/ecommerce.jpg",
    link: "/work"
  },
  {
    id: "real-estate-crm",
    category: "REAL ESTATE WHOLESALING",
    statVal: "3.4x",
    statLabel: "Lead Conversion Multiplier",
    title: "Custom CRM & Automated Deal Pipeline Portal",
    desc: "Replaced 12 fragmented spreadsheets with a unified Next.js CRM featuring automated SMS outreach, live property valuation, and role-based permissions.",
    image: "/images/web_app.webp",
    link: "/work"
  },
  {
    id: "ai-automation",
    category: "AI & AUTONOMOUS AGENTS",
    statVal: "-30hrs/wk",
    statLabel: "Manual Workload Reduction",
    title: "24/7 Autonomous Customer & Lead Qualification Agents",
    desc: "Built custom GPT-4o & Claude 3.5 integrations with RAG knowledge search, handling customer inquiries and qualifying leads automatically.",
    image: "/images/ai_automation.webp",
    link: "/work"
  },
  {
    id: "saas-platform",
    category: "ENTERPRISE B2B SOFTWARE",
    statVal: "99.99%",
    statLabel: "SLA Edge Server Uptime",
    title: "Global Scalable SaaS Application & Analytics Studio",
    desc: "Designed and engineered full-stack React and PostgreSQL infrastructure handling over 100,000 requests per second at sub-50ms global edge latency.",
    image: "/images/web_dev.jpg",
    link: "/work"
  }
];

// =========================================
// SERVICES ACCORDION DATA (Matching Lounge Lizard)
// =========================================
const ACCORDION_SERVICES = [
  {
    id: "branding",
    title: "Branding Services",
    items: [
      "Brand Strategy & Positioning",
      "Messaging Architecture",
      "Brand Style Guides",
      "Logo & Identity Design"
    ]
  },
  {
    id: "website-design",
    title: "Custom Website Design",
    items: [
      "Sub-Second Next.js 15 & React 19 Engineering",
      "Custom Figma UI/UX Design Systems",
      "Responsive & Mobile-First Architecture",
      "Conversion Rate Optimization (CRO)"
    ]
  },
  {
    id: "ecommerce",
    title: "Ecommerce Website Development",
    items: [
      "Headless Shopify Storefront API Integration",
      "Instant Custom Cart & One-Click Checkout",
      "Stripe & Multi-Currency Payment Gateways",
      "Product Catalog Search & Filter Engine"
    ]
  },
  {
    id: "ai-crm",
    title: "AI Automation & Custom CRMs",
    items: [
      "Bespoke Internal Business Portals",
      "Autonomous AI Customer & Sales Agents",
      "RAG Knowledge Search & Vector Databases",
      "Workflow Automation Replacing Spreadsheets"
    ]
  },
  {
    id: "digital-marketing",
    title: "Search Everywhere Optimization",
    items: [
      "Generative Engine Optimization (GEO)",
      "Answer Engine Optimization (AEO)",
      "Technical SEO & Core Web Vitals Dominance",
      "Targeted Lead Generation & Sales Funnels"
    ]
  }
];

export default function HomeClient() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState<string>("branding");
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showProposalDrawer, setShowProposalDrawer] = useState(false);

  useEffect(() => {
    useUIStore.getState().setLandingMode(false);

    // Auto-rotate Case Study Carousel every 5 seconds (Matching Screenshot 659)
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CASE_STUDIES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-[#0D0D0D] text-white overflow-x-hidden font-sans relative">

      {/* =========================================================================
          1. HERO SECTION (Split Screen Dual-Card Architecture — Lounge Lizard .llod)
         ========================================================================= */}
      <section className="relative w-full min-h-screen flex flex-col lg:flex-row-reverse pt-20 lg:pt-0">
        
        {/* RIGHT SIDE: Cinematic Video & Motion Typography Background */}
        <div className="w-full lg:w-[calc(100%-480px)] xl:w-[calc(100%-540px)] min-h-[500px] lg:min-h-screen relative bg-black flex flex-col justify-center items-center overflow-hidden">
          
          {/* Looping Ambient Video Background (Screenshots 656, 657) */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-50 z-0"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-timelapse-of-a-city-at-night-4235-large.mp4" type="video/mp4" />
          </video>

          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 z-0" />

          {/* Hero Content Overlay */}
          <div className="relative z-10 text-center px-6 py-20 max-w-4xl mx-auto flex flex-col items-center justify-center">
            
            <p className="text-white font-mono text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold mb-4 text-center">
              SINCE 2020, HELPING GLOBAL BRANDS DRIVE
            </p>

            {/* Giant Graphic Typography with Rotating Logo Circle */}
            <div className="flex items-center justify-center font-black tracking-tighter text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] text-white leading-none uppercase select-none">
              <span>GRO</span>
              
              {/* Rotating Circular Badge Logo */}
              <div className="relative mx-1 sm:mx-2 w-14 h-14 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                  className="w-full h-full rounded-full bg-[#FF5733] text-white flex items-center justify-center font-extrabold text-[10px] sm:text-xs tracking-widest uppercase shadow-2xl p-2 text-center border-2 border-white/20"
                >
                  NovaMac • Agency •
                </motion.div>
              </div>

              <span>WTH.</span>
            </div>

            <p className="mt-8 text-gray-300 font-light max-w-xl text-sm sm:text-base leading-relaxed">
              Engineering high-stakes digital platforms, custom AI CRMs, and conversion engines for ambitious global brands.
            </p>
          </div>

          {/* Bottom Floating Banner CTA */}
          <div className="absolute bottom-6 right-6 z-20 hidden lg:block">
            <button
              onClick={() => setShowProposalDrawer(true)}
              className="bg-[#FF5733] text-white font-extrabold text-xs tracking-widest uppercase px-6 py-3.5 rounded-full hover:bg-white hover:text-black transition-all duration-300 shadow-2xl flex items-center gap-2 border border-white/20"
            >
              <span>REQUEST PROPOSAL</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* LEFT SIDE: Vibrant Lounge Coral Red Card (Lounge Lizard .llow) */}
        <div className="w-full lg:w-[480px] xl:w-[540px] bg-[#FF5733] text-white p-8 sm:p-12 lg:p-14 flex flex-col justify-center relative z-10">
          
          <span className="px-3.5 py-1 bg-black/20 border border-white/20 text-white font-mono text-[11px] font-bold uppercase tracking-widest rounded-full inline-block mb-6 w-fit">
            EST. 2020 • GLOBAL STUDIO
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-white mb-6 tracking-tight">
            New York & Global Web Design Company & AI Software Agency Since 2020
          </h1>

          <div className="text-white/90 text-sm sm:text-base font-normal leading-relaxed space-y-4 mb-10">
            <p>
              Build a high performance website with NovaMac Solutions, an award winning web design company and AI software studio trusted by brands worldwide.
            </p>
            <p>
              Our website design and development services combine strategic UX, brand storytelling, Next.js tech, SEO, AEO, and conversion driven technology to create websites that captivate users, generate leads, and accelerate growth.
            </p>
          </div>

          <button
            onClick={() => setShowProposalDrawer(true)}
            className="w-full sm:w-fit bg-[#0D0D0D] text-white hover:bg-white hover:text-[#0D0D0D] font-black text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 shadow-2xl flex items-center justify-center gap-3 group"
          >
            <span>Request Growth Strategy</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

        </div>

      </section>

      {/* =========================================================================
          2. AGENCY BIO & SHOWREEL SECTION (Lounge Lizard .llde — Screenshots 656, 657, 669)
         ========================================================================= */}
      <section className="py-20 lg:py-28 px-6 bg-white text-[#0D0D0D]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* LEFT: Video Container with Circular PLAY SHOWREEL Button */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-black shadow-2xl group border border-gray-200">
              
              {/* Preview Looping Video */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-41198-large.mp4" type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />

              {/* Circular Coral Red PLAY SHOWREEL Hover Button */}
              <button
                onClick={() => setShowVideoModal(true)}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-[#FF5733] text-white flex flex-col items-center justify-center font-extrabold text-[10px] sm:text-xs tracking-widest uppercase shadow-2xl group-hover:scale-110 transition-transform duration-300 p-4 border-4 border-white/30"
              >
                <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-white mb-1" />
                <span>PLAY SHOWREEL</span>
              </button>
            </div>
          </div>

          {/* RIGHT: Agency Intro Bio */}
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            
            <span className="text-[#FF5733] font-mono text-xs font-bold uppercase tracking-[0.2em] mb-4">
              BEST OF BREED SEARCH VISIBILITY
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D0D0D] leading-tight mb-6 tracking-tight">
              Award-Winning Web Design, Development and Digital Marketing Agency Driving Business Growth.
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-light mb-8">
              NovaMac Solutions is a full-service web design and digital marketing agency creating high-performance websites and scalable digital platforms for brands ready to grow and lead. Since 2020, we&apos;ve partnered with companies across the U.S., U.K., Canada, and Europe to deliver custom design, development, and conversion-focused experiences. We blend strategic branding, UI/UX, SEO, and AI-driven search visibility to help brands stand out, attract qualified traffic, and turn engagement into measurable revenue.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setShowProposalDrawer(true)}
                className="bg-[#FF5733] text-white hover:bg-black font-extrabold text-xs tracking-widest uppercase px-8 py-4 rounded-full transition-all duration-300 shadow-lg flex items-center gap-2"
              >
                <span>Schedule Meeting</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/about"
                className="bg-gray-100 text-[#0D0D0D] hover:bg-gray-200 font-extrabold text-xs tracking-widest uppercase px-8 py-4 rounded-full transition-all duration-300"
              >
                Learn Our Process
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          3. CASE STUDY SHOWCASE CAROUSEL (Dark Mode Section — Screenshot 659)
         ========================================================================= */}
      <section className="py-20 lg:py-28 px-6 bg-[#0D0D0D] text-white border-t border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* LEFT COLUMN: Metric Stat & Category Description */}
            <div className="w-full lg:w-5/12 flex flex-col items-start">
              
              <span className="text-[#FF5733] font-mono text-xs font-bold uppercase tracking-widest mb-3">
                {CASE_STUDIES[currentSlide].category}
              </span>

              {/* Large Metric Display */}
              <div className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-none tracking-tighter mb-2">
                {CASE_STUDIES[currentSlide].statVal}
              </div>

              <div className="text-gray-400 font-medium text-sm sm:text-base mb-6">
                {CASE_STUDIES[currentSlide].statLabel}
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug mb-4">
                {CASE_STUDIES[currentSlide].title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed font-light mb-8">
                {CASE_STUDIES[currentSlide].desc}
              </p>

              <Link
                href={CASE_STUDIES[currentSlide].link}
                className="bg-[#FF5733] text-white hover:bg-white hover:text-black font-extrabold text-xs tracking-widest uppercase px-8 py-4 rounded-full transition-all duration-300 shadow-xl inline-flex items-center gap-2"
              >
                <span>See All Our Work</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* RIGHT COLUMN: Auto-Changing Artwork Carousel (Screenshot 659) */}
            <div className="w-full lg:w-7/12 relative">
              <div className="relative w-full aspect-[16/10] rounded-[2.5rem] overflow-hidden bg-[#141414] border border-white/10 shadow-2xl p-6 sm:p-10 flex items-center justify-center">
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full flex items-center justify-center relative"
                  >
                    {/* Background Soft Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF5733]/20 via-transparent to-transparent rounded-2xl" />

                    <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6 w-full justify-between">
                      <div className="w-full sm:w-1/2 text-left">
                        <span className="px-3 py-1 bg-white/10 text-white font-mono text-[10px] uppercase font-bold rounded-full mb-3 inline-block">
                          FEATURED CASE STUDY
                        </span>
                        <h4 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-2">
                          {CASE_STUDIES[currentSlide].category}
                        </h4>
                        <p className="text-xs text-gray-300 leading-relaxed">
                          {CASE_STUDIES[currentSlide].title}
                        </p>
                      </div>

                      {/* Circular Showcase Visual */}
                      <div className="w-40 h-40 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-[#FF5733] shadow-2xl flex-shrink-0 relative">
                        <img
                          src={CASE_STUDIES[currentSlide].image}
                          alt={CASE_STUDIES[currentSlide].category}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Carousel Navigation Dots & Controls */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
                  <button
                    onClick={() => setCurrentSlide((prev) => (prev - 1 + CASE_STUDIES.length) % CASE_STUDIES.length)}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#FF5733] text-white flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <div className="flex gap-2">
                    {CASE_STUDIES.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? "w-8 bg-[#FF5733]" : "w-2 bg-white/30"}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % CASE_STUDIES.length)}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#FF5733] text-white flex items-center justify-center transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          4. SPLIT SERVICES FEATURE CARD (Lounge Lizard .llhs)
         ========================================================================= */}
      <section className="w-full flex flex-col lg:flex-row">
        
        {/* LEFT: Coral Red Service Feature Box */}
        <div className="w-full lg:w-1/2 bg-[#FF5733] text-white p-10 sm:p-16 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-5xl font-black uppercase leading-tight mb-6 tracking-tight">
            Our Web Design, Development, and Marketing Services Drive Revenue
          </h2>
          <p className="text-white/90 text-sm sm:text-base leading-relaxed font-light mb-10">
            Looking for a web design and development company or digital marketing agency to drive growth? Our experts are master crafters of website design, development, and digital marketing services that attract, delight, and convert users to customers.
          </p>
          <button
            onClick={() => setShowProposalDrawer(true)}
            className="w-fit bg-black text-white hover:bg-white hover:text-black font-extrabold text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 shadow-2xl"
          >
            Let&apos;s Talk
          </button>
        </div>

        {/* RIGHT: High-Impact Architecture Visual Card */}
        <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-[600px] relative bg-zinc-900">
          <img
            src="/images/web_dev.jpg"
            alt="NovaMac Engineering Studio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-10">
            <div className="text-white">
              <span className="text-[#FF5733] font-mono text-xs uppercase font-bold tracking-widest block mb-2">
                GLOBAL ARCHITECTURE
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold">Sub-Second Edge Infrastructure</h3>
            </div>
          </div>
        </div>

      </section>

      {/* =========================================================================
          5. INTERACTIVE ACCORDION SERVICES LIST (Lounge Lizard .llih)
         ========================================================================= */}
      <section className="py-20 lg:py-28 px-6 bg-[#F3F4F6] text-[#0D0D0D]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* LEFT: Section Title */}
          <div className="w-full lg:w-4/12">
            <span className="text-[#FF5733] font-mono text-xs font-bold uppercase tracking-widest mb-3 block">
              CAPABILITIES & SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0D0D0D] leading-tight tracking-tight sticky top-28">
              Our Web Design, Development, and Marketing Services Drive Revenue
            </h2>
          </div>

          {/* RIGHT: Expandable Accordions */}
          <div className="w-full lg:w-8/12 flex flex-col gap-4">
            {ACCORDION_SERVICES.map((serv) => {
              const isOpen = activeAccordion === serv.id;
              return (
                <div
                  key={serv.id}
                  className={`rounded-3xl transition-all duration-300 overflow-hidden ${isOpen ? "bg-white shadow-xl" : "bg-gradient-to-b from-white to-gray-100 border border-gray-200"}`}
                >
                  <button
                    onClick={() => setActiveAccordion(isOpen ? "" : serv.id)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left font-extrabold text-xl sm:text-2xl text-[#0D0D0D] hover:text-[#FF5733] transition-colors select-none"
                  >
                    <span>{serv.title}</span>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? "rotate-90 text-[#FF5733]" : "text-gray-400"}`}>
                      <ChevronRight className="w-6 h-6" />
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-8 pb-8"
                      >
                        <ul className="space-y-3 pt-2">
                          {serv.items.map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm sm:text-base text-gray-700 font-medium">
                              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5733] flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          6. STATS COUNTER ROW (.lldf / .lldp)
         ========================================================================= */}
      <section className="py-16 bg-[#0D0D0D] border-y border-white/10 text-white px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl sm:text-6xl font-black text-white mb-2">150+</div>
            <div className="text-xs font-mono uppercase tracking-widest text-gray-400">Projects Delivered</div>
          </div>
          <div>
            <div className="text-4xl sm:text-6xl font-black text-[#FF5733] mb-2">98%</div>
            <div className="text-xs font-mono uppercase tracking-widest text-gray-400">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-4xl sm:text-6xl font-black text-white mb-2">&lt;50ms</div>
            <div className="text-xs font-mono uppercase tracking-widest text-gray-400">Edge Server Latency</div>
          </div>
          <div>
            <div className="text-4xl sm:text-6xl font-black text-[#FF5733] mb-2">100%</div>
            <div className="text-xs font-mono uppercase tracking-widest text-gray-400">Source Code Ownership</div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. CLIENT LOGOS & REVIEWS
         ========================================================================= */}
      <TechMarqueeBelt />
      <GoogleReviewsSection />

      {/* =========================================================================
          8. PERSISTENT FLOATING PROPOSAL BUTTON & DRAWER (.lltqu)
         ========================================================================= */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setShowProposalDrawer(true)}
          className="bg-[#FF5733] text-white hover:bg-black font-extrabold text-xs tracking-widest uppercase px-6 py-4 rounded-full shadow-2xl flex items-center gap-2 border-2 border-white/20 transition-all duration-300 hover:scale-105"
        >
          <span>REQUEST PROPOSAL</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* =========================================================================
          9. MODAL: SHOWREEL VIDEO PLAYER
         ========================================================================= */}
      <AnimatePresence>
        {showVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <div className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden bg-black border border-white/20 shadow-2xl">
              <button
                onClick={() => setShowVideoModal(false)}
                className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/20 hover:bg-[#FF5733] text-white flex items-center justify-center transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="NovaMac Agency Showreel"
                className="w-full h-full border-0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================================
          10. MODAL DRAWER: PROPOSAL REQUEST
         ========================================================================= */}
      <AnimatePresence>
        {showProposalDrawer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex justify-end"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="w-full max-w-xl bg-[#141414] text-white h-full overflow-y-auto p-8 sm:p-12 relative border-l border-white/10 shadow-2xl flex flex-col justify-between"
            >
              <button
                onClick={() => setShowProposalDrawer(false)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-[#FF5733] text-white flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div>
                <span className="text-[#FF5733] font-mono text-xs uppercase font-bold tracking-widest block mb-2">
                  START A PROJECT
                </span>
                <h3 className="text-3xl font-black uppercase text-white mb-2">Request Growth Proposal</h3>
                <p className="text-gray-400 text-sm font-light mb-8">
                  Tell us about your project — we reply within 24 hours with a clear, honest scope and proposal.
                </p>

                <form onSubmit={(e) => { e.preventDefault(); alert('Thank you! Your proposal request has been received.'); setShowProposalDrawer(false); }} className="space-y-4">
                  <div>
                    <label className="text-xs font-mono uppercase text-gray-400 block mb-1">Your Full Name</label>
                    <input required type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#FF5733] outline-none transition-colors text-sm" />
                  </div>
                  <div>
                    <label className="text-xs font-mono uppercase text-gray-400 block mb-1">Work Email</label>
                    <input required type="email" placeholder="john@company.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#FF5733] outline-none transition-colors text-sm" />
                  </div>
                  <div>
                    <label className="text-xs font-mono uppercase text-gray-400 block mb-1">Service Needed</label>
                    <select className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#FF5733] outline-none transition-colors text-sm">
                      <option>Custom Next.js Web Development</option>
                      <option>UI/UX Design Studio</option>
                      <option>AI Automation & Custom CRM</option>
                      <option>Headless E-Commerce Storefront</option>
                      <option>Digital Marketing & SEO</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-mono uppercase text-gray-400 block mb-1">Project Details</label>
                    <textarea rows={4} placeholder="Describe your goals, budget range, and timeline..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#FF5733] outline-none transition-colors text-sm" />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#FF5733] text-white font-extrabold text-xs uppercase tracking-widest py-4 rounded-xl hover:bg-white hover:text-black transition-all duration-300 shadow-xl"
                  >
                    Submit Proposal Request
                  </button>
                </form>
              </div>

              <div className="pt-8 border-t border-white/10 mt-8 text-xs text-gray-500 font-mono flex items-center justify-between">
                <span>Or email: hello@novamacsolutions.com</span>
                <span>WhatsApp SLA: &lt;15 mins</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
