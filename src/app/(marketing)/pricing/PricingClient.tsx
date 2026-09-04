"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Zap, Shield, Sparkles } from "lucide-react";
import Link from "next/link";

const PRICING_TIERS = [
  {
    name: "Starter Platform",
    price: "$299",
    period: "Fixed Project",
    desc: "Perfect for small businesses needing a high-speed, modern web presence built from scratch.",
    features: [
      "Up to 5 Custom Next.js Pages",
      "Sub-Second Latency (<50ms)",
      "Technical SEO & Schema Markup",
      "Mobile-First Responsive Layout",
      "100% Source Code Ownership",
      "10-14 Days SLA Delivery"
    ],
    popular: false,
    cta: "Select Starter Scope"
  },
  {
    name: "Growth Studio",
    price: "$599",
    period: "Fixed Project",
    desc: "Engineered for growing businesses needing custom Figma design, CMS integration, and CRO.",
    features: [
      "Up to 15 Custom Next.js Pages",
      "Custom Vector Figma Design System",
      "Headless CMS Integration",
      "Advanced SEO & GEO/AEO Optimization",
      "Google Analytics & Conversion Tracking",
      "100% Source Code Ownership",
      "3 Weeks SLA Delivery"
    ],
    popular: true,
    cta: "Select Growth Scope"
  },
  {
    name: "Enterprise SaaS & AI",
    price: "From $999",
    period: "Custom Architecture",
    desc: "Full-scale custom web applications, bespoke CRM software, and autonomous AI agent workflows.",
    features: [
      "Full Custom SaaS / CRM Portal App",
      "Autonomous AI Agent Workflows",
      "PostgreSQL & Prisma ORM Architecture",
      "Stripe & Multi-Currency Checkouts",
      "Dedicated Senior Tech Lead & PM",
      "Priority 24/7 SLA Support",
      "Full Source Code Transfer"
    ],
    popular: false,
    cta: "Request Enterprise Scope"
  }
];

export default function PricingClient() {
  return (
    <div className="bg-[#FAF2F2] text-[#202020] min-h-screen pt-0 pb-20 overflow-hidden font-sans">
      
      {/* HERO SECTION WITH VIDEO BACKGROUND */}
      <section className="relative px-6 sm:px-12 lg:px-20 py-24 border-b border-white/10 overflow-hidden min-h-[50vh] flex items-center text-center bg-[#0D0D0D] text-white">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-90">
            <source src="/videos/city-traffic.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/80 via-[#0D0D0D]/40 to-[#0D0D0D]/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-black/40" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto relative z-10"
        >
          <span className="px-4 py-1.5 bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] font-mono text-xs font-bold uppercase tracking-widest rounded-full inline-block mb-6">
            TRANSPARENT AGENCY PRICING
          </span>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-8">
            Predictable Scope. Zero Vendor Lock-in.
          </h1>

          <p className="text-gray-300 text-base sm:text-xl font-light leading-relaxed mb-10">
            Fixed project pricing with 100% full source code ownership on day one. No hidden monthly software licenses.
          </p>
        </motion.div>
      </section>

      {/* PRICING CARDS GRID */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {PRICING_TIERS.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative transition-all duration-300 ${tier.popular ? "bg-[#202020] text-white border-2 border-[#FF5733] shadow-2xl scale-[1.03]" : "bg-white text-[#202020] border border-[#F0DCDC] shadow-sm hover:border-[#FF5733]"}`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#FF5733] text-white font-mono text-[10px] uppercase font-bold tracking-widest rounded-full shadow-lg">
                  MOST POPULAR AGENCY SCOPE
                </span>
              )}

              <div>
                <h3 className={`text-2xl font-extrabold mb-2 ${tier.popular ? "text-white" : "text-[#202020]"}`}>{tier.name}</h3>
                <p className={`text-xs font-light leading-relaxed mb-6 ${tier.popular ? "text-gray-300" : "text-gray-600"}`}>{tier.desc}</p>

                <div className={`flex items-baseline gap-2 mb-8 border-b pb-6 ${tier.popular ? "border-white/10" : "border-[#F0DCDC]"}`}>
                  <span className={`text-4xl sm:text-5xl font-black ${tier.popular ? "text-white" : "text-[#202020]"}`}>{tier.price}</span>
                  <span className="text-xs font-mono text-[#FF5733] font-bold">{tier.period}</span>
                </div>

                <ul className="space-y-3 mb-10">
                  {tier.features.map((feat, i) => (
                    <li key={i} className={`flex items-start gap-3 text-xs sm:text-sm ${tier.popular ? "text-gray-200" : "text-slate-700 font-medium"}`}>
                      <CheckCircle2 className="w-4 h-4 text-[#FF5733] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className={`w-full font-extrabold text-xs uppercase tracking-widest py-4 rounded-full transition-all duration-300 text-center ${tier.popular ? "bg-[#FF5733] text-white hover:bg-white hover:text-black shadow-xl" : "bg-[#202020] text-white hover:bg-[#FF5733]"}`}
              >
                {tier.cta}
              </Link>

            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-6 bg-[#FF5733] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight mb-6">
            Need a Custom Enterprise Quote?
          </h2>
          <p className="text-white/90 text-base sm:text-lg mb-8 max-w-xl mx-auto font-light">
            Contact our strategy team to receive a tailored project scope and proposal within 24 hours.
          </p>
          <Link
            href="/contact"
            className="bg-black text-white hover:bg-white hover:text-black font-extrabold text-xs tracking-widest uppercase px-10 py-5 rounded-full transition-all duration-300 shadow-2xl inline-flex items-center gap-2"
          >
            <span>Request Enterprise Scope</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}

