'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Text, Sparkles, Float } from '@react-three/drei';
import { useScrollStore } from '@/store/useScrollStore';
import { ACTS, ROOM } from '../experienceActs';

function applyDissolve(object: THREE.Object3D, dissolve: number) {
  const opacity = 1 - dissolve;
  object.traverse((child) => {
    const mesh = child as THREE.Mesh;
    if (!mesh.isMesh || !mesh.material) return;
    const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    mats.forEach((mat) => {
      if ('opacity' in mat) {
        (mat as THREE.Material & { opacity: number }).opacity = opacity;
        mat.transparent = true;
      }
    });
  });
}

export default function Scene1Room() {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const outerRingRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const progress = useScrollStore.getState().progress;

    if (!groupRef.current) return;

    const inScene = progress >= ACTS.roomStart && progress <= ACTS.roomEnd + 0.02;
    groupRef.current.visible = inScene;

    if (!inScene) return;

    const dissolve = THREE.MathUtils.smoothstep(
      progress,
      ACTS.roomDissolveStart,
      ACTS.roomEnd
    );
    applyDissolve(groupRef.current, dissolve);

    const t = state.clock.elapsedTime;
    if (ringRef.current) ringRef.current.rotation.z = t * 0.3;
    if (outerRingRef.current) outerRingRef.current.rotation.z = -t * 0.15;
  });

  return (
    <group ref={groupRef}>
      {/* ── High-Tech Cyber Space Environment ── */}
      
      {/* Concentric Neon HUD Rings behind emblem */}
      <mesh ref={ringRef} position={[0, 0.15, ROOM.boardZ - 0.3]}>
        <torusGeometry args={[7.2, 0.06, 16, 100]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.8} toneMapped={false} />
      </mesh>
      
      <mesh ref={outerRingRef} position={[0, 0.15, ROOM.boardZ - 0.4]}>
        <torusGeometry args={[8.4, 0.03, 16, 100]} />
        <meshBasicMaterial color="#f43f5e" transparent opacity={0.5} toneMapped={false} />
      </mesh>

      {/* Floating Crystal Data Nodes */}
      <Float speed={2.5} rotationIntensity={0.8} floatIntensity={1.2}>
        <mesh position={[-7.5, 2.5, ROOM.boardZ]}>
          <octahedronGeometry args={[0.6]} />
          <meshStandardMaterial color="#38bdf8" roughness={0.1} metalness={0.9} emissive="#38bdf8" emissiveIntensity={2.0} toneMapped={false} />
        </mesh>
        <mesh position={[7.5, -2.5, ROOM.boardZ]}>
          <octahedronGeometry args={[0.7]} />
          <meshStandardMaterial color="#f43f5e" roughness={0.1} metalness={0.9} emissive="#f43f5e" emissiveIntensity={2.0} toneMapped={false} />
        </mesh>
      </Float>

      {/* Floating Cyber Particles */}
      <Sparkles position={[0, 0, -8]} scale={[24, 14, 10]} count={260} speed={0.6} opacity={0.9} size={4} color="#38bdf8" />
      <Sparkles position={[0, 0, -8]} scale={[20, 12, 10]} count={180} speed={0.8} opacity={0.7} size={3} color="#f43f5e" />

      {/* ── High-Tech Obsidian Glass Emblem ── */}
      <group position={[0, 0.15, ROOM.boardZ]}>
        {/* Razor-Sharp Glowing Cyan Edge Frame */}
        <mesh position={[0, 0, -0.03]}>
          <planeGeometry args={[14.4, 7.4]} />
          <meshBasicMaterial color="#38bdf8" transparent opacity={0.7} toneMapped={false} />
        </mesh>

        {/* Heavy Obsidian Metallic Glass Chassis */}
        <mesh>
          <planeGeometry args={[14, 7]} />
          <meshPhysicalMaterial
            color="#0b1329"
            metalness={0.9}
            roughness={0.15}
            transmission={0.35}
            thickness={0.8}
            ior={1.6}
            transparent
            opacity={0.92}
          />
        </mesh>

        {/* Laser-Etched High-Contrast Title */}
        <Text
          position={[0, 0, 0.08]}
          fontSize={0.82}
          letterSpacing={0.14}
          anchorX="center"
          anchorY="middle"
        >
          <meshBasicMaterial color="#ffffff" />
          NOVAMAC SOLUTIONS
        </Text>
      </group>
    </group>
  );
}
