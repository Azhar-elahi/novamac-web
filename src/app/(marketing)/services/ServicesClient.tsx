"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import Link from "next/link";
import { SERVICES } from "@/lib/services-data";
import { DoodleUnderline } from "@/components/immersive/Doodles";
import { RichBackgroundArt } from "@/components/immersive/RichBackgroundArt";

const serviceImages: Record<string, string> = {
  "custom-web-development": "/images/web_dev.jpg",
  "ecommerce-development": "/images/ecommerce.jpg",
  "ui-ux-design": "/images/ui_ux.jpg",
  "custom-crm-development": "/images/ai_automation.jpg",
  "web-application-development": "/images/web_app.jpg",
};

export default function ServicesClient() {
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
      <section className="px-4 sm:px-8 md:px-12 xl:px-20 pt-6 sm:pt-10 pb-10 sm:pb-16 max-w-[1400px] mx-auto relative z-10 border-b border-[#D6D1C8]">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#0F52BA]/30 rounded-full text-[10px] sm:text-xs font-mono text-[#0F52BA] font-bold uppercase tracking-widest mb-4 sm:mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#0F52BA]" />
            CAPABILITIES & SYSTEMS
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[1.05] sm:leading-[0.9] text-[#1C1917] mb-4 sm:mb-6 relative">
            Engineered<br />
            <span className="relative inline-block text-[#0F52BA]">
              For High Stakes.
              <DoodleUnderline />
            </span>
          </h1>

          <p className="text-xs sm:text-base md:text-xl text-[#57534E] max-w-2xl leading-relaxed font-normal bg-white/80 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/90 shadow-sm">
            We don't build generic websites. We design and engineer web platforms, high-conversion e-commerce stores, custom CRMs, and complex web apps tailored for ambitious businesses.
          </p>
        </motion.div>
      </section>

      {/* ── SERVICES GRID WITH GENERATED IMAGES ── */}
      <section className="px-6 md:px-12 xl:px-20 py-20 max-w-[1400px] mx-auto relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => {
            const imageSrc = serviceImages[service.slug] || "/images/web_dev.jpg";
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
              >
                <div className="border border-[#D6D1C8] bg-white/95 backdrop-blur-md rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 group h-full flex flex-col justify-between transform-gpu">
                  
                  <div className="h-48 w-full relative overflow-hidden bg-[#1C1917]">
                    <img src={imageSrc} alt={service.title} className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/95 backdrop-blur-md text-[#0F52BA] font-mono text-[10px] uppercase tracking-widest rounded-full font-bold shadow-sm">
                        0{i+1} // CAPABILITY
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-2xl text-[#1C1917] mb-3 group-hover:text-[#0F52BA] transition-colors">{service.title}</h3>
                      <p className="text-[#78716C] text-sm leading-relaxed mb-6">{service.tagline}</p>
                    </div>

                    <div className="space-y-2 mb-8 pt-4 border-t border-[#D6D1C8]">
                      {service.included.slice(0, 3).map((f) => (
                        <div key={f} className="flex items-center gap-2.5 text-xs text-[#57534E]">
                          <Check className="w-4 h-4 text-[#0F52BA] shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>

                    <Link 
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center justify-between w-full px-6 py-3.5 bg-[#FAF8F4] border border-[#D6D1C8] text-[#1C1917] font-bold text-xs tracking-widest uppercase rounded-full group-hover:bg-[#1C1917] group-hover:text-white transition-all duration-300"
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
