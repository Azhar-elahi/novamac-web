'use client';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { theme } from '@/styles/theme';
import { ACTS } from '../experienceActs';
import { useScrollStore } from '@/store/useScrollStore';
import { useUIStore } from '@/store/useUIStore';
import gsap from 'gsap';

export default function Scene5Climax() {
  const groupRef = useRef<THREE.Group>(null);
  const orbRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);
  const hasTriggeredRef = useRef(false);

  useFrame(() => {
    const progress = useScrollStore.getState().progress;

    if (groupRef.current) {
      groupRef.current.visible = progress >= ACTS.climaxStart - 0.1;
    }

    // Climax starts at 0.85
    if (progress > ACTS.climaxStart && orbRef.current && materialRef.current) {
      const p = Math.max(0, (progress - ACTS.climaxStart) / (1 - ACTS.climaxStart));
      
      // Scale up the orb
      const scale = 1 + p * 20; // fill screen
      orbRef.current.scale.setScalar(scale);

      // Emissive intensity ramps up
      materialRef.current.emissiveIntensity = 1 + p * 5;

      // Trigger White Flash at 0.98
      if (progress >= ACTS.flashAt && !hasTriggeredRef.current) {
        hasTriggeredRef.current = true;
        const whiteFlash = document.getElementById('white-flash');
        if (whiteFlash) {
          gsap.to(whiteFlash, { opacity: 1, duration: 0.3, onComplete: () => {
            useScrollStore.getState().setTransitioned(true);
            useUIStore.getState().setLandingMode(false);
            window.scrollTo(0, 0);
            gsap.to(whiteFlash, { opacity: 0, duration: 1.5, ease: 'power2.out', delay: 0.4 });
          }});
        } else {
          useScrollStore.getState().setTransitioned(true);
          useUIStore.getState().setLandingMode(false);
        }
      }
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, -172]}>
      <mesh ref={orbRef}>
        <sphereGeometry args={[3, 64, 64]} />
        <meshStandardMaterial
          ref={materialRef}
          color="#ffffff"
          emissive="#38bdf8"
          emissiveIntensity={10}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}
