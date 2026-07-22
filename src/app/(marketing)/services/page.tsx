"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Code2, Bot, Target, Paintbrush, ShoppingCart, Cloud, CheckCircle2, Smartphone } from "lucide-react";
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

const SERVICES_DETAILED = [
  {
    num: "01",
    icon: Code2,
    title: "Custom Web Development",
    short: "Scalable web applications built for your business.",
    desc: "We build responsive, fast, and secure websites tailored to your specific business needs. From landing pages to full e-commerce stores, every line of code is clean, tested, and built to grow with you.",
    features: ["Next.js & React", "TypeScript first", "REST & GraphQL APIs", "Database design", "Performance optimization", "Comprehensive testing"],
  },
  {
    num: "02",
    icon: Target,
    title: "360 Performance Marketing",
    short: "Data-driven omnichannel growth strategies.",
    desc: "We create holistic 360 marketing campaigns that deliver measurable ROI. By combining technical SEO, paid acquisition, and CRO across all channels, we turn your website into a conversion machine.",
    features: ["Technical SEO", "Paid Acquisition (PPC)", "Conversion Rate Optimization", "Omnichannel Strategy", "Content Strategy", "A/B Testing"],
  },
  {
    num: "03",
    icon: Bot,
    title: "Autonomous AI Agents",
    short: "Custom LLM integrations to automate complex workflows.",
    desc: "We build and deploy intelligent AI agents that integrate directly with your business logic. Automate customer support, internal data processing, and complex multi-step tasks.",
    features: ["Custom LLM Integration", "RAG Systems", "Workflow Automation", "AI Chatbots", "Data Processing", "Prompt Engineering"],
  },
  {
    num: "04",
    icon: ShoppingCart,
    title: "E-Commerce Architecture",
    short: "Headless storefronts built to obliterate conversion benchmarks.",
    desc: "We build custom e-commerce experiences that convert. Whether it's a fully custom platform or a headless Shopify build, we optimize every step of the customer journey.",
    features: ["Headless Shopify", "Custom platforms", "Payment integration", "Inventory management", "Analytics & A/B testing", "Mobile-first checkout"],
  },
  {
    num: "05",
    icon: Smartphone,
    title: "Social Media Marketing",
    short: "Strategic content that builds tribes and drives sales.",
    desc: "Our social media strategies go beyond posting. We build comprehensive brand identities and engage directly with your target audience to foster authentic community growth.",
    features: ["Content Creation", "Community Management", "Influencer Outreach", "Brand Identity", "Monthly Reporting", "Platform Specific Strategies"],
  },
  {
    num: "06",
    icon: Cloud,
    title: "Cloud & DevOps",
    short: "Zero-downtime infrastructure built for scale and security.",
    desc: "We set up and manage your cloud infrastructure end-to-end. CI/CD pipelines, containerization, monitoring, and auto-scaling — we build systems that stay up and deploy without fear.",
    features: ["AWS / GCP / Vercel", "Docker & Kubernetes", "CI/CD pipelines", "Infrastructure as Code", "99.99% uptime SLA", "Security hardening"],
  },
];

