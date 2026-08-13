import * as THREE from 'three';

// A deep, dark obsidian glass material
export const ObsidianMaterial = new THREE.MeshPhysicalMaterial({
  color: new THREE.Color('#03050a'),
  metalness: 0.9,
  roughness: 0.1,
  envMapIntensity: 1.0,
  clearcoat: 1.0,
  clearcoatRoughness: 0.1,
  transmission: 0.2, // slight glass effect
  thickness: 0.5,
  ior: 1.5,
});

// A bright glowing cyan material for data nodes
export const NeonCyanMaterial = new THREE.MeshStandardMaterial({
  color: new THREE.Color('#00f0ff'),
  emissive: new THREE.Color('#00f0ff'),
  emissiveIntensity: 4.0,
  toneMapped: false, // Ensure bloom picks it up
});

// A glowing brand purple/blue material
export const NeonBrandMaterial = new THREE.MeshStandardMaterial({
  color: new THREE.Color('#7b61ff'),
  emissive: new THREE.Color('#7b61ff'),
  emissiveIntensity: 4.0,
  toneMapped: false,
});

// Wireframe material for tech-look
export const TechWireframeMaterial = new THREE.MeshBasicMaterial({
  color: new THREE.Color('#ffffff'),
  wireframe: true,
  transparent: true,
  opacity: 0.05,
  side: THREE.DoubleSide
});
