"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, X, ChevronRight, ChevronLeft, CheckCircle2, Sparkles, 
  Code2, Cpu, Database, Layers, Bot, TrendingUp, Cloud, Shield, Zap,
  Stethoscope, Briefcase, ShoppingBag, Home, Utensils, Building2,
  ChevronDown, HelpCircle, Mail, MessageSquare, AlertCircle
} from "lucide-react";
import { TechMarqueeBelt } from "@/components/ui/TechMarqueeBelt";
import { ProcessTimelineSection } from "@/components/sections/ProcessTimelineSection";
import { PreFooterCTASection } from "@/components/sections/PreFooterCTASection";
import { useUIStore } from "@/store/useUIStore";
import { useBookingModal } from "@/components/booking/BookingContext";

// =========================================
// 1. NOVAMAC LABS CONCEPT SHOWCASE SLIDES
// =========================================
const LABS_PROJECTS = [
  {
    id: "luxury-ecommerce",
    badge: "Concept Project",
    category: "E-COMMERCE & RETAIL",
    title: "High-Performance Luxury Storefront Architecture",
    desc: "Demonstrating sub-300ms checkout response, custom product visualizers, and conversion-optimized headless Next.js architecture.",
    tech: "Next.js • Shopify API • Tailwind",
    image: "/images/ecommerce.jpg"
  },
  {
    id: "real-estate-crm",
    badge: "Internal Prototype",
    category: "REAL ESTATE & PIPELINES",
    title: "Unified Deal & Pipeline Management System",
    desc: "Demonstrating lead qualification, SMS notification triggers, role permissions, and central deal status tracking.",
    tech: "React • Node.js • PostgreSQL",
    image: "/images/web_app.webp"
  },
  {
    id: "ai-automation",
    badge: "Internal Prototype",
    category: "AI & WORKFLOW AUTOMATION",
    title: "24/7 Autonomous Customer & Lead Agents",
    desc: "Demonstrating LLM integration with internal knowledge bases to qualify sales leads and assist user inquiries automatically.",
    tech: "OpenAI API • RAG • Vector DB",
    image: "/images/ai_automation.webp"
  },
  {
    id: "b2b-saas",
    badge: "Concept Project",
    category: "SAAS & CLOUD SOFTWARE",
    title: "Multi-Tenant B2B Analytics & Subscription Portal",
    desc: "Demonstrating user onboarding flows, role-based security, Stripe recurring billing, and scalable edge deployment.",
    tech: "Next.js • Prisma • Stripe",
    image: "/images/web_dev.jpg"
  }
];

// =========================================
// 2. SEAMLESS VIDEO LOOP
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

// =========================================
// 3. 7 CORE SERVICES DEFINITION
// =========================================
const SERVICES_CARDS = [
  {
    icon: Code2,
    title: "Website Development & Design",
    desc: "High-performing websites and digital experiences built around your business."
  },
  {
    icon: Cpu,
    title: "Custom Software",
    desc: "Purpose-built software for unique business workflows."
  },
  {
    icon: Database,
    title: "CRM Development",
    desc: "Custom systems to manage leads, customers, sales and relationships."
  },
  {
    icon: Layers,
    title: "ERP Development",
    desc: "Connected systems for business operations, finance, inventory and management."
  },
  {
    icon: Cpu,
    title: "AI Automation",
    desc: "AI-powered workflows, agents and automations that reduce repetitive work."
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    desc: "Digital strategies designed to improve visibility, leads and conversions."
  },
  {
    icon: Cloud,
    title: "SaaS & Digital Products",
    desc: "From product concept and MVP to scalable SaaS platforms."
  }
];

// =========================================
// 4. INDUSTRIES WE CAN SERVE
// =========================================
const INDUSTRIES_LIST = [
  { icon: Stethoscope, title: "Healthcare", desc: "Patient intake forms, practice websites, and compliant workflow tools." },
  { icon: Briefcase, title: "Professional Services", desc: "Client intake funnels, firm positioning, and project management portals." },
  { icon: Home, title: "Real Estate", desc: "Property listing displays, lead collection CRMs, and deal pipelines." },
  { icon: ShoppingBag, title: "E-Commerce", desc: "Custom storefronts, product search, and instant checkout flows." },
  { icon: Utensils, title: "Hospitality", desc: "Direct booking engines, menu displays, and guest experience systems." },
  { icon: Building2, title: "Startups & SaaS", desc: "MVP development, multi-tenant portals, and subscription backends." }
];

