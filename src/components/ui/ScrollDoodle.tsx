"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface ScrollDoodleProps {
  paths: string[];
  viewBox?: string;
  className?: string;
  color?: string;
}

export default function ScrollDoodle({ 
  paths, 
  viewBox = "0 0 1000 1000", 
  className = "",
  color = "#0F52BA" 
}: ScrollDoodleProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress within this specific component's bounding box
  // For labyrinth scroll, we might just track the global scroll
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"]
  });

  // Smooth out the drawing
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Calculate an intense glow based on scroll speed (optional, for "livingness")
  // We'll keep it simple and just make it glow constantly
  
  return (
    <div ref={containerRef} className={`absolute pointer-events-none z-10 ${className}`}>
      <svg 
        viewBox={viewBox} 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible drop-shadow-[0_0_15px_rgba(15,82,186,0.8)]"
      >
        {paths.map((d, i) => (
          <motion.path
            key={i}
            d={d}
            stroke={color}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              pathLength,
              opacity: useTransform(pathLength, [0, 0.05], [0, 1]) // Fade in as it starts drawing
            }}
          />
        ))}
      </svg>
    </div>
  );
}
