"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useMotionTemplate, useSpring, useTransform } from "framer-motion";

/**
 * Wraps any card in a real 3D tilt that tracks the cursor — the card
 * leans toward the pointer with perspective + a light sheen, instead
 * of sitting flat. Used for the scroll-story task/case cards and the
 * hero mockup cards so the interface itself feels touchable, not
 * just animated-on-scroll.
 */
export default function TiltCard({
  children,
  className = "",
  maxTilt = 10,
}: {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const springCfg = { stiffness: 220, damping: 22, mass: 0.6 };
  const rotateX = useSpring(useTransform(py, [0, 1], [maxTilt, -maxTilt]), springCfg);
  const rotateY = useSpring(useTransform(px, [0, 1], [-maxTilt, maxTilt]), springCfg);
  const sheenX = useSpring(useTransform(px, [0, 1], [0, 100]), springCfg);
  const sheenY = useSpring(useTransform(py, [0, 1], [0, 100]), springCfg);
  const sheen = useMotionTemplate`radial-gradient(circle at ${sheenX}% ${sheenY}%, rgba(255,255,255,0.35), transparent 55%)`;

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };

  const reset = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={`relative will-change-transform ${className}`}
    >
      {children}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 hover:opacity-100 transition-opacity duration-300"
        style={{ background: sheen }}
      />
    </motion.div>
  );
}