const HOME_FAQS = [
  {
    q: "What does NovaMac build?",
    a: "NovaMac designs and engineers custom high-performance websites, custom software, tailored CRM & ERP business systems, AI automations, and scalable SaaS products built around your business."
  },
  {
    q: "Do you work with international businesses?",
    a: "Yes. We work with companies, founders, and enterprises globally across North America, Europe, the Middle East, and Asia with async-friendly workflows and clear milestones."
  },
  {
    q: "Can you build custom CRM and ERP systems?",
    a: "Yes. We build bespoke CRM pipelines, operational dashboards, inventory trackers, and internal ERP portals without expensive per-seat monthly licensing fees."
  },
  {
    q: "Can you integrate AI into existing systems?",
    a: "Yes. We integrate autonomous LLM agents, automated customer response workflows, internal knowledge search (RAG), and data pipelines directly into your existing software stack."
  },
  {
    q: "Do you build SaaS products from scratch?",
    a: "Yes. We engineer complete SaaS platforms — from initial architecture and vector UI design to database schemas, payment processing, multi-tenant billing, and launch-ready MVPs."
  },
  {
    q: "Can you improve an existing website?",
    a: "Yes. We audit, redesign, and re-engineer existing websites to fix poor speed, weak mobile conversion, outdated tech stacks, and inefficient messaging."
  },
  {
    q: "How does a project start?",
    a: "Every project starts with a Discovery & Scoping call. We analyze your requirements, identify bottlenecks, and deliver a detailed technical blueprint, timeline, and transparent quote."
  },
  {
    q: "How is project pricing determined?",
    a: "Pricing is transparent and project-scoped based on your technical requirements. Web projects start from $1,500, while custom business systems and software receive tailored proposals."
  },
  {
    q: "Do you provide ongoing support?",
    a: "Yes. We offer post-launch monitoring, security updates, feature expansions, and technical retainers so your systems continue operating reliably as your business scales."
  }
];

const HOME_PRICING = [
  {
    title: "Web Projects",
    price: "Starting from $1,500",
    desc: "Custom websites and digital experiences engineered around your business.",
    cta: "Request Web Scope"
  },
  {
    title: "Business Systems",
    price: "Custom Quote",
    desc: "Custom CRM and ERP systems tailored for lead, sales, and operational management.",
    cta: "Request Systems Scope"
  },
  {
    title: "AI / Automation",
    price: "Custom Quote",
    desc: "AI agents, automated workflows, and system connectors to eliminate manual tasks.",
    cta: "Request Automation Scope"
  },
  {
    title: "SaaS / Software",
    price: "Custom Quote",
    desc: "From product concept and MVP to scalable multi-tenant SaaS software platforms.",
    cta: "Request Software Scope"
  }
];

