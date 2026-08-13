'use client';
import { EffectComposer, Bloom, DepthOfField } from '@react-three/postprocessing';
import { useScrollStore } from '@/store/useScrollStore';
import { useThree } from '@react-three/fiber';
import { ACTS } from '../experienceActs';

export default function Composer() {
  const { gl } = useThree();
  const { progress } = useScrollStore();

  let dofBokeh = 0;
  let bloomIntensity = 1.35;

  if (progress < ACTS.wake) {
    dofBokeh = 7;
  } else if (progress < ACTS.wake + 0.04) {
    const p = (progress - ACTS.wake) / 0.04;
    dofBokeh = 7 * (1 - p);
  }

  if (progress >= ACTS.roomDissolveStart && progress <= ACTS.tunnelStart + 0.1) {
    bloomIntensity = 1.8;
  } else if (progress >= ACTS.gateFadeIn && progress <= ACTS.gateEnd) {
    bloomIntensity = 2.2;
  } else if (progress >= ACTS.climaxStart) {
    const p = (progress - ACTS.climaxStart) / (1 - ACTS.climaxStart);
    bloomIntensity = 1.5 + p * 4.5;
  }

  if (!gl.getContextAttributes()) return null;

  return (
    <EffectComposer multisampling={0}>
      <DepthOfField focusDistance={0.02} focalLength={0.025} bokehScale={dofBokeh} height={480} />
      <Bloom
        luminanceThreshold={0.7}
        luminanceSmoothing={0.3}
        intensity={1.2}
        mipmapBlur
      />
    </EffectComposer>
  );
}
