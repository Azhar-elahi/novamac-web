'use client';
import { useEffect } from 'react';
import { useScrollStore } from '@/store/useScrollStore';

export default function ScrollProgressDebug() {
  const { progress, sceneIndex, isTransitioned } = useScrollStore();

  if (process.env.NODE_ENV !== 'development') return null;

  return (
    <div className="fixed top-4 left-4 z-[10000] bg-black/80 text-white p-4 font-mono text-xs pointer-events-none rounded border border-white/20 backdrop-blur">
      <div>progress: {progress.toFixed(3)}</div>
      <div>sceneIndex: {sceneIndex}</div>
      <div>isTransitioned: {String(isTransitioned)}</div>
    </div>
  );
}
