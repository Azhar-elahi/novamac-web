'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useScrollStore } from '@/store/useScrollStore';
import { useUIStore } from '@/store/useUIStore';

export default function MobileFallback() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const { setTransitioned } = useScrollStore();

  useEffect(() => {
    if (!overlayRef.current) return;

    // The blinking animation, matching BlinkOverlay
    const tl = gsap.timeline({
      onComplete: () => {
        setTransitioned(true);
        useUIStore.getState().setLandingMode(false);
      }
    });

    tl.to(overlayRef.current, {
      opacity: 0.8,
      yoyo: true,
      ease: 'sine.inOut',
      duration: 0.9,
      repeat: 3, // Blink a few times
    });
    
    // Cross-dissolve out
    tl.to(overlayRef.current, {
      opacity: 0,
      duration: 1.5,
      ease: 'power2.out',
    });

    return () => {
      tl.kill();
    };
  }, [setTransitioned]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 bg-black pointer-events-none"
      style={{ opacity: 1 }}
    />
  );
}
