"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

/**
 * Custom animated cursor — a small dot that expands into a soft ring
 * whenever it passes over anything tagged `.hover-trigger` (already
 * used site-wide on every button/link). Skipped entirely on touch
 * devices, where a custom cursor makes no sense.
 */
export default function CustomCursor() {
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 400, damping: 35, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 400, damping: 35, mass: 0.4 });

  useEffect(() => {
    const touch = window.matchMedia("(pointer: coarse)").matches;
    setIsTouch(touch);
    if (touch) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(!!target.closest(".hover-trigger"));
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, [x, y]);

  if (isTouch) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference"
      style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%", opacity: visible ? 1 : 0 }}
    >
      <motion.div
        animate={{
          width: hovering ? 56 : 14,
          height: hovering ? 56 : 14,
          backgroundColor: hovering ? "rgba(255,255,255,0.12)" : "#ffffff",
        }}
        transition={{ type: "spring", stiffness: 320, damping: 26 }}
        className="rounded-full border border-white"
      />
    </motion.div>
  );
}
