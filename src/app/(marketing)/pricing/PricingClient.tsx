"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles, Zap, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { DoodleUnderline } from "@/components/immersive/Doodles";
import { RichBackgroundArt } from "@/components/immersive/RichBackgroundArt";
import { getPricingPlans, PricingPlanItem } from "@/app/actions/pricing";

export default function PricingClient() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [plans, setPlans] = useState<PricingPlanItem[]>([]);

  useEffect(() => {
    getPricingPlans().then(setPlans);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth) - 0.5);
      mouseY.set((e.clientY / window.innerHeight) - 0.5);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const mainTiers = plans.filter(p => ["starter", "growth", "enterprise"].includes(p.slug));

  const displayTiers = mainTiers.length > 0 ? mainTiers : [
    {
      id: "starter",
      slug: "starter",
      title: "Starter Platform",
      price: "$299",
      subtitle: "Perfect for high-growth startups requiring a fast Next.js web presence.",
      features: ["Up to 5 Custom Pages", "Next.js / React Stack", "Technical SEO Setup", "Sub-second Load Times (<50ms)", "2 Revision Rounds", "14 Days Post-Launch Support"],
      popular: false
    },
    {
      id: "growth",
      slug: "growth",
      title: "Growth Studio",
      price: "$599",
      subtitle: "Complete web platform with custom CMS and full digital design system.",
      features: ["Up to 15 Custom Pages", "Custom Figma UI/UX Design", "Headless CMS Integration", "Advanced SEO & Analytics", "Google Analytics & Conversion Tracking", "30 Days Dedicated Support"],
      popular: true
    },
    {
      id: "enterprise",
      slug: "enterprise",
      title: "Enterprise SaaS",
      price: "From $999",
      subtitle: "Full-scale custom web application, bespoke CRM, and dedicated SLA support.",
      features: ["Unlimited Custom Routes", "Custom SaaS Architecture", "OpenAI / Claude AI Integration", "PostgreSQL / Prisma Database", "Zero-Trust Security & SOC2 Compliance", "Priority 24/7 SLA Support"],
      popular: false
    }
  ];

  return (
    <div className="bg-[#0B1220] text-[#F8FAFC] min-h-screen pt-4 pb-32 overflow-hidden relative font-sans">
      <RichBackgroundArt mouseX={mouseX} mouseY={mouseY} opacity="opacity-90" />

      {/* ── HERO SECTION ── */}
      <section className="px-4 sm:px-8 md:px-12 xl:px-20 pt-6 sm:pt-10 pb-10 sm:pb-16 max-w-[1400px] mx-auto relative z-10 border-b border-[#1E2E4A]">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* ANCHORED PERFORMANCE METRIC & TITLE CASE BADGE */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-gradient-to-r from-[#0F1C33] to-[#091222] border border-[#1E2E4A] border-t-white/10 rounded-full text-xs font-mono text-[#3B82F6] font-bold uppercase tracking-wider mb-6 shadow-md">
            <Zap className="w-4 h-4 text-[#3B82F6] animate-pulse" />
            <span>Transparent Architecture Pricing · Global Edge Latency &lt;50ms</span>
          </div>

          {/* SINGLE UNIQUE H1 HEADLINE */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] sm:leading-[0.95] text-[#F8FAFC] mb-6 sm:mb-8 relative">
            Honest Pricing,<br />
            <span className="relative inline-block text-[#3B82F6] pb-2">
              Zero Surprise Fees.
              <DoodleUnderline />
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-[#94A3B8] max-w-2xl leading-relaxed font-normal bg-gradient-to-b from-[#0F1C33]/90 via-[#091222]/95 to-[#050A14] p-5 sm:p-6 rounded-2xl border border-[#1E2E4A] border-t-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
            Fixed scope, predictable delivery timelines, and 100% full source code ownership on day one.
          </p>
        </motion.div>
      </section>

      {/* ── PRICING TIERS ── */}
      <section className="px-4 sm:px-8 md:px-12 xl:px-20 py-12 sm:py-20 max-w-[1400px] mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-8 sm:gap-10">
          {displayTiers.map((tier, i) => (
            <motion.div
              key={tier.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`bg-gradient-to-b from-[#0F1C33] via-[#091222] to-[#050A14] rounded-3xl p-8 sm:p-9 border border-[#1E2E4A] border-t-white/15 flex flex-col justify-between relative shadow-[0_20px_50px_rgba(0,0,0,0.65)] hover:shadow-[0_25px_65px_rgba(0,0,0,0.85),0_0_45px_rgba(59,130,246,0.3)] transition-all duration-300 ${tier.popular ? "border-2 border-[#3B82F6]" : ""}`}
            >
              {tier.popular && (
                <span className="absolute -top-3.5 right-8 bg-[#3B82F6] text-white px-4 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                  Most Popular
                </span>
              )}
              <div>
                <div className="text-xs sm:text-sm font-mono font-bold text-[#3B82F6] uppercase tracking-wider mb-2">{tier.title}</div>
                <div className="text-4xl sm:text-5xl font-black text-[#F8FAFC] mb-4">{tier.price}</div>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6 border-b border-[#1E2E4A] pb-6 font-normal min-h-[48px]">{tier.subtitle}</p>
                <div className="space-y-3.5 mb-8">
                  {tier.features.map((f) => (
                    <div key={f} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Link 
                href="/contact" 
                className={`w-full py-4 font-extrabold text-xs sm:text-sm tracking-widest uppercase rounded-full text-center block transition-all shadow-md min-h-[44px] ${tier.popular ? "bg-[#3B82F6] text-white hover:bg-white hover:text-[#0B1220]" : "bg-gradient-to-r from-[#0B1426] to-[#040810] border border-[#1E2E4A] border-t-white/10 text-[#F8FAFC] hover:border-[#3B82F6] hover:text-[#3B82F6]"}`}
              >
                Select {tier.title.split(' ')[0]}
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
