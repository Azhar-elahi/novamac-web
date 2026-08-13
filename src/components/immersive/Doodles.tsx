"use client";

import React from "react";
import { motion, useSpring, useTransform, MotionValue } from "framer-motion";

export const DoodleUnderline = () => (
  <svg className="absolute -bottom-2 md:-bottom-5 left-0 w-full h-6 md:h-10 pointer-events-none z-10" viewBox="0 0 300 30" preserveAspectRatio="none">
    <motion.path 
      d="M 5 25 Q 75 5 150 20 T 295 15" 
      fill="transparent" 
      stroke="#0F52BA" 
      strokeWidth="5.5"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
    />
  </svg>
);

export const DoodleCircle = ({ className = "" }: { className?: string }) => (
  <svg className={`w-20 h-20 text-[#FF007F] opacity-45 pointer-events-none ${className}`} viewBox="0 0 100 100">
    <motion.circle 
      cx="50" cy="50" r="40" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="4" 
      strokeDasharray="8 6"
      animate={{ rotate: 360, scale: [1, 1.12, 1] }}
      transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
    />
  </svg>
);

export const DoodleSquiggle = ({ className = "" }: { className?: string }) => (
  <svg className={`w-36 h-20 text-[#0F52BA] opacity-40 pointer-events-none ${className}`} viewBox="0 0 100 40">
    <motion.path 
      d="M 10 20 Q 30 5 50 20 T 90 20" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="5" 
      strokeLinecap="round"
      animate={{ y: [0, -10, 0], scale: [1, 1.08, 1] }}
      transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
    />
  </svg>
);

export const DoodleStar = ({ className = "" }: { className?: string }) => (
  <svg className={`w-14 h-14 text-[#0F52BA] opacity-50 pointer-events-none ${className}`} viewBox="0 0 40 40">
    <motion.path 
      d="M 20 0 L 24 16 L 40 20 L 24 24 L 20 40 L 16 24 L 0 20 L 16 16 Z" 
      fill="currentColor" 
      animate={{ rotate: [0, 180, 360], scale: [1, 1.25, 1] }}
      transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
    />
  </svg>
);

export const DataPulse = ({ top = "top-10", left = "left-10", delay = 0, color = "#0F52BA" }: { top?: string, left?: string, delay?: number, color?: string }) => (
  <div className={`absolute ${top} ${left} pointer-events-none z-0 flex items-center gap-2 font-mono text-[10px] opacity-75`}>
    <span className="w-3 h-3 rounded-full animate-ping" style={{ backgroundColor: color }} />
    <span className="text-[#1C1917] uppercase tracking-widest font-bold bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#D6D1C8] shadow-sm">
      SYSTEM_ACTIVE
    </span>
  </div>
);

export const FloatingShapes = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
    <motion.div 
      animate={{ rotate: 360, y: [0, -30, 0], x: [0, 20, 0] }}
      transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
      className="absolute top-[15%] left-[5%] w-20 h-20 border-2 border-[#0F52BA] rounded-3xl" 
    />
    <motion.div 
      animate={{ rotate: -360, y: [0, 35, 0], x: [0, -25, 0] }}
      transition={{ repeat: Infinity, duration: 24, ease: "easeInOut" }}
      className="absolute bottom-[20%] right-[6%] w-24 h-24 border-2 border-[#FF007F] rounded-full" 
    />
  </div>
);

