"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Globe, 
  ExternalLink, 
  ArrowUpRight, 
  CheckCircle2, 
  Lock, 
  ArrowRight,
  Sparkles,
  Search
} from "lucide-react";
import Link from "next/link";
import { EXECUTIVE_PORTFOLIO_DATA, ExecutiveProject } from "@/data/portfolioData";

const FILTER_TAGS = ["All Systems", "E-Commerce", "B2B Catalog", "SaaS Platform", "ERP & POS"];

export default function PortfolioClient() {
  const [activeFilter, setActiveFilter] = useState("All Systems");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = EXECUTIVE_PORTFOLIO_DATA.filter((proj) => {
    const matchesFilter = activeFilter === "All Systems" || proj.categoryTag === activeFilter;
    const matchesSearch = searchQuery === "" || 
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="bg-[#0A0A0A] text-[#F5F5F5] min-h-screen font-sans selection:bg-[#FF5733] selection:text-white">
      
      {/* ── TOP STUDIO HEADER ── */}
      <header className="sticky top-0 z-40 bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/10 px-6 sm:px-12 py-4 flex items-center justify-between shadow-2xl">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2.5 group">
            <img src="/logo.png" alt="NovaMac Logo" className="w-8 h-8 object-contain group-hover:scale-105 transition-transform" />
            <span className="font-extrabold text-xl tracking-tight text-[#FF5733]">
              NovaMac<span className="text-white">Solutions</span>
            </span>
          </Link>
          <span className="hidden sm:inline-block font-mono text-xs text-gray-400 border-l border-white/15 pl-3 uppercase tracking-widest font-bold">
            Selected Systems
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>5 Verified Production Systems</span>
          </div>

          <a
            href="https://www.novamacsolutions.com/contact"
            className="bg-[#FF5733] hover:bg-white hover:text-black text-white font-extrabold text-xs uppercase tracking-wider px-6 py-2.5 rounded-full transition-all duration-300 shadow-lg flex items-center gap-1.5"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* ── HERO SECTION ── */}
      <section className="relative px-6 sm:px-12 lg:px-20 py-20 border-b border-white/10 overflow-hidden bg-[#0A0A0A]">
        {/* BACKGROUND GLOW METRICS */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#FF5733]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 font-mono text-xs font-bold uppercase tracking-widest text-[#FF5733]">
            <Sparkles className="w-3.5 h-3.5" /> NOVAMAC ENGINEERING PORTFOLIO
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight">
            Engineering Excellence. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5733] via-orange-400 to-amber-200">
              Real Deployed Systems.
            </span>
          </h1>

          <p className="text-gray-300 text-base sm:text-xl font-light leading-relaxed max-w-3xl">
            A curated showcase of high-performance e-commerce storefronts, B2B digital catalogs, and running enterprise SaaS platforms developed by NovaMac Solutions.
          </p>

          {/* TELEMETRY SPECS BAR */}
          <div className="pt-4 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl font-mono text-xs">
            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
              <div className="text-gray-400 text-[10px] uppercase font-bold">Active Live Sites</div>
              <div className="text-2xl font-black text-white mt-1">5 Systems</div>
            </div>
            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
              <div className="text-gray-400 text-[10px] uppercase font-bold">Avg Response SLA</div>
              <div className="text-2xl font-black text-[#FF5733] mt-1">Sub-300ms</div>
            </div>
            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
              <div className="text-gray-400 text-[10px] uppercase font-bold">Cloud Reliability</div>
              <div className="text-2xl font-black text-emerald-400 mt-1">99.9% Uptime</div>
            </div>
            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
              <div className="text-gray-400 text-[10px] uppercase font-bold">Core Stack</div>
              <div className="text-2xl font-black text-blue-400 mt-1">Next.js 15</div>
            </div>
          </div>

          {/* SEARCH & FILTER CONTROLS */}
          <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 max-w-6xl">
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {FILTER_TAGS.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveFilter(tag)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    activeFilter === tag 
                      ? "bg-[#FF5733] text-white shadow-lg shadow-[#FF5733]/25" 
                      : "bg-white/5 text-gray-300 hover:bg-white/15 border border-white/10"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search systems..."
                className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-10 pr-4 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#FF5733] transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN PROJECT CARDS SECTION ── */}
      <section className="py-20 px-6 sm:px-12 max-w-7xl mx-auto space-y-16">
        
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.05 }}
            className="bg-[#121212] border border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:border-[#FF5733]/60 transition-all duration-500 grid lg:grid-cols-12 gap-0 group"
          >
            
            {/* LEFT COLUMN: HD BROWSER FRAME MOCKUP (7 COLS) */}
            <div className="lg:col-span-7 bg-[#050505] p-6 sm:p-8 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10">
              
              {/* BROWSER TOP BAR */}
              <div className="bg-[#1A1A1A] border border-white/10 rounded-t-2xl px-4 py-3 flex items-center justify-between text-xs font-mono text-gray-400 shadow-md">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="flex gap-1.5 shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>

                  <div className="bg-black/60 border border-white/10 rounded-full px-3 py-1 flex items-center gap-2 min-w-0 text-[11px] text-gray-300">
                    <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span className="truncate">{project.liveUrl}</span>
                  </div>
                </div>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-[#FF5733] hover:bg-white hover:text-black text-white font-mono text-[10px] font-bold uppercase rounded-full transition-colors flex items-center gap-1 shrink-0"
                >
                  <span>Live Site</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* HIGH-RES SCREENSHOT LINKING TO DEDICATED DETAIL PAGE */}
              <Link 
                href={`/portfolio/${project.id}`}
                className="relative aspect-[16/10] bg-zinc-950 rounded-b-2xl overflow-hidden border border-white/10 border-t-0 group/img block"
              >
                <img
                  src={project.image}
                  alt={`${project.title} Screenshot`}
                  className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-700"
                />

                <div className="absolute top-4 left-4 px-3 py-1 bg-black/80 backdrop-blur-md text-emerald-400 border border-emerald-500/30 font-mono text-[10px] uppercase font-bold rounded-full flex items-center gap-1.5 shadow-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {project.statusBadge}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="bg-white text-black font-extrabold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full shadow-2xl flex items-center gap-2">
                    <span>Open Dedicated Case Study Page</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>

            </div>

            {/* RIGHT COLUMN: EXECUTIVE SPECIFICATIONS & DETAILS (5 COLS) */}
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6 bg-[#121212]">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono text-xs font-bold text-[#FF5733] uppercase">
                  <span>SLA: {project.statVal}</span>
                  <span className="text-gray-400 font-normal">{project.statLabel}</span>
                </div>

                <div>
                  <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest block mb-1">
                    CLIENT: {project.clientName}
                  </span>
                  <Link href={`/portfolio/${project.id}`}>
                    <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight group-hover:text-[#FF5733] transition-colors">
                      {project.title}
                    </h3>
                  </Link>
                </div>

                <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed">
                  {project.summary}
                </p>

                {/* DELIVERABLES CHECKLIST */}
                <div className="pt-2 border-t border-white/10 space-y-2">
                  <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest block">
                    KEY SYSTEM DELIVERABLES:
                  </span>
                  <ul className="space-y-1.5 text-xs text-gray-300 font-medium">
                    {project.deliverables.slice(0, 3).map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5733] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* TECH STACK BADGES */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-1 bg-white/5 border border-white/10 text-gray-300 font-mono text-xs font-bold rounded-lg">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="pt-4 space-y-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#FF5733] hover:bg-white hover:text-black text-white font-extrabold text-xs uppercase tracking-wider py-4 px-6 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-xl transform hover:-translate-y-0.5"
                >
                  <Globe className="w-4 h-4" />
                  <span>Launch Live Site ({project.clientName})</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <Link
                  href={`/portfolio/${project.id}`}
                  className="w-full bg-white/5 hover:bg-white/15 text-white border border-white/10 font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-full transition-colors flex items-center justify-center gap-2"
                >
                  <span>Open Dedicated Case Study Page</span>
                  <ArrowRight className="w-4 h-4 text-[#FF5733]" />
                </Link>
              </div>

            </div>

          </motion.div>
        ))}

      </section>

      {/* ── MINIMALIST STUDIO FOOTER ── */}
      <footer className="bg-[#050505] text-white border-t border-white/10 py-12 px-6 sm:px-12 font-mono text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <img src="/logo.png" alt="NovaMac Logo" className="w-6 h-6 object-contain" />
            <span className="font-extrabold text-[#FF5733]">NovaMac Solutions</span>
            <span className="text-gray-500">• Engineering Portfolio</span>
          </div>

          <div className="text-gray-500">
            © {new Date().getFullYear()} NovaMac Solutions. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}
