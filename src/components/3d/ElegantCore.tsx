"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { Float } from "@react-three/drei";

export default function ElegantCore() {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Track mouse coordinates manually (outside of useFrame) for smooth lerping
  const mousePos = useRef({ x: 0, y: 0 });
  const targetRotation = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates to -1 to 1
      mousePos.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mousePos.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Base slow rotation
      groupRef.current.rotation.y += delta * 0.2;
      groupRef.current.rotation.x += delta * 0.1;

      // Mouse-tracking tilt logic (adds dynamic interaction)
      targetRotation.current.x = mousePos.current.y * 0.5; // Tilt up/down
      targetRotation.current.y = mousePos.current.x * 0.5; // Tilt left/right
      
      // Smooth interpolation (lerp) towards target rotation
      groupRef.current.rotation.x += (targetRotation.current.x - groupRef.current.rotation.x) * 0.05;
      groupRef.current.rotation.y += (targetRotation.current.y - groupRef.current.rotation.y) * 0.05;
    }
  });

  return (
    <Float 
      speed={2} 
      rotationIntensity={0.5} 
      floatIntensity={1}
    >
      <group ref={groupRef}>
        <mesh ref={meshRef} castShadow receiveShadow>
          <icosahedronGeometry args={[2.5, 1]} />
          <meshPhysicalMaterial 
            color="#ffffff"
            metalness={0.9}
            roughness={0.1}
            clearcoat={1}
            clearcoatRoughness={0.1}
            emissive="#ffffff"
            emissiveIntensity={0.2}
          />
        </mesh>
        
        {/* Abstract Inner Wireframe Core */}
        <mesh>
          <icosahedronGeometry args={[1.8, 2]} />
          <meshBasicMaterial 
            color="#0F52BA" 
            wireframe
            transparent
            opacity={0.4}
          />
        </mesh>
      </group>
    </Float>
  );
}
