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

    // Event delegation: attach ONE listener on the window instead of
    // re-scanning the whole DOM and re-attaching listeners to every
    // element on every mutation (which was the previous approach and
    // caused jank on scroll/animation-heavy pages). We use the
    // capture-phase "pointerover"/"pointerout" events and check
    // e.target.closest(...) to detect hover-worthy elements.
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
  }, [ringX, ringY, dotX, dotY]);

  return (
    <>
      <motion.div ref={ringRef}
        className="fixed top-0 left-0 w-9 h-9 rounded-full border border-slate-300 pointer-events-none z-[9999] transition-all duration-300 ease-out hidden md:block"
        style={{ x: rX, y: rY }} />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] hidden md:block bg-slate-50 mix-blend-difference"
        style={{ x: dX, y: dY }} />
    </>
  );
}
