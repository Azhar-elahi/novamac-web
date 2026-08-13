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
    <div className="w-full bg-[#1C1917] text-white py-4 overflow-hidden relative border-y border-[#D6D1C8]/20 shadow-md">
      <div className="flex w-[200%] animate-marquee whitespace-nowrap">
        
        {/* First Loop */}
        <div className="flex items-center gap-8 px-4 shrink-0 font-mono text-xs tracking-widest uppercase font-bold">
          {TECH_ITEMS.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#0F52BA] animate-pulse" />
              <span className="text-[#F0EDE6]">{item.label}</span>
              <span className="text-[10px] text-[#0F52BA] bg-[#0F52BA]/20 px-2 py-0.5 rounded font-normal">
                {item.category}
              </span>
              <span className="text-white/20 ml-3">/</span>
            </div>
          ))}
        </div>

        {/* Second Identical Loop for Seamless Infinite Scroll */}
        <div className="flex items-center gap-8 px-4 shrink-0 font-mono text-xs tracking-widest uppercase font-bold">
          {TECH_ITEMS.map((item, idx) => (
            <div key={`dup-${idx}`} className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#0F52BA] animate-pulse" />
              <span className="text-[#F0EDE6]">{item.label}</span>
              <span className="text-[10px] text-[#0F52BA] bg-[#0F52BA]/20 px-2 py-0.5 rounded font-normal">
                {item.category}
              </span>
              <span className="text-white/20 ml-3">/</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
