"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, CheckCircle2, Sparkles,
  Code2, ShoppingCart, ShoppingBag, Store, Layout, Bot,
  Database, Target, Search, Smartphone, Palette, Cloud,
  LifeBuoy, Share2,
} from "lucide-react";
import Link from "next/link";
import { SERVICES, type ServiceDetail } from "@/lib/services-data";

const ICONS: Record<string, typeof Code2> = {
  Code2, ShoppingCart, ShoppingBag, Store, Layout, Bot,
  Database, Target, Search, Smartphone, Palette, Cloud,
  LifeBuoy, Share2,
};

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const CATEGORIES = ["All", "Development", "AI & Automation", "Marketing", "Design", "Infrastructure"] as const;

const CATEGORY_STYLE: Record<string, { chip: string; text: string; ring: string; dot: string }> = {
  "Development":      { chip: "bg-blue-500/10",   text: "text-blue-400",   ring: "hover:border-blue-400/40",   dot: "bg-blue-400" },
  "AI & Automation":   { chip: "bg-violet-500/10", text: "text-violet-400", ring: "hover:border-violet-400/40", dot: "bg-violet-400" },
  "Marketing":         { chip: "bg-orange-500/10", text: "text-orange-400",ring: "hover:border-orange-400/40", dot: "bg-orange-400" },
  "Design":            { chip: "bg-pink-500/10",   text: "text-pink-400",  ring: "hover:border-pink-400/40",   dot: "bg-pink-400" },
  "Infrastructure":    { chip: "bg-teal-500/10",   text: "text-teal-400",  ring: "hover:border-teal-400/40",   dot: "bg-teal-400" },
};

const ENGAGEMENT = [
  {
    type: "Project Based",
    tag: "Fixed Scope",
    desc: "Best for clearly defined projects. A fixed-price, fixed-timeline build from design to production deployment.",
    features: ["Fixed price & timeline", "Dedicated PM", "Full UI/UX phase", "Post-launch warranty", "Structured milestones"],
    cta: "From $1,500",
    color: "blue",
  },
  {
    type: "Dedicated Team",
    tag: "Recommended",
    desc: "Bring a NovaMac developer directly onto your team on a flexible monthly retainer. Ideal for ongoing work.",
    features: ["Flexible monthly billing", "Scale team up/down", "Direct Slack access", "Senior-level only", "Daily standups"],
    cta: "From $500/mo",
    color: "violet",
  },
  {
    type: "Consulting",
    tag: "Advisory",
    desc: "Need expert guidance? A review of your architecture, codebase, or product with a clear, actionable roadmap.",
    features: ["Architecture review", "Code audit", "Tech stack advice", "Hiring guidance", "Detailed report"],
    cta: "From $299",
    color: "orange",
  },
];

