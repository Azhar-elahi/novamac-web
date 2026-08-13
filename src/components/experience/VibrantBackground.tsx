"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Environment } from "@react-three/drei";
import { EffectComposer, Bloom, Noise } from "@react-three/postprocessing";
import { useRef } from "react";
import * as THREE from "three";

function FluidSpheres() {
  const groupRef = useRef<THREE.Group>(null);
  const sphere1 = useRef<THREE.Mesh>(null);
  const sphere2 = useRef<THREE.Mesh>(null);
  const sphere3 = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Rotate the whole group slowly
      groupRef.current.rotation.y += delta * 0.1;
      groupRef.current.rotation.z += delta * 0.05;

      // Parallax based on mouse
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, state.pointer.x * 2, 0.05);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, state.pointer.y * 2, 0.05);
      
      // Also react to scroll (pulling down moves them up)
      const scrollY = window.scrollY / (document.body.scrollHeight - window.innerHeight || 1);
      groupRef.current.position.y += (scrollY * 5 - groupRef.current.position.y) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Cyan Sphere */}
      <mesh ref={sphere1} position={[-2, 1, -5]}>
        <sphereGeometry args={[2.5, 64, 64]} />
        <MeshDistortMaterial 
          color="#00f0ff" 
          envMapIntensity={1} 
          clearcoat={1} 
          clearcoatRoughness={0.1} 
          metalness={0.1} 
          roughness={0.2}
          distort={0.4} 
          speed={2} 
        />
      </mesh>

      {/* Hot Pink Sphere */}
      <mesh ref={sphere2} position={[2, -1, -6]}>
        <sphereGeometry args={[3, 64, 64]} />
        <MeshDistortMaterial 
          color="#ff3366" 
          envMapIntensity={1} 
          clearcoat={1} 
          clearcoatRoughness={0.1} 
          metalness={0.1} 
          roughness={0.2}
          distort={0.5} 
          speed={1.5} 
        />
      </mesh>

      {/* Deep Purple Sphere */}
      <mesh ref={sphere3} position={[0, -2, -4]}>
        <sphereGeometry args={[2, 64, 64]} />
        <MeshDistortMaterial 
          color="#7b61ff" 
          envMapIntensity={1} 
          clearcoat={1} 
          clearcoatRoughness={0.1} 
          metalness={0.1} 
          roughness={0.2}
          distort={0.6} 
          speed={3} 
        />
      </mesh>
    </group>
  );
}

export default function VibrantBackground() {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 bg-[#0a0a0a]">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
        <Environment preset="studio" />
        
        <FluidSpheres />

        <EffectComposer>
          <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} intensity={1.5} />
          <Noise opacity={0.03} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
