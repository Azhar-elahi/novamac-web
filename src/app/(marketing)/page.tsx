"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { ArrowRight, Globe, Target, Bot, ChevronDown, CheckCircle2, Shield, Zap, Users, Code2, Smartphone } from "lucide-react";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import IntroLoader from "@/components/nexora/IntroLoader";
import AiSystemsGrid from "@/components/nexora/AiSystemsGrid";
import Pipeline from "@/components/nexora/Pipeline";
import IndustrySwitcher from "@/components/nexora/IndustrySwitcher";
import { AI_SYSTEMS } from "@/components/nexora/data";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ── Helpers ──────────────────────────────────── */
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

function ZoomReveal({ children, delay = 0, className = "", style = {} }: { children: React.ReactNode; delay?: number; className?: string; style?: React.CSSProperties }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88, filter: "blur(16px)" }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.1, delay, ease }}
      className={className}
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

function MagneticButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Data ─────────────────────────────────────── */
const SERVICES = [
  {
    num: "05",
    title: "Custom Web Development",
    desc: "We build responsive, fast, and secure websites tailored to your specific business needs. From landing pages to full e-commerce stores.",
    icon: Code2,
    color: { chip: "bg-blue-500/10", text: "text-blue-400", hoverText: "group-hover:text-blue-400", linkHover: "hover:text-blue-400" },
    details: ["Modern Web Applications", "E-commerce Stores", "Business Landing Pages", "Mobile-Friendly Design", "Secure Hosting Setup"],
  },
  {
    num: "06",
    title: "Social Media Marketing",
    desc: "Strategic content creation and community management to grow your online presence and engage directly with your target audience.",
    icon: Smartphone,
    color: { chip: "bg-pink-500/10", text: "text-pink-400", hoverText: "group-hover:text-pink-400", linkHover: "hover:text-pink-400" },
    details: ["Content Creation & Scheduling", "Community Engagement", "Brand Identity Design", "Monthly Performance Reports", "Influencer Outreach"],
  },
  {
    num: "07",
    title: "360 Marketing & SEO",
    desc: "Get found online with a complete 360 marketing approach — search visibility plus targeted ad campaigns.",
    icon: Target,
    color: { chip: "bg-orange-500/10", text: "text-orange-400", hoverText: "group-hover:text-orange-400", linkHover: "hover:text-orange-400" },
    details: ["Local & On-page SEO", "Google & Facebook Ads", "Email Marketing Setup", "Omnichannel Strategies", "Audience Targeting"],
  },
  {
    num: "08",
    title: "Workflow Automation",
    desc: "Save hours of manual work with practical automation — beyond AI systems, wired into the rest of your stack.",
    icon: Bot,
    color: { chip: "bg-violet-500/10", text: "text-violet-400", hoverText: "group-hover:text-violet-400", linkHover: "hover:text-violet-400" },
    details: ["Email & CRM Automation", "Data Entry Automation", "Lead Generation Bots", "Custom Zapier / n8n Workflows", "Internal Ops Tooling"],
  },
];

const WHY_US = [
  { icon: Shield, title: "Honest & Reliable", desc: "No false promises. We deliver exactly what we agree on, within your budget, and on time." },
  { icon: Zap, title: "Modern Quality", desc: "We use the latest technologies so your website is fast, secure, and looks great on all devices." },
  { icon: Users, title: "Clear Communication", desc: "We keep things simple. You'll always know how your project is doing without confusing technical jargon." },
  { icon: Globe, title: "Long-Term Support", desc: "Our relationship doesn't end at launch. We are here to help you maintain and grow your digital presence." },
];

const TECH = ["Web Development", "—", "WhatsApp AI", "—", "Voice Agents", "—", "SEO", "—", "Digital Marketing", "—", "Automation", "—", "Branding", "—"];

