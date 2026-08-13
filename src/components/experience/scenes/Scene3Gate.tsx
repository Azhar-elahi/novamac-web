'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useScrollStore } from '@/store/useScrollStore';
import { ACTS, GATE } from '../experienceActs';

export default function Scene3Gate() {
  const groupRef = useRef<THREE.Group>(null);
  const beamMatRef = useRef<THREE.MeshBasicMaterial>(null);
  const rimMatRef = useRef<THREE.MeshStandardMaterial>(null);

  const { gateShape, extrudeSettings } = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(-12, -12);
    shape.lineTo(12, -12);
    shape.lineTo(12, 12);
    shape.lineTo(-12, 12);
    shape.closePath();

    const holePath = new THREE.Path();
    holePath.moveTo(-1, -2.8);
    holePath.lineTo(-0.65, 0.35);
    holePath.absarc(0, 1.35, 1.35, Math.PI + 0.45, Math.PI * 2 - 0.45, false);
    holePath.lineTo(1, -2.8);
    holePath.closePath();
    shape.holes.push(holePath);

    const extrudeSettings = {
      depth: 0.35,
      bevelEnabled: true,
      bevelSegments: 3,
      steps: 1,
      bevelSize: 0.08,
      bevelThickness: 0.08,
    };

    return { gateShape: shape, extrudeSettings };
  }, []);

  useFrame((state) => {
    const progress = useScrollStore.getState().progress;
    if (!groupRef.current) return;

    const visible = progress >= ACTS.gateFadeIn - 0.04 && progress <= ACTS.gateEnd + 0.04;
    groupRef.current.visible = visible;

    const approach = THREE.MathUtils.smoothstep(progress, ACTS.gateFadeIn, ACTS.gateEnd);
    const pulse = 0.9 + Math.sin(state.clock.elapsedTime * 2) * 0.1;

    if (beamMatRef.current) {
      beamMatRef.current.opacity = (0.25 + approach * 0.55) * pulse;
    }
    if (rimMatRef.current) {
      rimMatRef.current.emissiveIntensity = 0.4 + approach * 2.5;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, GATE.z]}>
      {/* Radiance behind the gate */}
      <mesh position={[0, 0, -3]}>
        <planeGeometry args={[30, 30]} />
        <meshBasicMaterial color="#ffffff" toneMapped={false} />
      </mesh>
      <pointLight position={[0, 0, -4]} intensity={40} color="#ffffff" distance={80} decay={1.5} />

      <mesh>
        <extrudeGeometry args={[gateShape, extrudeSettings]} />
        <meshPhysicalMaterial
          color="#f5fbff"
          transmission={0.88}
          opacity={1}
          metalness={0.05}
          roughness={0.12}
          ior={1.52}
          thickness={1.2}
          transparent
        />
      </mesh>

      {/* Frosted rim catch-light */}
      <mesh scale={[1.02, 1.02, 1]}>
        <extrudeGeometry args={[gateShape, extrudeSettings]} />
        <meshStandardMaterial
          ref={rimMatRef}
          color="#ffffff"
          emissive="#B0E0E6"
          emissiveIntensity={1}
          transparent
          opacity={0.35}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Keyhole beam — toward the camera */}
      <mesh position={[0, 0.35, 12]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.55, 18, 45, 32, 1, true]} />
        <meshBasicMaterial
          ref={beamMatRef}
          color="#ffffff"
          transparent
          opacity={0.85}
          blending={THREE.AdditiveBlending}
          toneMapped={false}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}
