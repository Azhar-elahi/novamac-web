import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initLenisScrollTriggerProxy(lenis: any) {
  if (!lenis) return;

  if (typeof lenis.on === 'function') {
    lenis.on('scroll', ScrollTrigger.update);
  }
  
  gsap.ticker.add((time) => {
    if (typeof lenis.raf === 'function') {
      lenis.raf(time * 1000);
    }
  });
  
  gsap.ticker.lagSmoothing(0);
}

