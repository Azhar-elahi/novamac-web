import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useScrollStore } from '@/store/useScrollStore';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const ridePathPoints = [
  new THREE.Vector3(0, 0, -44),
  new THREE.Vector3(0, 5, -62),
  new THREE.Vector3(-6, -1, -78),
  new THREE.Vector3(-9, 3, -94),
  new THREE.Vector3(2, 2, -108),
  new THREE.Vector3(10, 4, -124),
  new THREE.Vector3(4, 1, -142),
  new THREE.Vector3(0, 0, -158),
];

export const cameraPath = new THREE.CatmullRomCurve3(ridePathPoints);

export function initGlobalScrollTrigger() {
  const st = ScrollTrigger.create({
    trigger: '#scroll-spacer',
    start: 'top top',
    end: 'bottom bottom',
    scrub: true,
    onUpdate: (self) => {
      useScrollStore.getState().setProgress(self.progress);
    },
  });

  return st;
}
