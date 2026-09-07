"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { PROJECTS_DATA, DetailedProjectItem } from "@/data/projectsData";
import { PreFooterCTASection } from "@/components/sections/PreFooterCTASection";

const CATEGORIES = ["All", "Web Engineering", "E-Commerce", "CRM & Software", "AI Automation", "Enterprise SaaS"];

export default function WorkClient({ projects = [] }: { projects?: any[] }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => (p.category || "").toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <div className="bg-[#FAF2F2] text-[#202020] min-h-screen pt-0 pb-0 overflow-hidden font-sans">
      
      {/* HERO SECTION WITH VIDEO BACKGROUND */}
      <section className="relative px-6 sm:px-12 lg:px-20 py-24 border-b border-white/10 overflow-hidden min-h-[55vh] flex items-center bg-[#0D0D0D] text-white">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-90">
            <source src="/videos/man-laptop.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/90 via-[#0D0D0D]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-black/40" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl relative z-10 space-y-6"
        >
          <span className="px-4 py-1.5 bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] font-mono text-xs font-bold uppercase tracking-widest rounded-full inline-block">
            NOVAMAC LABS & SYSTEMS
          </span>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight">
            Digital Solutions Built for Real Business Growth.
          </h1>

          <p className="text-gray-300 text-base sm:text-xl font-light leading-relaxed max-w-2xl">
            Explore engineering prototypes and system blueprints developed by NovaMac Labs. Select any project to view technical architecture details.
          </p>

          {/* CATEGORY FILTER TABS */}
          <div className="flex flex-wrap gap-2 pt-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  selectedCategory === cat 
                    ? "bg-[#FF5733] text-white shadow-lg" 
                    : "bg-white/10 text-white hover:bg-[#FF5733]/20 border border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </motion.div>
      </section>

      {/* PORTFOLIO GRID */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((proj: DetailedProjectItem, idx: number) => (
            <motion.div
              key={proj.id || idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-white border border-[#F0DCDC] text-[#202020] rounded-3xl overflow-hidden group hover:border-[#FF5733] transition-all duration-500 flex flex-col justify-between shadow-sm"
            >
              <div>
                <Link href={`/work/${proj.slug}`} className="block relative group">
                  <div className="aspect-[16/9] overflow-hidden relative bg-zinc-900">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-black/80 backdrop-blur-md text-[#FF5733] border border-[#FF5733]/40 font-mono text-[10px] uppercase font-bold rounded-full">
                      {proj.badge}
                    </div>

                    <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md text-white font-mono text-[10px] uppercase font-bold rounded-full">
                      {proj.category}
                    </div>
                  </div>
                </Link>

                <div className="p-8">
                  <div className="flex items-center gap-3 font-mono text-xs font-bold text-[#FF5733] mb-2 uppercase">
                    <span>SLA RANGE: {proj.statVal}</span>
                    <span>•</span>
                    <span className="text-gray-500">{proj.statLabel}</span>
                  </div>

                  <Link href={`/work/${proj.slug}`}>
                    <h3 className="text-2xl font-black text-[#202020] mb-3 group-hover:text-[#FF5733] transition-colors leading-tight">
                      {proj.title}
                    </h3>
                  </Link>

                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-light mb-6">
                    {proj.shortDesc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj.techStack.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-[#FAF2F2] border border-[#F0DCDC] text-gray-700 font-mono text-xs font-semibold rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-8 pt-0 flex flex-col sm:flex-row gap-3">
                <Link
                  href={`/work/${proj.slug}`}
                  className="flex-1 bg-white hover:bg-[#FAF2F2] text-[#202020] border border-[#F0DCDC] hover:border-[#FF5733] font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-full transition-colors flex items-center justify-center gap-2 text-center shadow-sm"
                >
                  <span>View Case Study</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href="/contact"
                  className="flex-1 bg-[#202020] hover:bg-[#FF5733] text-white font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-full transition-colors flex items-center justify-center gap-2 text-center shadow-md"
                >
                  <span>Start Similar Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </motion.div>
          ))}
        </div>
      </section>

      {/* PRE-FOOTER CTA */}
      <PreFooterCTASection />

    </div>
  );
}
