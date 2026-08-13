"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import { EffectComposer, Noise, Bloom } from "@react-three/postprocessing";
import { useRef, useEffect } from "react";
import * as THREE from "three";
import { useScrollStore } from "@/store/useScrollStore";
import { 
  FrostedGlassMaterial, 
  PurpleClayMaterial, 
  CyanClayMaterial,
  PinkClayMaterial
} from "./materials/PremiumMaterialsLight";

// --- CUSTOM SCROLL HOOK ---
function useWindowScroll() {
  const getScroll = () => {
    if (typeof window === "undefined") return 0;
    // We are inside a 500vh container (StoryExperience). The document body scroll height is the full height.
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    if (maxScroll <= 0) return 0;
    return window.scrollY / maxScroll;
  };
  return getScroll;
}

// A floating pedestal
function Pedestal({ position }: { position: [number, number, number] }) {
  return (
    <mesh position={position} receiveShadow castShadow>
      <cylinderGeometry args={[2, 2.2, 0.5, 32]} />
      <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.1} />
    </mesh>
  );
}

// Service 1: E-Commerce
function ECommerceObject({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <mesh castShadow>
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <primitive object={FrostedGlassMaterial} />
        </mesh>
        <mesh scale={0.5}>
          <boxGeometry args={[1, 1, 1]} />
          <primitive object={PurpleClayMaterial} />
        </mesh>
      </Float>
    </group>
  );
}

// Service 2: AI Agents
function AIObject({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <Float speed={3} rotationIntensity={2} floatIntensity={2}>
        <mesh castShadow>
          <icosahedronGeometry args={[1.2, 1]} />
          <primitive object={CyanClayMaterial} />
        </mesh>
      </Float>
      <Float speed={4} rotationIntensity={3}>
        <mesh rotation={[Math.PI/2, 0, 0]}>
          <torusGeometry args={[1.8, 0.05, 16, 64]} />
          <meshBasicMaterial color="#00f0ff" />
        </mesh>
      </Float>
    </group>
  );
}

// Service 3 & 4: Growth & Apps
function GrowthObject({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={1}>
        <mesh castShadow position={[-0.5, 0, 0]}>
          <torusGeometry args={[1, 0.3, 32, 64]} />
          <primitive object={PinkClayMaterial} />
        </mesh>
      </Float>
      <Float speed={2} rotationIntensity={-1.5} floatIntensity={1}>
        <mesh castShadow position={[0.5, 0, 0]}>
          <torusGeometry args={[1, 0.3, 32, 64]} />
          <primitive object={FrostedGlassMaterial} />
        </mesh>
      </Float>
    </group>
  );
}

// The camera driver that flies through the gallery
function StoryCamera() {
  const getScroll = useWindowScroll();
  const setTransitioned = useScrollStore((s) => s.setTransitioned);
  
  useFrame((state) => {
    const p = getScroll();
    
    // Path configuration: Z moves backward, X pans side to side
    const targetZ = THREE.MathUtils.lerp(5, -60, p);
    
    // Pan left for E-commerce, right for AI, center for End
    let targetX = 0;
    if (p > 0.1 && p < 0.4) targetX = 5;       
    else if (p >= 0.4 && p < 0.7) targetX = -5; 
    else if (p >= 0.7) targetX = 0;             
    
    // Smoothly animate camera position
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetZ, 0.1);
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetX, 0.05);
    
    // Mouse Parallax
    state.camera.position.x += (state.pointer.x * 0.5 - state.camera.position.x) * 0.05;
    state.camera.position.y += (state.pointer.y * 0.5 - state.camera.position.y) * 0.05;

    // Trigger transition when we reach the very bottom
    if (p > 0.99) {
      setTransitioned(true);
    }
  });
  
  return null;
}

