"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Terminal, Calculator } from "lucide-react";
import Link from "next/link";
import { PreFooterCTASection } from "@/components/sections/PreFooterCTASection";

const PRICING_TIERS = [
  {
    name: "Web Platforms",
    priceRange: "$1,200 – $3,500",
    period: "Custom Project Scope",
    desc: "High-performing Next.js web applications, corporate platforms, and conversion systems built for speed.",
    features: [
      "Custom Next.js & React 19 UI Architecture",
      "Sub-Second Edge Latency (<0.8s SLA)",
      "Built-in Technical SEO & Schema Markup",
      "Responsive Mobile & Tablet Optimization",
      "Easy-to-use CMS or Content Access",
      "100% Source Code & IP Transfer"
    ],
    popular: true,
    cta: "Request Web Scope"
  },
  {
    name: "Business Systems & CRM",
    priceRange: "$2,500 – $6,000",
    period: "Custom Project Scope",
    desc: "Custom CRM and ERP systems for lead management, customer operations, inventory, and finance.",
    features: [
      "Custom Sales Pipeline & Lead Board",
      "Role-Based Access Control (RBAC)",
      "Real-Time Executive Analytics",
      "Legacy Data & Spreadsheet Migration",
      "Zero Per-Seat Monthly Licensing Fees",
      "100% Full Code Ownership"
    ],
    popular: false,
    cta: "Request Systems Scope"
  },
  {
    name: "AI & Process Automation",
    priceRange: "$2,000 – $5,500",
    period: "Custom Project Scope",
    desc: "Autonomous AI agents, automated lead qualification pipelines, and internal RAG knowledge bases.",
    features: [
      "Custom OpenAI & Claude API Workflows",
      "RAG Document Search & Vector Base",
      "Automated SMS & Email Triggers",
      "System Connectors (Email, CRM, Slack)",
      "24/7 Inquiry Qualification SLA",
      "Safety Guardrails & Monitoring"
    ],
    popular: false,
    cta: "Request Automation Scope"
  },
  {
    name: "SaaS & Custom Software",
    priceRange: "$3,500 – $10,000+",
    period: "Custom Project Scope",
    desc: "Full-stack software engineering for founders launching custom SaaS products or internal web apps.",
    features: [
      "Full-Stack Web App Engineering",
      "Multi-Tenant SaaS Infrastructure",
      "Stripe Subscription & Billing Portal",
      "Scalable PostgreSQL & Cloud Schemas",
      "100% IP & Codebase Handoff",
      "Post-Launch Technical Support"
    ],
    popular: false,
    cta: "Request Software Scope"
  }
];

