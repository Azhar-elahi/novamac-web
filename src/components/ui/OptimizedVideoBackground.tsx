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

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.1 }
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
      preload="metadata"
      style={{ opacity }}
      className={`w-full h-full object-cover pointer-events-none transform-gpu contain-content will-change-transform ${className}`}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
