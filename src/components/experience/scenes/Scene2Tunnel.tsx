'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { tunnelVertexShader, tunnelFragmentShader } from '../shaders/tunnelMaterial';
import { useScrollStore } from '@/store/useScrollStore';
import { ACTS, TUNNEL } from '../experienceActs';

export default function Scene2Tunnel() {
  const groupRef = useRef<THREE.Group>(null);
  const tunnelMatRef = useRef<THREE.ShaderMaterial>(null);
  const washMatRef = useRef<THREE.MeshBasicMaterial>(null);
  const particlesRef = useRef<THREE.InstancedMesh>(null);
  const particleCount = 600;
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particlesData = useMemo(() => {
    const data = [];
    for (let i = 0; i < particleCount; i++) {
      data.push({
        angle: Math.random() * Math.PI * 2,
        radius: 2.5 + Math.random() * 6.5,
        z: (Math.random() - 0.5) * 32,
        speed: 15 + Math.random() * 25,
      });
    }
    return data;
  }, [particleCount]);

  useFrame((state, delta) => {
    const progress = useScrollStore.getState().progress;

    if (groupRef.current) {
      groupRef.current.visible = progress >= ACTS.tunnelFadeIn - 0.05 && progress <= ACTS.tunnelEnd + 0.05;
    }

    const tunnelIn = THREE.MathUtils.smoothstep(progress, ACTS.tunnelFadeIn, ACTS.tunnelStart + 0.04);
    const tunnelOut = 1 - THREE.MathUtils.smoothstep(progress, ACTS.tunnelEnd - 0.06, ACTS.tunnelEnd);
    const opacity = tunnelIn * tunnelOut;

    if (tunnelMatRef.current) {
      tunnelMatRef.current.uniforms.uTime.value = state.clock.elapsedTime * 2.0;
      tunnelMatRef.current.uniforms.uOpacity.value = Math.min(1, opacity * 1.5);
    }

    if (washMatRef.current) {
      const wash = THREE.MathUtils.smoothstep(progress, ACTS.roomDissolveStart, ACTS.tunnelStart + 0.06)
        * (1 - THREE.MathUtils.smoothstep(progress, ACTS.tunnelStart + 0.08, ACTS.tunnelStart + 0.18));
      washMatRef.current.opacity = wash * 0.8;
    }

    if (!particlesRef.current) return;
    if (progress < ACTS.tunnelFadeIn || progress > ACTS.tunnelEnd + 0.05) return;

    const speedMul = 1.0 + progress * 5;
    particlesData.forEach((p, i) => {
      p.z += p.speed * delta * speedMul;
      if (p.z > TUNNEL.length / 2) p.z = -TUNNEL.length / 2;

      dummy.position.set(
        Math.cos(p.angle) * p.radius,
        Math.sin(p.angle) * p.radius,
        p.z
      );
      dummy.scale.set(0.12, 0.12, 0.7);
      dummy.updateMatrix();
      particlesRef.current!.setMatrixAt(i, dummy.matrix);
    });
    particlesRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <group ref={groupRef} position={[0, 0, TUNNEL.centerZ]}>
      {/* Light wash when entering the tunnel */}
      <mesh position={[0, 0, -TUNNEL.length / 2 + 2]}>
        <planeGeometry args={[30, 30]} />
        <meshBasicMaterial
          ref={washMatRef}
          color="#38bdf8"
          transparent
          opacity={0}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Main Hyperspace GLSL Warp Cylinder */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[TUNNEL.radius, TUNNEL.radius, TUNNEL.length, 64, 12, true]} />
        <shaderMaterial
          ref={tunnelMatRef}
          vertexShader={tunnelVertexShader}
          fragmentShader={tunnelFragmentShader}
          uniforms={{
            uTime: { value: 0 },
            uOpacity: { value: 0 },
            uColor: { value: new THREE.Color('#0284c7') },
            uPeach: { value: new THREE.Color('#f43f5e') },
          }}
          side={THREE.BackSide}
          transparent
          depthWrite={false}
        />
      </mesh>

      {/* Concentric Neon HUD Rings */}
      {[0, 1, 2, 3].map((i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, (i * Math.PI) / 4]}>
          <torusGeometry args={[TUNNEL.radius - 1.5 - i, 0.25, 8, 64]} />
          <meshBasicMaterial
            color={i % 2 === 0 ? '#38bdf8' : '#f43f5e'}
            transparent
            opacity={0.5}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
            toneMapped={false}
          />
        </mesh>
      ))}

      {/* Speeding Star Particles */}
      <instancedMesh ref={particlesRef} args={[undefined, undefined, particleCount]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.95} blending={THREE.AdditiveBlending} toneMapped={false} />
      </instancedMesh>
    </group>
  );
}
