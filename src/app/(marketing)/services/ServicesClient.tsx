"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles, Layers, Code, ShoppingCart, Brain, LineChart, Cpu } from "lucide-react";
import Link from "next/link";
import { SERVICES } from "@/lib/services-data";
import { DoodleUnderline } from "@/components/immersive/Doodles";
import { RichBackgroundArt } from "@/components/immersive/RichBackgroundArt";

// Unique, non-repetitive images for every single service card
const serviceImages: Record<string, string> = {
  "custom-web-development": "/images/web_dev.jpg",
  "ecommerce-development": "/images/ecommerce.jpg",
  "shopify-development": "/images/ecommerce.webp",
  "woocommerce-development": "/images/web_app.jpg",
  "wordpress-development": "/images/web_dev.webp",
  "ai-automation": "/images/ai_automation.jpg",
  "crm-business-automation": "/images/ai_automation.webp",
  "performance-marketing": "/images/lead_gen.jpg",
  "social-media-marketing": "/images/lead_gen.webp",
  "seo-technical-audits": "/images/marketing_seo.jpg",
  "mobile-app-development": "/images/mobile_app.jpg",
  "ui-ux-design": "/images/ui_ux.jpg",
  "graphic-design-branding": "/images/graphic_branding.jpg",
  "lead-generation-funnels": "/images/marketing_seo.webp",
  "cloud-devops": "/images/cloud_devops.jpg",
  "maintenance-support": "/images/cloud_devops.webp",
};

const CATEGORIES = [
  { id: "all", label: "All Capabilities" },
  { id: "web", label: "Web Engineering" },
  { id: "ecommerce", label: "E-Commerce" },
  { id: "ai", label: "AI & Automation" },
  { id: "marketing", label: "Marketing & Growth" },
  { id: "design", label: "Design & Cloud" },
];

export default function ServicesClient() {
  const [activeCategory, setActiveCategory] = useState("all");
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

  const filteredServices = SERVICES.filter((service) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "web") return service.slug.includes("web") || service.slug.includes("wordpress");
    if (activeCategory === "ecommerce") return service.slug.includes("ecommerce") || service.slug.includes("shopify") || service.slug.includes("woocommerce");
    if (activeCategory === "ai") return service.slug.includes("ai") || service.slug.includes("crm") || service.slug.includes("automation");
    if (activeCategory === "marketing") return service.slug.includes("marketing") || service.slug.includes("seo") || service.slug.includes("lead");
    if (activeCategory === "design") return service.slug.includes("design") || service.slug.includes("branding") || service.slug.includes("cloud") || service.slug.includes("mobile") || service.slug.includes("maintenance");
    return true;
  });

  return (
    <div className="bg-[#0B1220] text-[#F8FAFC] min-h-screen pt-4 pb-32 overflow-hidden relative font-sans">
      <RichBackgroundArt mouseX={mouseX} mouseY={mouseY} opacity="opacity-[0.02]" />

      {/* ── HERO SECTION ── */}
      <section className="px-4 sm:px-8 md:px-12 xl:px-20 pt-6 sm:pt-10 pb-12 sm:pb-16 max-w-[1400px] mx-auto relative z-10 border-b border-[#1E2E4A]">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#0F1C33] to-[#091222] border border-[#1E2E4A] border-t-white/10 rounded-full text-xs font-mono text-[#3B82F6] font-bold uppercase tracking-widest mb-6 sm:mb-8 shadow-md">
            <Sparkles className="w-4 h-4 text-[#3B82F6]" />
            Capabilities & Systems
          </div>

          {/* SINGLE UNIQUE H1 HEADLINE WITH AMPLE VERTICAL BREATHING ROOM */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] sm:leading-[0.95] text-[#F8FAFC] mb-8 sm:mb-12 relative">
            Engineered<br />
            <span className="relative inline-block text-[#3B82F6] pb-2">
              For High Stakes.
              <DoodleUnderline />
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-[#94A3B8] max-w-2xl leading-relaxed font-normal bg-gradient-to-b from-[#0F1C33]/90 via-[#091222]/95 to-[#050A14] p-5 sm:p-6 rounded-2xl border border-[#1E2E4A] border-t-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.6)] mt-4">
            We don't build generic websites. We design and engineer web platforms, high-conversion e-commerce stores, custom CRMs, and complex web apps tailored for ambitious businesses.
          </p>
        </motion.div>
      </section>

      {/* ── CATEGORY FILTER TABS & SERVICES GRID ── */}
      <section className="px-6 md:px-12 xl:px-20 py-16 max-w-[1400px] mx-auto relative z-10">
        
        {/* Category Filter Controls */}
        <div className="flex flex-wrap gap-2.5 mb-12 justify-start items-center">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full font-mono text-xs font-bold transition-all duration-300 border cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-[#3B82F6] text-white border-[#3B82F6] shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                  : "bg-gradient-to-r from-[#0F1C33] to-[#091222] text-[#94A3B8] border-[#1E2E4A] hover:border-[#3B82F6] hover:text-[#F8FAFC]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid with Uniform Heights & Distinct Images */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredServices.map((service, i) => {
            const imageSrc = serviceImages[service.slug] || "/images/web_dev.jpg";
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                whileHover={{ y: -6 }}
              >
                <div className="border border-[#1E2E4A] border-t-white/15 bg-gradient-to-b from-[#0F1C33] via-[#091222] to-[#050A14] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.65)] hover:shadow-[0_25px_65px_rgba(0,0,0,0.85),0_0_45px_rgba(59,130,246,0.3)] hover:border-[#3B82F6]/80 transition-all duration-300 group h-full flex flex-col justify-between transform-gpu">
                  
                  <div className="h-48 w-full relative overflow-hidden bg-[#040810]">
                    <img src={imageSrc} alt={service.title} className="w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#091222] via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3.5 py-1 bg-[#091222]/90 border border-[#3B82F6]/40 text-[#3B82F6] font-mono text-xs uppercase tracking-widest rounded-full font-bold shadow-sm">
                        0{i+1} // Capability
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex-1 flex flex-col justify-between">
                    <div>
                      {/* UNIFORM MIN-HEIGHT TITLE & TAGLINE FOR EVEN ROW ALIGNMENT */}
                      <h3 className="font-extrabold text-xl sm:text-2xl text-[#F8FAFC] mb-3 group-hover:text-[#3B82F6] transition-colors min-h-[56px] flex items-center">
                        {service.title}
                      </h3>
                      <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed mb-6 font-normal min-h-[48px]">
                        {service.tagline}
                      </p>
                    </div>

                    {/* SPACED BULLET LIST ITEMS */}
                    <div className="space-y-3.5 mb-8 pt-4 border-t border-[#1E2E4A]">
                      {service.included.slice(0, 3).map((f) => (
                        <div key={f} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>

                    <Link 
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center justify-between w-full px-6 py-3.5 bg-gradient-to-r from-[#0B1426] to-[#040810] border border-[#1E2E4A] border-t-white/10 text-[#F8FAFC] font-extrabold text-xs sm:text-sm tracking-widest uppercase rounded-full group-hover:bg-[#3B82F6] group-hover:text-white transition-all duration-300 shadow-md min-h-[44px]"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
