"use client";

import React from "react";
import { motion } from "framer-motion";

const TECH_ITEMS = [
  { label: "NEXT.JS 15", category: "FRAMEWORK" },
  { label: "UI/UX DESIGN STUDIO", category: "CREATIVE" },
  { label: "TAILORED AI AGENTS", category: "INTELLIGENCE" },
  { label: "REACT 19", category: "FRONTEND" },
  { label: "TYPESCRIPT", category: "LANGUAGE" },
  { label: "HEADLESS SHOPIFY", category: "E-COMMERCE" },
  { label: "POSTGRESQL & PRISMA", category: "DATABASE" },
  { label: "ZERO-TRUST SECURITY", category: "ARCHITECTURE" },
  { label: "PYTHON & OPENAI", category: "AI BACKEND" },
  { label: "GLOBAL EDGE CDN", category: "PERFORMANCE" },
  { label: "TAILWIND CSS", category: "STYLING" },
  { label: "CUSTOM CRMs", category: "SOFTWARE" },
];

export function TechMarqueeBelt() {
  return (
    <div className="w-full bg-[#070B14] text-[#F8FAFC] py-4 overflow-hidden relative border-y border-[#1E2E4A] shadow-md">
      <div className="flex w-[200%] animate-marquee whitespace-nowrap">
        
        {/* First Loop */}
        <div className="flex items-center gap-8 px-4 shrink-0 font-mono text-xs tracking-widest uppercase font-bold">
          {TECH_ITEMS.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
              <span className="text-[#F8FAFC]">{item.label}</span>
              <span className="text-[10px] text-[#3B82F6] bg-[#3B82F6]/20 border border-[#3B82F6]/30 px-2 py-0.5 rounded-md font-bold">
                {item.category}
              </span>
              <span className="text-[#94A3B8]/30 ml-3">/</span>
            </div>
          ))}
        </div>

        {/* Second Identical Loop for Seamless Infinite Scroll */}
        <div className="flex items-center gap-8 px-4 shrink-0 font-mono text-xs tracking-widest uppercase font-bold">
          {TECH_ITEMS.map((item, idx) => (
            <div key={`dup-${idx}`} className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
              <span className="text-[#F8FAFC]">{item.label}</span>
              <span className="text-[10px] text-[#3B82F6] bg-[#3B82F6]/20 border border-[#3B82F6]/30 px-2 py-0.5 rounded-md font-bold">
                {item.category}
              </span>
              <span className="text-[#94A3B8]/30 ml-3">/</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
