"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MagneticButton from "@/components/nexora/MagneticButton";
import { motion } from "framer-motion";

function Reveal({ children, delay = 0, className = "", direction = "up" }: { children: React.ReactNode, delay?: number, className?: string, direction?: "up" | "left" | "right" }) {
  const yOffset = direction === "up" ? 40 : 0;
  const xOffset = direction === "left" ? 40 : direction === "right" ? -40 : 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, x: xOffset }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function StandardHomePage() {
  return (
    <div className="relative z-10 w-full flex flex-col bg-[#f4f4f6]">
      
      {/* PAGE 0: Hero */}
      <section className="w-full h-screen flex flex-col items-center justify-center px-6">
        <Reveal>
          <h1 className="font-heading font-medium text-[clamp(2.6rem,6.5vw,7rem)] leading-[1.0] tracking-[-0.03em] text-center max-w-5xl text-black">
            Wake your business into <span className="text-script text-[#7b61ff] italic">clarity.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-lg md:text-2xl text-black/60 font-light max-w-2xl text-center">
            AI automation, performance audits, and high-end software—engineered in-house.
          </p>
        </Reveal>
      </section>

      {/* PAGE 1: How we work */}
      <section className="w-full h-screen flex items-center justify-start px-12 md:px-24">
        <div className="max-w-xl bg-white/40 backdrop-blur-3xl p-10 rounded-[2rem] border border-white shadow-2xl">
          <Reveal direction="right">
            <h2 className="font-heading text-4xl mb-6 text-black">How We Work</h2>
          </Reveal>
          <div className="space-y-6">
            <Reveal direction="right" delay={0.1}>
              <div>
                <span className="text-[#7b61ff] font-mono text-sm mb-1 block font-bold">01</span>
                <h3 className="text-xl font-semibold text-black">Discovery & Architecture</h3>
                <p className="text-black/60">We dig into your bottlenecks and map out exactly what needs to be built.</p>
              </div>
            </Reveal>
            <Reveal direction="right" delay={0.2}>
              <div>
                <span className="text-[#7b61ff] font-mono text-sm mb-1 block font-bold">02</span>
                <h3 className="text-xl font-semibold text-black">Design & Build</h3>
                <p className="text-black/60">We engineer the solution, from headless backends to custom LLMs.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PAGE 2: Services */}
      <section className="w-full h-screen flex items-center justify-end px-12 md:px-24">
        <div className="max-w-xl text-right overflow-hidden">
          <Reveal direction="left">
            <h2 className="font-heading text-6xl mb-8 tracking-tight text-black">Engineering<br/><span className="text-[#7b61ff]">Ecosystem</span></h2>
          </Reveal>
          <ul className="space-y-6 text-3xl text-black/60 font-light">
            {[
              "E-Commerce & Headless",
              "AI Agents & Automation",
              "Local SEO & Growth",
              "Premium Web Applications"
            ].map((service, idx) => (
              <Reveal key={idx} direction="left" delay={0.1 + idx * 0.1}>
                <li className="hover:text-black hover:translate-x-[-10px] transition-all duration-300 cursor-pointer inline-block">{service}</li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* PAGE 3: Work */}
      <section className="w-full h-screen flex flex-col items-center justify-center px-12 md:px-24 overflow-hidden">
        <Reveal>
          <h2 className="font-heading text-6xl mb-12 text-black">Featured Work</h2>
        </Reveal>
        <div className="flex flex-wrap justify-center gap-8">
          {[1, 2, 3].map((i, idx) => (
            <Reveal key={i} delay={idx * 0.15}>
              <div className="w-72 h-[28rem] bg-white/40 backdrop-blur-2xl rounded-[2rem] border border-white hover:border-[#7b61ff]/30 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer flex items-end p-8 group">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 w-full">
                  <span className="text-xs text-[#7b61ff] font-mono uppercase tracking-wider mb-2 block font-bold">Case Study</span>
                  <h3 className="text-2xl font-semibold text-black">Project Alpha {i}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PAGE 4: Contact */}
      <section className="w-full h-screen flex flex-col items-center justify-center px-6">
        <Reveal>
          <h2 className="font-heading font-medium text-[clamp(3rem,7vw,6rem)] leading-[1.05] tracking-tight mb-8 text-center text-black">
            Stop blending in.<br />
            <span className="text-[#7b61ff] italic">Start standing out.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <MagneticButton>
            <Link 
              href="/contact"
              className="bg-black text-white px-10 py-5 rounded-full font-medium hover:bg-[#7b61ff] transition-all duration-300 flex items-center gap-3 text-lg shadow-2xl hover:scale-105"
            >
              Start a Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </MagneticButton>
        </Reveal>
      </section>

    </div>
  );
}
