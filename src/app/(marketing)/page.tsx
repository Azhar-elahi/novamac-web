"use client";

import React, { useEffect, useRef } from "react"; import { useRouter } from "next/navigation";
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Zap, Code, Shield, Cloud, Brain, Network, Hexagon, Layout, Database, PenTool, TrendingUp, Smartphone } from "lucide-react";
import Link from "next/link";

const glassCard = "bg-gradient-to-b from-[#0F1C33] via-[#091222] to-[#050A14] border border-[#1E2E4A] border-t-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.65)] rounded-3xl p-8 hover:border-[#3B82F6]/80 hover:shadow-[0_25px_65px_rgba(0,0,0,0.85)] transition-all duration-500 relative overflow-hidden group";

// =========================================
// DOODLE ART COMPONENTS (Immersive & Parallax)
// =========================================
const DoodleUnderline = () => (
  <svg className="absolute -bottom-2 md:-bottom-6 left-0 w-full h-8 md:h-12 pointer-events-none z-10" viewBox="0 0 300 30" preserveAspectRatio="none">
    <motion.path 
      d="M 5 25 Q 75 5 150 20 T 295 15" 
      fill="transparent" 
      stroke="#3B82F6" 
      strokeWidth="6"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
    />
  </svg>
);

const DoodleCircle = () => (
  <svg className="absolute -inset-6 w-[calc(100%+3rem)] h-[calc(100%+3rem)] pointer-events-none z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
     <motion.ellipse 
        cx="50" cy="50" rx="45" ry="40"
        fill="transparent" 
        stroke="#3B82F6" 
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="6 8"
        initial={{ pathLength: 0, rotate: -10, opacity: 0 }}
        whileInView={{ pathLength: 1, rotate: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 2, ease: "easeOut" }}
     />
  </svg>
);

const DoodleArrowHorizontal = () => (
  <svg className="absolute right-10 top-1/2 -translate-y-1/2 w-32 h-32 pointer-events-none opacity-40 hidden md:block" viewBox="0 0 100 100">
    <motion.path
       d="M 10 50 Q 50 30 80 50 M 60 30 L 80 50 L 60 70"
       fill="transparent"
       stroke="#3B82F6"
       strokeWidth="4"
       strokeLinecap="round"
       strokeLinejoin="round"
       initial={{ pathLength: 0, x: -20, opacity: 0 }}
       whileInView={{ pathLength: 1, x: 0, opacity: 1 }}
       viewport={{ once: false }}
       transition={{ duration: 1.2, ease: "easeOut" }}
    />
  </svg>
);

const DoodleSquiggle = () => (
  <svg className="absolute left-[-10%] top-[20%] w-64 h-64 pointer-events-none opacity-30 z-0" viewBox="0 0 200 200">
    <motion.path
      d="M 20 20 Q 50 80 100 50 T 180 150"
      fill="transparent"
      stroke="#3B82F6"
      strokeWidth="5"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 2, ease: "easeInOut" }}
    />
  </svg>
);

