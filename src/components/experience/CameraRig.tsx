'use client';

import { useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useScrollStore } from '@/store/useScrollStore';
import { cameraPath } from './cameraPath';
import { ACTS, ROOM, TUNNEL, GATE } from './experienceActs';

const O_TARGET = new THREE.Vector3(ROOM.oLookAt.x, ROOM.oLookAt.y, ROOM.oLookAt.z);

export default function CameraRig() {
  const { camera } = useThree();
  const vec = useMemo(() => new THREE.Vector3(), []);
  const lookAtVec = useMemo(() => new THREE.Vector3(), []);

  useFrame((state) => {
    const progress = useScrollStore.getState().progress;
    const time = state.clock.elapsedTime;
    const breathY = Math.sin(time * 1.5) * 0.04;
    const breathX = Math.cos(time * 1.2) * 0.02;

    if (progress < ACTS.wake) {
      camera.position.lerp(vec.set(breathX, 0.2 + breathY, ROOM.cameraStartZ), 0.12);
      camera.lookAt(O_TARGET);
      return;
    }

    if (progress < ACTS.roomEnd) {
      const fly = THREE.MathUtils.smoothstep(progress, ACTS.roomFlyStart, ACTS.roomEnd);

      const targetX = ROOM.oLookAt.x * fly;
      const targetY = 0.2 + breathY + (ROOM.oLookAt.y - 0.2) * fly;
      const targetZ = THREE.MathUtils.lerp(0, ROOM.passThroughZ, fly);
      const walkBob = Math.abs(Math.sin(progress * Math.PI * 8)) * 0.04 * fly;

      camera.position.lerp(vec.set(targetX + breathX * (1 - fly), targetY + walkBob, targetZ), 0.14);

      const lookX = THREE.MathUtils.lerp(0, ROOM.oLookAt.x, fly);
      const lookY = 0.15;
      const lookZ = THREE.MathUtils.lerp(-9, -25, fly);
      
      lookAtVec.set(lookX, lookY, lookZ);
      camera.lookAt(lookAtVec);
      return;
    }

    if (progress < ACTS.tunnelEnd) {
      const p = THREE.MathUtils.smoothstep(progress, ACTS.tunnelStart, ACTS.tunnelEnd);
      const z = THREE.MathUtils.lerp(TUNNEL.enterZ, TUNNEL.exitZ, p);
      camera.position.lerp(vec.set(0, 0, z), 0.12);
      camera.lookAt(0, 0, z - 15);
      return;
    }

    if (progress < ACTS.rideStart) {
      const p = THREE.MathUtils.smoothstep(progress, ACTS.tunnelEnd, ACTS.gateEnd);
      const z = THREE.MathUtils.lerp(TUNNEL.exitZ, GATE.z + 2, p);
      camera.position.lerp(vec.set(0, 0, z), 0.1);
      camera.lookAt(0, 0.35, GATE.z - 2);
      return;
    }

    if (progress < ACTS.rideEnd) {
      const p = (progress - ACTS.rideStart) / (ACTS.rideEnd - ACTS.rideStart);
      const clamped = THREE.MathUtils.clamp(p, 0, 1);
      cameraPath.getPointAt(clamped, vec);
      camera.position.lerp(vec, 0.1);
      if (clamped < 0.99) {
        cameraPath.getPointAt(clamped + 0.012, lookAtVec);
        const currentLookAt = new THREE.Vector3(0, 0, -1)
          .applyQuaternion(camera.quaternion)
          .add(camera.position);
        currentLookAt.lerp(lookAtVec, 0.12);
        camera.lookAt(currentLookAt);
      }
      return;
    }

    cameraPath.getPointAt(1, vec);
    camera.position.lerp(vec, 0.1);
    const orbPos = new THREE.Vector3(0, 0, -242);
    const currentLookAt = new THREE.Vector3(0, 0, -1)
      .applyQuaternion(camera.quaternion)
      .add(camera.position);
    currentLookAt.lerp(orbPos, 0.06);
    camera.lookAt(currentLookAt);
  });

  return null;
}