/* ── Main ─────────────────────────────────────── */
export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const heroBgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const heroY       = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const smoothBS    = useSpring(heroBgScale, { stiffness: 50, damping: 18 });
  const smoothY     = useSpring(heroY,       { stiffness: 50, damping: 18 });

  const [activeService, setActiveService] = useState<number | null>(null);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "NovaMac Solutions",
    "image": "https://novamacsolutions.com/favicon.ico",
    "description": "The AI Control Center for modern brands — WhatsApp AI + CRM, Voice Agents, Custom AI Solutions, Web Development, SEO and Social Media Management.",
    "url": "https://novamacsolutions.com",
    "telephone": "+1-415-480-4281",
    "email": "hello@novamacsolutions.com",
    "address": { "@type": "PostalAddress", "addressCountry": "US" },
    "priceRange": "$$"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [...AI_SYSTEMS.map((s) => ({
      "@type": "Question",
      "name": `Does NovaMac Solutions offer ${s.name}?`,
      "acceptedAnswer": { "@type": "Answer", "text": `Yes. ${s.description} Starting from ${s.fromPrice}.` },
    })), ...SERVICES.map((service) => ({
      "@type": "Question",
      "name": `Does NovaMac Solutions offer ${service.title}?`,
      "acceptedAnswer": { "@type": "Answer", "text": `Yes, we offer ${service.title}. ${service.desc}` },
    }))]
  };

  return (
    <main className="bg-background text-foreground overflow-x-hidden relative">
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchema} />

      <AnimatePresence>
        {loading && <IntroLoader onDone={() => setLoading(false)} />}
      </AnimatePresence>

      {/* ══ HERO ════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col justify-end pb-16 pt-36 px-6 md:px-12 xl:px-20 overflow-hidden bg-background gradient-mesh">
        <motion.div className="absolute inset-0 pointer-events-none" style={{ scale: smoothBS }}>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#a78bfa]/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(#ffffff 1px,transparent 1px),linear-gradient(90deg,#ffffff 1px,transparent 1px)", backgroundSize: "100px 100px" }} />
          {/* Glowing orb centerpiece */}
          <div
            aria-hidden
            className="orb-core animate-orb-float absolute left-1/2 top-[38%] h-[42vh] w-[42vh] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-90 sm:h-[34vw] sm:w-[34vw]"
          />
        </motion.div>

        <motion.div style={{ opacity: heroOpacity, y: smoothY }} className="relative z-10 max-w-[1400px] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 16, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.2, duration: 0.9, ease }}
            className="inline-flex items-center gap-3 mb-10 px-5 py-3 border border-white/10 bg-white/[0.04] backdrop-blur-xl rounded-full"
          >
            <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-white/50">— NovaMac Lab</span>
          </motion.div>

          <h1 className="font-heading font-extrabold leading-[0.95] md:leading-[0.85] tracking-[-0.03em] text-[clamp(2.5rem,8vw,8rem)] mb-12">
            {[
              { text: "The AI",  delay: 0.35, cls: "block text-foreground" },
              { text: "Control",   delay: 0.52, cls: "block text-gradient-brand" },
              { text: "Center.", delay: 0.69, cls: "block text-foreground" },
            ].map((line, i) => (
              <div key={i} className="overflow-hidden pb-4 md:pb-8 -mb-4 md:-mb-8">
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

          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10 border-t border-white/10 pt-10 mt-8">
            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.95, duration: 1, ease }}
              className="text-lg md:text-xl text-white/55 font-light max-w-md leading-relaxed"
            >
              Four intelligent AI systems, one cinematic interface — plus the
              web, marketing and automation work that gets you found. Explore
              what you&rsquo;re really buying: the experience, not just the
              price.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 1.1, duration: 1, ease }}
              className="flex flex-wrap gap-4"
            >
              <MagneticButton>
                <Link href="/contact" className="hover-trigger group inline-flex items-center gap-3 bg-primary text-primary-foreground font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-[0_8px_30px_rgba(127,164,255,0.25)]">
                  Let's Talk <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link href="/services" className="hover-trigger inline-flex items-center gap-3 border border-white/15 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:border-white/40 hover:bg-white/5 transition-all duration-300">
                  Our Services
                </Link>
              </MagneticButton>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="font-mono text-[9px] tracking-[0.35em] uppercase text-white/35">Scroll to activate the core</span>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </section>

      {/* ══ MARQUEE ══════════════════════════════ */}
      <div className="overflow-hidden border-y border-white/10 bg-white/[0.02] py-6 relative z-10">
        <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
          className="flex whitespace-nowrap gap-16">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-16 shrink-0">
              {TECH.map((t, j) => (
                <span key={j} className="font-heading font-extrabold text-2xl md:text-3xl uppercase tracking-tight text-white/25">
                  {t}
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* ══ AI SYSTEMS (pricing) ═════════════════ */}
      <section id="systems" className="py-32 px-6 md:px-12 xl:px-20 relative">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <BlurReveal className="mb-16">
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-brand mb-5">— The Systems</p>
            <h2 className="font-heading font-extrabold text-[clamp(2.4rem,6vw,5.5rem)] leading-[0.9] tracking-[-0.03em]">
              <WordReveal text="Intelligent systems." />
            </h2>
            <p className="mt-5 max-w-md text-white/50">Each one a complete product. Tap any card to step inside.</p>
          </BlurReveal>

          <ZoomReveal delay={0.1}>
            <AiSystemsGrid />
          </ZoomReveal>
        </div>
      </section>

      {/* ══ PIPELINE ═════════════════════════════ */}
      <section id="pipeline" className="py-32 px-6 md:px-12 xl:px-20 relative border-t border-white/10">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <BlurReveal className="mb-14">
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-brand mb-5">— The Workflow</p>
            <h2 className="font-heading font-extrabold text-[clamp(2.4rem,6vw,5.5rem)] leading-[0.9] tracking-[-0.03em]">
              <WordReveal text="One continuous AI pipeline." />
            </h2>
            <p className="mt-5 max-w-md text-white/50">
              Every lead flows through the same intelligent path — captured, qualified and booked, hands-free.
            </p>
          </BlurReveal>
          <ZoomReveal delay={0.1}>
            <Pipeline />
          </ZoomReveal>
        </div>
      </section>

      {/* ══ INTERACTIVE SERVICES (original NovaMac lineup) ══ */}
      <section id="services" className="py-32 px-6 md:px-12 xl:px-20 relative border-t border-white/10">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <BlurReveal className="mb-20 text-center">
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-brand mb-5">/ Everything Else We Build</p>
            <h2 className="font-heading font-extrabold text-[clamp(2.4rem,6vw,5.5rem)] leading-[0.9] tracking-[-0.03em]">
              <WordReveal text="Services designed to" /><br />
              <WordReveal text="help you succeed." delay={0.1} className="text-white/45" />
            </h2>
          </BlurReveal>

          <div className="grid md:grid-cols-2 gap-5">
            {SERVICES.map((s, i) => (
              <ZoomReveal key={i} delay={i * 0.08}
                className="group relative card-vibrant overflow-hidden rounded-2xl"
              >
                <div
                  className="relative z-10 p-8 md:p-10 cursor-pointer h-full flex flex-col"
                  onClick={() => setActiveService(activeService === i ? null : i)}
                >
                  <div className="flex items-start justify-between mb-8">
                    <div className={`w-12 h-12 flex items-center justify-center rounded-xl transition-colors duration-300 ${s.color.chip}`}>
                      <s.icon className={`w-5 h-5 ${s.color.text}`} />
                    </div>
                    <span className="font-mono text-xs text-white/40 bg-white/5 px-3 py-1 rounded-full">{s.num}</span>
                  </div>

                  <h3 className={`font-heading font-bold text-2xl md:text-3xl tracking-tight mb-4 transition-colors text-white ${s.color.hoverText}`}>{s.title}</h3>
                  <p className="text-base text-white/50 leading-relaxed font-light mb-6">{s.desc}</p>

                  <div className="mt-auto border-t border-white/10 pt-6 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-white/50 transition-colors">
                    <span>{activeService === i ? "Hide Details" : "View Details"}</span>
                    <motion.div animate={{ rotate: activeService === i ? 180 : 0 }}>
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {activeService === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 mt-4 space-y-3">
                          {s.details.map((detail, j) => (
                            <div key={j} className="flex items-center gap-3 text-sm font-light text-white/70">
                              <CheckCircle2 className={`w-4 h-4 shrink-0 ${s.color.text}`} />
                              {detail}
                            </div>
                          ))}
                          <div className="pt-6">
                            <Link href="/services" className={`inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-white ${s.color.linkHover} transition-colors`}>
                              Explore More <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ZoomReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ INDUSTRIES ═══════════════════════════ */}
      <section id="industries" className="py-32 px-6 md:px-12 xl:px-20 relative border-t border-white/10">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <BlurReveal className="mb-14">
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-brand mb-5">— Scene 04 · Any Industry</p>
            <h2 className="font-heading font-extrabold text-[clamp(2.4rem,6vw,5.5rem)] leading-[0.9] tracking-[-0.03em]">
              <WordReveal text="Built for your world." />
            </h2>
            <p className="mt-5 max-w-md text-white/50">
              One system, every playbook. Choose an industry and watch the workflow adapt.
            </p>
          </BlurReveal>
          <ZoomReveal delay={0.1}>
            <IndustrySwitcher />
          </ZoomReveal>
        </div>
      </section>

      {/* ══ WHY CHOOSE US ════════════════════════ */}
      <section className="py-32 px-6 md:px-12 xl:px-20 border-t border-white/10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <BlurReveal className="mb-16 text-center">
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-brand mb-5">/ Our Approach</p>
            <h2 className="font-heading font-extrabold text-[clamp(2.4rem,6vw,5.5rem)] leading-[0.9] tracking-[-0.03em]">
              <WordReveal text="Why partner" /><br />
              <WordReveal text="with us." delay={0.1} className="text-white/45" />
            </h2>
          </BlurReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY_US.map((item, i) => (
              <ZoomReveal key={i} delay={i * 0.1}
                className="group p-8 md:p-10 card-vibrant rounded-2xl"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl mb-8 group-hover:bg-white/10 transition-colors duration-300">
                  <item.icon className="w-5 h-5 text-brand" />
                </div>
                <h3 className="font-heading font-bold text-xl tracking-tight mb-4 text-white">{item.title}</h3>
                <p className="text-sm text-white/50 font-light leading-relaxed">{item.desc}</p>
              </ZoomReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══════════════════════════════════ */}
      <section className="relative py-40 px-6 md:px-12 xl:px-20 bg-[#05060c] border-t border-white/10 overflow-hidden">
        <motion.div animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="orb-core absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10 text-center">
          <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/50 mb-8">/ Let's Connect</motion.p>

          <h2 className="font-heading font-extrabold text-[clamp(2.5rem,7vw,7rem)] leading-[0.9] tracking-[-0.03em] mb-12 text-white">
            <WordReveal text="Ready to build" /><br />
            <WordReveal text="your control center?" delay={0.1} className="text-white/60" />
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease }}
            className="flex flex-wrap items-center justify-center gap-5 mt-10"
          >
            <MagneticButton>
              <Link href="/contact" className="hover-trigger group inline-flex items-center gap-3 bg-white text-[#05060c] font-bold text-sm uppercase tracking-widest px-10 py-5 rounded-full transition-all duration-300 hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)]">
                Book a Call <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link href="/work" className="hover-trigger inline-flex items-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-widest px-10 py-5 rounded-full hover:bg-white/10 transition-all duration-300">
                View Our Work
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
