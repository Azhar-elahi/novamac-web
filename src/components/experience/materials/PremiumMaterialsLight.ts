import * as THREE from 'three';

// Frosted White Glass
export const FrostedGlassMaterial = new THREE.MeshPhysicalMaterial({
  color: new THREE.Color('#ffffff'),
  metalness: 0.1,
  roughness: 0.4,
  transmission: 0.9,
  thickness: 1.5,
  ior: 1.2,
  envMapIntensity: 1.5,
  clearcoat: 1.0,
  clearcoatRoughness: 0.1,
  transparent: true,
});

// Brand Purple Soft Clay
export const PurpleClayMaterial = new THREE.MeshStandardMaterial({
  color: new THREE.Color('#7b61ff'),
  roughness: 0.8,
  metalness: 0.1,
  envMapIntensity: 0.5,
});

// Vibrant Pink Soft Clay
export const PinkClayMaterial = new THREE.MeshStandardMaterial({
  color: new THREE.Color('#ff3366'),
  roughness: 0.7,
  metalness: 0.1,
  envMapIntensity: 0.5,
});

// Cyan Soft Clay
export const CyanClayMaterial = new THREE.MeshStandardMaterial({
  color: new THREE.Color('#00f0ff'),
  roughness: 0.6,
  metalness: 0.2,
  envMapIntensity: 0.8,
});

// Pure White Matte
export const WhiteMatteMaterial = new THREE.MeshStandardMaterial({
  color: new THREE.Color('#ffffff'),
  roughness: 1.0,
  metalness: 0.0,
  envMapIntensity: 0.2,
});
