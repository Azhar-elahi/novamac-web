"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    // On mobile, native touch momentum is fastest and smoothest; on desktop, Lenis gives buttery silky smooth 60/120fps
    if (isMobile) return;

    const lenis = new Lenis({
      duration: 1.0,
      easing: (t: number) => 1 - Math.pow(1 - t, 3), // natural ease-out cubic
      smoothWheel: true,
      infinite: false,
    });

    let raf = 0;
    function loop(time: number) {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);

    // Expose globally for pausing during Landing Mode
    (window as any).lenis = lenis;

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      (window as any).lenis = undefined;
    };
  }, []);

  return null;
}
