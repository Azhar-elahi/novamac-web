"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight, CheckCircle2, Code, Layout, Database, ShoppingCart, Cpu, Search, Sparkles } from "lucide-react";
import Link from "next/link";

const SERVICE_CATEGORIES = [
  {
    id: "web-dev",
    title: "Custom Web Development",
    icon: Code,
    desc: "Hand-coded Next.js 15 & React 19 web applications engineered for sub-second speeds (<50ms latency), search engine dominance, and high conversion rates.",
    features: [
      "Sub-Second Next.js & React Architecture",
      "100/100 Google PageSpeed Insights Compliance",
      "Headless CMS Integration (Sanity, Payload, Strapi)",
      "Zero-Vulnerability Codebase & SSL Security"
    ],
    pricing: "Starting at $499"
  },
  {
    id: "ui-ux",
    title: "UI/UX Design Studio",
    icon: Layout,
    desc: "Pixel-perfect Figma design systems, interactive prototypes, micro-animations, and conversion-engineered visual interfaces.",
    features: [
      "Custom Vector Figma Component Systems",
      "Interactive High-Fidelity Prototypes",
      "User Journey & Conversion Rate Optimization",
      "Brand Identity & Style Guide Bundles"
    ],
    pricing: "Starting at $299"
  },
  {
    id: "ecommerce",
    title: "Headless E-Commerce",
    icon: ShoppingCart,
    desc: "Fast Shopify Storefront API and custom WooCommerce shopping experiences engineered for ultra-fast checkout and seamless catalog browsing.",
    features: [
      "Shopify Storefront API & Custom Next.js Cart",
      "Multi-Currency Stripe & Crypto Payment Checkouts",
      "Instant Real-Time Inventory & Search Indexing",
      "Sub-300ms Mobile Checkout SLA"
    ],
    pricing: "Starting at $599"
  },
  {
    id: "ai-crm",
    title: "AI & Custom CRM Automation",
    icon: Cpu,
    desc: "Bespoke internal operations software replacing spreadsheets with unified role-based portals, OpenAI GPT-4o integrations, and autonomous AI agents.",
    features: [
      "Role-Based Access Internal Portals",
      "24/7 Autonomous AI Customer & Qualification Agents",
      "RAG Knowledge Search & Vector Databases",
      "Automated Lead Pipeline & SMS Outreach"
    ],
    pricing: "Starting at $599"
  },
  {
    id: "seo",
    title: "Search Everywhere Optimization",
    icon: Search,
    desc: "Generative Engine Optimization (GEO), Answer Engine Optimization (AEO), and technical SEO engineered to dominate AI search engines like Perplexity, ChatGPT, and Google SGE.",
    features: [
      "Generative & Answer Engine Optimization (GEO/AEO)",
      "Schema.org Structured Data & Entity Indexing",
      "Technical Core Web Vitals Dominance",
      "B2B Lead Generation Funnel Optimization"
    ],
    pricing: "Starting at $199/mo"
  }
];

export default function ServicesClient() {
  const [activeTab, setActiveTab] = useState("web-dev");

  const currentCategory = SERVICE_CATEGORIES.find((s) => s.id === activeTab) || SERVICE_CATEGORIES[0];

  return (
    <div className="bg-[#FAF2F2] text-[#202020] min-h-screen pt-0 pb-20 overflow-hidden font-sans">
      
      {/* HERO SECTION WITH VIDEO BACKGROUND */}
      <section className="relative px-6 sm:px-12 lg:px-20 py-24 border-b border-white/10 overflow-hidden min-h-[50vh] flex items-center bg-[#0D0D0D] text-white">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-90">
            <source src="/videos/tech-innovation.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/90 via-[#0D0D0D]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-black/40" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl relative z-10"
        >
          <span className="px-4 py-1.5 bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] font-mono text-xs font-bold uppercase tracking-widest rounded-full inline-block mb-6">
            FULL-SERVICE AGENCY CAPABILITIES
          </span>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-8">
            Digital Products & Services That Drive Measurable Revenue.
          </h1>

          <p className="text-gray-300 text-base sm:text-xl font-light leading-relaxed mb-10 max-w-2xl">
            We blend strategic branding, pixel-perfect UI/UX, hand-coded Next.js engineering, and AI automation to help ambitious brands lead their industries.
          </p>
        </motion.div>
      </section>

      {/* INTERACTIVE SERVICES MATRIX */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* LEFT: Category Navigation Pills */}
          <div className="w-full lg:w-4/12 flex flex-col gap-3">
            {SERVICE_CATEGORIES.map((serv) => {
              const Icon = serv.icon;
              const isActive = activeTab === serv.id;
              return (
                <button
                  key={serv.id}
                  onClick={() => setActiveTab(serv.id)}
                  className={`w-full p-5 rounded-2xl flex items-center justify-between text-left transition-all duration-300 font-extrabold text-base ${isActive ? "bg-[#FF5733] text-white shadow-xl scale-[1.02]" : "bg-white text-[#202020] hover:bg-[#FF5733]/10 hover:text-[#FF5733] border border-[#F0DCDC]"}`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5" />
                    <span>{serv.title}</span>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${isActive ? "translate-x-1" : ""}`} />
                </button>
              );
            })}
          </div>

          {/* RIGHT: Active Category Details Card */}
          <div className="w-full lg:w-8/12 bg-white border border-[#F0DCDC] text-[#202020] rounded-3xl p-8 sm:p-12 relative overflow-hidden flex flex-col justify-between shadow-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCategory.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-center justify-between mb-6 border-b border-[#F0DCDC] pb-6">
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202020]">
                    {currentCategory.title}
                  </h2>
                  <span className="px-4 py-1.5 bg-[#FF5733]/10 text-[#FF5733] font-mono text-xs font-bold rounded-full">
                    {currentCategory.pricing}
                  </span>
                </div>

                <p className="text-gray-600 text-base leading-relaxed font-light mb-8">
                  {currentCategory.desc}
                </p>

                <h3 className="text-xs font-mono uppercase tracking-widest text-[#FF5733] mb-4">
                  CORE DELIVERABLES & FEATURES
                </h3>

                <ul className="grid sm:grid-cols-2 gap-4 mb-10">
                  {currentCategory.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-[#FF5733] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>

            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/contact"
                className="bg-[#FF5733] text-white hover:bg-white hover:text-black font-extrabold text-xs tracking-widest uppercase px-8 py-4 rounded-full transition-all duration-300 shadow-xl inline-flex items-center gap-2"
              >
                <span>Request {currentCategory.title} Scope</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <span className="text-xs font-mono text-gray-400">
                100% Source Code Ownership Guaranteed
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-6 bg-[#FF5733] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight mb-6">
            Let&apos;s Build Your Next Digital Product
          </h2>
          <p className="text-white/90 text-base sm:text-lg mb-8 max-w-xl mx-auto font-light">
            Tell us about your project requirements and receive a comprehensive proposal within 24 hours.
          </p>
          <Link
            href="/contact"
            className="bg-black text-white hover:bg-white hover:text-black font-extrabold text-xs tracking-widest uppercase px-10 py-5 rounded-full transition-all duration-300 shadow-2xl inline-flex items-center gap-2"
          >
            <span>Request Proposal</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}

