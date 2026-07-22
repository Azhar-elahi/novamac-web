"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Shield } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import type { Project } from "@prisma/client";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

function BlurReveal({ children, delay = 0, className = "", style = {} }: { children: React.ReactNode; delay?: number; className?: string; style?: React.CSSProperties }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease }}
      className={className + " will-change-transform"}
      style={style}
    >
      {children}
    </motion.div>
  );
}

function WordReveal({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) {
  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ staggerChildren: 0.04, delayChildren: delay }}
      className={className}
    >
      {text.split(" ").map((word, i) => (
        <span key={i} className="overflow-hidden inline-block mr-[0.28em] pb-4 -mb-4 pt-4 -mt-4">
          <motion.span
            variants={{
              hidden: { y: "110%", opacity: 0 },
              visible: { y: "0%", opacity: 1, transition: { ease, duration: 0.8 } },
            }}
            className="inline-block will-change-transform"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

export default function WorkClient({ projects }: { projects: Project[] }) {
  const [hoveredProj, setHoveredProj] = useState<number | null>(null);

  return (
    <main className="bg-slate-100 text-slate-800 min-h-screen overflow-x-hidden">

      {/* ══════════ HERO (Focused on Growth) ══════════ */}
      <section className="relative min-h-[60vh] flex flex-col justify-end pb-16 pt-36 px-6 md:px-12 xl:px-20 overflow-hidden bg-slate-100">
        <div className="absolute inset-0 pointer-events-none">
          {/* Subtle colored glow */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/25 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(#ffffff 1px,transparent 1px),linear-gradient(90deg,#ffffff 1px,transparent 1px)", backgroundSize: "100px 100px" }} />
        </div>

        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.2, duration: 0.9 }}
            className="inline-flex items-center gap-3 mb-10 border border-slate-200 px-5 py-3 bg-slate-100/50 backdrop-blur-xl rounded-full"
          >
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-slate-600">Business Growth & Scalability</span>
          </motion.div>

          <h1 className="font-heading font-black leading-[0.82] tracking-[-0.045em] text-[clamp(3rem,10vw,10rem)] mb-14">
            {[
              { text: "We Help", delay: 0.3, cls: "block text-slate-800" },
              { text: "Businesses Grow.", delay: 0.5, cls: "block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600" },
            ].map((line, i) => (
              <div key={i} className="overflow-hidden pb-2">
                <motion.div
                  initial={{ y: "115%", opacity: 0, filter: "blur(22px)" }}
                  animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
                  transition={{ delay: line.delay, duration: 1.2 }}
                  className={line.cls}
                >
                  {line.text}
                </motion.div>
              </div>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.9 }}
            className="text-lg text-slate-600 font-light max-w-xl leading-relaxed border-t border-slate-200 pt-10"
          >
            Our ultimate goal isn't just to build beautiful software—it's to deliver tangible results. Whether it's increasing online sales, generating quality leads, or automating workflows, we engineer digital solutions that scale your business to the next level.
          </motion.p>
        </div>
      </section>

      {/* ══════════ PROJECTS GRID ══════════ */}
      <section className="py-24 px-6 md:px-12 xl:px-20 relative z-10">
        <div className="max-w-[1400px] mx-auto space-y-32">
          {projects.map((proj, i) => (
            <motion.div 
              key={proj.id}
              initial={{ opacity: 0, y: 60, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setHoveredProj(i)}
              onMouseLeave={() => setHoveredProj(null)}
              className="group relative cursor-pointer"
            >
              <div className="grid md:grid-cols-[1fr_400px] lg:grid-cols-[1fr_500px] gap-10 md:gap-20 items-center">
                
                {/* Image */}
                <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-2xl bg-[#eaedf2] border border-slate-200 order-2 md:order-1">
                  <motion.img 
                    src={proj.img} 
                    alt={proj.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredProj === i ? 1.05 : 1,
                      filter: hoveredProj === i ? "brightness(1)" : "brightness(0.6) grayscale(30%)",
                    }}
                    transition={{ duration: 0.7 }}
                  />
                  
                  {/* Arrow overlay */}
                  <motion.div
                    animate={{ opacity: hoveredProj === i ? 1 : 0, scale: hoveredProj === i ? 1 : 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-6 right-6 w-14 h-14 rounded-full flex items-center justify-center bg-blue-600 shadow-lg"
                  >
                    <ArrowUpRight className="w-6 h-6 text-slate-800" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="order-1 md:order-2 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-blue-600 bg-blue-100 px-3 py-1 rounded-full">{proj.category}</span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">{proj.year}</span>
                  </div>
                  
                  <h2 className="font-heading font-black text-3xl md:text-5xl tracking-tight mb-6 group-hover:text-blue-600 transition-colors">
                    {proj.title}
                  </h2>
                  
                  <p className="text-slate-600 font-light leading-relaxed text-base md:text-lg mb-8">
                    {proj.desc}
                  </p>
                  
                  <div className="border-t border-slate-200 pt-6 mt-auto">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-gray-500 mb-1">Tech Stack</p>
                    <p className="font-bold text-slate-800">{proj.tech}</p>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
          {projects.length === 0 && (
             <div className="text-center py-24 border border-slate-100 rounded-3xl bg-[#eaedf2] px-6">
               <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6 border border-blue-200">
                 <Shield className="w-8 h-8 text-blue-600" />
               </div>
               <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-slate-800">Our Work is Protected Under NDA</h3>
               <p className="text-slate-600 font-light max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
                 We engineer premium, proprietary digital solutions for enterprise clients and scaling startups. To respect strict confidentiality agreements (NDAs) and protect our clients' competitive advantage, we do not publicly display our most impactful recent projects.
               </p>
               <div className="mt-10 pt-10 border-t border-slate-200">
                 <p className="text-slate-800 font-medium mb-3">Want to see our capabilities?</p>
                 <p className="text-gray-500 text-sm max-w-lg mx-auto">Contact us to schedule a private walkthrough of sanitized case studies and technical architectures relevant to your specific industry.</p>
               </div>
             </div>
          )}
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="relative py-40 px-6 md:px-12 xl:px-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 border-t border-slate-200 overflow-hidden">
        <motion.div animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-white blur-[150px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10 text-center">
          <BlurReveal>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-blue-200 mb-8">/ Start Your Project</p>
            <h2 className="font-heading font-black text-[clamp(2.5rem,7vw,7rem)] leading-[0.9] tracking-[-0.03em] mb-12 text-white">
              <WordReveal text="Have a project" /><br />
              <WordReveal text="in mind?" delay={0.1} className="text-blue-100" />
            </h2>
            <div className="flex justify-center">
              <Link href="/contact"
                className="hover-trigger inline-flex items-center gap-3 bg-white text-blue-700 font-bold text-sm uppercase tracking-widest px-10 py-5 rounded-full transition-all duration-300 hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)]">
                Get in Touch
              </Link>
            </div>
          </BlurReveal>
        </div>
      </section>

    </main>
  );
}