const ENGAGEMENT = [
  {
    type: "Project Based",
    tag: "Fixed Scope",
    desc: "Best for clearly defined projects. We deliver a fixed-price, fixed-timeline solution from design to production deployment.",
    features: ["Fixed price & timeline", "Dedicated PM", "Full UI/UX phase", "Post-launch warranty", "Structured milestones"],
    cta: "From $1,500",
    highlighted: false,
  },
  {
    type: "Dedicated Team",
    tag: "Recommended",
    desc: "Integrate experienced NovaMac developers directly into your team on a flexible monthly retainer. Ideal for ongoing maintenance.",
    features: ["Flexible monthly billing", "Scale team up/down", "Direct Slack access", "Senior-level only", "Daily standups"],
    cta: "From $500/mo",
    highlighted: true,
  },
  {
    type: "Consulting",
    tag: "Advisory",
    desc: "Need expert guidance? We review your architecture, codebase, or product and deliver a clear, actionable roadmap.",
    features: ["Architecture review", "Code audit", "Tech stack advice", "Hiring guidance", "Detailed report"],
    cta: "From $299",
    highlighted: false,
  },
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <main className="bg-slate-50 text-slate-800 min-h-screen overflow-x-hidden">

      {/* ══════════ HERO ══════════ */}
      <section className="relative min-h-[80vh] flex flex-col justify-end pb-16 pt-36 px-6 md:px-12 xl:px-20 overflow-hidden bg-slate-50">
        {/* Background glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: "linear-gradient(#ffffff 1px,transparent 1px),linear-gradient(90deg,#ffffff 1px,transparent 1px)", backgroundSize: "100px 100px" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-400/20 blur-[150px]" />
        </div>

        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.2, duration: 0.9, ease }}
            className="inline-flex items-center gap-3 mb-10 border border-slate-300 px-5 py-3 bg-slate-50/70 backdrop-blur-xl"
          >
            <span className="w-2 h-2 rounded-full bg-slate-50 animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-slate-600">Services &middot; 6 Disciplines</span>
          </motion.div>

          <h1 className="font-heading font-black leading-[0.82] tracking-[-0.045em] text-[clamp(3rem,10vw,10rem)] mb-14">
            {[
              { text: "Premium", delay: 0.3, cls: "block text-slate-800" },
              { text: "Services.", delay: 0.5, cls: "block text-gray-500" },
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.9, ease }}
            className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 border-t border-slate-200 pt-10"
          >
            <p className="text-lg md:text-xl text-slate-600 font-light max-w-lg leading-relaxed">
              From custom web development to automated AI agents — we have the technical skills to bring any vision to life.
            </p>
            <Link href="/contact"
              className="hover-trigger group shrink-0 inline-flex items-center gap-3 bg-blue-600 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 hover:bg-blue-700 transition-all duration-300">
              Start a Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ══════════ SERVICES GRID ══════════ */}
      <section className="py-32 px-6 md:px-12 xl:px-20 bg-white border-t border-slate-200">
        <div className="max-w-[1400px] mx-auto">
          <BlurReveal className="mb-20">
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-5">/ What We Offer</p>
            <h2 className="font-heading font-black text-[clamp(2rem,5vw,4.5rem)] leading-[0.88] tracking-[-0.04em]">
              <WordReveal text="Six disciplines." /><br />
              <WordReveal text="One studio." delay={0.1} />
            </h2>
          </BlurReveal>

          <div className="space-y-4">
            {SERVICES_DETAILED.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.07, duration: 1, ease }}
                onMouseEnter={() => setActiveService(i)}
                onMouseLeave={() => setActiveService(null)}
                className="hover-trigger group border border-slate-200 hover:border-purple-400 bg-slate-50 overflow-hidden transition-all duration-500 cursor-pointer"
              >
                {/* Top line on hover */}
                <div className="h-[1px] bg-slate-50 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="p-8 md:p-10">
                  {/* Header row */}
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-0">
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 flex items-center justify-center border border-slate-300 bg-slate-100/50 shrink-0 group-hover:bg-slate-50 group-hover:border-blue-600 transition-colors duration-300">
                        <s.icon className="w-5 h-5 text-slate-800 group-hover:text-black transition-colors duration-300" />
                      </div>
                      <div>
                        <span className="font-mono text-[10px] text-gray-600 block mb-1">{s.num}</span>
                        <h3 className="font-heading font-black text-2xl md:text-3xl tracking-tight text-slate-700 group-hover:text-blue-600 transition-colors duration-300">
                          {s.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 max-w-sm font-light leading-relaxed">{s.short}</p>
                    <motion.div
                      animate={{ rotate: activeService === i ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0 hidden md:block"
                    >
                      <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
                    </motion.div>
                  </div>

                  {/* Expanded content */}
                  <motion.div
                    animate={{
                      height: activeService === i ? "auto" : 0,
                      opacity: activeService === i ? 1 : 0,
                      filter: activeService === i ? "blur(0px)" : "blur(6px)",
                    }}
                    transition={{ duration: 0.5, ease }}
                    className="overflow-hidden"
                  >
                    <div className="pt-8 mt-8 border-t border-slate-200 grid md:grid-cols-2 gap-8">
                      <p className="text-slate-600 font-light leading-relaxed text-base">{s.desc}</p>
                      <div className="grid grid-cols-2 gap-3">
                        {s.features.map((f, j) => (
                          <div key={j} className="flex items-center gap-2 text-xs font-mono text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-slate-800" />
                            {f}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ ENGAGEMENT MODELS ══════════ */}
      <section className="py-32 px-6 md:px-12 xl:px-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1400px] mx-auto">
          <BlurReveal className="mb-20 text-center">
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-5">/ Engagement Models</p>
            <h2 className="font-heading font-black text-[clamp(2rem,5vw,4.5rem)] leading-[0.88] tracking-[-0.04em]">
              <WordReveal text="How we partner." />
            </h2>
            <p className="text-lg text-slate-600 font-light mt-6 max-w-2xl mx-auto leading-relaxed">
              Flexible engagement models designed to fit your budget, timeline, and team structure.
            </p>
          </BlurReveal>

          <div className="grid md:grid-cols-3 gap-5">
            {ENGAGEMENT.map((e, i) => (
              <ZoomReveal key={i} delay={i * 0.1}
                className={`relative flex flex-col border p-8 md:p-10 overflow-hidden transition-all duration-500 ${
                  e.highlighted
                    ? "border-white bg-white"
                    : "border-slate-200 bg-slate-50 hover:border-blue-400"
                }`}
              >
                {e.highlighted && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-slate-50" />
                )}

                <div className="mb-8">
                  <div className="inline-block px-3 py-1 mb-6 border font-mono text-[9px] tracking-[0.2em] uppercase"
                    style={{ borderColor: e.highlighted ? "#ffffff" : "#333333", color: e.highlighted ? "#ffffff" : "#888888" }}>
                    {e.tag}
                  </div>
                  <h3 className="font-heading font-black text-2xl md:text-3xl tracking-tight mb-4">{e.type}</h3>
                  <p className="text-sm text-slate-600 font-light leading-relaxed">{e.desc}</p>
                </div>

                <ul className="space-y-3 mb-10 flex-1">
                  {e.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm font-mono">
                      <div className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: e.highlighted ? "#ffffff" : "#555555" }} />
                      <span style={{ color: e.highlighted ? "#ffffff" : "#888888" }}>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-slate-200 pt-6 flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-widest" style={{ color: e.highlighted ? "#ffffff" : "#888888" }}>
                    {e.cta}
                  </span>
                  <Link href="/contact" className="hover-trigger inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors"
                    style={{ color: e.highlighted ? "#ffffff" : "#888888" }}>
                    Get Started <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </ZoomReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ TECH STACK ══════════ */}
      <section className="py-24 px-6 md:px-12 xl:px-20 bg-white border-t border-slate-200">
        <div className="max-w-[1400px] mx-auto">
          <BlurReveal className="text-center mb-16">
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-3">Powered By</p>
          </BlurReveal>
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 26 }}
              className="flex whitespace-nowrap gap-16"
            >
              {Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className="flex items-center gap-16 shrink-0">
                  {["Next.js", "—", "React", "—", "OpenAI", "—", "PostgreSQL", "—", "Python", "—", "Figma", "—", "Vercel", "—", "AWS", "—"].map((t, j) => (
                    <span key={j} className="font-heading font-black text-4xl uppercase tracking-tight"
                      style={{ color: t === "—" ? "#333333" : "#ffffff" }}>{t}</span>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="relative py-40 px-6 md:px-12 xl:px-20 bg-slate-50 border-t border-slate-200 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-purple-400/20 blur-[180px] pointer-events-none"
        />
        <div className="max-w-[1400px] mx-auto relative z-10 text-center">
          <BlurReveal>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-8">/ Ready to Build</p>
            <h2 className="font-heading font-black text-[clamp(2.8rem,8vw,7.5rem)] leading-[0.85] tracking-[-0.045em] mb-14">
              <WordReveal text="Let's build" /><br />
              <WordReveal text="something" delay={0.1} className="text-gray-500" /><br />
              <WordReveal text="great." delay={0.2} />
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-5">
              <Link href="/contact"
                className="hover-trigger group inline-flex items-center gap-3 bg-blue-600 text-white font-bold text-xs uppercase tracking-widest px-10 py-5 hover:bg-blue-700 transition-all duration-300">
                Start a Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/work"
                className="hover-trigger inline-flex items-center gap-3 border border-slate-300 text-slate-800 font-bold text-xs uppercase tracking-widest px-10 py-5 hover:border-white hover:bg-slate-100/50 transition-all duration-300">
                See Our Work
              </Link>
            </div>
          </BlurReveal>
        </div>
      </section>

    </main>
  );
}
