"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, X, ChevronRight, ChevronLeft, CheckCircle2, Sparkles } from "lucide-react";
import { TechMarqueeBelt } from "@/components/ui/TechMarqueeBelt";
import { GoogleReviewsSection } from "@/components/reviews/GoogleReviewsSection";
import { ProcessTimelineSection } from "@/components/sections/ProcessTimelineSection";
import { PreFooterCTASection } from "@/components/sections/PreFooterCTASection";
import { useUIStore } from "@/store/useUIStore";

// =========================================
// CASE STUDY SLIDES (Matching Screenshot 659)
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
    statVal: "99.9%",
    statLabel: "Reliable Server Uptime",
    title: "Global Scalable SaaS Application & Analytics Studio",
    desc: "Designed and engineered full-stack React and database infrastructure built for fast response times and high traffic growth.",
    image: "/images/web_dev.jpg",
    link: "/work"
  }
];

// =========================================
// SERVICES ACCORDION (Matching Lounge Lizard)
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

// =========================================
// SEAMLESS VIDEO LOOP — Dual video crossfade
// Two videos overlap. When video A is 2s from end,
// video B starts playing and fades in. Zero visible cut.
// =========================================
function SeamlessVideoLoop({ src }: { src: string }) {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
    video.setAttribute("autoplay", "");

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        const enablePlay = () => {
          if (video) {
            video.muted = true;
            video.play().catch(() => {});
          }
          window.removeEventListener("touchstart", enablePlay);
          window.removeEventListener("click", enablePlay);
          window.removeEventListener("scroll", enablePlay);
        };
        window.addEventListener("touchstart", enablePlay, { once: true, passive: true });
        window.addEventListener("click", enablePlay, { once: true, passive: true });
        window.addEventListener("scroll", enablePlay, { once: true, passive: true });
      });
    }
  }, []);

  return (
    <div className="absolute inset-0 z-0 contain-content bg-black">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover opacity-95 transform-gpu pointer-events-none"
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}

const ALL_SERVICES_LIST = [
  "Custom Next.js & React Web Engineering",
  "UI/UX Design Systems & Figma Architecture",
  "Headless E-Commerce & Shopify Storefronts",
  "AI Agents, Autonomous LLM & Bespoke CRM",
  "B2B Lead Generation & High-Converting Funnels",
  "Graphic Design, Logos & Brand Identity",
  "Search Everywhere Optimization (SEO / GEO / AEO)",
  "Full-Stack Web Applications & SaaS Portals",
  "Cross-Platform Mobile Apps (iOS & Android)",
  "Performance Optimization & Core Web Vitals Audit",
  "Cloud DevOps, Edge Infrastructure & Database Setup",
  "Dedicated Maintenance & 24/7 SLA Technical Retainer"
];

