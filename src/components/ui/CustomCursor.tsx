"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const ringX = useMotionValue(-100);
  const ringY = useMotionValue(-100);
  const dotX  = useMotionValue(-100);
  const dotY  = useMotionValue(-100);

  const rX = useSpring(ringX, { stiffness: 260, damping: 28 });
  const rY = useSpring(ringY, { stiffness: 260, damping: 28 });
  const dX = useSpring(dotX,  { stiffness: 900, damping: 40 });
  const dY = useSpring(dotY,  { stiffness: 900, damping: 40 });

  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      ringX.set(e.clientX - 18);
      ringY.set(e.clientY - 18);
      dotX.set(e.clientX - 3);
      dotY.set(e.clientY - 3);
    };
    const enter = () => {
      if (!ringRef.current) return;
      ringRef.current.style.transform = "scale(2.4)";
      ringRef.current.style.backgroundColor = "white";
      ringRef.current.style.mixBlendMode = "difference";
    };
    const leave = () => {
      if (!ringRef.current) return;
      ringRef.current.style.transform = "scale(1)";
      ringRef.current.style.backgroundColor = "transparent";
      ringRef.current.style.mixBlendMode = "normal";
    };
    window.addEventListener("mousemove", move);
    const attach = () => {
      document.querySelectorAll("a, button, [role='button'], .hover-trigger").forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
        el.addEventListener("mouseenter", enter);
        el.addEventListener("mouseleave", leave);
      });
    };
    attach();
    const obs = new MutationObserver(attach);
    obs.observe(document.body, { childList: true, subtree: true });
    return () => { window.removeEventListener("mousemove", move); obs.disconnect(); };
  }, [ringX, ringY, dotX, dotY]);

  return (
    <>
      <motion.div ref={ringRef}
        className="fixed top-0 left-0 w-9 h-9 rounded-full border border-slate-300 pointer-events-none z-[9999] transition-all duration-300 ease-out hidden md:block"
        style={{ x: rX, y: rY }} />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] hidden md:block bg-white mix-blend-difference"
        style={{ x: dX, y: dY }} />
    </>
  );
}
