"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, Sparkles } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ElegantCore from "./ElegantCore";

gsap.registerPlugin(ScrollTrigger);

// This component handles moving the camera based on GSAP ScrollTrigger
function CameraController() {
  const { camera } = useThree();
  const progressRef = useRef(0);

  useEffect(() => {
    // Create a ScrollTrigger that tracks the entire page scroll
    const trigger = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      scrub: 1, // Smooth scrubbing
      onUpdate: (self) => {
        progressRef.current = self.progress;
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  useFrame(() => {
    const p = progressRef.current;
    
    // Dynamic cinematic camera flight path
    const targetX = Math.sin(p * Math.PI * 2) * 4;
    const targetY = (Math.cos(p * Math.PI) - 1) * 2; // Arcs down
    const targetZ = 8 - p * 3;
    
    camera.position.x += (targetX - camera.position.x) * 0.05;
    camera.position.y += (targetY - camera.position.y) * 0.05;
    camera.position.z += (targetZ - camera.position.z) * 0.05;
    
    // Slight look-at drift for a handheld feel
    camera.lookAt(
      Math.sin(performance.now() / 2000) * 0.1, 
      Math.cos(performance.now() / 1500) * 0.1, 
      0
    );
  });

  return null;
}

export default function Scene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-black">
      <Canvas shadows camera={{ position: [0, 0, 8], fov: 45 }} gl={{ antialias: false }}>
        {/* Pitch black background to force high contrast */}
        <color attach="background" args={['#000000']} />
        
        {/* Lighting designed for high-contrast dark mode */}
        <ambientLight intensity={0.2} />
        <directionalLight 
          castShadow 
          position={[5, 10, 5]} 
          intensity={2} 
          shadow-mapSize={[1024, 1024]}
        />
        <pointLight position={[-5, -5, -5]} intensity={1.5} color="#0F52BA" />
        <pointLight position={[5, 0, -5]} intensity={1} color="#ffffff" />

        <ElegantCore />

        {/* Ambient floating particles (Livingness) */}
        <Sparkles 
          count={300} 
          scale={15} 
          size={1.5} 
          speed={0.4} 
          opacity={0.3} 
          color="#ffffff" 
        />
        
        <Sparkles 
          count={100} 
          scale={20} 
          size={2.5} 
          speed={0.2} 
          opacity={0.1} 
          color="#0F52BA" 
        />

        <ContactShadows 
          position={[0, -3, 0]} 
          opacity={0.7} 
          scale={25} 
          blur={3} 
          far={10} 
          color="#000000"
        />
        
        <CameraController />
        
        {/* High-end cinematic post-processing */}
        <EffectComposer multisampling={4}>
          <Bloom 
            luminanceThreshold={0.2} 
            mipmapBlur 
            intensity={1.5} 
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
