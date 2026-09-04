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
      const s1 = Math.sin(i * 17.1) - Math.floor(Math.sin(i * 17.1));
      const s2 = Math.sin(i * 43.3) - Math.floor(Math.sin(i * 43.3));
      const s3 = Math.sin(i * 81.7) - Math.floor(Math.sin(i * 81.7));
      const s4 = Math.sin(i * 29.5) - Math.floor(Math.sin(i * 29.5));
      const x = (s1 - 0.5) * 40;
      const y = (s2 - 0.5) * 40;
      // Spread across the entire Z depth of the journey
      const z = (s3 - 0.5) * 120 - 30;
      const speed = 0.1 + s4 * 0.2;
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

