"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, ContactShadows, useTexture } from "@react-three/drei";
import { EffectComposer, Noise } from "@react-three/postprocessing";
import { useRef, useState } from "react";
import * as THREE from "three";
import { 
  FrostedGlassMaterial, 
  PurpleClayMaterial, 
  PinkClayMaterial, 
  CyanClayMaterial,
  WhiteMatteMaterial
} from "./materials/PremiumMaterialsLight";

// --- CUSTOM SCROLL HOOK ---
function useWindowScroll() {
  const getScroll = () => {
    if (typeof window === "undefined") return 0;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    if (maxScroll <= 0) return 0;
    return window.scrollY / maxScroll;
  };
  return getScroll;
}

// --- 3D ACTS ---

function AbstractComposition() {
  const getScroll = useWindowScroll();
  const groupRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const cubeRef = useRef<THREE.Mesh>(null);
  const dodecRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      const p = getScroll();
      
      // Global parallax based on scroll
      groupRef.current.position.y = THREE.MathUtils.lerp(0, 15, p);
      groupRef.current.rotation.y = p * Math.PI * 2;
      groupRef.current.rotation.x = p * Math.PI;

      // Mouse parallax
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, state.pointer.x * 2, 0.05);
      groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, -state.pointer.y * 2 - 5, 0.05);
    }
    
    // Rotate individual items
    if (ringRef.current) ringRef.current.rotation.x -= delta * 0.2;
    if (sphereRef.current) sphereRef.current.rotation.y += delta * 0.5;
    if (cubeRef.current) {
      cubeRef.current.rotation.x += delta * 0.3;
      cubeRef.current.rotation.y += delta * 0.2;
    }
    if (dodecRef.current) dodecRef.current.rotation.z -= delta * 0.4;
  });

  return (
    <group ref={groupRef} position={[0, 0, -5]}>
      {/* Central Glass Object */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh ref={sphereRef} position={[0, 0, 0]} castShadow>
          <sphereGeometry args={[1.5, 64, 64]} />
          <primitive object={FrostedGlassMaterial} />
        </mesh>
      </Float>

      {/* Orbiting Clay Objects */}
      <Float speed={3} rotationIntensity={2} floatIntensity={3}>
        <mesh ref={ringRef} position={[2.5, 1, -1]} castShadow>
          <torusGeometry args={[1, 0.3, 32, 64]} />
          <primitive object={PurpleClayMaterial} />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5}>
        <mesh ref={cubeRef} position={[-2, -1.5, 1]} castShadow>
          <boxGeometry args={[1.2, 1.2, 1.2]} />
          <primitive object={PinkClayMaterial} />
        </mesh>
      </Float>

      <Float speed={2.5} rotationIntensity={1} floatIntensity={2}>
        <mesh ref={dodecRef} position={[1, -2.5, -2]} castShadow>
          <dodecahedronGeometry args={[0.8]} />
          <primitive object={CyanClayMaterial} />
        </mesh>
      </Float>
    </group>
  );
}

function ImageFrames() {
  const getScroll = useWindowScroll();
  const groupRef = useRef<THREE.Group>(null);
  
  // We use standard colors or placeholder textures for the frames
  
  useFrame((state) => {
    if (groupRef.current) {
      const p = getScroll();
      // Only bring these into view roughly between 40% and 80% scroll
      const r = THREE.MathUtils.clamp((p - 0.2) * 2, 0, 1);
      
      groupRef.current.position.y = THREE.MathUtils.lerp(-20, 5, r);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(-Math.PI / 4, 0, r);
    }
  });

  return (
    <group ref={groupRef} position={[-3, -20, -10]}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <group position={[0, 0, 0]}>
          {/* Frame Base */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[4, 5, 0.2]} />
            <primitive object={WhiteMatteMaterial} />
          </mesh>
          {/* Placeholder Image Surface */}
          <mesh position={[0, 0, 0.11]}>
            <planeGeometry args={[3.6, 4.6]} />
            <meshBasicMaterial color="#e2e8f0" />
          </mesh>
        </group>
      </Float>

      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.8}>
        <group position={[4, -1, -2]}>
          <mesh castShadow receiveShadow>
            <boxGeometry args={[4, 3, 0.2]} />
            <primitive object={FrostedGlassMaterial} />
          </mesh>
          <mesh position={[0, 0, 0.11]}>
            <planeGeometry args={[3.6, 2.6]} />
            <meshBasicMaterial color="#cbd5e1" />
          </mesh>
        </group>
      </Float>
    </group>
  );
}

function FloatingBackgroundNodes() {
  const [nodes] = useState(() => {
    return Array.from({ length: 20 }, () => ({
      position: [
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 20 - 15,
      ] as [number, number, number],
      scale: 0.2 + Math.random() * 0.8,
      speed: 0.5 + Math.random() * 1.5,
    }));
  });

  return (
    <group>
      {nodes.map((n, i) => (
        <Float key={i} speed={n.speed} rotationIntensity={1} floatIntensity={2} position={n.position}>
          <mesh castShadow>
            <sphereGeometry args={[n.scale, 32, 32]} />
            <primitive object={FrostedGlassMaterial} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function CameraRig() {
  useFrame((state) => {
    // Very subtle baseline camera sway
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, state.pointer.x * 0.5, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, state.pointer.y * 0.5, 0.05);
    state.camera.lookAt(0, 0, -10);
  });
  return null;
}

// --- MAIN EXPORT ---

export default function GlobalExperience() {
  return (
    <Canvas 
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 1.5]} 
      gl={{ antialias: true, powerPreference: "high-performance" }} // Antialias true for crisp edges on light bg
      shadows
    >
      <color attach="background" args={['#f4f4f6']} />
      
      {/* High-end Studio Lighting */}
      <ambientLight intensity={0.8} color="#ffffff" />
      <directionalLight 
        castShadow 
        position={[10, 20, 10]} 
        intensity={2.5} 
        color="#ffffff" 
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      
      {/* Soft fill light */}
      <pointLight position={[-10, -10, -10]} intensity={1.5} color="#7b61ff" />
      <pointLight position={[10, -10, 10]} intensity={1.5} color="#ff3366" />
      
      <Environment preset="studio" resolution={512} />

      <AbstractComposition />
      <ImageFrames />
      <FloatingBackgroundNodes />
      
      {/* Soft Contact Shadow on the "Floor" */}
      <ContactShadows position={[0, -5, 0]} opacity={0.4} scale={40} blur={2} far={10} color="#000000" />

      <CameraRig />

      <EffectComposer multisampling={4}>
        <Noise opacity={0.02} />
      </EffectComposer>
    </Canvas>
  );
}