function ProposalDrawerForm({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = React.useState(false);
  const [isPending, startTransition] = React.useTransition();
  const [errorMsg, setErrorMsg] = React.useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const name = (formData.get("name") as string || "").trim();
    const email = (formData.get("email") as string || "").trim().toLowerCase();
    const phone = (formData.get("phone") as string || "").trim();
    const message = (formData.get("notes") as string || "").trim();

    const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const PHONE_REGEX = /^\+?[0-9\s\-\(\)]{8,20}$/;

    if (!name || name.length < 2) {
      setErrorMsg("Please enter your full name (at least 2 characters).");
      return;
    }

    if (!email || !EMAIL_REGEX.test(email)) {
      setErrorMsg("Please enter a valid email address (e.g. john@company.com).");
      return;
    }

    if (phone && !PHONE_REGEX.test(phone)) {
      setErrorMsg("Please enter a valid phone number (minimum 8 digits).");
      return;
    }

    if (!message || message.length < 5) {
      setErrorMsg("Please enter your project details (at least 5 characters).");
      return;
    }

    startTransition(async () => {
      const { submitContactForm } = await import("@/app/actions/contact");
      const res = await submitContactForm(formData);
      if (res.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(res.error || "Failed to submit proposal request.");
      }
    });
  };

  if (submitted) {
    return (
      <div className="text-center py-10 space-y-6">
        <div className="w-16 h-16 rounded-full bg-[#FF5733] text-white flex items-center justify-center mx-auto shadow-lg">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-black text-white uppercase">Proposal Request Received!</h3>
        <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed">
          Thank you! Our engineering team will review your project requirements and reply to your email within 24 hours.
        </p>
        <button
          type="button"
          onClick={onClose}
          className="w-full bg-[#FF5733] text-white font-extrabold text-xs uppercase tracking-widest py-3.5 rounded-full hover:bg-white hover:text-[#202020] transition-colors"
        >
          Return To Site
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {errorMsg && (
        <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-xs text-red-400 font-bold">
          {errorMsg}
        </div>
      )}

      <div>
        <label className="text-xs font-mono uppercase text-gray-400 block mb-1">Your Full Name *</label>
        <input required name="name" type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#FF5733] outline-none transition-colors text-sm" />
      </div>

      <div>
        <label className="text-xs font-mono uppercase text-gray-400 block mb-1">Work Email Address *</label>
        <input required name="email" type="email" placeholder="john@company.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#FF5733] outline-none transition-colors text-sm" />
      </div>

      <div>
        <label className="text-xs font-mono uppercase text-gray-400 block mb-1">Phone / WhatsApp (Optional)</label>
        <input name="phone" type="tel" placeholder="+1 (415) 555-0199" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#FF5733] outline-none transition-colors text-sm" />
      </div>

      <div>
        <label className="text-xs font-mono uppercase text-gray-400 block mb-1">Service Capability Needed</label>
        <select name="service" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#FF5733] outline-none transition-colors text-sm">
          {ALL_SERVICES_LIST.map((srv, i) => (
            <option key={i} value={srv}>{srv}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="text-xs font-mono uppercase text-gray-400 block mb-1">Project Details *</label>
        <textarea required name="notes" rows={3} placeholder="Describe your goals, budget range, and estimated timeline..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#FF5733] outline-none transition-colors text-sm" />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-[#FF5733] text-white font-extrabold text-xs uppercase tracking-widest py-4 rounded-full hover:bg-white hover:text-[#202020] transition-all duration-300 shadow-xl"
      >
        {isPending ? "Validating & Submitting..." : "Submit Proposal Request"}
      </button>
    </form>
  );
}

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
    <div className="w-full bg-[#FAF2F2] text-[#202020] overflow-x-hidden font-sans relative">

      {/* =========================================================================
          1. HERO SECTION (Split Screen Dual-Card Architecture — Lounge Lizard Exact)
         ========================================================================= */}
      <section className="relative w-full min-h-screen flex flex-col lg:flex-row-reverse overflow-hidden">
        
        {/* RIGHT SIDE: Cinematic Times Square Video Background (.llov & .llob) */}
        <div className="w-full lg:w-[calc(100%-460px)] xl:w-[calc(100%-520px)] min-h-[550px] lg:min-h-screen relative bg-black flex flex-col justify-between items-center overflow-hidden">
          
          {/* SEAMLESS CROSSFADE VIDEO LOOP — No cut feel on loop restart */}
          <SeamlessVideoLoop src="/videos/home.mp4" />

          {/* Light Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-black/30 z-0" />

          {/* ── HERO NAVIGATION BAR (white text, right side dark panel) ── */}
          <div className="relative z-20 w-full px-6 sm:px-10 py-6 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 group">
              <img src="/logo.png" alt="NovaMac Logo" className="w-8 h-8 object-contain rounded-lg shadow-md group-hover:scale-105 transition-transform" />
              <span className="font-heading font-black text-lg tracking-tight text-[#FF5733]">
                NovaMac<span className="text-white">Solutions</span>
              </span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-white/90 font-extrabold text-xs uppercase tracking-wider">
              <Link key="nav-about"      href="/about"    className="hover:text-[#FF5733] transition-colors">About</Link>
              <Link key="nav-services"   href="/services" className="hover:text-[#FF5733] transition-colors">Services</Link>
              <Link key="nav-clients"    href="/work"     className="hover:text-[#FF5733] transition-colors">Clients</Link>
              <Link key="nav-industries" href="/pricing"  className="hover:text-[#FF5733] transition-colors">Industries</Link>
              <Link key="nav-work"       href="/work"     className="hover:text-[#FF5733] transition-colors">Work</Link>
              <Link key="nav-insights"   href="/about"    className="hover:text-[#FF5733] transition-colors">Insights</Link>
              <Link key="nav-contact"    href="/contact"  className="hover:text-[#FF5733] transition-colors">Contact</Link>
            </nav>
            <Link
              href="/contact"
              className="bg-[#FF5733] text-white hover:bg-white hover:text-[#202020] font-extrabold text-xs uppercase tracking-widest px-5 py-2.5 rounded-full transition-all duration-300 shadow-xl"
            >
              Let&apos;s Talk
            </Link>
          </div>

          <div className="relative z-10 text-center px-6 py-12 max-w-5xl mx-auto flex flex-col items-center justify-center my-auto">
            
            <p className="text-white font-sans text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold mb-3 text-center drop-shadow-md">
              SINCE 2020, HELPING GLOBAL BRANDS DRIVE
            </p>

            {/* Graphic Typography with Solid Coral Red Circle Badge ("GRO (O) WTH.") */}
            <div className="flex items-center justify-center font-black tracking-tighter text-4xl sm:text-6xl md:text-7xl lg:text-[6.5rem] text-white leading-none uppercase select-none drop-shadow-lg">
              <span>GRO</span>
              
              {/* Solid Coral Red Circle Badge with Logo ("O") */}
              <div className="relative mx-1 sm:mx-2 w-12 h-12 sm:w-16 sm:h-16 md:w-22 md:h-22 lg:w-26 lg:h-26 bg-[#FF5733] rounded-full shadow-2xl flex flex-col items-center justify-center text-white text-center font-black border-2 sm:border-4 border-white/40 translate-y-[4%]">
                <span className="text-[8px] sm:text-xs md:text-sm lg:text-base tracking-tight font-black leading-none uppercase text-white">
                  NovaMac
                </span>
                <span className="text-[6px] sm:text-[8px] md:text-[10px] tracking-widest font-mono text-white/90 uppercase font-bold leading-none mt-0.5">
                  Solutions
                </span>
              </div>

              <span>WTH.</span>
            </div>

          </div>

        </div>

        {/* LEFT SIDE: Vibrant Lounge Coral Red Card (Lounge Lizard .llow — #0A2540) */}
        <div className="w-full lg:w-[460px] xl:w-[520px] bg-[#FF5733] text-white p-8 sm:p-12 lg:p-14 flex flex-col justify-between relative z-10">
          
          {/* Logo on top left inside Coral Card (Matching Screenshot media_1787863901785.png) */}
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center gap-3">
              <img src="/logo.png" alt="NovaMac Logo" className="w-11 h-11 object-contain rounded-xl shadow-lg border border-white/20" />
              <span className="font-heading font-extrabold text-2xl tracking-tight text-white">
                NovaMac<span className="text-black">Solutions</span>
              </span>
            </Link>
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold leading-[1.1] text-white mb-6 tracking-tight">
              Digital Products That Work Beautifully
            </h1>

            <div className="text-white/90 text-sm sm:text-base font-light leading-relaxed space-y-4 mb-10">
              <p>
                Build a fast, reliable, and stunning website with NovaMac Solutions. We are a dedicated team of designers and developers helping businesses grow online since 2020.
              </p>
              <p>
                We focus on clean code, clear design, and real results. Whether you need a fresh website, a complex web application, or better search visibility, we bring your ideas to life without the jargon. Honest work, clear communication, and digital experiences that your customers will love.
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowProposalDrawer(true)}
            className="w-full sm:w-fit bg-[#1A1A1A] text-white hover:bg-white hover:text-black font-extrabold text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 shadow-2xl flex items-center justify-center gap-3 group mt-4 hover:scale-105 active:scale-95"
          >
            <span>Request Growth Strategy</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

        </div>

      </section>

      {/* =========================================================================
          2. SHOWREEL + STATS STRIP
         ========================================================================= */}
      <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-[#FAF2F2] text-[#202020]">
        <div className="w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* LEFT: Video Showreel (Increased size & crisp full opacity) */}
          <div className="w-full lg:w-3/5 h-full relative flex flex-col justify-center">
            <div className="relative w-full aspect-video sm:aspect-[16/10] rounded-[30px] overflow-hidden bg-black shadow-2xl group border border-gray-200">
              <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-105 transition-transform duration-700">
                <source src="/videos/showreel.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          </div>

          {/* RIGHT: Key Stats Grid */}
          <div className="w-full lg:w-2/5 grid grid-cols-2 gap-4 sm:gap-6">
            {[
              { val: "150+", label: "Platforms Delivered" },
              { val: "98%", label: "Client Satisfaction" },
              { val: "5+", label: "Years Engineering" },
              { val: "<50ms", label: "Edge Latency" },
            ].map(({ val, label }) => (
              <div key={label} className="bg-white rounded-3xl p-6 sm:p-8 flex flex-col gap-2 border border-[#F0DCDC] shadow-sm hover:border-[#FF5733] transition-all group">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#FF5733] leading-none group-hover:scale-105 transition-transform origin-left">{val}</div>
                <div className="text-xs font-mono uppercase tracking-widest text-slate-500 mt-2">{label}</div>
              </div>
            ))}
            <div className="col-span-2 mt-4 flex flex-wrap gap-4">
              <button
                onClick={() => setShowProposalDrawer(true)}
                className="bg-[#FF5733] text-white hover:bg-[#202020] font-extrabold text-xs tracking-widest uppercase px-8 py-4 rounded-full transition-all duration-300 shadow-lg flex items-center gap-2 hover:scale-105 active:scale-95"
              >
                <span>Schedule Meeting</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link href="/about" className="bg-[#F1F1F1] text-[#202020] hover:bg-[#FF5733] hover:text-white font-extrabold text-xs tracking-widest uppercase px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 active:scale-95">
                Learn Our Process
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          3. CASE STUDY SHOWCASE CAROUSEL (Dark Section .lli_ — Screenshot 659)
         ========================================================================= */}
      <section className="py-20 lg:py-28 px-6 bg-[#202020] text-white border-t border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* LEFT COLUMN: Metric Stat & Category Description */}
            <div className="w-full lg:w-5/12 flex flex-col items-start">
              
              <span className="text-[#FF5733] font-mono text-xs font-bold uppercase tracking-[0.2em] mb-3">
                {CASE_STUDIES[currentSlide].category}
              </span>

              {/* Large Metric Display */}
              <div className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-white leading-none tracking-tighter mb-2">
                {CASE_STUDIES[currentSlide].statVal}
              </div>

              <div className="text-slate-400 font-medium text-sm sm:text-base mb-6">
                {CASE_STUDIES[currentSlide].statLabel}
              </div>

              <h3 className="text-2xl sm:text-[1.85rem] font-bold tracking-tight text-white leading-snug mb-4">
                {CASE_STUDIES[currentSlide].title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed font-light mb-8">
                {CASE_STUDIES[currentSlide].desc}
              </p>

              <Link
                href={CASE_STUDIES[currentSlide].link}
                className="bg-[#FF5733] text-white hover:bg-white hover:text-[#202020] font-extrabold text-xs tracking-widest uppercase px-8 py-4 rounded-full transition-all duration-300 shadow-xl inline-flex items-center gap-2 hover:scale-105 active:scale-95"
              >
                <span>See All Our Work</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* RIGHT COLUMN: Auto-Changing Artwork Carousel (Screenshot 659) */}
            <div className="w-full lg:w-7/12 relative">
              <div className="relative w-full aspect-[1.7] rounded-[2rem] overflow-hidden bg-[#141414]/90 backdrop-blur-sm border border-white/10 shadow-2xl p-6 sm:p-10 flex items-center justify-center transition-all duration-300 group">
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full flex items-center justify-center relative"
                  >
                    <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6 w-full justify-between">
                      <div className="w-full sm:w-1/2 text-left">
                        <span className="px-3 py-1 bg-[#FF5733]/10 text-[#FF5733] border border-[#FF5733]/20 font-mono text-[10px] uppercase font-bold rounded-full mb-3 inline-block">
                          FEATURED CASE STUDY
                        </span>
                        <h4 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-2">
                          {CASE_STUDIES[currentSlide].category}
                        </h4>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {CASE_STUDIES[currentSlide].title}
                        </p>
                      </div>

                      {/* Circular Showcase Visual -> Upgraded to squircle rounded-[2rem] with glow border */}
                      <div className="w-40 h-40 sm:w-56 sm:h-56 rounded-[2rem] overflow-hidden border-4 border-[#FF5733]/80 shadow-2xl flex-shrink-0 relative transition-transform duration-500 hover:scale-105 group/img">
                        <img
                          src={CASE_STUDIES[currentSlide].image}
                          alt={CASE_STUDIES[currentSlide].category}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
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
        
        {/* LEFT: Coral Red Service Feature Box (.llho — #0A2540) */}
        <div className="w-full lg:w-1/2 bg-[#FF5733] text-white p-10 sm:p-16 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-[2.75rem] font-extrabold leading-tight tracking-tight mb-6 text-white">
            Our Web Design, Development, and Marketing Services Drive Revenue
          </h2>
          <p className="text-white/90 text-sm sm:text-base leading-relaxed font-light mb-10">
            Need a tech partner you can actually rely on? Our team designs and builds fast, secure, and user-friendly digital solutions. From simple landing pages to complex web applications, we focus on delivering high-quality code and clear communication at every step.
          </p>
          <button
            onClick={() => setShowProposalDrawer(true)}
            className="w-fit bg-[#202020] text-[#FFFFFF] hover:bg-white hover:text-[#202020] font-extrabold text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95"
          >
            Let&apos;s Talk
          </button>
        </div>

        {/* RIGHT: High-Impact Skyscraper Visual Card (.llhu) */}
        <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-[600px] relative bg-[#323232]">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover"><source src="/videos/girl-working.mp4" type="video/mp4" /></video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-10">
            <div className="text-white">
              <span className="text-[#FF5733] font-mono text-xs uppercase font-bold tracking-widest block mb-2">
                ANDERSEN GLOBAL
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold">Sub-Second Edge Infrastructure</h3>
            </div>
          </div>
        </div>

      </section>

      {/* =========================================================================
          5. INTERACTIVE ACCORDION SERVICES LIST (Lounge Lizard .llih — #F1F1F1)
         ========================================================================= */}
      <section className="py-20 lg:py-28 px-6 bg-[#F1F1F1] text-[#202020]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* LEFT: Section Title */}
          <div className="w-full lg:w-4/12">
            <span className="text-[#FF5733] font-mono text-xs font-bold uppercase tracking-widest mb-3 block">
              CAPABILITIES & SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-[#202020] leading-[1.15] tracking-tight sticky top-28">
              Our Web Design, Development, and Marketing Services Drive Revenue
            </h2>
          </div>

          {/* RIGHT: Expandable Accordions (.llip / .lliv) */}
          <div className="w-full lg:w-8/12 flex flex-col gap-4">
            {ACCORDION_SERVICES.map((serv) => {
              const isOpen = activeAccordion === serv.id;
              return (
                <div
                  key={serv.id}
                  className={`rounded-[40px] transition-all duration-300 overflow-hidden ${isOpen ? "bg-white shadow-xl" : "bg-gradient-to-b from-white to-[#E1E1E1]"}`}
                >
                  <button
                    onClick={() => setActiveAccordion(isOpen ? "" : serv.id)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left font-bold text-lg sm:text-xl text-[#202020] hover:text-[#FF5733] transition-colors select-none"
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
                            <li key={i} className="flex items-center gap-3 text-sm sm:text-base text-slate-700 font-medium">
                              <CheckCircle2 className="w-4 h-4 text-[#FF5733] flex-shrink-0" />
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
      <section className="py-16 bg-white text-[#202020] border-y border-gray-200 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl sm:text-6xl font-extrabold text-[#202020] mb-2">150+</div>
            <div className="text-xs font-mono uppercase tracking-widest text-slate-500">Projects Delivered</div>
          </div>
          <div>
            <div className="text-4xl sm:text-6xl font-extrabold text-[#FF5733] mb-2">98%</div>
            <div className="text-xs font-mono uppercase tracking-widest text-slate-500">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-4xl sm:text-6xl font-extrabold text-[#202020] mb-2">&lt;50ms</div>
            <div className="text-xs font-mono uppercase tracking-widest text-slate-500">Edge Server Latency</div>
          </div>
          <div>
            <div className="text-4xl sm:text-6xl font-extrabold text-[#FF5733] mb-2">100%</div>
            <div className="text-xs font-mono uppercase tracking-widest text-slate-500">Source Code Ownership</div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. OUR ENGINEERING METHODOLOGY TIMELINE
         ========================================================================= */}
      <ProcessTimelineSection />

      {/* =========================================================================
          8. VERIFIED CLIENT REVIEWS
         ========================================================================= */}
      <GoogleReviewsSection />

      {/* =========================================================================
          9. PRE-FOOTER CALL TO ACTION BANNER
         ========================================================================= */}
      <PreFooterCTASection />

      {/* =========================================================================
          8. PERSISTENT FLOATING PROPOSAL BUTTON & DRAWER (.lltqu — #0A2540)
         ========================================================================= */}
      <div className="fixed bottom-40 right-0 z-50">
        <button
          onClick={() => setShowProposalDrawer(true)}
          className="group flex items-center gap-3 bg-[#FF5733] hover:bg-[#202020] text-white h-12 rounded-l-full pl-3.5 pr-6 shadow-2xl border-l border-y border-white/20 transition-transform duration-300 ease-out translate-x-[calc(100%-48px)] hover:translate-x-0 cursor-pointer overflow-hidden whitespace-nowrap"
          title="Request Proposal"
          aria-label="Request Proposal"
        >
          <div className="w-6 h-6 rounded-full bg-white/20 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:rotate-12 transition-transform">
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
            Request Proposal
          </span>
          <ArrowRight className="w-4 h-4 text-white shrink-0" />
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
            <div className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden bg-black border-4 border-[#FF5733] shadow-2xl">
              <button
                onClick={() => setShowVideoModal(false)}
                className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-[#FF5733] text-white flex items-center justify-center hover:bg-white hover:text-[#202020] transition-colors"
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
              className="w-full max-w-xl bg-[#202020] text-white h-full overflow-y-auto p-8 sm:p-12 relative shadow-2xl flex flex-col justify-between"
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
                <h3 className="text-3xl font-extrabold uppercase text-white mb-2">Request Growth Proposal</h3>
                <p className="text-gray-300 text-sm font-light mb-8">
                  Tell us about your project — we reply within 24 hours with a clear, honest scope and proposal.
                </p>

                <ProposalDrawerForm onClose={() => setShowProposalDrawer(false)} />
              </div>

              <div className="pt-8 border-t border-white/10 mt-8 text-xs text-gray-400 font-mono flex items-center justify-between">
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


