"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useTransform, MotionValue } from "framer-motion";

export function RichBackgroundArt({ 
  variant = "default",
  opacity = "opacity-100",
  mouseX,
  mouseY
}: { 
  variant?: "default" | "dense" | "minimal" | "hero",
  opacity?: string,
  mouseX?: MotionValue<number>,
  mouseY?: MotionValue<number>
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const defaultMotion = useSpring(0);
  const smoothX = useSpring(mouseX || defaultMotion, { stiffness: 45, damping: 20 });
  const smoothY = useSpring(mouseY || defaultMotion, { stiffness: 45, damping: 20 });

  // Multi-layer 3D Parallax Offsets (Only active on desktop)
  const layer1X = useTransform(smoothX, [-0.5, 0.5], isMobile ? [0, 0] : [-40, 40]);
  const layer1Y = useTransform(smoothY, [-0.5, 0.5], isMobile ? [0, 0] : [-40, 40]);

  const layer2X = useTransform(smoothX, [-0.5, 0.5], isMobile ? [0, 0] : [30, -30]);
  const layer2Y = useTransform(smoothY, [-0.5, 0.5], isMobile ? [0, 0] : [30, -30]);

  const layer3X = useTransform(smoothX, [-0.5, 0.5], isMobile ? [0, 0] : [-15, 15]);
  const layer3Y = useTransform(smoothY, [-0.5, 0.5], isMobile ? [0, 0] : [-15, 15]);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden z-0 ${opacity} transform-gpu`}>
      
      {/* ── 1. TECHNICAL RADIAL GRID & BLUEPRINT MESH ── */}
      <div className="absolute inset-0 bg-[radial-gradient(#3B82F6_1.2px,transparent_1.2px)] [background-size:28px_28px] opacity-[0.12]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* ── 2. LIGHTWEIGHT GLOW MESHES (ELECTRIC BLUE BRAND ACCENT) ── */}
      <motion.div 
        animate={isMobile ? {} : { scale: [1, 1.15, 1], opacity: [0.15, 0.28, 0.15] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        className="absolute top-[5%] left-[8%] w-[45vw] h-[45vw] bg-[#3B82F6]/20 blur-[40px] md:blur-[120px] rounded-full transform-gpu" 
      />
      <motion.div 
        animate={isMobile ? {} : { scale: [1, 1.2, 1], opacity: [0.12, 0.25, 0.12] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut", delay: 2 }}
        className="absolute top-[45%] right-[5%] w-[40vw] h-[40vw] bg-[#1D4ED8]/25 blur-[40px] md:blur-[130px] rounded-full transform-gpu" 
      />

      {/* ── 3. PARALLAX LAYER 1: DEEP EDITORIAL WATERMARKS ── */}
      <motion.div style={{ x: layer1X, y: layer1Y }} className="absolute inset-0">
        <div className="absolute top-[8%] right-[2%] opacity-[0.06] select-none rotate-[-6deg]">
          <h1 className="text-6xl md:text-[14rem] font-black text-[#3B82F6] tracking-tighter leading-none">
            NovaMac
          </h1>
        </div>
        
        <div className="absolute top-[55%] left-[-2%] opacity-[0.04] select-none rotate-[4deg]">
          <h1 className="text-6xl md:text-[12rem] font-black text-[#F8FAFC] tracking-tighter leading-none">
            ENGINEERING
          </h1>
        </div>
      </motion.div>

      {/* ── 4. PARALLAX LAYER 2: INTERACTIVE CODE BRACKETS ── */}
      {!isMobile && (
        <motion.div style={{ x: layer2X, y: layer2Y }} className="absolute inset-0 hidden lg:block">
          <div className="absolute top-[20%] left-[8%] px-3.5 py-1.5 bg-[#0F172A]/90 backdrop-blur-md border border-[#3B82F6]/40 rounded-full font-mono text-xs font-bold text-[#3B82F6] shadow-md flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-ping" />
            <span>&lt;Next.js 15 /&gt;</span>
          </div>

          <div className="absolute top-[68%] right-[10%] px-3.5 py-1.5 bg-[#0F172A]/90 backdrop-blur-md border border-[#3B82F6]/40 rounded-full font-mono text-xs font-bold text-[#3B82F6] shadow-md flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
            <span>&lt;UI/UX Studio /&gt;</span>
          </div>
        </motion.div>
      )}

      {/* ── 5. PARALLAX LAYER 3: LATENCY BADGES ── */}
      {!isMobile && (
        <motion.div style={{ x: layer3X, y: layer3Y }} className="absolute inset-0 hidden md:block">
          <div className="absolute top-[38%] right-[14%] p-3 bg-[#0F172A]/95 backdrop-blur-md border border-[#1E2E4A] rounded-2xl shadow-lg flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
            <div>
              <div className="text-[9px] font-mono text-[#94A3B8] uppercase font-bold">LATENCY</div>
              <div className="text-xs font-bold text-[#F8FAFC] font-mono">&lt; 42ms EDGE</div>
            </div>
          </div>
        </motion.div>
      )}

    </div>
  );
}