const BackgroundDoodles = ({ 
  opacity = "opacity-[0.3]",
  mouseX,
  mouseY
}: { 
  opacity?: string,
  mouseX: MotionValue<number>,
  mouseY: MotionValue<number>
}) => {
  // Create smooth physics-based springs for mouse movement
  const smoothX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  // Different depth layers move at different speeds/directions
  const layer1X = useTransform(smoothX, [-0.5, 0.5], [-80, 80]);
  const layer1Y = useTransform(smoothY, [-0.5, 0.5], [-80, 80]);
  
  const layer2X = useTransform(smoothX, [-0.5, 0.5], [40, -40]);
  const layer2Y = useTransform(smoothY, [-0.5, 0.5], [40, -40]);
  
  const layer3X = useTransform(smoothX, [-0.5, 0.5], [-20, 20]);
  const layer3Y = useTransform(smoothY, [-0.5, 0.5], [-20, 20]);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden z-0 ${opacity}`}>
      
      {/* MASSIVE VIBRANT FLOATING TEXT */}
      <motion.div style={{ x: layer2X, y: layer2Y }} className="absolute top-[20%] right-[10%] opacity-20 rotate-[-10deg]">
        <h1 className="text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF007F] via-[#00F0FF] to-[#7000FF] tracking-tighter drop-shadow-2xl">
          NovaMac<br/>Solutions
        </h1>
      </motion.div>

      {/* LAYER 1: Deep Background (Out of focus, moves opposite, rotates slowly) */}
      <motion.div style={{ x: layer2X, y: layer2Y }} className="absolute inset-0 blur-md">
        <motion.svg animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 40, ease: "linear" }} className="absolute top-[10%] right-[5%] w-32 h-32" viewBox="0 0 50 50">
          <motion.path d="M 10 10 L 40 40 M 40 10 L 10 40" stroke="#FF007F" strokeWidth="4" strokeLinecap="round" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: false }} transition={{ duration: 2 }} />
        </motion.svg>
        <motion.svg animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 50, ease: "linear" }} className="absolute bottom-[20%] left-[5%] w-48 h-24" viewBox="0 0 100 50">
          <motion.path d="M 0 25 L 25 0 L 50 25 L 75 0 L 100 25" stroke="#00F0FF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: false }} transition={{ duration: 2.5 }} />
        </motion.svg>
      </motion.div>

      {/* LAYER 2: Mid-ground (Sharp, draws in) */}
      <motion.div style={{ x: layer3X, y: layer3Y }} className="absolute inset-0">
        <motion.svg animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 25, ease: "linear" }} className="absolute top-[30%] left-[10%] w-16 h-16 hidden md:block" viewBox="0 0 60 60">
          <motion.path d="M 10 30 C 10 10 50 10 50 30 C 50 50 10 50 10 30 C 10 20 30 20 30 30" stroke="#7000FF" strokeWidth="6" strokeLinecap="round" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: false }} transition={{ duration: 2, delay: 0.2 }} />
        </motion.svg>
        <motion.svg animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 35, ease: "linear" }} className="absolute bottom-[25%] right-[15%] w-12 h-12" viewBox="0 0 50 50">
          <motion.path d="M 25 5 L 45 40 L 5 40 Z" stroke="#FFDD00" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: false }} transition={{ duration: 1.5, delay: 0.4 }} />
        </motion.svg>
      </motion.div>

      {/* LAYER 3: Foreground (High blur, moves fast with mouse, floating) */}
      <motion.div style={{ x: layer1X, y: layer1Y }} className="absolute inset-0 blur-xl opacity-80">
        <motion.svg animate={{ rotate: 180, scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }} className="absolute top-[60%] left-[60%] w-40 h-20 hidden md:block" viewBox="0 0 80 40">
          <motion.path d="M 0 20 Q 20 0 40 20 T 80 20" stroke="#00F0FF" strokeWidth="8" strokeLinecap="round" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: false }} transition={{ duration: 2, delay: 0.6 }} />
        </motion.svg>
        <motion.svg animate={{ rotate: -180, scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }} className="absolute top-[40%] right-[20%] w-24 h-24" viewBox="0 0 40 40">
          <motion.path d="M 20 0 L 20 40 M 0 20 L 40 20 M 10 10 L 30 30 M 10 30 L 30 10" stroke="#FF007F" strokeWidth="8" strokeLinecap="round" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: false }} transition={{ duration: 1, delay: 0.8 }} />
        </motion.svg>
      </motion.div>

    </div>
  );
};

// =========================================
// IMMERSIVE TECH COMPONENTS
// =========================================
const FloatingTerminal = ({ className = "" }: { className?: string }) => (
  <div className={`absolute w-80 md:w-96 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 shadow-2xl overflow-hidden font-mono text-xs z-0 opacity-80 hidden md:block group hover:scale-105 transition-transform duration-500 ${className}`}>
    <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
      <div className="w-3 h-3 rounded-full bg-red-500/80" />
      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
      <div className="w-3 h-3 rounded-full bg-green-500/80" />
      <span className="ml-2 text-zinc-500">sys_deploy.sh</span>
    </div>
    <div className="p-4 space-y-2 text-green-400/80">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ delay: 0.2 }}>$ init cluster --region global</motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ delay: 0.5 }}>&gt; Provisioning edge nodes...</motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ delay: 0.8 }}>&gt; Establishing zero-trust mesh...</motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ delay: 1.1 }}>&gt; Routing optimized.</motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ delay: 1.4 }} className="text-white">System online. Latency: 4ms.</motion.div>
      <motion.div animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="inline-block w-2 h-4 bg-white align-middle" />
    </div>
  </div>
);

const DataPulse = ({ top, left, delay = 0, color = "#0F52BA" }: { top: string, left: string, delay?: number, color?: string }) => (
  <div className={`absolute ${top} ${left} flex items-center justify-center pointer-events-none opacity-50 z-0`}>
    <div className="w-2 h-2 rounded-full absolute" style={{ backgroundColor: color }} />
    <motion.div 
      className="w-16 h-16 border rounded-full absolute"
      style={{ borderColor: color }}
      animate={{ scale: [1, 3], opacity: [0.8, 0] }}
      transition={{ repeat: Infinity, duration: 2, delay }}
    />
    <motion.div 
      className="w-32 h-32 border rounded-full absolute"
      style={{ borderColor: color, opacity: 0.5 }}
      animate={{ scale: [1, 2], opacity: [0.5, 0] }}
      transition={{ repeat: Infinity, duration: 2, delay: delay + 0.5 }}
    />
  </div>
);

const FloatingShapes = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 hidden lg:block">
    <motion.div 
      animate={{ rotate: 360, y: [0, -50, 0] }} 
      transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      className="absolute top-[20%] left-[10%] w-64 h-64 border border-zinc-500/20 rounded-3xl"
    />
    <motion.div 
      animate={{ rotate: -360, y: [0, 50, 0] }} 
      transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      className="absolute bottom-[20%] right-[10%] w-80 h-80 border-2 border-[#0F52BA]/20 rounded-full"
    />
    <motion.div 
      animate={{ rotate: 180, x: [0, 40, 0] }} 
      transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      className="absolute top-[60%] left-[40%] w-32 h-32 border border-zinc-500/30 rotate-45"
    />
  </div>
);

export default function MarketingPage() {
  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Add a tiny delay so they see the end screen for a second before jumping to the actual site
          setTimeout(() => router.push('/home'), 1500);
        }
      },
      { threshold: 0.8 }
    );
    const target = document.querySelector(".footer-trigger");
    if (target) observer.observe(target);
    return () => observer.disconnect();
  }, [router]);

  const horizontal2Ref = useRef<HTMLDivElement>(null);
  const horizontal4Ref = useRef<HTMLDivElement>(null);
  const horizontal6Ref = useRef<HTMLDivElement>(null);

  // Mouse Parallax Trackers
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const isMobile = window.innerWidth < 1024 || 'ontouchstart' in window;
    
    // Mouse movement tracker for immersive depth (Desktop Only)
    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        mouseX.set((e.clientX / window.innerWidth) - 0.5);
        mouseY.set((e.clientY / window.innerHeight) - 0.5);
      }
    };

    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // ONLY RUN GSAP HORIZONTAL PINNING ON DESKTOP SCREENS FOR 60FPS MOBILE PERFORMANCE
      if (!isMobile) {
        // =====================================
        // PAGE 2: Camera moves RIGHT (Content moves LEFT)
        // =====================================
        const h2 = horizontal2Ref.current;
        if (h2) {
          gsap.fromTo(
            h2.querySelector(".scroll-content"),
            { x: "0vw" },
            {
              x: "-400vw", // 5 slides total = move 400vw
              ease: "none",
              scrollTrigger: {
                trigger: h2,
                pin: true,
                scrub: 1.8,
                invalidateOnRefresh: true,
                start: "top top",
                end: () => "+=" + (window.innerWidth * 4)
              }
            }
          );
        }

        // =====================================
        // PAGE 4: Camera moves RIGHT (Content moves LEFT)
        // =====================================
        const h4 = horizontal4Ref.current;
        if (h4) {
          gsap.fromTo(
            h4.querySelector(".scroll-content"),
            { x: "0vw" },
            {
              x: "-100vw",
              ease: "none",
              scrollTrigger: {
                trigger: h4,
                pin: true,
                scrub: 1.8,
                invalidateOnRefresh: true,
                start: "top top",
                end: () => "+=" + window.innerWidth
              }
            }
          );
        }

        // =====================================
        // PAGE 6: Camera moves RIGHT (Content moves LEFT)
        // =====================================
        const h6 = horizontal6Ref.current;
        if (h6) {
          gsap.fromTo(
            h6.querySelector(".scroll-content"),
            { x: "0vw" },
            {
              x: "-100vw",
              ease: "none",
              scrollTrigger: {
                trigger: h6,
                pin: true,
                scrub: 1.8,
                invalidateOnRefresh: true,
                start: "top top",
                end: () => "+=" + window.innerWidth
              }
            }
          );
        }

        // Ambient Parallax Backgrounds
        gsap.utils.toArray('.parallax-bg').forEach((bg: any) => {
          gsap.to(bg, {
            yPercent: 30,
            ease: "none",
            scrollTrigger: {
              trigger: bg,
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          });
        });
      }

      // Auto-Scroll to Top at the very bottom
      ScrollTrigger.create({
        trigger: ".footer-trigger",
        start: "bottom bottom",
        onEnter: () => {
          setTimeout(() => {
            if ((window as any).lenis) {
              (window as any).lenis.scrollTo(0, { duration: 2 });
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }, 800);
        }
      });
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      ctx.revert();
    };
  }, []);

  return (
    <main className="w-full bg-[#0B1220] overflow-hidden relative">
      
      {/* ========================================= */}
      {/* GLOBAL DETAILS: Noise Texture & Scroll Bar */}
      {/* ========================================= */}
      <div className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.25] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      <motion.div className="fixed left-0 top-0 bottom-0 w-1 bg-[#3B82F6] z-50 origin-top" style={{ scaleY: 0 /* to be wired to scrollYProgress if needed */ }} />
      <div className="fixed top-6 right-8 z-50 flex items-center gap-4 mix-blend-difference text-white">
        <div className="font-mono text-[10px] tracking-widest uppercase flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          SYS_ONLINE // V3.0
        </div>
      </div>

      {/* PAGE 1: HERO (VERTICAL) */}
      {/* ========================================= */}
      <section className="min-h-screen w-full flex items-center justify-center relative bg-[#0B1220] text-[#F8FAFC] overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B1220]/50 to-[#0B1220] pointer-events-none z-0" />
        
        <BackgroundDoodles opacity="opacity-[0.2]" mouseX={mouseX} mouseY={mouseY} />
        <FloatingShapes />
        
        <div className="absolute top-[10%] left-[5%]">
          <DataPulse top="top-0" left="left-0" delay={0.2} color="#3B82F6" />
        </div>
        <div className="absolute bottom-[20%] right-[10%]">
          <DataPulse top="top-0" left="left-0" delay={1.5} color="#3B82F6" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="absolute top-10 left-10 w-4 h-4 border-l border-t border-[#3B82F6]/40" />
        <div className="absolute top-10 right-10 w-4 h-4 border-r border-t border-[#3B82F6]/40" />
        <div className="absolute bottom-10 left-10 w-4 h-4 border-l border-b border-[#3B82F6]/40" />
        <div className="absolute bottom-10 right-10 w-4 h-4 border-r border-b border-[#3B82F6]/40" />
        
        <BackgroundDoodles opacity="opacity-[0.2]" mouseX={mouseX} mouseY={mouseY} />
        <DoodleSquiggle />
        
        {/* Parallax typography */}
        <div className="absolute top-[20%] left-[-10%] text-[25vw] font-black text-white/[0.02] parallax-bg pointer-events-none whitespace-nowrap tracking-tighter">SCALE</div>
        
        <div className="container px-4 md:px-6 relative z-10 text-center flex flex-col items-center pt-10 sm:pt-0">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="inline-flex items-center rounded-full border border-[#3B82F6]/40 bg-[#3B82F6]/10 px-4 py-1.5 text-xs font-bold text-[#3B82F6] mb-6 sm:mb-10 shadow-[0_0_20px_rgba(59,130,246,0.2)] backdrop-blur-md"
          >
            <Zap className="mr-2 h-4 w-4 text-[#3B82F6]" />
            NovaMac Systems V3
          </motion.div>
          
          <h1 className="text-4xl sm:text-7xl lg:text-[10rem] font-black tracking-tighter leading-[0.9] sm:leading-[0.8] mb-6 sm:mb-8 relative drop-shadow-xl">
            <span className="block text-[#F8FAFC] transition-transform hover:-translate-y-2 hover:scale-[1.02] duration-500 cursor-default">DESIGN.</span>
            <span className="block text-[#94A3B8] transition-transform hover:-translate-y-2 hover:scale-[1.02] duration-500 cursor-default">BUILD.</span>
            <span className="block text-[#3B82F6] relative inline-block transition-transform hover:-translate-y-2 hover:scale-[1.02] duration-500 cursor-default drop-shadow-[0_0_30px_rgba(59,130,246,0.4)]">
              ACCELERATE.
              <DoodleUnderline />
            </span>
          </h1>

          <p className="max-w-[750px] text-[#94A3B8] text-sm sm:text-xl lg:text-2xl font-light mt-4 sm:mt-8 relative leading-relaxed">
            We craft high-performance digital products, custom web applications, and scalable software solutions designed to transform your business and outpace the competition.
          </p>

          {/* Quick Mobile Action Button for Web App Feel */}
          <div className="mt-8 flex items-center gap-3 lg:hidden">
            <Link 
              href="/home" 
              className="px-6 py-3 bg-[#3B82F6] text-white text-xs font-extrabold font-mono tracking-wider uppercase rounded-full shadow-lg flex items-center gap-2 hover:bg-white hover:text-[#0B1220] transition-all"
            >
              Enter Web App <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator Detail */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-60">
          <span className="font-mono text-[10px] tracking-widest text-[#94A3B8] uppercase">Scroll</span>
          <ArrowRight className="h-4 w-4 text-[#3B82F6] rotate-90" />
        </div>
      </section>

      {/* ========================================= */}
      {/* PAGE 2: SERVICE OVERVIEW (Pinned Desktop / Vertical Mobile) */}
      {/* ========================================= */}
      <section ref={horizontal2Ref} className="h-auto lg:h-screen w-full relative bg-[#0B1220] text-[#F8FAFC] overflow-hidden">
        <BackgroundDoodles opacity="opacity-[0.05]" mouseX={mouseX} mouseY={mouseY} />
        
        {/* Responsive layout: Vertical on mobile, 500vw horizontal on desktop */}
        <div className="scroll-content flex flex-col lg:flex-row w-full lg:w-[500vw] h-auto lg:h-full transform-gpu">
          
          {/* Panel 2.1: THE PROBLEM */}
          <div className="w-full lg:w-[100vw] min-h-[70vh] lg:h-full flex flex-col justify-center px-4 sm:px-8 md:px-20 py-12 lg:py-0 relative border-b lg:border-b-0 lg:border-r border-[#1E2E4A] overflow-hidden">
            <div className="absolute top-6 sm:top-10 left-4 sm:left-10 font-mono text-[10px] tracking-widest text-[#94A3B8]">01 // THE PROBLEM</div>
            <DoodleArrowHorizontal />
            <FloatingTerminal className="right-[10%] top-[25%]" />
            <div className="absolute right-[-10vw] top-[30vh] w-[40vw] h-[40vw] bg-[#3B82F6]/10 blur-[140px] rounded-full pointer-events-none" />
            <div className="max-w-4xl z-10 relative">
              <h2 className="text-3xl sm:text-6xl md:text-9xl font-black text-[#F8FAFC] tracking-tight mb-6 sm:mb-10 leading-[0.95]">
                <span className="relative inline-block">Boring Design</span><br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#3B82F6] to-cyan-400">is Dead.</span>
              </h2>
              <p className="text-sm sm:text-2xl md:text-3xl text-[#94A3B8] font-light leading-relaxed mb-6 sm:mb-8 max-w-2xl border-l-2 sm:border-l-4 border-[#3B82F6] pl-4 sm:pl-6">
                The future belongs to dynamic, high-converting digital experiences. We turn standard websites into captivating brand journeys.
              </p>
            </div>
          </div>

          {/* Panel 2.2: THE SOLUTION */}
          <div className="w-full lg:w-[100vw] min-h-[70vh] lg:h-full flex items-center justify-center p-4 sm:p-8 md:p-10 lg:px-20 relative border-b lg:border-b-0 lg:border-r border-[#1E2E4A] py-12 lg:py-0">
            <div className="absolute top-6 sm:top-10 left-4 sm:left-10 font-mono text-[10px] tracking-widest text-[#94A3B8]">02 // THE SOLUTION</div>
            
            <div className="w-full max-w-6xl flex flex-col md:flex-row gap-6 lg:gap-16 items-center p-4 sm:p-8">
              <div className="flex-1 space-y-4 sm:space-y-8 relative z-10 w-full">
                <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#0F1C33] via-[#091222] to-[#050A14] border border-[#1E2E4A] border-t-white/15 shadow-[0_20px_40px_rgba(0,0,0,0.6)] hover:border-[#3B82F6]/80 transition-all duration-300 group/item">
                  <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-4">
                    <div className="p-2.5 sm:p-3 bg-[#3B82F6]/10 rounded-xl sm:rounded-2xl group-hover/item:bg-[#3B82F6]/20 transition-colors border border-[#1E2E4A]">
                      <Layout className="h-6 w-6 sm:h-8 sm:w-8 text-[#3B82F6]" />
                    </div>
                    <div className="text-xl sm:text-3xl font-black text-[#F8FAFC] tracking-tight">UI/UX Excellence</div>
                  </div>
                  <p className="text-[#94A3B8] font-medium text-xs sm:text-lg leading-relaxed">Pixel-perfect aesthetics and seamless user journeys that drive massive engagement.</p>
                </div>
                <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#0F1C33] via-[#091222] to-[#050A14] border border-[#1E2E4A] border-t-white/15 shadow-[0_20px_40px_rgba(0,0,0,0.6)] hover:border-[#3B82F6]/80 transition-all duration-300 group/item">
                  <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-4">
                    <div className="p-2.5 sm:p-3 bg-[#3B82F6]/10 rounded-xl sm:rounded-2xl group-hover/item:bg-[#3B82F6]/20 transition-colors border border-[#1E2E4A]">
                      <Code className="h-6 w-6 sm:h-8 sm:w-8 text-[#3B82F6]" />
                    </div>
                    <div className="text-xl sm:text-3xl font-black text-[#F8FAFC] tracking-tight">Custom Web Dev</div>
                  </div>
                  <p className="text-[#94A3B8] font-medium text-xs sm:text-lg leading-relaxed">Robust web applications built from scratch to perfectly align with your brand's unique needs.</p>
                </div>
              </div>
              
              <div className="flex-1 h-[220px] sm:h-[350px] lg:h-[600px] w-full rounded-2xl sm:rounded-[2.5rem] overflow-hidden border border-[#1E2E4A] border-t-white/15 shadow-2xl relative group bg-[#070D18]">
                <div className="w-[110%] h-[110%] -left-[5%] -top-[5%] relative transition-transform duration-1000 group-hover:scale-105">
                  <img src="/images/web_dev.webp" alt="Design workflow" width={800} height={450} loading="lazy" className="object-cover w-full h-full opacity-80" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050A14] via-[#050A14]/40 to-transparent" />
                <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8">
                  <div className="font-mono text-[10px] text-[#3B82F6] tracking-widest mb-1 border-b border-[#1E2E4A] pb-1 inline-block font-bold uppercase">DESIGN & ENG.</div>
                  <div className="text-[#F8FAFC] text-base sm:text-2xl font-light">Crafting immersive digital products.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Panel 2.3: ARCHITECTURE */}
          <div className="w-full lg:w-[100vw] min-h-[70vh] lg:h-full flex items-center justify-center px-4 sm:px-8 md:px-20 py-12 lg:py-0 relative border-b lg:border-b-0 lg:border-r border-[#1E2E4A] overflow-hidden">
            <div className="absolute top-6 sm:top-10 left-4 sm:left-10 font-mono text-[10px] tracking-widest text-[#94A3B8]">03 // ECOSYSTEM</div>
            
            <DataPulse top="top-[30%]" left="left-[20%]" delay={0.1} color="#3B82F6" />
            
            <div className="w-full max-w-7xl flex flex-col items-center relative z-10">
              <h2 className="text-3xl sm:text-6xl md:text-8xl font-black text-[#F8FAFC] tracking-tight mb-8 sm:mb-16 text-center">Comprehensive<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-cyan-400">Digital Growth.</span></h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 w-full">
                <Link href="/services/custom-web-development" className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#0F1C33] via-[#091222] to-[#050A14] border border-[#1E2E4A] border-t-white/15 shadow-[0_20px_40px_rgba(0,0,0,0.6)] hover:border-[#3B82F6] group hover:-translate-y-2 transition-all block">
                  <Database className="w-8 h-8 sm:w-12 sm:h-12 text-[#3B82F6] mb-4 sm:mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4 text-[#F8FAFC]">CRM & Software</h3>
                  <p className="text-[#94A3B8] text-xs sm:text-base leading-relaxed">Tailored customer relationship management tools and internal software that scales with your business.</p>
                </Link>
                <Link href="/services" className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#0F1C33] via-[#091222] to-[#050A14] border border-[#1E2E4A] border-t-white/15 shadow-[0_20px_40px_rgba(0,0,0,0.6)] hover:border-[#3B82F6] group hover:-translate-y-2 transition-all block">
                  <PenTool className="w-12 h-12 text-[#3B82F6] mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold mb-4 text-[#F8FAFC]">Graphic Design</h3>
                  <p className="text-[#94A3B8] leading-relaxed">Iconic logos, brand identities, and stunning visual assets that leave a lasting mark on the industry.</p>
                </Link>
                <Link href="/services" className="p-8 rounded-3xl bg-gradient-to-b from-[#0F1C33] via-[#091222] to-[#050A14] border border-[#1E2E4A] border-t-white/15 shadow-[0_20px_40px_rgba(0,0,0,0.6)] hover:border-[#3B82F6] group hover:-translate-y-2 transition-all block">
                  <TrendingUp className="w-12 h-12 text-[#3B82F6] mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold mb-4 text-[#F8FAFC]">SEO Mastery</h3>
                  <p className="text-[#94A3B8] leading-relaxed">Data-driven search engine optimization to ensure your brand always claims the top spot.</p>
                </Link>
              </div>
            </div>
          </div>

          {/* Panel 2.4: VALIDATION */}
          <div className="w-full lg:w-[100vw] min-h-[70vh] lg:h-full flex flex-col justify-center px-4 sm:px-8 md:px-20 py-12 lg:py-0 relative border-b lg:border-b-0 lg:border-r border-[#1E2E4A] overflow-hidden bg-[#0B1220]">
            <div className="absolute top-6 sm:top-10 left-4 sm:left-10 font-mono text-[10px] tracking-widest text-[#94A3B8]">04 // VALIDATION</div>
            
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20 items-center mx-auto relative z-10">
              <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#0F1C33] via-[#091222] to-[#050A14] border border-[#1E2E4A] border-t-white/15 shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
                <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black text-[#F8FAFC] tracking-tight mb-4 sm:mb-8 leading-[1.05] sm:leading-[0.9]">
                  Numbers<br/>Don't Lie.
                </h2>
                <p className="text-xs sm:text-lg text-[#94A3B8] leading-relaxed mb-6">
                  We measure success strictly by the value we deliver. High-performance teams demand high-performance outputs.
                </p>
                <Link href="/work" className="inline-flex items-center gap-2 text-[#3B82F6] font-bold text-xs uppercase tracking-widest hover:gap-4 transition-all">
                  View Case Studies <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              
              <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#0F1C33] via-[#091222] to-[#050A14] border border-[#1E2E4A] border-t-white/15 shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
                <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black text-[#F8FAFC] tracking-tight mb-4 sm:mb-8 leading-[1.05] sm:leading-[0.9]">
                  Impenetrable.<br/><span className="text-[#3B82F6]">Period.</span>
                </h2>
                <p className="text-xs sm:text-lg text-[#94A3B8] leading-relaxed mb-6">
                  Security isn't a plugin. It's the foundation. We build zero-trust networks, biometric authentication layers, and real-time AI threat mitigation systems.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-[#F8FAFC] font-medium text-xs sm:text-base"><Shield className="text-[#3B82F6] w-5 h-5" /> Biometric & Hardware Auth</li>
                  <li className="flex items-center gap-3 text-[#F8FAFC] font-medium text-xs sm:text-base"><Shield className="text-[#3B82F6] w-5 h-5" /> Enterprise Grade WAF</li>
                  <li className="flex items-center gap-3 text-[#F8FAFC] font-medium text-xs sm:text-base"><Shield className="text-[#3B82F6] w-5 h-5" /> SOC2 Compliance Ready</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Panel 2.5: PIPELINE */}
          <div className="w-full lg:w-[100vw] min-h-[70vh] lg:h-full flex flex-col justify-center items-center px-4 sm:px-8 md:px-20 py-12 lg:py-0 relative overflow-hidden bg-[#0B1220]">
            <div className="absolute top-6 sm:top-10 left-4 sm:left-10 font-mono text-[10px] tracking-widest text-[#94A3B8]">05 // PIPELINE</div>
            
            <div className="max-w-4xl z-10 relative text-center">
              <div className="w-14 h-14 lg:w-20 lg:h-20 bg-[#3B82F6] text-white rounded-2xl flex items-center justify-center mx-auto mb-6 lg:mb-10 shadow-xl">
                <Hexagon className="w-7 h-7 lg:w-10 lg:h-10 text-white" />
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black text-[#F8FAFC] tracking-tight mb-4 sm:mb-8 leading-[1.05] sm:leading-[0.9]">Rapid Iteration.<br/>Zero Downtime.</h2>
              <p className="text-xs sm:text-lg md:text-2xl text-[#94A3B8] font-light leading-relaxed mb-6 sm:mb-12">
                Our CI/CD pipelines automate everything from unit testing to container orchestration. We ship updates 50x a day without dropping a single user connection.
              </p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-[#070D18] text-[#F8FAFC] rounded-full font-mono text-[10px] sm:text-sm border border-[#1E2E4A] shadow-sm font-bold">GitHub Actions</span>
                <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-[#070D18] text-[#F8FAFC] rounded-full font-mono text-[10px] sm:text-sm border border-[#1E2E4A] shadow-sm font-bold">Terraform</span>
                <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-[#070D18] text-[#F8FAFC] rounded-full font-mono text-[10px] sm:text-sm border border-[#1E2E4A] shadow-sm font-bold">ArgoCD</span>
                <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-[#070D18] text-[#F8FAFC] rounded-full font-mono text-[10px] sm:text-sm border border-[#1E2E4A] shadow-sm font-bold">Vercel</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================= */}
      {/* PAGE 3: ABOUT US (Vertical Down) */}
      {/* ========================================= */}
      <section className="min-h-[70vh] w-full flex items-center justify-center bg-[#0B1220] text-[#F8FAFC] relative overflow-hidden py-12 lg:py-32 px-4 sm:px-8 border-t border-[#1E2E4A]">
        <div className="absolute top-6 sm:top-10 left-4 sm:left-10 font-mono text-[10px] tracking-widest text-[#94A3B8] uppercase">03 // VISION_STATEMENT</div>
        
        <BackgroundDoodles opacity="opacity-[0.05]" mouseX={mouseX} mouseY={mouseY} />
        
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center border border-[#1E2E4A] border-t-white/15 bg-gradient-to-b from-[#0F1C33] via-[#091222] to-[#050A14] p-6 sm:p-12 md:p-20 rounded-2xl sm:rounded-[3rem] shadow-2xl relative">
            {/* Corner Accents on Card */}
            <div className="absolute top-0 left-0 w-6 sm:w-8 h-6 sm:h-8 border-l-2 border-t-2 border-[#3B82F6] rounded-tl-2xl sm:rounded-tl-[3rem]" />
            <div className="absolute bottom-0 right-0 w-6 sm:w-8 h-6 sm:h-8 border-r-2 border-b-2 border-[#3B82F6] rounded-br-2xl sm:rounded-br-[3rem]" />
            
            {/* Floating Metric Badge */}
            <motion.div animate={{ y: [-5, 5] }} transition={{ repeat: Infinity, duration: 3, repeatType: "mirror", ease: "easeInOut" }} className="absolute -right-2 -bottom-4 lg:-right-10 lg:-bottom-10 -rotate-6 lg:-rotate-12 bg-[#3B82F6] text-white px-3 py-1.5 lg:px-6 lg:py-3 font-mono text-[10px] lg:text-sm font-bold tracking-widest shadow-xl border border-white/20 z-20 whitespace-nowrap">
              INCIDENT_RATE: 0.00%
            </motion.div>
            
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black text-[#F8FAFC] tracking-tight mb-4 sm:mb-8 leading-[1.05] sm:leading-[0.9]">We are not a digital agency.</h2>
            <p className="text-xs sm:text-lg md:text-2xl text-[#94A3B8] font-light leading-relaxed">
              We are an engineering strike team. We build the infrastructure that agencies can't, and scale the ideas that others abandon. 
              If it requires complex logic, massive concurrency, or bulletproof security—we are the people you call.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* PAGE 4: WHY CHOOSE US (Pinned Desktop / Vertical Mobile) */}
      {/* ========================================= */}
      <section ref={horizontal4Ref} className="h-auto lg:h-screen w-full relative bg-[#0B1220] text-[#F8FAFC] overflow-hidden">
        <BackgroundDoodles opacity="opacity-[0.05]" mouseX={mouseX} mouseY={mouseY} />
        <FloatingShapes />
        <DataPulse top="top-[15%]" left="left-[85%]" delay={0.5} color="#3B82F6" />
        
        <div className="scroll-content flex flex-col lg:flex-row w-full lg:w-[200vw] h-auto lg:h-full transform-gpu">
          
          {/* Panel 4.1 */}
          <div className="w-full lg:w-[100vw] min-h-[70vh] lg:h-full flex items-center justify-center relative border-b lg:border-b-0 lg:border-r border-[#1E2E4A] py-12 lg:py-0 px-4 sm:px-8">
            <div className="absolute top-6 sm:top-10 left-4 sm:left-10 font-mono text-[10px] tracking-widest text-[#94A3B8] uppercase">04 // ADVANTAGE</div>
            
            <div className="container px-4 md:px-10 text-center relative z-10">
              <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black text-[#F8FAFC] tracking-tight mb-4 sm:mb-8 leading-[1.05] sm:leading-[0.9]">
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#F8FAFC] to-[#94A3B8]">Unfair</span>
                <br />Advantage.
              </h2>
              <div className="h-1 w-16 lg:w-24 bg-[#3B82F6] mx-auto mt-6 lg:mt-12 shadow-md" />
            </div>
          </div>

          {/* Panel 4.2 */}
          <div className="w-full lg:w-[100vw] min-h-[70vh] lg:h-full flex items-center justify-center p-4 sm:p-8 md:p-20 relative py-12 lg:py-0">
            <div className="absolute top-6 sm:top-10 left-4 sm:left-10 font-mono text-[10px] tracking-widest text-[#94A3B8] uppercase">04.1 // METRICS</div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 w-full max-w-6xl relative z-10">
              {[
                { title: "99.999% Uptime", desc: "Redundant edge deployments guaranteeing constant availability." },
                { title: "<50ms Latency", desc: "Hyper-optimized payloads and intelligent caching strategies." },
                { title: "Zero Data Loss", desc: "Continuous replication and point-in-time recovery out of the box." },
                { title: "Infinite Scale", desc: "Serverless and clustered architectures that grow seamlessly." }
              ].map((item, i) => (
                <div key={i} className="group p-5 sm:p-8 rounded-2xl bg-gradient-to-b from-[#0F1C33] via-[#091222] to-[#050A14] border border-[#1E2E4A] border-t-white/15 transition-all duration-300 relative overflow-hidden shadow-md hover:border-[#3B82F6]">
                  <div className="font-mono text-[10px] text-[#3B82F6] mb-2 tracking-widest font-bold">METRIC_0{i+1}</div>
                  <h3 className="text-lg sm:text-2xl font-black mb-2 text-[#F8FAFC]">{item.title}</h3>
                  <p className="text-xs sm:text-base text-[#94A3B8] font-normal leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ========================================= */}
      {/* PAGE 5: DETAILED SERVICES (Vertical Down) */}
      {/* ========================================= */}
      <section className="min-h-screen w-full flex items-center justify-center p-8 md:p-20 bg-[#0B1220] text-[#F8FAFC] relative overflow-hidden py-32 border-t border-[#1E2E4A]">
        <div className="absolute top-10 left-10 font-mono text-[10px] tracking-widest text-[#94A3B8] uppercase">05 // EXPERTISE</div>
        
        <BackgroundDoodles opacity="opacity-[0.1]" mouseX={mouseX} mouseY={mouseY} />
        
        <div className="w-full max-w-7xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Code />, 
                title: "Web Dev & Apps", 
                desc: "High-performance, scalable web applications and enterprise platforms built with modern frameworks for maximum velocity.", 
                tag: "WEB_ENG",
                techs: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind"],
                status: "DEPLOY: ACTIVE",
                metric: "PERF: 99/100"
              },
              { 
                icon: <Layout />, 
                title: "UI/UX & Web Design", 
                desc: "Pixel-perfect, user-centric interfaces designed to maximize engagement, conversion, and digital aesthetic.", 
                tag: "UI_UX",
                techs: ["Figma", "Framer", "Prototyping", "Wireframing"],
                status: "PIXELS: PERFECT",
                metric: "CONVERSION: +40%"
              },
              { 
                icon: <Database />, 
                title: "Custom CRM & Software", 
                desc: "Tailor-made enterprise software, CRMs, and internal tools engineered to streamline your unique business operations.", 
                tag: "SYS_ARCH",
                techs: ["Architecture", "Databases", "API Integration", "Automation"],
                status: "SYSTEM: SCALING",
                metric: "EFFICIENCY: 10x"
              },
              { 
                icon: <PenTool />, 
                title: "Graphic & Logo Design", 
                desc: "Striking brand identities, vector graphics, and visual assets that forge an unforgettable market presence.", 
                tag: "BRANDING",
                techs: ["Illustrator", "Photoshop", "Vector", "Identity"],
                status: "VECTORS: CRISP",
                metric: "BRAND_EQ: HIGH"
              },
              { 
                icon: <TrendingUp />, 
                title: "SEO & Digital Growth", 
                desc: "Data-driven search engine optimization and growth strategies to dominate search rankings and drive organic traffic.", 
                tag: "GROWTH",
                techs: ["Analytics", "On-Page", "Technical SEO", "Rankings"],
                status: "TRAFFIC: SURGING",
                metric: "RANKING: #1"
              },
              { 
                icon: <Smartphone />, 
                title: "Application Development", 
                desc: "Cross-platform mobile and desktop applications delivering flawless native experiences across all devices.", 
                tag: "APP_DEV",
                techs: ["React Native", "Flutter", "Electron", "Swift"],
                status: "CROSS_PLATFORM: OK",
                metric: "CRASH_RATE: 0.0%"
              },
            ].map((srv, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
              >
                <Link 
                  href={i === 0 ? "/services/custom-web-development" : i === 1 ? "/services" : i === 2 ? "/services" : "/services"}
                  className="group p-10 rounded-[2.5rem] bg-gradient-to-b from-[#0F1C33] via-[#091222] to-[#050A14] border border-[#1E2E4A] border-t-white/15 shadow-xl hover:border-[#3B82F6] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden flex flex-col justify-between min-h-[420px] block"
                >
                  <div>
                    <div className="flex items-center justify-between w-full border-b border-[#1E2E4A] pb-4 mb-6">
                      <div className="font-mono text-[10px] tracking-widest text-[#94A3B8]">{srv.tag}</div>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
                    </div>
                    <div className="text-[#3B82F6] mb-4 [&>svg]:w-9 [&>svg]:h-9 relative z-10 group-hover:scale-110 transition-transform">{srv.icon}</div>
                    <h3 className="text-2xl font-black mb-3 relative z-10 text-[#F8FAFC] transition-colors">{srv.title}</h3>
                    <p className="text-[#94A3B8] font-normal text-sm leading-relaxed relative z-10">{srv.desc}</p>
                  </div>
                  
                  <div>
                    {/* Tech stack badges */}
                    <div className="flex flex-wrap gap-1.5 mt-6 relative z-10">
                      {srv.techs.map((tech, idx) => (
                        <span key={idx} className="text-[9px] font-mono px-2 py-0.5 bg-[#070D18] border border-[#1E2E4A] rounded text-[#94A3B8] group-hover:text-[#F8FAFC] transition-all font-bold">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Metric Status Bar */}
                    <div className="mt-6 pt-4 border-t border-[#1E2E4A] flex items-center justify-between font-mono text-[9px] text-[#94A3B8] relative z-10">
                      <span className="text-[9px] tracking-tighter uppercase font-semibold text-[#3B82F6]">{srv.status}</span>
                      <span className="font-bold text-[#F8FAFC] bg-[#070D18] px-2 py-0.5 rounded border border-[#1E2E4A]">{srv.metric}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* PAGE 6: YOU CHOOSE (Pinned Desktop / Vertical Mobile) */}
      {/* ========================================= */}
      <section ref={horizontal6Ref} className="h-auto lg:h-screen w-full relative bg-[#0B1220] text-[#F8FAFC] overflow-hidden">
        <BackgroundDoodles opacity="opacity-[0.05]" mouseX={mouseX} mouseY={mouseY} />
        <FloatingShapes />
        
        <div className="scroll-content flex flex-col lg:flex-row w-full lg:w-[200vw] h-auto lg:h-full transform-gpu">
          
          {/* Panel 6.1 */}
          <div className="w-full lg:w-[100vw] min-h-[70vh] lg:h-full flex flex-col justify-center px-6 md:px-20 py-16 lg:py-0 relative border-b lg:border-b-0 lg:border-r border-[#1E2E4A] overflow-hidden">
            <div className="absolute top-10 left-10 font-mono text-[10px] tracking-widest text-[#94A3B8] uppercase">06 // DECISION</div>
            
            <div className="max-w-4xl relative z-10">
              <h2 className="text-4xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter text-[#F8FAFC]">
                The choice is <br /><span className="text-[#3B82F6]">yours.</span>
              </h2>
              <p className="text-xl md:text-3xl text-[#94A3B8] font-light max-w-2xl border-l-2 border-[#3B82F6] pl-6 leading-relaxed">
                Stay comfortable with mediocrity, or partner with us to engineer a system that dominates your industry.
              </p>
            </div>
          </div>

          {/* Panel 6.2 (CTA Button) */}
          <div className="w-full lg:w-[100vw] min-h-[60vh] lg:h-full flex items-center justify-center p-6 md:p-10 relative py-16 lg:py-0">
            <div className="z-10 text-center relative w-full px-4">
              <Hexagon className="h-12 w-12 sm:h-20 sm:w-20 text-[#3B82F6] mx-auto mb-6 sm:mb-10 opacity-80" />
              <Link href="/contact" className="w-full sm:w-auto px-8 py-4 sm:px-16 sm:py-6 bg-[#3B82F6] text-white rounded-full font-black text-base sm:text-2xl hover:bg-white hover:text-[#0B1220] transition-all shadow-[0_0_50px_rgba(59,130,246,0.45)] flex items-center justify-center mx-auto gap-3 sm:gap-6 group">
                <span className="relative z-10">Initiate Project</span>
                <ArrowRight className="h-5 w-5 sm:h-7 sm:w-7 group-hover:translate-x-2 transition-transform relative z-10" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================= */}
      {/* PAGE 7: HOME PAGE & FOOTER (Vertical Down) */}
      {/* ========================================= */}
      <section className="min-h-[70vh] lg:min-h-screen w-full flex flex-col bg-[#0B1220] text-[#F8FAFC] relative overflow-hidden">
        <BackgroundDoodles opacity="opacity-[0.05]" mouseX={mouseX} mouseY={mouseY} />
        <div className="absolute top-6 sm:top-10 left-4 sm:left-10 font-mono text-[10px] tracking-widest text-[#94A3B8] uppercase z-10">07 // TERMINAL</div>
        
        {/* Summary Section */}
        <div className="flex-1 flex items-center justify-center p-6 sm:p-12 md:p-20 relative py-12 lg:py-20">
          <div className="relative z-10 text-center max-w-5xl px-4">
            <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-6 sm:mb-10 bg-[#070D18] border border-[#1E2E4A] rounded-full flex items-center justify-center shadow-xl">
              <Zap className="h-8 w-8 sm:h-12 sm:w-12 text-[#3B82F6]" />
            </div>
            <h1 className="text-4xl sm:text-7xl lg:text-[12rem] font-black mb-3 sm:mb-6 tracking-tight text-[#F8FAFC] leading-none">NOVAMAC</h1>
            <p className="text-sm sm:text-2xl md:text-5xl font-light text-[#94A3B8]">Welcome to the new standard.</p>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full bg-[#050A14] text-[#F8FAFC] flex flex-col justify-between p-5 sm:p-12 md:p-20 border-t border-[#1E2E4A] relative z-10 footer-trigger">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-16 w-full max-w-7xl mx-auto relative">
            <div className="col-span-1 sm:col-span-2">
              <div className="text-3xl sm:text-5xl font-black mb-3 sm:mb-6 tracking-tight text-[#3B82F6]">NOVAMAC.</div>
              <p className="text-[#94A3B8] max-w-md text-xs sm:text-base font-normal leading-relaxed">
                Engineering hyper-scalable, zero-trust architectures for the modern web. We build what others say is impossible.
              </p>
            </div>
            <div>
              <div className="font-bold mb-4 sm:mb-8 text-base sm:text-xl tracking-tight text-[#F8FAFC]">Explore</div>
              <ul className="space-y-3 text-[#94A3B8] font-light text-xs sm:text-sm">
                <li><Link href="/services" className="hover:text-[#3B82F6] cursor-pointer transition-colors flex items-center gap-2 group"><ArrowRight className="h-3.5 w-3.5 text-[#3B82F6] group-hover:translate-x-2 transition-transform" /> Services</Link></li>
                <li><Link href="/work" className="hover:text-[#3B82F6] cursor-pointer transition-colors flex items-center gap-2 group"><ArrowRight className="h-3.5 w-3.5 text-[#3B82F6] group-hover:translate-x-2 transition-transform" /> Case Studies</Link></li>
                <li><Link href="/about" className="hover:text-[#3B82F6] cursor-pointer transition-colors flex items-center gap-2 group"><ArrowRight className="h-3.5 w-3.5 text-[#3B82F6] group-hover:translate-x-2 transition-transform" /> Company</Link></li>
              </ul>
            </div>
            <div>
              <div className="font-bold mb-4 sm:mb-8 text-base sm:text-xl tracking-tight text-[#F8FAFC]">Connect</div>
              <ul className="space-y-3 text-[#94A3B8] font-light font-mono text-xs uppercase">
                <li className="hover:text-[#3B82F6] cursor-pointer transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#3B82F6] inline-block" /> Twitter_X</li>
                <li className="hover:text-[#3B82F6] cursor-pointer transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#3B82F6] inline-block" /> LinkedIn</li>
                <li className="hover:text-[#3B82F6] cursor-pointer transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#3B82F6] inline-block" /> GitHub</li>
              </ul>
            </div>
          </div>
          <div className="w-full max-w-7xl mx-auto border-t border-[#1E2E4A] pt-6 sm:pt-10 flex flex-col sm:flex-row justify-between text-[#94A3B8] font-mono text-[10px] uppercase tracking-widest mt-10 sm:mt-20 gap-3">
            <div>© {new Date().getFullYear()} NovaMac Systems. All rights reserved.</div>
            <div className="flex gap-6 sm:gap-10">
              <Link href="/privacy" className="hover:text-[#3B82F6] cursor-pointer transition-colors">Privacy_Policy</Link>
              <Link href="/terms" className="hover:text-[#3B82F6] cursor-pointer transition-colors">Terms_of_Service</Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