export default function HomeClient() {
  const { openBooking } = useBookingModal();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState<string>("building");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    useUIStore.getState().setLandingMode(false);

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % LABS_PROJECTS.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-[#FAF2F2] text-[#202020] overflow-x-hidden font-sans relative">

      {/* =========================================================================
          1. EXISTING HERO (Split Screen Dual-Card Architecture — Preserved Design)
         ========================================================================= */}
      <section className="relative w-full min-h-screen flex flex-col lg:flex-row-reverse overflow-hidden">
        
        {/* RIGHT SIDE: Cinematic Video Background */}
        <div className="w-full lg:w-[calc(100%-460px)] xl:w-[calc(100%-520px)] min-h-[550px] lg:min-h-screen relative bg-black flex flex-col justify-between items-center overflow-hidden">
          
          <SeamlessVideoLoop src="/videos/home.mp4" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-black/30 z-0" />

          {/* Top Hero Nav */}
          <div className="relative z-20 w-full px-6 sm:px-10 py-6 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 group">
              <img src="/logo.png" alt="NovaMac Logo" className="w-8 h-8 object-contain rounded-lg shadow-md group-hover:scale-105 transition-transform" />
              <span className="font-heading font-black text-lg tracking-tight text-[#FF5733]">
                NovaMac<span className="text-white">Solutions</span>
              </span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-white/90 font-extrabold text-xs uppercase tracking-wider">
              <Link href="/" className="hover:text-[#FF5733] transition-colors">Home</Link>
              <Link href="/services" className="hover:text-[#FF5733] transition-colors">Services</Link>
              <Link href="/work" className="hover:text-[#FF5733] transition-colors">Work</Link>
              <Link href="/process" className="hover:text-[#FF5733] transition-colors">Process</Link>
              <Link href="/about" className="hover:text-[#FF5733] transition-colors">About</Link>
              <Link href="/contact" className="hover:text-[#FF5733] transition-colors">Contact</Link>
            </nav>
            <button
              onClick={() => openBooking()}
              className="bg-[#FF5733] text-white hover:bg-white hover:text-[#202020] font-extrabold text-xs uppercase tracking-widest px-5 py-2.5 rounded-full transition-all duration-300 shadow-xl"
            >
              Start a Project
            </button>
          </div>

          <div className="relative z-10 text-center px-6 py-12 max-w-5xl mx-auto flex flex-col items-center justify-center my-auto">
            
            <p className="text-white font-sans text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold mb-3 text-center drop-shadow-md">
              BUILT FOR GLOBAL BUSINESSES TO DRIVE
            </p>

            {/* Graphic Typography ("GRO (O) WTH.") */}
            <div className="flex items-center justify-center font-black tracking-tighter text-4xl sm:text-6xl md:text-7xl lg:text-[6.5rem] text-white leading-none uppercase select-none drop-shadow-lg">
              <span>GRO</span>
              
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

        {/* LEFT SIDE: Vibrant Lounge Coral Red Card */}
        <div className="w-full lg:w-[460px] xl:w-[520px] bg-[#FF5733] text-white p-8 sm:p-12 lg:p-14 flex flex-col justify-between relative z-10">
          
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
              We Build Websites, Custom Software & AI Systems.
            </h1>

            <div className="text-white/90 text-sm sm:text-base font-light leading-relaxed space-y-4 mb-10">
              <p>
                We connect your digital presence, business operations, and automation into a system built around how your business works — from custom web development to CRM, ERP, AI workflows, and SaaS platforms.
              </p>
              <p>
                Practical engineering and clean software architecture built to help your business work smarter and scale faster.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <button
              onClick={() => openBooking()}
              className="w-full sm:w-auto bg-[#1A1A1A] text-white hover:bg-white hover:text-black font-extrabold text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 shadow-2xl flex items-center justify-center gap-3 group hover:scale-105 active:scale-95"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <Link
              href="/services"
              className="w-full sm:w-auto bg-white/20 text-white hover:bg-white hover:text-black font-extrabold text-xs uppercase tracking-widest px-6 py-4 rounded-full transition-all duration-300 text-center"
            >
              Explore Our Services
            </Link>
          </div>

        </div>

      </section>

      {/* =========================================================================
          2. CAPABILITY-BASED TRUST STRIP (Preserved Stats Counter Styling)
         ========================================================================= */}
      <section className="py-16 bg-white text-[#202020] border-y border-gray-200 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-xl sm:text-2xl font-black text-[#202020] mb-2 uppercase tracking-tight">Custom Engineering</div>
            <div className="text-xs font-mono uppercase tracking-widest text-slate-500">Hand-Coded Next.js & React</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black text-[#FF5733] mb-2 uppercase tracking-tight">AI & Automation</div>
            <div className="text-xs font-mono uppercase tracking-widest text-slate-500">Autonomous LLM Workflows</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black text-[#202020] mb-2 uppercase tracking-tight">Business Systems</div>
            <div className="text-xs font-mono uppercase tracking-widest text-slate-500">Connected CRM & ERP Solutions</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black text-[#FF5733] mb-2 uppercase tracking-tight">Global Standards</div>
            <div className="text-xs font-mono uppercase tracking-widest text-slate-500">Built for Global Businesses</div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. PROBLEM SECTION (Using Existing Card Component Styling)
         ========================================================================= */}
      <section className="py-24 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-[#FF5733] font-mono text-xs font-bold uppercase tracking-widest block">
            THE CHALLENGE
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#202020] tracking-tight leading-tight">
            Technology Should Solve Problems, <span className="text-[#FF5733]">Not Create More.</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Many businesses struggle with disconnected tools, outdated websites, and manual bottlenecks that hold back growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              num: "01",
              title: "Outdated Digital Presence",
              desc: "Your website doesn't represent the quality of your business."
            },
            {
              num: "02",
              title: "Manual Operations",
              desc: "Too much time is spent on repetitive tasks."
            },
            {
              num: "03",
              title: "Disconnected Systems",
              desc: "Your tools don't communicate with each other."
            },
            {
              num: "04",
              title: "Growth Bottlenecks",
              desc: "Leads, marketing and customer workflows aren't optimized."
            }
          ].map((item) => (
            <div 
              key={item.num}
              className="bg-white p-8 rounded-3xl border border-[#F0DCDC] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <span className="font-mono text-2xl font-black text-[#FF5733] block">{item.num}</span>
                <h3 className="text-xl font-extrabold text-[#202020] group-hover:text-[#FF5733] transition-colors">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">{item.desc}</p>
              </div>
              <div className="pt-6 mt-6 border-t border-gray-100 text-[11px] font-mono text-gray-400 uppercase font-bold">
                COMMON BUSINESS ISSUE
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          4. MAIN SERVICES — "WHAT WE BUILD" (7 Existing Service Cards)
         ========================================================================= */}
      <section className="py-24 px-6 sm:px-12 bg-white border-y border-[#F0DCDC]">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-[#FF5733] font-mono text-xs font-bold uppercase tracking-widest block">
              CORE CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#202020] tracking-tight">
              What We Build
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Custom-engineered digital solutions built specifically around how your company operates.
            </p>
          </div>

          {/* PRIMARY CAPABILITIES (3 Core Featured Cards) */}
          <div className="space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF5733] block">
              PRIMARY ENGINEERING FOCUS
            </span>
            <div className="grid md:grid-cols-3 gap-8">
              {SERVICES_CARDS.slice(0, 3).map((serv, idx) => {
                const Icon = serv.icon;
                return (
                  <div 
                    key={idx}
                    className="bg-white border-2 border-[#FF5733]/40 hover:border-[#FF5733] rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-2xl relative overflow-hidden"
                  >
                    <div className="absolute top-4 right-4 px-2.5 py-1 bg-[#FF5733]/10 text-[#FF5733] border border-[#FF5733]/30 text-[10px] font-mono font-bold rounded-full uppercase">
                      CORE CAPABILITY
                    </div>
                    <div className="space-y-4 pt-2">
                      <div className="w-12 h-12 rounded-2xl bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>

                      <h3 className="text-2xl font-black text-[#202020] group-hover:text-[#FF5733] transition-colors">
                        {serv.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                        {serv.desc}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[#F0DCDC] flex items-center justify-between">
                      <Link 
                        href="/services"
                        className="text-xs font-extrabold text-[#202020] group-hover:text-[#FF5733] flex items-center gap-1.5 transition-colors uppercase tracking-wider"
                      >
                        <span>Explore Capability</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* SUPPORTING SYSTEMS & PRODUCTS (4 Secondary Cards) */}
          <div className="space-y-4 pt-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-gray-500 block">
              SUPPORTING BUSINESS SYSTEMS & PRODUCTS
            </span>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SERVICES_CARDS.slice(3).map((serv, idx) => {
                const Icon = serv.icon;
                return (
                  <div 
                    key={idx}
                    className="bg-[#FAF2F2] border border-[#F0DCDC] hover:border-[#FF5733] rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between group hover:shadow-md"
                  >
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-white border border-[#F0DCDC] text-[#FF5733] flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>

                      <h3 className="text-lg font-extrabold text-[#202020] group-hover:text-[#FF5733] transition-colors">
                        {serv.title}
                      </h3>

                      <p className="text-xs text-gray-600 leading-relaxed font-normal">
                        {serv.desc}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-[#F0DCDC]">
                      <Link 
                        href="/services"
                        className="text-[11px] font-extrabold text-gray-500 group-hover:text-[#FF5733] flex items-center gap-1 transition-colors uppercase tracking-wider"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          5. BUILD → AUTOMATE → GROW FRAMEWORK
         ========================================================================= */}
      <section className="py-24 px-6 sm:px-12 bg-[#F1F1F1] text-[#202020]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-[#FF5733] font-mono text-xs font-bold uppercase tracking-widest block">
              OUR FRAMEWORK
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#202020] tracking-tight">
              Build. Automate. Grow.
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              A clear 3-stage technology approach that transforms how your business functions online.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-[#F0DCDC] shadow-sm space-y-4">
              <span className="px-3.5 py-1 rounded-full bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] font-mono text-xs font-bold uppercase">
                BUILD
              </span>
              <h3 className="text-2xl font-black text-[#202020]">Websites, software, CRM, ERP & SaaS</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                Solid custom digital infrastructure engineered around your business logic and operational goals.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-[#FF5733]/40 shadow-xl space-y-4">
              <span className="px-3.5 py-1 rounded-full bg-[#FF5733] text-white font-mono text-xs font-bold uppercase">
                AUTOMATE
              </span>
              <h3 className="text-2xl font-black text-[#202020]">AI agents, workflows, integrations & intelligent systems</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                Connecting tools, deploying autonomous LLM workflows, and eliminating repetitive manual processes.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-[#F0DCDC] shadow-sm space-y-4">
              <span className="px-3.5 py-1 rounded-full bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] font-mono text-xs font-bold uppercase">
                GROW
              </span>
              <h3 className="text-2xl font-black text-[#202020]">Marketing, SEO, conversion optimization & analytics</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                Data-backed growth strategies, search visibility, and conversion funnels to scale business revenue.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          6. "ONE PARTNER" FEATURE SECTION (Existing Split Component Style)
         ========================================================================= */}
      <section className="w-full flex flex-col lg:flex-row">
        
        <div className="w-full lg:w-1/2 bg-[#FF5733] text-white p-10 sm:p-16 flex flex-col justify-center">
          <span className="text-black font-mono text-xs uppercase font-bold tracking-widest block mb-3">
            UNIFIED DIGITAL INFRASTRUCTURE
          </span>
          <h2 className="text-3xl sm:text-[2.75rem] font-extrabold leading-tight tracking-tight mb-6 text-white">
            One Technology Partner. Multiple Business Solutions.
          </h2>
          <p className="text-white/90 text-sm sm:text-base leading-relaxed font-light mb-8">
            From your first website to custom software and business automation, NovaMac helps you build the digital infrastructure your business needs to operate and grow.
          </p>
          <div className="flex flex-wrap gap-2 text-xs font-mono font-bold bg-black/20 p-4 rounded-2xl mb-8">
            <span>Website</span> → <span>CRM</span> → <span>Automation</span> → <span>Software</span> → <span>Growth</span>
          </div>
          <button
            onClick={() => openBooking()}
            className="w-fit bg-[#202020] text-white hover:bg-white hover:text-[#202020] font-extrabold text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95"
          >
            Start Your Project
          </button>
        </div>

        <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-[550px] relative bg-[#323232]">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover"><source src="/videos/girl-working.mp4" type="video/mp4" /></video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-10">
            <div className="text-white">
              <span className="text-[#FF5733] font-mono text-xs uppercase font-bold tracking-widest block mb-2">
                PRACTICAL ENGINEERING
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold">Built Around Your Business Workflow</h3>
            </div>
          </div>
        </div>

      </section>

      {/* =========================================================================
          7. PORTFOLIO — NOVAMAC LABS (Honest Concept & Prototype Showcase)
         ========================================================================= */}
      <section className="py-20 lg:py-28 px-6 bg-[#202020] text-white border-t border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-12">
            <span className="text-[#FF5733] font-mono text-xs font-bold uppercase tracking-[0.2em] mb-2 block">
              NOVAMAC LABS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
              Concepts, Prototypes & Digital Products
            </h2>
            <p className="text-slate-400 text-sm sm:text-base font-light">
              Demonstrating our technical capabilities, UX architecture, and engineering standards.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* LEFT: Project Details */}
            <div className="w-full lg:w-5/12 flex flex-col items-start">
              
              <span className="px-3 py-1 bg-[#FF5733]/20 text-[#FF5733] border border-[#FF5733]/30 font-mono text-[11px] uppercase font-bold rounded-full mb-4">
                {LABS_PROJECTS[currentSlide].badge}
              </span>

              <span className="text-slate-400 font-mono text-xs uppercase tracking-widest mb-2">
                {LABS_PROJECTS[currentSlide].category}
              </span>

              <h3 className="text-2xl sm:text-[1.85rem] font-bold tracking-tight text-white leading-snug mb-4">
                {LABS_PROJECTS[currentSlide].title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed font-light mb-6">
                {LABS_PROJECTS[currentSlide].desc}
              </p>

              <div className="text-xs font-mono text-[#FF5733] font-bold mb-8">
                {LABS_PROJECTS[currentSlide].tech}
              </div>

              <button
                onClick={() => openBooking()}
                className="bg-[#FF5733] text-white hover:bg-white hover:text-[#202020] font-extrabold text-xs tracking-widest uppercase px-8 py-4 rounded-full transition-all duration-300 shadow-xl inline-flex items-center gap-2 hover:scale-105 active:scale-95"
              >
                <span>Discuss Your Build</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* RIGHT: Visual Mockup Container */}
            <div className="w-full lg:w-7/12 relative">
              <div className="relative w-full aspect-[1.7] rounded-[2rem] overflow-hidden bg-[#141414]/90 border border-white/10 shadow-2xl p-6 sm:p-10 flex items-center justify-center group">
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full flex items-center justify-center relative"
                  >
                    <div className="w-full h-full rounded-[1.5rem] overflow-hidden border-2 border-white/20 shadow-2xl relative">
                      <img
                        src={LABS_PROJECTS[currentSlide].image}
                        alt={LABS_PROJECTS[currentSlide].title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Carousel Controls */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
                  <button
                    onClick={() => setCurrentSlide((prev) => (prev - 1 + LABS_PROJECTS.length) % LABS_PROJECTS.length)}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#FF5733] text-white flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <div className="flex gap-2">
                    {LABS_PROJECTS.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? "w-8 bg-[#FF5733]" : "w-2 bg-white/30"}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % LABS_PROJECTS.length)}
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
          8. HOW WE APPROACH REAL BUSINESS PROBLEMS
         ========================================================================= */}
      <section className="py-24 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-[#FF5733] font-mono text-xs font-bold uppercase tracking-widest block">
            PROBLEM-SOLVING METHODOLOGY
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#202020] tracking-tight">
            How We Approach Real Business Problems
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: "CHALLENGE", desc: "Identify key bottlenecks, manual delays, or low conversion touchpoints in your operation." },
            { step: "SOLUTION", desc: "Design a targeted software or system architecture tailored to fix the specific issue." },
            { step: "BUILD", desc: "Develop the clean Next.js, API, or database platform with zero unnecessary bloat." },
            { step: "EXPECTED OUTCOME", desc: "Deploy the solution to streamline workflows, improve UX, and support growth." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-[#F0DCDC] shadow-sm space-y-3">
              <span className="font-mono text-xs font-bold text-[#FF5733] block">STAGE 0{idx + 1}</span>
              <h3 className="text-lg font-black text-[#202020]">{item.step}</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          9. WHY NOVAMAC (4 Business Pillars in Existing Style)
         ========================================================================= */}
      <section className="py-24 px-6 sm:px-12 bg-white border-y border-[#F0DCDC]">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-[#FF5733] font-mono text-xs font-bold uppercase tracking-widest block">
              THE NOVAMAC DIFFERENCE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#202020] tracking-tight">
              Why Businesses Choose Custom Technology
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Built Around Your Business", desc: "Not generic software forced into your workflow." },
              { title: "One Technology Partner", desc: "Design, development, automation and growth under one roof." },
              { title: "Scalable by Design", desc: "Solutions built to evolve as your business grows." },
              { title: "Practical Engineering", desc: "Technology decisions based on business requirements, not hype." }
            ].map((pillar, idx) => (
              <div key={idx} className="bg-[#FAF2F2] p-8 rounded-3xl border border-[#F0DCDC] shadow-sm space-y-3 hover:border-[#FF5733] transition-colors">
                <span className="font-mono text-xs font-bold text-[#FF5733]">0{idx + 1} // PRINCIPLE</span>
                <h3 className="text-xl font-bold text-[#202020]">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">{pillar.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          10. SIMPLIFIED 6-STEP PROCESS TIMELINE
         ========================================================================= */}
      <ProcessTimelineSection />

      {/* =========================================================================
          11. INDUSTRIES WE CAN SERVE
         ========================================================================= */}
      <section className="py-24 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-[#FF5733] font-mono text-xs font-bold uppercase tracking-widest block">
            WHO WE WORK WITH
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#202020] tracking-tight">
            Built for Businesses That Need More Than Just a Website
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            We partner with growing service companies, startups, and operationally complex businesses replacing manual workflows with custom digital systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES_LIST.map((ind) => {
            const Icon = ind.icon;
            return (
              <div key={ind.title} className="bg-white border border-[#F0DCDC] rounded-3xl p-8 space-y-4 hover:border-[#FF5733] transition-colors shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-extrabold text-[#202020]">{ind.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">{ind.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          12. TECHNOLOGY SECTION (Positioned Lower as Capability Proof)
         ========================================================================= */}
      <section className="py-8 bg-[#FAF2F2]">
        <TechMarqueeBelt />
      </section>

      {/* =========================================================================
          13. PRICING / PROJECT ESTIMATE SECTION
         ========================================================================= */}
      <section className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-t border-[#F0DCDC]">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-[#FF5733] font-mono text-xs font-bold uppercase tracking-widest block">
            TRANSPARENT SCOPING
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#202020] tracking-tight">
            Every project is scoped around your requirements.
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            No forced monthly subscriptions or generic packages. Transparent project proposals with 100% full source code ownership.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOME_PRICING.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white p-8 rounded-3xl border border-[#F0DCDC] hover:border-[#FF5733] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <span className="font-mono text-xs font-bold text-[#FF5733] uppercase block">
                  ESTIMATE // 0{idx + 1}
                </span>
                <h3 className="text-xl font-extrabold text-[#202020] group-hover:text-[#FF5733] transition-colors">
                  {item.title}
                </h3>
                <div className="text-2xl font-black text-[#202020] border-y border-[#F0DCDC] py-3 my-2">
                  {item.price}
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F0DCDC]">
                <button
                  onClick={() => openBooking()}
                  className="w-full bg-[#202020] text-white hover:bg-[#FF5733] font-extrabold text-xs uppercase tracking-widest py-3 rounded-full transition-colors flex items-center justify-center gap-2"
                >
                  <span>{item.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          14. FAQ ACCORDION SECTION
         ========================================================================= */}
      <section className="py-24 px-6 sm:px-12 bg-white border-y border-[#F0DCDC]">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="text-center space-y-4">
            <span className="text-[#FF5733] font-mono text-xs font-bold uppercase tracking-widest block">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#202020] tracking-tight">
              Got Questions? We Have Answers.
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Clear information about our development capabilities, project scoping, and ongoing technical support.
            </p>
          </div>

          <div className="space-y-4">
            {HOME_FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx}
                  className="bg-[#FAF2F2] border border-[#F0DCDC] rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-extrabold text-base sm:text-lg text-[#202020] hover:text-[#FF5733] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-[#FF5733] shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-xs sm:text-sm text-gray-600 font-normal leading-relaxed border-t border-[#F0DCDC]/60 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          15. PRE-FOOTER CTA
         ========================================================================= */}
      <PreFooterCTASection />

    </div>
  );
}
