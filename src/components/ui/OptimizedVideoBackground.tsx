"use client";

import React, { useEffect, useRef } from "react";

interface OptimizedVideoProps {
  src: string;
  className?: string;
  opacity?: number;
}

export function OptimizedVideoBackground({ src, className = "", opacity = 0.9 }: OptimizedVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Enforce WebKit / Safari strict muted properties programmatically
    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
    video.setAttribute("autoplay", "");

    const attemptPlay = () => {
      const p = video.play();
      if (p !== undefined) {
        p.catch(() => {
          // If browser policy blocks un-triggered autoplay, retry on first interaction
          const enablePlay = () => {
            if (video) {
              video.muted = true;
              video.play().catch(() => {});
            }
            window.removeEventListener("touchstart", enablePlay);
            window.removeEventListener("click", enablePlay);
            window.removeEventListener("scroll", enablePlay);
          };
          window.addEventListener("touchstart", enablePlay, { once: true, passive: true });
          window.addEventListener("click", enablePlay, { once: true, passive: true });
          window.addEventListener("scroll", enablePlay, { once: true, passive: true });
        });
      }
    };

    attemptPlay();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            attemptPlay();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.05 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      style={{ opacity }}
      className={`w-full h-full object-cover pointer-events-none transform-gpu contain-content will-change-transform ${className}`}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
