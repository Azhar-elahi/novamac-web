"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Buttery smooth scroll (Lenis) — replaces the browser's default
 * instant/native scroll with an eased, momentum-based feel used by
 * pretty much every Awwwards-tier site. window.scrollY still updates
 * normally, so StoryCanvas's scroll-progress tracking keeps working
 * without any changes.
 */
export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
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
