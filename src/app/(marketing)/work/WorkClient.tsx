"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, Filter } from "lucide-react";
import Link from "next/link";

interface Project {
  id: string;
  title: string;
  description?: string;
  desc?: string;
  imageUrl?: string | null;
  image?: string;
  category?: string | null;
  liveUrl?: string | null;
  link?: string;
  createdAt?: string | Date;
}

const SAMPLE_PROJECTS = [
  {
    id: "proj-1",
    title: "Mind Games Fragrances — Luxury E-Commerce",
    category: "E-Commerce",
    desc: "Headless Next.js e-commerce storefront with sub-300ms checkout SLA, custom 3D bottle visualizer, and 90%+ engagement growth.",
    image: "/images/ecommerce.jpg",
    link: "https://mindgamesfragrances.com"
  },
  {
    id: "proj-2",
    title: "Real Estate Wholesaling CRM Portal",
    category: "CRM & Software",
    desc: "Custom role-based internal deal pipeline software with automated SMS lead capture, live property comps valuation, and deal management.",
    image: "/images/web_app.webp",
    link: "/contact"
  },
  {
    id: "proj-3",
    title: "Autonomous AI Lead Qualification Agent",
    category: "AI Automation",
    desc: "24/7 autonomous GPT-4o & Claude AI agent system with RAG vector search, handling customer inquiries and qualifying leads automatically.",
    image: "/images/ai_automation.webp",
    link: "/contact"
  },
  {
    id: "proj-4",
    title: "Enterprise Next.js 15 Web Platform",
    category: "Web Engineering",
    desc: "Sub-second digital web platform engineered for 100/100 Google PageSpeed scores, zero security vulnerability, and search engine dominance.",
    image: "/images/web_dev.jpg",
    link: "/contact"
  },
  {
    id: "proj-5",
    title: "Vector UI/UX Design System Studio",
    category: "UI/UX Design",
    desc: "Bespoke Figma component system, interactive prototypes, micro-animations, and editorial visual brand identity pack.",
    image: "/images/ui_ux.jpg",
    link: "/contact"
  },
  {
    id: "proj-6",
    title: "B2B Lead Generation & Funnel Engine",
    category: "Digital Marketing",
    desc: "High-converting prospect capture engines, technical SEO, and automated sales outreach pipelines.",
    image: "/images/marketing_seo.webp",
    link: "/contact"
  }
];

const CATEGORIES = ["All", "Web Engineering", "E-Commerce", "CRM & Software", "AI Automation", "UI/UX Design", "Digital Marketing"];

export default function WorkClient({ projects = [] }: { projects?: Project[] }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const displayProjects = projects && projects.length > 0 ? projects : SAMPLE_PROJECTS;

  const filteredProjects = selectedCategory === "All"
    ? displayProjects
    : displayProjects.filter((p) => (p.category || "").toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <div className="bg-[#FAF2F2] text-[#202020] min-h-screen pt-0 pb-20 overflow-hidden font-sans">
      
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
          className="max-w-4xl relative z-10"
        >
          <span className="px-4 py-1.5 bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] font-mono text-xs font-bold uppercase tracking-widest rounded-full inline-block mb-6">
            FEATURED CLIENT CASE STUDIES
          </span>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-8">
            Work That Drives Real Business Growth.
          </h1>

          <p className="text-gray-300 text-base sm:text-xl font-light leading-relaxed mb-10 max-w-2xl">
            Explore our recent client case studies across web engineering, custom CRMs, headless e-commerce, and autonomous AI automation.
          </p>

          {/* CATEGORY FILTER TABS */}
          <div className="flex flex-wrap gap-2 pt-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${selectedCategory === cat ? "bg-[#FF5733] text-white shadow-lg" : "bg-white/10 text-white hover:bg-[#FF5733]/20 border border-white/20"}`}
              >
                {cat}
              </button>
            ))}
          </div>

        </motion.div>
      </section>

      {/* PORTFOLIO GRID */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj, idx) => (
            <motion.div
              key={proj.id || idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-white border border-[#F0DCDC] text-[#202020] rounded-3xl overflow-hidden group hover:border-[#FF5733] transition-all duration-500 flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden relative bg-zinc-900">
                  <img
                    src={(proj as any).image || (proj as any).imageUrl || "/images/web_dev.jpg"}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/70 backdrop-blur-md text-white font-mono text-[10px] uppercase font-bold rounded-full">
                    {proj.category || "Case Study"}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-extrabold text-[#202020] mb-3 group-hover:text-[#FF5733] transition-colors leading-snug">
                    {proj.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed font-light mb-6">
                    {(proj as any).description || (proj as any).desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={(proj as any).link || (proj as any).liveUrl || "/contact"}
                  className="w-full bg-[#202020] hover:bg-[#FF5733] text-white font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-full transition-colors flex items-center justify-between group/btn shadow-md"
                >
                  <span>View Project Details</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>

            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-6 bg-[#FF5733] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tight mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-white/90 text-base sm:text-lg mb-8 max-w-xl mx-auto font-light">
            Contact our engineering studio today and let&apos;s build a digital product that scales your business.
          </p>
          <Link
            href="/contact"
            className="bg-black text-white hover:bg-white hover:text-black font-extrabold text-xs tracking-widest uppercase px-10 py-5 rounded-full transition-all duration-300 shadow-2xl inline-flex items-center gap-2"
          >
            <span>Request Growth Strategy</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}

