'use client';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';
import { useScrollStore } from '@/store/useScrollStore';
import { theme } from '@/styles/theme';

export default function Scene0Opening() {
  const groupRef = useRef<THREE.Group>(null);
  const textRef = useRef<any>(null);

  useFrame(() => {
    const progress = useScrollStore.getState().progress;
    
    // This scene is active from 0.00 to 0.05
    if (progress <= 0.05) {
      if (groupRef.current) groupRef.current.visible = true;
      
      const p = progress / 0.05; // 0 to 1
      
      if (textRef.current) {
        // Zoom way into the text (into the 'O')
        // We'll scale up drastically as p approaches 1
        const scale = 1 + Math.pow(p, 4) * 80; 
        groupRef.current!.scale.set(scale, scale, scale);
        
        // Offset X slightly so we zoom perfectly into the center of the first 'O' in NOVAMAC
        groupRef.current!.position.x = p * 1.5; 
        
        // Fade out slightly at the very end
        textRef.current.material.opacity = 1 - Math.pow(p, 4);
      }
    } else {
      if (groupRef.current) groupRef.current.visible = false;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, -5]}>
      <Text
        ref={textRef}
        fontSize={1}
        letterSpacing={0.1}
        color={theme.colors.white}
        anchorX="center"
        anchorY="middle"
      >
        NOVAMAC SOLUTIONS
        <meshBasicMaterial transparent color={theme.colors.white} />
      </Text>
    </group>
  );
}
