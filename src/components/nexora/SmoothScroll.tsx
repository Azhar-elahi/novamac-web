"use client";

import { useEffect } from "react";
import Lenis from "lenis";

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
