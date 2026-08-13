"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springX = useSpring(cursorX, { stiffness: 500, damping: 30 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 30 });
  
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);
    };

    const enter = () => {
      if (!cursorRef.current) return;
      cursorRef.current.style.transform = "scale(3)";
      cursorRef.current.style.backgroundColor = "white";
    };

    const leave = () => {
      if (!cursorRef.current) return;
      cursorRef.current.style.transform = "scale(1)";
      cursorRef.current.style.backgroundColor = "white";
    };

    const HOVER_SELECTOR = "a, button, [role='button'], .hover-trigger";

    const onPointerOver = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest(HOVER_SELECTOR)) enter();
    };

    const onPointerOut = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest(HOVER_SELECTOR)) leave();
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("pointerover", onPointerOver);
    document.addEventListener("pointerout", onPointerOut);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("pointerout", onPointerOut);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div 
      ref={cursorRef}
      className="fixed top-0 left-0 w-5 h-5 bg-white rounded-full pointer-events-none z-[10000] hidden md:block mix-blend-difference transition-transform duration-200 ease-out"
      style={{ x: springX, y: springY }} 
    />
  );
}
