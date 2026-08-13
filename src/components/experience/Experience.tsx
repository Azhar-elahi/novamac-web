'use client';
import { Canvas } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import CameraRig from './CameraRig';
import { useEffect, Suspense } from 'react';
import { initGlobalScrollTrigger } from './cameraPath';
import { initLenisScrollTriggerProxy } from './lenisScrollTriggerProxy';
import { useScrollStore } from '@/store/useScrollStore';
import AmbientDust from './AmbientDust';
import Scene1Room from './scenes/Scene1Room';
import Scene2Tunnel from './scenes/Scene2Tunnel';
import Scene3Gate from './scenes/Scene3Gate';
import Scene4Ride from './scenes/Scene4Ride';
import Scene5Climax from './scenes/Scene5Climax';
import Composer from './postfx/Composer';

export default function Experience() {
  const isTransitioned = useScrollStore((s) => s.isTransitioned);

  useEffect(() => {
    // Reset progress on initial mount
    useScrollStore.getState().setProgress(0);

    let st: any = null;

    const poll = setInterval(() => {
      const lenis = (window as any).lenis;
      if (lenis) {
        clearInterval(poll);
        initLenisScrollTriggerProxy(lenis);
        st = initGlobalScrollTrigger();
        import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
          ScrollTrigger.refresh();
        });
      }
    }, 50);

    return () => {
      clearInterval(poll);
      if (st) st.kill();
    };
  }, []);

  if (isTransitioned) return null;

  return (
    <>
      <div className="fixed inset-0 z-40 bg-[#050814] pointer-events-none">
        <Canvas
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: false }}
          camera={{ position: [0, 0, 0], fov: 60 }}
        >
          <color attach="background" args={['#050814']} />
          <fog attach="fog" args={['#050814', 20, 110]} />

          <ambientLight intensity={0.4} color="#ffffff" />
          <directionalLight position={[12, 14, 8]} intensity={1.5} color="#38bdf8" />
          <directionalLight position={[-12, -8, -4]} intensity={1.0} color="#f43f5e" />
          <pointLight position={[0, 0, -10]} intensity={4} color="#38bdf8" distance={30} />
          
          <Suspense fallback={<Html center><div className="text-cyan-400 font-mono text-xl tracking-widest bg-black/80 px-6 py-3 rounded-full border border-cyan-500/40 backdrop-blur-xl">INITIALIZING 3D ENGINE...</div></Html>}>
            <AmbientDust />
            <CameraRig />
            <Scene1Room />
            <Scene2Tunnel />
            <Scene3Gate />
            <Scene4Ride />
            <Scene5Climax />
            <Composer />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}
