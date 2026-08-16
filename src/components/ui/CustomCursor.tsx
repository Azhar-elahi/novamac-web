"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Ultra-responsive high-stiffness spring for zero-lag 120Hz/60Hz tracking
  const springX = useSpring(cursorX, { stiffness: 1200, damping: 45, mass: 0.2 });
  const springY = useSpring(cursorY, { stiffness: 1200, damping: 45, mass: 0.2 });
  
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      // Offset by half size (w-5 = 20px -> offset 10px)
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);
    };

    const enter = () => {
      if (!cursorRef.current) return;
      cursorRef.current.style.transform = "scale(2.5)";
      cursorRef.current.style.backgroundColor = "white";
    };

    const leave = () => {
      if (!cursorRef.current) return;
      cursorRef.current.style.transform = "scale(1)";
      cursorRef.current.style.backgroundColor = "white";
    };

    const HOVER_SELECTOR = "a, button, [role='button'], input, select, textarea, .hover-trigger";

    const onPointerOver = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest(HOVER_SELECTOR)) enter();
    };

    const onPointerOut = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest(HOVER_SELECTOR)) leave();
    };

    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("pointerover", onPointerOver, { passive: true });
    document.addEventListener("pointerout", onPointerOut, { passive: true });

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("pointerout", onPointerOut);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div 
      ref={cursorRef}
      className="fixed top-0 left-0 w-5 h-5 bg-white rounded-full pointer-events-none z-[99999999] hidden md:block mix-blend-difference will-change-transform transform-gpu"
      style={{ x: springX, y: springY }} 
    />
  );
}
