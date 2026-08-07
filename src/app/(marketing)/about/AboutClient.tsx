"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, Target, Shield, Globe, Award, Zap } from "lucide-react";
import Link from "next/link";

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

function ZoomReveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88, filter: "blur(16px)" }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.1, delay, ease }}
      className={className}
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

const VALUES = [
  { icon: Shield, title: "Quality Development", desc: "We don't cut corners. Every line of code is written for scale, security, and long-term maintainability." },
  { icon: Target, title: "Radical Transparency", desc: "No black boxes. You get direct access to our developers, raw data, and honest assessments of your project." },
  { icon: Zap, title: "Speed of Execution", desc: "We ship fast because we eliminate bureaucracy. Our teams are senior, autonomous, and decisive." },
  { icon: Users, title: "Client as Partner", desc: "We treat your budget like our own. If a feature won't drive ROI, we will tell you not to build it." },
  { icon: Globe, title: "Global Perspective", desc: "A remote-first studio pulling top-tier development and design talent from across the globe." },
  { icon: Award, title: "Relentless Quality", desc: "Award-winning design isn't an accident. It's the result of obsessive attention to the smallest details." },
];


export default function AboutClient() {
  return (
    <main className="bg-[#05060c] text-white min-h-screen overflow-x-hidden">

      {/* ══════════ HERO ══════════ */}
      <section className="relative min-h-[80vh] flex flex-col justify-end pb-16 pt-36 px-6 md:px-12 xl:px-20 overflow-hidden bg-[#05060c] gradient-mesh">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(#ffffff 1px,transparent 1px),linear-gradient(90deg,#ffffff 1px,transparent 1px)", backgroundSize: "100px 100px" }} />
          <div className="orb-core animate-orb-float absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[38vh] h-[38vh] rounded-full opacity-80" />
        </div>

        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.2, duration: 0.9, ease }}
            className="inline-flex items-center gap-3 mb-10 border border-white/10 px-5 py-3 bg-white/[0.04] backdrop-blur-xl rounded-full"
          >
            <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-white/50">Our Story</span>
          </motion.div>

          <h1 className="font-heading font-extrabold leading-[0.82] tracking-[-0.045em] text-[clamp(3rem,10vw,10rem)] mb-14">
            {[
              { text: "Built", delay: 0.3, cls: "block text-white" },
              { text: "For Scale.", delay: 0.5, cls: "block text-gradient-brand" },
            ].map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.div
                  initial={{ y: "115%", opacity: 0, filter: "blur(22px)" }}
                  animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
                  transition={{ delay: line.delay, duration: 1.2, ease }}
                  className={line.cls}
                >
                  {line.text}
                </motion.div>
              </div>
            ))}
          </h1>

          <div className="grid md:grid-cols-2 gap-10 border-t border-white/10 pt-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.9, ease }}
              className="text-lg md:text-xl text-white/55 font-light leading-relaxed"
            >
              NovaMac was founded on a simple premise: most agencies build for the launch day. We build platforms — and AI systems — designed to thrive under the pressure of scale, traffic, and growth.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.9, ease }}
              className="text-base text-white/50 font-light leading-relaxed"
            >
              We are a collective of senior developers, award-winning designers, and growth strategists. We do not use templates, we do not offshore to junior devs, and we do not compromise on code quality. When you hire NovaMac, you hire the elite.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ══════════ VALUE PROPOSITION GRID ══════════ */}
      <section className="py-20 px-6 md:px-12 xl:px-20 bg-[#05060c] border-t border-white/10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { n: "AI & Automation", l: "WhatsApp AI, Voice Agents, CRM" },
            { n: "Web & Mobile", l: "Custom Apps & Portals" },
            { n: "UI/UX Design", l: "Premium User Experiences" },
            { n: "Cloud & DevOps", l: "Scalable Infrastructure" },
          ].map((stat, i) => (
            <BlurReveal key={i} delay={i * 0.1} className="group card-vibrant p-10 text-left relative overflow-hidden rounded-xl">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#7fa4ff] via-[#a78bfa] to-[#ec4899] transform origin-left scale-x-100 opacity-70" />
              <p className="font-heading font-extrabold text-2xl md:text-3xl mb-4 text-white group-hover:text-brand transition-colors">{stat.n}</p>
              <p className="font-sans text-sm md:text-base font-medium text-white/50 leading-relaxed">{stat.l}</p>
            </BlurReveal>
          ))}
        </div>
      </section>

      {/* ══════════ VALUES ══════════ */}
      <section className="py-32 px-6 md:px-12 xl:px-20 bg-[#05060c] border-t border-white/10">
        <div className="max-w-[1400px] mx-auto">
          <BlurReveal className="mb-20">
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/40 mb-5">/ Core Principles</p>
            <h2 className="font-heading font-extrabold text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.88] tracking-[-0.04em] text-white">
              <WordReveal text="How we operate." />
            </h2>
          </BlurReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALUES.map((val, i) => (
              <ZoomReveal key={i} delay={i * 0.08}
                className="group card-vibrant p-8 md:p-10 rounded-2xl overflow-hidden relative"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="w-12 h-12 flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] mb-8 group-hover:border-brand/50 transition-colors duration-300">
                  <val.icon className="w-5 h-5 text-brand" />
                </div>
                <h3 className="font-heading font-bold text-2xl tracking-tight mb-4 text-white">{val.title}</h3>
                <p className="text-white/50 font-light text-sm leading-relaxed">{val.desc}</p>
              </ZoomReveal>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════ CTA ══════════ */}
      <section className="relative py-40 px-6 md:px-12 xl:px-20 bg-[#05060c] border-t border-white/10 overflow-hidden">
        <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="orb-core absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10 text-center">
          <BlurReveal>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/50 mb-8">/ Join Our Roster</p>
            <h2 className="font-heading font-extrabold text-[clamp(2.8rem,8vw,7.5rem)] leading-[0.85] tracking-[-0.045em] mb-14 text-white">
              <WordReveal text="Hire the team" /><br />
              <WordReveal text="that delivers." delay={0.1} className="text-white/60" />
            </h2>
            <div className="flex justify-center">
              <Link href="/contact"
                className="hover-trigger group inline-flex items-center gap-3 bg-white text-[#05060c] font-bold text-xs uppercase tracking-widest px-10 py-5 hover:scale-105 rounded-full transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)]">
                Contact Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </BlurReveal>
        </div>
      </section>

    </main>
  );
}