export const BackgroundDoodles = ({ 
  opacity = "opacity-[0.45]",
  mouseX,
  mouseY
}: { 
  opacity?: string,
  mouseX?: MotionValue<number>,
  mouseY?: MotionValue<number>
}) => {
  const defaultMotion = useSpring(0);
  const smoothX = useSpring(mouseX || defaultMotion, { stiffness: 40, damping: 20 });
  const smoothY = useSpring(mouseY || defaultMotion, { stiffness: 40, damping: 20 });

  // 3 Multi-speed 3D depth layers
  const layer1X = useTransform(smoothX, [-0.5, 0.5], [-50, 50]);
  const layer1Y = useTransform(smoothY, [-0.5, 0.5], [-50, 50]);

  const layer2X = useTransform(smoothX, [-0.5, 0.5], [35, -35]);
  const layer2Y = useTransform(smoothY, [-0.5, 0.5], [35, -35]);

  const layer3X = useTransform(smoothX, [-0.5, 0.5], [-20, 20]);
  const layer3Y = useTransform(smoothY, [-0.5, 0.5], [-20, 20]);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden z-0 ${opacity} will-change-transform`}>
      
      {/* RICH TECHNICAL BACKGROUND GRID PATTERN & DOTS */}
      <div className="absolute inset-0 bg-[radial-gradient(#0F52BA_1px,transparent_1px)] [background-size:32px_32px] opacity-15" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:5rem_5rem]" />

      {/* MULTIPLE VIBRANT GLOW BLOBS */}
      <div className="absolute top-[5%] left-[10%] w-[45vw] h-[45vw] bg-[#0F52BA]/12 blur-[120px] rounded-full transform-gpu mix-blend-multiply" />
      <div className="absolute top-[40%] right-[8%] w-[40vw] h-[40vw] bg-[#FF007F]/10 blur-[130px] rounded-full transform-gpu mix-blend-multiply" />
      <div className="absolute bottom-[10%] left-[20%] w-[38vw] h-[38vw] bg-[#00F0FF]/10 blur-[140px] rounded-full transform-gpu mix-blend-multiply" />

      {/* LAYER 1: Deep Parallax Text Watermarks */}
      <motion.div style={{ x: layer1X, y: layer1Y }} className="absolute top-[6%] right-[2%] opacity-25 rotate-[-5deg] select-none">
        <h1 className="text-8xl md:text-[13rem] font-black text-[#0F52BA] tracking-tighter leading-none">
          NovaMac
        </h1>
      </motion.div>

      <motion.div style={{ x: layer1X, y: layer1Y }} className="absolute bottom-[10%] left-[2%] opacity-20 rotate-[4deg] select-none">
        <h1 className="text-7xl md:text-[11rem] font-black text-[#1C1917] tracking-tighter leading-none">
          SOLUTIONS
        </h1>
      </motion.div>

      {/* LAYER 2: Animated Graphic Doodles & Tech Cards */}
      <motion.div style={{ x: layer2X, y: layer2Y }} className="absolute inset-0">
        <DoodleStar className="absolute top-[10%] left-[8%]" />
        <DoodleCircle className="absolute top-[45%] right-[8%]" />
        <DoodleSquiggle className="absolute bottom-[16%] left-[5%]" />
        <DoodleStar className="absolute bottom-[25%] right-[15%]" />

        {/* Code Brackets Badge */}
        <motion.div 
          animate={{ rotate: [-6, 6, -6] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="absolute top-[32%] left-[3%] font-mono text-3xl font-black text-[#0F52BA] opacity-40 select-none bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-2xl border border-[#D6D1C8] shadow-sm"
        >
          &lt; / &gt;
        </motion.div>

        {/* System Status Watermark Badge */}
        <motion.div 
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
          className="absolute bottom-[35%] right-[4%] font-mono text-xs font-bold text-[#0F52BA] opacity-60 bg-white/80 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-[#0F52BA]/30 shadow-md"
        >
          [ ZERO-TRUST MESH // 100k REQ/S ]
        </motion.div>

        {/* Edge CDN Badge */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
          className="absolute top-[55%] left-[6%] font-mono text-xs font-bold text-[#FF007F] opacity-50 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-2xl border border-[#FF007F]/30 shadow-sm"
        >
          [ LATENCY: &lt;50MS ]
        </motion.div>
      </motion.div>

      {/* LAYER 3: Pulsing Foreground Nodes */}
      <motion.div style={{ x: layer3X, y: layer3Y }} className="absolute inset-0">
        <div className="absolute top-[22%] right-[22%] w-4 h-4 rounded-full bg-[#0F52BA]/50 animate-ping" />
        <div className="absolute bottom-[28%] left-[28%] w-4 h-4 rounded-full bg-[#FF007F]/50 animate-ping" />
        <div className="absolute top-[65%] right-[35%] w-3 h-3 rounded-full bg-green-500/50 animate-ping" />
      </motion.div>

    </div>
  );
};
