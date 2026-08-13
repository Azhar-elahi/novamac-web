'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { cameraPath } from '../cameraPath';
import { useScrollStore } from '@/store/useScrollStore';
import { ACTS } from '../experienceActs';
import { theme } from '@/styles/theme';
import { NOVAMAC_SERVICES, NovamacService } from '@/data/servicesData';

/** Frosted-glass service card, thin glowing edge, floats gently. */
function ServiceCard({ service }: { service: NovamacService }) {
  const groupRef = useRef<THREE.Group>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const { position, title, description, color, hasOrb } = service;

  useFrame((state) => {
    if (!groupRef.current) return;

    groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.9 + position[0]) * 0.2;

    const dist = state.camera.position.distanceTo(groupRef.current.position);
    const opacity = 1 - THREE.MathUtils.clamp((dist - 20) / 16, 0, 1);
    if (divRef.current) {
      divRef.current.style.opacity = opacity.toString();
      divRef.current.style.transform = `scale(${0.9 + 0.1 * opacity})`;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {hasOrb && (
        <>
          <GlassOrbit radius={1.9} speed={0.7} color={theme.colors.powderBlue} offset={0} />
          <GlassOrbit radius={2.5} speed={-0.5} color={theme.colors.white} offset={Math.PI} />
        </>
      )}

      <Html transform center scale={0.42} zIndexRange={[50, 0]} className="pointer-events-none">
        <div
          ref={divRef}
          className="w-80 h-80 rounded-[2rem] p-8 flex flex-col justify-between transition-opacity"
          style={{
            opacity: 0,
            background: theme.glass.background,
            backdropFilter: `blur(${theme.glass.backdropBlur})`,
            WebkitBackdropFilter: `blur(${theme.glass.backdropBlur})`,
            border: `1px solid ${color}80`,
            boxShadow: `0 20px 50px rgba(20,30,50,0.18), 0 0 30px ${color}30`,
          }}
        >
          <div
            className="w-10 h-10 rounded-full mb-4"
            style={{ background: `radial-gradient(circle, ${color}, transparent 70%)`, boxShadow: `0 0 20px ${color}` }}
          />
          <div>
            <h3 className="text-2xl font-semibold mb-3 leading-snug" style={{ color: '#20242b' }}>
              {title}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: '#4a5060' }}>
              {description}
            </p>
          </div>
        </div>
      </Html>
    </group>
  );
}

function GlassOrbit({ radius, speed, color, offset }: { radius: number; speed: number; color: string; offset: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime * speed + offset;
    meshRef.current.position.x = Math.cos(t) * radius;
    meshRef.current.position.z = Math.sin(t) * radius;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.22, 16, 16]} />
      <meshPhysicalMaterial
        color={color}
        transmission={0.85}
        roughness={0.15}
        thickness={0.3}
        ior={1.4}
        transparent
        opacity={0.9}
      />
    </mesh>
  );
}

/** Glowing transparent light-ribbon the camera rides along. */
function LightRibbon() {
  const tubeGeometry = useMemo(() => new THREE.TubeGeometry(cameraPath, 200, 0.18, 10, false), []);

  return (
    <mesh position={[0, -1.6, 0]}>
      <primitive object={tubeGeometry} attach="geometry" />
      <meshPhysicalMaterial
        color={theme.colors.powderBlue}
        emissive={theme.colors.lightPeach}
        emissiveIntensity={0.6}
        transmission={0.6}
        roughness={0.25}
        transparent
        opacity={0.55}
        toneMapped={false}
      />
    </mesh>
  );
}

/** Soft pastel cloud sea beneath the ribbon. */
function CloudSea() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const count = 70;
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const clouds = useMemo(
    () =>
      Array.from({ length: count }).map(() => ({
        x: (Math.random() - 0.5) * 70,
        y: -9 - Math.random() * 7,
        z: -30 - Math.random() * 150,
        scale: 2.5 + Math.random() * 5,
      })),
    [count]
  );

  useFrame(() => {
    if (!meshRef.current) return;
    clouds.forEach((c, i) => {
      dummy.position.set(c.x, c.y, c.z);
      dummy.scale.setScalar(c.scale);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 10, 10]} />
      <meshStandardMaterial color={'#fdf6ee'} emissive={theme.colors.lightPeach} emissiveIntensity={0.18} roughness={0.95} toneMapped={false} />
    </instancedMesh>
  );
}

export default function Scene4Ride() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    const progress = useScrollStore.getState().progress;
    if (!groupRef.current) return;
    groupRef.current.visible = progress >= ACTS.rideStart - 0.03 && progress <= ACTS.rideEnd + 0.05;
  });

  return (
    <group ref={groupRef}>
      <LightRibbon />
      <CloudSea />
      {NOVAMAC_SERVICES.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </group>
  );
}
