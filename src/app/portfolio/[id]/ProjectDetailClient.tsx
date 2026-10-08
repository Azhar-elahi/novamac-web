"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  ExternalLink, 
  Globe, 
  CheckCircle2, 
  Lock, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles,
  ChevronRight,
  Layers,
  Cpu
} from "lucide-react";
import Link from "next/link";
import { ExecutiveProject, EXECUTIVE_PORTFOLIO_DATA } from "@/data/portfolioData";

export default function ProjectDetailClient({ project }: { project: ExecutiveProject }) {
  // Find next project for seamless navigation
  const currentIndex = EXECUTIVE_PORTFOLIO_DATA.findIndex((p) => p.id === project.id);
  const nextProject = EXECUTIVE_PORTFOLIO_DATA[(currentIndex + 1) % EXECUTIVE_PORTFOLIO_DATA.length];

  return (
    <div className="bg-[#0A0A0A] text-[#F5F5F5] min-h-screen font-sans selection:bg-[#FF5733] selection:text-white">
      
      {/* ── TOP STUDIO HEADER WITH BREADCRUMB ── */}
      <header className="sticky top-0 z-40 bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/10 px-6 sm:px-12 py-4 flex items-center justify-between shadow-2xl">
        <div className="flex items-center gap-4">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-xs font-mono font-bold uppercase tracking-wider text-gray-300 hover:text-white transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#FF5733]" /> Back to Portfolio
          </Link>

          <span className="hidden sm:inline-block text-xs font-mono text-gray-400 border-l border-white/15 pl-4 uppercase tracking-widest font-bold">
            {project.clientName} Case Study
          </span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FF5733] hover:bg-white hover:text-black text-white font-extrabold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-300 shadow-lg flex items-center gap-1.5"
          >
            <Globe className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Launch Live Site</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* ── HERO SECTION ── */}
      <section className="relative px-6 sm:px-12 lg:px-20 py-16 border-b border-white/10 overflow-hidden bg-[#0A0A0A]">
        <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-[#FF5733]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto space-y-6 relative z-10">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="px-3.5 py-1.5 rounded-full bg-[#FF5733]/15 border border-[#FF5733]/40 text-[#FF5733] font-mono text-xs font-bold uppercase tracking-widest">
              {project.badge}
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold uppercase tracking-widest flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {project.statusBadge}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed max-w-3xl">
            {project.overview}
          </p>

          {/* SLA & METRICS SUMMARY */}
          <div className="pt-2 flex flex-wrap items-center gap-6 font-mono text-xs text-gray-400">
            <div className="flex items-center gap-2 border-r border-white/15 pr-6">
              <span className="text-2xl font-black text-[#FF5733]">{project.statVal}</span>
              <span className="text-gray-400 uppercase text-[11px] font-bold">{project.statLabel}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400 font-bold uppercase">CLIENT:</span>
              <span className="text-white font-bold">{project.clientName}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── HIGH-RESOLUTION PRODUCTION SCREENSHOT SHOWCASE ── */}
      <section className="py-12 px-6 sm:px-12 max-w-6xl mx-auto space-y-4">
        <div className="flex items-center justify-between font-mono text-xs text-gray-400 font-bold uppercase">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#FF5733]" />
            <span>ACTUAL LIVE PRODUCTION SCREENSHOT</span>
          </div>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF5733] hover:underline flex items-center gap-1"
          >
            <span>Visit {project.liveUrl}</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* BROWSER SHELL WITH FULL SCREENSHOT PHOTO */}
        <div className="bg-[#121212] border border-white/15 rounded-3xl overflow-hidden shadow-2xl">
          {/* BROWSER TOP BAR */}
          <div className="bg-[#1A1A1A] border-b border-white/10 px-6 py-3.5 flex items-center justify-between text-xs font-mono text-gray-400">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="bg-black/60 border border-white/10 rounded-full px-4 py-1.5 flex items-center gap-2 text-xs text-gray-300">
                <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{project.liveUrl}</span>
              </div>
            </div>

            <span className="hidden sm:inline-block text-[11px] text-emerald-400 font-bold uppercase">
              {project.statusBadge}
            </span>
          </div>

          {/* FULL SCREENSHOT IMAGE CONTAINER */}
          <div className="bg-zinc-950">
            <img
              src={project.image}
              alt={`${project.title} Production Screenshot`}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── TECHNICAL CASE STUDY BREAKDOWN ── */}
      <section className="py-16 px-6 sm:px-12 max-w-6xl mx-auto space-y-12">
        
        {/* CHALLENGE & SOLUTION GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          
          <div className="bg-[#121212] border border-white/10 p-8 rounded-3xl space-y-4 shadow-xl">
            <div className="w-10 h-10 rounded-2xl bg-[#FF5733]/15 border border-[#FF5733]/30 text-[#FF5733] flex items-center justify-center font-mono font-bold text-sm">
              01
            </div>
            <h3 className="text-xl font-extrabold text-white">The Business Challenge</h3>
            <p className="text-gray-300 text-sm font-light leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="bg-[#121212] border border-white/10 p-8 rounded-3xl space-y-4 shadow-xl">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-mono font-bold text-sm">
              02
            </div>
            <h3 className="text-xl font-extrabold text-white">Engineering Solution</h3>
            <p className="text-gray-300 text-sm font-light leading-relaxed">
              {project.solution}
            </p>
          </div>

        </div>

        {/* FEATURES & DELIVERABLES */}
        <div className="bg-[#121212] border border-white/10 p-8 sm:p-12 rounded-3xl grid md:grid-cols-2 gap-10 shadow-xl">
          
          <div className="space-y-4">
            <span className="text-xs font-mono font-bold text-[#FF5733] uppercase tracking-widest block">
              SYSTEM FEATURES CHECKLIST
            </span>
            <h3 className="text-2xl font-extrabold text-white">Key Capabilities</h3>
            <ul className="space-y-3 text-sm text-gray-300 font-medium">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5733] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block">
              SYSTEM DELIVERABLES
            </span>
            <h3 className="text-2xl font-extrabold text-white">Architected Assets</h3>
            <ul className="space-y-3 text-sm text-gray-300 font-medium">
              {project.deliverables.map((del, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{del}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* TECH STACK BADGES */}
        <div className="bg-[#121212] border border-white/10 p-8 rounded-3xl space-y-4 shadow-xl">
          <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest block">
            TECHNOLOGY & ARCHITECTURE STACK
          </span>
          <div className="flex flex-wrap gap-2.5">
            {project.techStack.map((tech, idx) => (
              <span key={idx} className="px-4 py-2 bg-white/5 border border-white/10 text-gray-200 font-mono text-xs font-bold rounded-xl">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* NEXT PROJECT NAVIGATION & BOTTOM CTA */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#FF5733] hover:bg-white hover:text-black text-white font-extrabold text-xs uppercase tracking-wider py-4 px-8 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-xl"
          >
            <Globe className="w-4 h-4" />
            <span>Launch Live Website ({project.clientName})</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <Link
            href={`/portfolio/${nextProject.id}`}
            className="w-full sm:w-auto bg-white/5 hover:bg-white/15 text-white border border-white/10 font-bold text-xs uppercase tracking-wider py-4 px-8 rounded-full transition-colors flex items-center justify-center gap-2"
          >
            <span>Next Project: {nextProject.clientName}</span>
            <ChevronRight className="w-4 h-4 text-[#FF5733]" />
          </Link>
        </div>

      </section>

      {/* ── MINIMALIST STUDIO FOOTER ── */}
      <footer className="bg-[#050505] text-white border-t border-white/10 py-12 px-6 sm:px-12 font-mono text-xs">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <img src="/logo.png" alt="NovaMac Logo" className="w-6 h-6 object-contain" />
            <span className="font-extrabold text-[#FF5733]">NovaMac Solutions</span>
            <span className="text-gray-500">• {project.clientName} Case Study</span>
          </div>

          <div className="text-gray-500">
            © {new Date().getFullYear()} NovaMac Solutions. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}
