'use client';
import { useEffect, useState } from 'react';
import { useScrollStore } from '@/store/useScrollStore';
import { theme } from '@/styles/theme';

export default function BlinkOverlay() {
  const { progress, isTransitioned } = useScrollStore();
  const [idleOpen, setIdleOpen] = useState(0);

  useEffect(() => {
    if (progress > 0 || isTransitioned) return;

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = (now - start) / 1000;
      const struggle = Math.min(1, elapsed * 0.35);
      const flutter = Math.abs(Math.sin(elapsed * 2.8)) * struggle * 42;
      setIdleOpen(flutter);
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [progress, isTransitioned]);

  if (isTransitioned) return null;

  const wakeThreshold = 0.05;
  const isOpen = progress >= wakeThreshold;

  let eyelidOffset = 0;
  if (!isOpen) {
    const p = progress / wakeThreshold;
    const scrollFlutter =
      progress > 0 ? Math.max(0, Math.sin(p * Math.PI * 3) * (p * 55)) : 0;
    eyelidOffset = Math.max(idleOpen, scrollFlutter);
  } else {
    eyelidOffset = 100;
  }

  const openPercentage = Math.min(progress / wakeThreshold, 1);
  const blurAmount = isOpen ? 0 : Math.max(0, 24 - (openPercentage * 20) - (idleOpen * 0.15));
  const overlayOpacity = progress > 0.07 ? 0 : 1;

  return (
    <div
      className="fixed inset-0 z-50 pointer-events-none flex flex-col justify-between overflow-hidden"
      style={{
        backgroundColor: isOpen
          ? 'transparent'
          : 'rgba(42, 36, 56, 0.55)',
        opacity: overlayOpacity,
        backdropFilter: `blur(${blurAmount}px)`,
        WebkitBackdropFilter: `blur(${blurAmount}px)`,
        transition: 'background-color 0.15s, opacity 0.6s ease-out',
      }}
    >
      <div
        className="w-full transition-transform duration-100 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-[0_20px_60px_rgba(0,0,0,0.85)]"
        style={{
          height: '55vh',
          transform: `translateY(-${eyelidOffset}%)`,
          borderRadius: '0 0 50% 50% / 0 0 22% 22%',
          background: `linear-gradient(to bottom, #181124, #2a1f3d)`,
        }}
      />

      <div
        className="w-full transition-transform duration-100 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-[0_-20px_60px_rgba(0,0,0,0.85)]"
        style={{
          height: '55vh',
          transform: `translateY(${eyelidOffset}%)`,
          borderRadius: '50% 50% 0 0 / 22% 22% 0 0',
          background: `linear-gradient(to top, #181124, #2a1f3d)`,
        }}
      />

      {!isOpen && (
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-[60]">
          <div className="mt-48 flex flex-col items-center gap-3 text-center">
            <span className="text-white/70 text-xs font-mono tracking-[0.35em] uppercase animate-pulse">
              Scroll to wake
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