export default function StoryExperience() {
  const setTransitioned = useScrollStore((s) => s.setTransitioned);

  // We do NOT use document.body.style.overflow = hidden here,
  // because we want the user to natively scroll through the 500vh container.
  
  return (
    <div className="relative w-full bg-[#f4f4f6]">
      
      {/* Skip Button (Fixed) */}
      <button 
        onClick={() => setTransitioned(true)}
        className="fixed top-8 right-8 z-[110] text-sm font-mono tracking-widest uppercase text-black/50 hover:text-black transition-colors"
      >
        Skip Intro
      </button>

      {/* The 3D Canvas (Fixed in background) */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <Canvas 
          camera={{ position: [0, 0, 5], fov: 45 }}
          dpr={[1, 1.5]}
          shadows
        >
          <color attach="background" args={['#f4f4f6']} />
          <fog attach="fog" args={['#f4f4f6', 10, 30]} />

          <ambientLight intensity={1} color="#ffffff" />
          <directionalLight castShadow position={[10, 20, 10]} intensity={2} shadow-mapSize={[1024, 1024]} />
          <Environment preset="studio" />

          {/* GALLERY SCENE */}
          <group position={[0, -2, 0]}>
            {/* Zone 1: E-Commerce */}
            <Pedestal position={[3, 0, -15]} />
            <ECommerceObject position={[3, 2, -15]} />
            
            {/* Zone 2: AI Automation */}
            <Pedestal position={[-3, 0, -35]} />
            <AIObject position={[-3, 2, -35]} />
            
            {/* Zone 3: Growth & Apps */}
            <Pedestal position={[0, 0, -55]} />
            <GrowthObject position={[0, 2, -55]} />
          </group>

          <StoryCamera />

          <EffectComposer multisampling={4}>
            <Bloom luminanceThreshold={1.0} intensity={1} />
            <Noise opacity={0.02} />
          </EffectComposer>
        </Canvas>
      </div>

      {/* HTML Overlays (Native scrolling DOM) */}
      <div className="relative z-10 w-full flex flex-col pointer-events-none">
        
        {/* Intro */}
        <div className="w-full h-screen flex items-center justify-center px-6">
          <div className="text-center pointer-events-auto">
            <h1 className="font-heading text-5xl md:text-7xl mb-4 text-black">The Engineering Gallery</h1>
            <p className="text-xl text-black/60 font-light">Scroll to explore our services.</p>
          </div>
        </div>

        {/* E-Commerce */}
        <div className="w-full h-screen flex items-center justify-start px-12 md:px-32">
          <div className="max-w-md bg-white/50 backdrop-blur-xl p-8 rounded-3xl shadow-xl pointer-events-auto">
            <span className="text-[#7b61ff] font-mono text-sm mb-2 block font-bold">Service 01</span>
            <h2 className="font-heading text-3xl mb-4 text-black">E-Commerce & Headless</h2>
            <p className="text-black/70">Lightning-fast storefronts built on modern architecture. We don't use templates; we engineer conversions.</p>
          </div>
        </div>

        {/* AI Agents */}
        <div className="w-full h-screen flex items-center justify-end px-12 md:px-32">
          <div className="max-w-md bg-white/50 backdrop-blur-xl p-8 rounded-3xl shadow-xl pointer-events-auto">
            <span className="text-[#00f0ff] font-mono text-sm mb-2 block font-bold">Service 02</span>
            <h2 className="font-heading text-3xl mb-4 text-black">AI Agents & Automation</h2>
            <p className="text-black/70">Custom LLM agents that qualify leads, handle support, and run your operations 24/7.</p>
          </div>
        </div>

        {/* Web Apps */}
        <div className="w-full h-screen flex items-center justify-center px-6">
          <div className="max-w-md bg-white/50 backdrop-blur-xl p-8 rounded-3xl shadow-xl text-center pointer-events-auto">
            <span className="text-[#ff3366] font-mono text-sm mb-2 block font-bold">Service 03</span>
            <h2 className="font-heading text-3xl mb-4 text-black">Growth & Custom Apps</h2>
            <p className="text-black/70">From local SEO domination to complex React applications. We build digital assets that scale.</p>
          </div>
        </div>

        {/* Outro Transition */}
        <div className="w-full h-screen flex items-end justify-center pb-32">
          <h2 className="font-heading text-5xl text-black animate-pulse pointer-events-auto">Entering the Website...</h2>
        </div>

      </div>

    </div>
  );
}