const GOOD_TO_KNOW = [
  "All prices above are starting estimates \u2014 final quotes depend on scope and complexity.",
  "Monthly retainers (marketing, DevOps, maintenance) are billed month-to-month, cancel anytime.",
  "Third-party costs (hosting, ad spend, SaaS tools, API usage) are billed separately at cost.",
  "Every project starts with a free scoping call before any quote is finalized.",
];

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function PricingCard({ service, index }: { service: ServiceDetail; index: number }) {
  const Icon = ICONS[service.iconName] ?? Code2;
  const style = CATEGORY_STYLE[service.category] ?? CATEGORY_STYLE["Development"];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.05, ease }}
      className={`group relative flex flex-col card-vibrant rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(109,40,217,0.10)] ${style.ring}`}
    >
      <div className="flex items-start justify-between mb-6">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${style.chip}`}>
          <Icon className={`w-5 h-5 ${style.text}`} />
        </div>
        <span className={`inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest ${style.text}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
          {service.category}
        </span>
      </div>

      <h3 className="font-heading font-extrabold text-xl tracking-tight text-foreground mb-2">
        {service.shortTitle}
      </h3>
      <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
        {service.tagline}
      </p>

      <div className="mt-auto">
        <p className="font-heading font-extrabold text-2xl tracking-tight text-foreground mb-4">
          {service.startingPrice}
        </p>

        <ul className="space-y-2.5 mb-6">
          {service.included.slice(0, 3).map((f, j) => (
            <li key={j} className="flex items-start gap-2 text-xs text-muted-foreground leading-snug">
              <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${style.text}`} />
              {f}
            </li>
          ))}
        </ul>

        <Link
          href={`/services/${service.slug}`}
          className="hover-trigger inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground group-hover:gap-3 transition-all"
        >
          Full details <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </motion.div>
  );
}

export default function PricingClient() {
  const [activeCategory, setActiveCategory] = useState<(typeof CATEGORIES)[number]>("All");

  const filtered = useMemo(
    () => (activeCategory === "All" ? SERVICES : SERVICES.filter((s) => s.category === activeCategory)),
    [activeCategory]
  );

  return (
    <main className="bg-background text-foreground min-h-screen overflow-x-hidden">

      {/* ══════════ HERO ══════════ */}
      <section className="relative pt-40 pb-20 px-6 md:px-12 xl:px-20 overflow-hidden gradient-mesh">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 mb-8 border border-[--color-border] rounded-full px-4 py-2 bg-white/[0.04] backdrop-blur-xl">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-muted-foreground">Pricing &middot; {SERVICES.length} Services</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="font-heading font-extrabold leading-[0.95] tracking-[-0.03em] text-[clamp(2.6rem,7vw,5.5rem)] mb-6 max-w-4xl">
              Transparent pricing.<br />
              <span className="text-gradient-brand">No surprises.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-lg text-muted-foreground font-light max-w-xl leading-relaxed mb-10">
              Every service below starts with a real number, not a &ldquo;contact us&rdquo; wall. Pick a track, see what&rsquo;s included, and get moving.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <Link href="/contact"
              className="hover-trigger group inline-flex items-center gap-3 bg-primary text-primary-foreground font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:scale-[1.03] transition-all duration-300 shadow-[0_8px_30px_rgba(109,40,217,0.25)]">
              Get a Custom Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ══════════ CATEGORY TABS ══════════ */}
      <section className="px-6 md:px-12 xl:px-20 -mt-4 relative z-10">
        <div className="max-w-[1400px] mx-auto flex flex-wrap gap-3">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            const style = cat === "All" ? null : CATEGORY_STYLE[cat];
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`hover-trigger px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary shadow-[0_4px_16px_rgba(109,40,217,0.25)]"
                    : `bg-white/[0.03] text-muted-foreground border-[--color-border] hover:text-foreground ${style?.ring ?? "hover:border-brand/40"}`
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* ══════════ PRICING GRID ══════════ */}
      <section className="py-16 px-6 md:px-12 xl:px-20">
        <div className="max-w-[1400px] mx-auto">
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((service, i) => (
                <PricingCard key={service.slug} service={service} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ══════════ ENGAGEMENT MODELS ══════════ */}
      <section className="py-24 px-6 md:px-12 xl:px-20 bg-secondary/60 border-y border-[--color-border]">
        <div className="max-w-[1400px] mx-auto">
          <Reveal className="mb-16 text-center">
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-4">/ How We Partner</p>
            <h2 className="font-heading font-extrabold text-[clamp(1.8rem,4vw,3.2rem)] tracking-[-0.03em]">
              Engagement models.
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {ENGAGEMENT.map((e, i) => (
              <Reveal key={i} delay={i * 0.1}
                className={`relative flex flex-col card-vibrant rounded-2xl p-8 ${
                  e.color === "violet" ? "ring-2 ring-brand/40" : ""
                }`}
              >
                <div className={`inline-flex self-start px-3 py-1 mb-6 rounded-full text-[9px] font-mono tracking-[0.2em] uppercase ${
                  e.color === "blue" ? "bg-blue-500/10 text-blue-400" : e.color === "violet" ? "bg-violet-500/10 text-violet-400" : "bg-orange-500/10 text-orange-400"
                }`}>
                  {e.tag}
                </div>
                <h3 className="font-heading font-extrabold text-2xl tracking-tight mb-3">{e.type}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">{e.desc}</p>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {e.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-sm text-foreground/80">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="border-t border-[--color-border] pt-5 flex items-center justify-between">
                  <span className="font-heading font-bold text-lg">{e.cta}</span>
                  <Link href="/contact" className="hover-trigger inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand">
                    Get Started <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ GOOD TO KNOW ══════════ */}
      <section className="py-20 px-6 md:px-12 xl:px-20">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-[280px_1fr] gap-10">
          <Reveal>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-4">/ Good to Know</p>
            <h2 className="font-heading font-extrabold text-2xl tracking-tight">The fine print, upfront.</h2>
          </Reveal>
          <Reveal delay={0.1} className="grid sm:grid-cols-2 gap-5">
            {GOOD_TO_KNOW.map((note, i) => (
              <div key={i} className="flex items-start gap-3 p-5 rounded-xl bg-secondary/60 border border-[--color-border]">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                <p className="text-sm text-muted-foreground leading-relaxed">{note}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="relative py-32 px-6 md:px-12 xl:px-20 overflow-hidden bg-[#05060c] border-t border-[--color-border]">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="orb-core absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        />
        <div className="max-w-[1400px] mx-auto relative z-10 text-center">
          <Reveal>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/70 mb-6">/ Not Sure Where to Start</p>
            <h2 className="font-heading font-extrabold text-[clamp(2.2rem,6vw,4.5rem)] leading-[0.95] tracking-[-0.03em] mb-10 text-white">
              Let&rsquo;s scope your<br />project together.
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact"
                className="hover-trigger group inline-flex items-center gap-3 bg-white text-[#05060c] font-bold text-xs uppercase tracking-widest px-9 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.15)]">
                Get a Custom Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/services"
                className="hover-trigger inline-flex items-center gap-3 border border-white/40 text-white font-bold text-xs uppercase tracking-widest px-9 py-4 rounded-full hover:bg-white/10 transition-all duration-300">
                Browse All Services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

    </main>
  );
}