export default function PricingClient() {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div className="bg-[#FAF2F2] text-[#202020] min-h-screen pt-0 pb-0 overflow-hidden font-sans">
      
      {/* HERO SECTION WITH VIDEO BACKGROUND */}
      <section className="relative px-6 sm:px-12 lg:px-20 py-24 lg:py-32 border-b border-white/10 overflow-hidden min-h-[60vh] flex items-center bg-[#0D0D0D] text-white">
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover opacity-90 pointer-events-none transform-gpu"
          >
            <source src="/videos/city-traffic.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/90 via-[#0D0D0D]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-black/40" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl relative z-10"
        >
          <span className="px-4 py-1.5 bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] font-mono text-xs font-bold uppercase tracking-widest rounded-full inline-flex items-center gap-2 mb-6">
            <Calculator className="w-3.5 h-3.5" /> HONEST PROJECT SCOPING
          </span>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-8">
            Every project is scoped around your requirements.
          </h1>

          <p className="text-gray-300 text-base sm:text-xl font-light leading-relaxed mb-10 max-w-3xl">
            Transparent, milestone-based project quotes with 100% full source code ownership on day one. Zero hidden fees or forced monthly lock-ins.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="bg-[#FF5733] text-white hover:bg-white hover:text-black font-extrabold text-xs tracking-widest uppercase px-8 py-4 rounded-full transition-all duration-300 shadow-xl inline-flex items-center gap-2"
            >
              <span>Get a Custom Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* SCOPED PRICING GUARANTEES STRIP */}
      <section className="py-12 px-6 bg-[#141414] border-b border-white/10 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="flex items-center justify-center gap-3 p-4">
            <ShieldCheck className="w-6 h-6 text-[#FF5733]" />
            <div className="text-left">
              <div className="font-bold text-sm text-white uppercase tracking-wider">Fixed Milestone Quotes</div>
              <div className="text-xs text-gray-400 font-light">No unexpected charges or mid-project scope creep</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 p-4">
            <Terminal className="w-6 h-6 text-[#FF5733]" />
            <div className="text-left">
              <div className="font-bold text-sm text-white uppercase tracking-wider">100% Source Code Transfer</div>
              <div className="text-xs text-gray-400 font-light">Complete repository ownership with zero lock-in</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 p-4">
            <CheckCircle2 className="w-6 h-6 text-[#FF5733]" />
            <div className="text-left">
              <div className="font-bold text-sm text-white uppercase tracking-wider">Zero Per-Seat Fees</div>
              <div className="text-xs text-gray-400 font-light">Build custom tools without per-user monthly costs</div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING ESTIMATE CARDS GRID */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-[#FF5733] font-mono text-xs font-bold uppercase tracking-widest block">
            ESTIMATED PROJECT RANGES
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0D0D0D] tracking-tight">
            Realistic Estimates for Real Engineering Work
          </h2>
          <p className="text-gray-600 text-sm sm:text-base font-light">
            Exact pricing depends on your technical scope, integrations, and feature set.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRICING_TIERS.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative transition-all duration-300 ${
                tier.popular 
                  ? "bg-[#0D0D0D] text-white border-2 border-[#FF5733] shadow-2xl scale-[1.02]" 
                  : "bg-white text-[#0D0D0D] border border-[#F0DCDC] shadow-sm hover:border-[#FF5733]"
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#FF5733] text-white font-mono text-[10px] uppercase font-bold tracking-widest rounded-full shadow-lg">
                  MOST REQUESTED
                </span>
              )}

              <div>
                <h3 className={`text-xl font-extrabold mb-2 ${tier.popular ? "text-white" : "text-[#0D0D0D]"}`}>
                  {tier.name}
                </h3>
                <p className={`text-xs font-light leading-relaxed mb-6 ${tier.popular ? "text-gray-300" : "text-gray-600"}`}>
                  {tier.desc}
                </p>

                <div className={`flex flex-col mb-6 border-b pb-4 ${tier.popular ? "border-white/10" : "border-[#F0DCDC]"}`}>
                  <span className="text-xs font-mono text-[#FF5733] font-bold uppercase tracking-wider mb-1">
                    ESTIMATED RANGE
                  </span>
                  <span className={`text-2xl sm:text-3xl font-black ${tier.popular ? "text-white" : "text-[#0D0D0D]"}`}>
                    {tier.priceRange}
                  </span>
                  <span className="text-[11px] font-mono text-gray-400 font-medium mt-1">
                    {tier.period}
                  </span>
                </div>

                <ul className="space-y-2.5 mb-8">
                  {tier.features.map((feat, i) => (
                    <li key={i} className={`flex items-start gap-2.5 text-xs ${tier.popular ? "text-gray-200" : "text-gray-700 font-medium"}`}>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5733] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className={`w-full font-extrabold text-xs uppercase tracking-widest py-3.5 rounded-full transition-all duration-300 text-center flex items-center justify-center gap-2 ${
                  tier.popular 
                    ? "bg-[#FF5733] text-white hover:bg-white hover:text-black shadow-xl" 
                    : "bg-[#0D0D0D] text-white hover:bg-[#FF5733]"
                }`}
              >
                <span>{tier.cta}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

            </motion.div>
          ))}
        </div>
      </section>

      {/* PRE-FOOTER CTA */}
      <PreFooterCTASection />

    </div>
  );
}
