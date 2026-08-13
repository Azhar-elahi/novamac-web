"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import Link from "next/link";
import { DoodleUnderline } from "@/components/immersive/Doodles";
import { RichBackgroundArt } from "@/components/immersive/RichBackgroundArt";

export default function PricingClient() {
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

  return (
    <div className="bg-[#F0EDE6] text-[#1C1917] min-h-screen pt-4 pb-32 overflow-hidden relative font-sans">
      <RichBackgroundArt mouseX={mouseX} mouseY={mouseY} />

      {/* ── HERO ── */}
      <section className="px-6 md:px-12 xl:px-20 pt-10 pb-16 max-w-[1400px] mx-auto relative z-10 border-b border-[#D6D1C8]">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#0F52BA]/30 rounded-full text-xs font-mono text-[#0F52BA] font-bold uppercase tracking-widest mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#0F52BA]" />
            TRANSPARENT ARCHITECTURE PRICING
          </div>

          <h1 className="text-[clamp(3.5rem,7.5vw,6.5rem)] font-black tracking-tighter leading-[0.9] text-[#1C1917] mb-6 relative">
            Honest Pricing,<br />
            <span className="relative inline-block text-[#0F52BA]">
              Zero Surprise Fees.
              <DoodleUnderline />
            </span>
          </h1>

          <p className="text-lg md:text-xl text-[#57534E] max-w-2xl leading-relaxed mb-8 font-normal bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-white/90 shadow-sm">
            Fixed scope, predictable delivery timelines, and 100% full source code ownership on day one.
          </p>
        </motion.div>
      </section>

      {/* ── PRICING TIERS ── */}
      <section className="px-6 md:px-12 xl:px-20 py-20 max-w-[1400px] mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "STARTER PLATFORM",
              price: "$999",
              desc: "Perfect for high-growth startups requiring a fast, conversion-focused Next.js web presence.",
              features: ["Up to 5 Custom Pages", "Next.js / React Stack", "Technical SEO Setup", "Sub-second Load Times", "2 Revision Rounds", "2-Week Delivery"],
              popular: false
            },
            {
              name: "GROWTH STUDIO",
              price: "$2,999",
              desc: "Complete web platform with custom CMS, interactive UI animations, and full digital design system.",
              features: ["Up to 15 Custom Pages", "Custom Figma UI/UX Design", "Headless CMS Integration", "Advanced SEO & Analytics", "WebGL/GSAP Animations", "3-Week Delivery"],
              popular: true
            },
            {
              name: "ENTERPRISE SAAS",
              price: "Custom",
              desc: "Full-scale custom web application, AI workflow bots, bespoke CRM, and dedicated SLA support.",
              features: ["Unlimited Custom Routes", "Custom SaaS Architecture", "OpenAI / Claude AI Integration", "PostgreSQL / Prisma Database", "Dedicated PM & 24/7 SLA", "Ongoing Maintenance"],
              popular: false
            }
          ].map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`bg-white/95 backdrop-blur-md rounded-3xl p-8 border flex flex-col justify-between relative shadow-sm hover:shadow-2xl transition-all duration-300 ${tier.popular ? "border-2 border-[#0F52BA]" : "border-[#D6D1C8]"}`}
            >
              {tier.popular && (
                <span className="absolute -top-3.5 right-8 bg-[#0F52BA] text-white px-4 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest shadow-md">
                  MOST POPULAR
                </span>
              )}
              <div>
                <div className="text-xs font-mono font-bold text-[#0F52BA] uppercase tracking-widest mb-2">{tier.name}</div>
                <div className="text-4xl font-black text-[#1C1917] mb-4">{tier.price}</div>
                <p className="text-xs text-[#78716C] leading-relaxed mb-6 border-b border-[#D6D1C8] pb-6">{tier.desc}</p>
                <div className="space-y-3 mb-8">
                  {tier.features.map((f) => (
                    <div key={f} className="flex items-center gap-2.5 text-xs text-[#57534E]">
                      <Check className="w-4 h-4 text-[#0F52BA] shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Link 
                href="/contact" 
                className={`w-full py-4 text-center font-bold text-xs tracking-widest uppercase rounded-full transition-all duration-300 ${tier.popular ? "bg-[#0F52BA] text-white hover:bg-[#1C1917]" : "bg-[#1C1917] text-white hover:bg-[#0F52BA]"}`}
              >
                Initiate Project
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
