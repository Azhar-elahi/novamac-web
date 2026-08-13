'use client';
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function AmbientDust() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const count = 500;
  
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 40;
      const y = (Math.random() - 0.5) * 40;
      // Spread across the entire Z depth of the journey
      const z = (Math.random() - 0.5) * 120 - 30;
      const speed = 0.1 + Math.random() * 0.2;
      temp.push({ x, y, z, speed });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    const time = state.clock.elapsedTime;
    
    particles.forEach((particle, i) => {
      // Gentle drift
      dummy.position.set(
        particle.x + Math.sin(time * particle.speed) * 2,
        particle.y + Math.cos(time * particle.speed) * 2,
        particle.z
      );
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.05, 8, 8]} />
      <meshBasicMaterial color="#ffffff" transparent opacity={0.15} />
    </instancedMesh>
  );
}
