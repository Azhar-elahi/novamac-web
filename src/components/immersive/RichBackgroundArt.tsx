"use client";

import React from "react";
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
  const defaultMotion = useSpring(0);
  const smoothX = useSpring(mouseX || defaultMotion, { stiffness: 45, damping: 20 });
  const smoothY = useSpring(mouseY || defaultMotion, { stiffness: 45, damping: 20 });

  // Multi-layer 3D Parallax Offsets
  const layer1X = useTransform(smoothX, [-0.5, 0.5], [-40, 40]);
  const layer1Y = useTransform(smoothY, [-0.5, 0.5], [-40, 40]);

  const layer2X = useTransform(smoothX, [-0.5, 0.5], [30, -30]);
  const layer2Y = useTransform(smoothY, [-0.5, 0.5], [30, -30]);

  const layer3X = useTransform(smoothX, [-0.5, 0.5], [-15, 15]);
  const layer3Y = useTransform(smoothY, [-0.5, 0.5], [-15, 15]);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden z-0 ${opacity} transform-gpu`}>
      
      {/* ── 1. TECHNICAL RADIAL GRID & BLUEPRINT MESH ── */}
      <div className="absolute inset-0 bg-[radial-gradient(#0F52BA_1.2px,transparent_1.2px)] [background-size:28px_28px] opacity-[0.18]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* ── 2. VIBRANT MULTI-COLOR AMBIENT GLOW MESHES ── */}
      <motion.div 
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.22, 0.15] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        className="absolute top-[5%] left-[8%] w-[45vw] h-[45vw] bg-[#0F52BA]/15 blur-[120px] rounded-full transform-gpu mix-blend-multiply" 
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.2, 0.12] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut", delay: 2 }}
        className="absolute top-[45%] right-[5%] w-[40vw] h-[40vw] bg-[#FF007F]/12 blur-[130px] rounded-full transform-gpu mix-blend-multiply" 
      />
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.18, 0.1] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut", delay: 4 }}
        className="absolute bottom-[10%] left-[15%] w-[42vw] h-[42vw] bg-[#00F0FF]/12 blur-[140px] rounded-full transform-gpu mix-blend-multiply" 
      />

      {/* ── 3. PARALLAX LAYER 1: DEEP EDITORIAL WATERMARKS ── */}
      <motion.div style={{ x: layer1X, y: layer1Y }} className="absolute inset-0">
        <div className="absolute top-[8%] right-[2%] opacity-[0.08] select-none rotate-[-6deg]">
          <h1 className="text-8xl md:text-[14rem] font-black text-[#0F52BA] tracking-tighter leading-none">
            NovaMac
          </h1>
        </div>
        <div className="absolute bottom-[8%] left-[2%] opacity-[0.07] select-none rotate-[4deg]">
          <h1 className="text-7xl md:text-[12rem] font-black text-[#1C1917] tracking-tighter leading-none">
            SOLUTIONS
          </h1>
        </div>
      </motion.div>

      {/* ── 4. PARALLAX LAYER 2: ANIMATED DOODLE ART GRAPHICS ── */}
      <motion.div style={{ x: layer2X, y: layer2Y }} className="absolute inset-0">
        
        {/* Animated 4-Point Starburst */}
        <motion.svg 
          animate={{ rotate: [0, 180, 360], scale: [1, 1.2, 1] }} 
          transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
          className="absolute top-[12%] left-[6%] w-14 h-14 text-[#0F52BA] opacity-40" 
          viewBox="0 0 40 40"
        >
          <path d="M 20 0 L 24 16 L 40 20 L 24 24 L 20 40 L 16 24 L 0 20 L 16 16 Z" fill="currentColor" />
        </motion.svg>

        {/* Animated Rotating Orbit Ring */}
        <motion.svg 
          animate={{ rotate: 360, scale: [1, 1.1, 1] }} 
          transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
          className="absolute top-[48%] right-[7%] w-24 h-24 text-[#FF007F] opacity-35" 
          viewBox="0 0 100 100"
        >
          <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="3.5" strokeDasharray="8 6" />
        </motion.svg>

        {/* Bouncing Squiggle Path */}
        <motion.svg 
          animate={{ y: [0, -12, 0], rotate: [-2, 2, -2] }} 
          transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
          className="absolute bottom-[20%] left-[5%] w-36 h-20 text-[#0F52BA] opacity-35" 
          viewBox="0 0 100 40"
        >
          <path d="M 10 20 Q 30 5 50 20 T 90 20" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        </motion.svg>

        {/* Floating Code Bracket Pill */}
        <motion.div 
          animate={{ rotate: [-8, 8, -8], y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
          className="absolute top-[28%] left-[3%] font-mono text-xl font-black text-[#0F52BA] opacity-50 bg-white/80 backdrop-blur-md px-3.5 py-1.5 rounded-2xl border border-[#D6D1C8] shadow-md"
        >
          &lt; / &gt;
        </motion.div>

        {/* Floating System Status Pill */}
        <motion.div 
          animate={{ y: [0, -14, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="absolute bottom-[32%] right-[4%] font-mono text-xs font-bold text-[#0F52BA] opacity-70 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-[#0F52BA]/30 shadow-lg flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#0F52BA] animate-pulse" />
          <span>ZERO-TRUST MESH // ACTIVE</span>
        </motion.div>

        {/* Edge CDN Metric Badge */}
        <motion.div 
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute top-[62%] left-[4%] font-mono text-xs font-bold text-[#FF007F] opacity-60 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-[#FF007F]/30 shadow-md flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF007F] animate-ping" />
          <span>LATENCY: &lt;50MS</span>
        </motion.div>

        {/* Floating Geometry Wireframes */}
        <motion.div 
          animate={{ rotate: 360, y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="absolute top-[18%] right-[20%] w-16 h-16 border-2 border-[#0F52BA]/40 rounded-2xl" 
        />
        <motion.div 
          animate={{ rotate: -360, y: [0, 25, 0] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="absolute bottom-[25%] left-[22%] w-20 h-20 border-2 border-[#FF007F]/40 rounded-full" 
        />
      </motion.div>

      {/* ── 5. PARALLAX LAYER 3: FOREGROUND TELEMETRY PULSES ── */}
      <motion.div style={{ x: layer3X, y: layer3Y }} className="absolute inset-0">
        <div className="absolute top-[20%] right-[28%] w-3.5 h-3.5 rounded-full bg-[#0F52BA]/50 animate-ping" />
        <div className="absolute bottom-[35%] left-[32%] w-3.5 h-3.5 rounded-full bg-[#FF007F]/50 animate-ping" />
        <div className="absolute top-[70%] right-[38%] w-3 h-3 rounded-full bg-green-500/60 animate-ping" />
      </motion.div>

    </div>
  );
}
