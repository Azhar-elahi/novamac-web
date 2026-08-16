"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const targetPos = useRef({ x: -100, y: -100 });
  const isHovered = useRef(false);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;

    const onMouseMove = (e: MouseEvent) => {
      // Offset by half dot size (w-4 = 16px -> 8px offset)
      targetPos.current.x = e.clientX - 8;
      targetPos.current.y = e.clientY - 8;
    };

    const updatePosition = () => {
      if (el) {
        const scale = isHovered.current ? 2.2 : 1;
        const opacity = isHovered.current ? 0.7 : 0.9;
        el.style.transform = `translate3d(${targetPos.current.x}px, ${targetPos.current.y}px, 0px) scale(${scale})`;
        el.style.opacity = `${opacity}`;
      }
      rafId.current = requestAnimationFrame(updatePosition);
    };

    const HOVER_SELECTOR = "a, button, [role='button'], input, select, textarea, .hover-trigger";

    const onPointerOver = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest(HOVER_SELECTOR)) {
        isHovered.current = true;
      }
    };

    const onPointerOut = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest(HOVER_SELECTOR)) {
        isHovered.current = false;
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("pointerover", onPointerOver, { passive: true });
    document.addEventListener("pointerout", onPointerOut, { passive: true });

    rafId.current = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("pointerout", onPointerOut);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div 
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 bg-[#3B82F6] rounded-full pointer-events-none z-[99999999] hidden md:block opacity-90 shadow-[0_0_12px_rgba(59,130,246,0.8)] will-change-transform transform-gpu"
      style={{
        transform: "translate3d(-100px, -100px, 0px)",
      }}
    />
  );
}
