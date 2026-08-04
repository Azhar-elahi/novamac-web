"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, LayoutDashboard, type LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";
import type { ServiceDetail } from "@/lib/services-data";

export default function ServicePageClient({ service }: { service: ServiceDetail }) {
  const Icon = (Icons as unknown as Record<string, LucideIcon>)[service.iconName] ?? Icons.Sparkles;

  return (
    <main className="bg-slate-50 text-slate-800 min-h-screen">
      {/* Hero */}
      <section className="pt-40 pb-20 px-6 md:px-12 xl:px-20 bg-white border-b border-slate-200 gradient-mesh">
        <div className="max-w-[1400px] mx-auto">
          <div className="inline-flex items-center gap-2 mb-8 border border-slate-300 px-4 py-2 rounded-full bg-white/70 backdrop-blur">
            <Icon className="w-4 h-4 text-brand" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-600">
              Services / {service.category} / {service.shortTitle}
            </span>
          </div>
          <h1 className="font-heading font-extrabold text-[clamp(2.5rem,7vw,6rem)] leading-[0.9] tracking-[-0.04em] mb-8">
            <span className="text-gradient-brand">{service.title}</span>
          </h1>
          <p className="text-lg text-slate-600 font-light max-w-2xl leading-relaxed">
            {service.tagline}
          </p>
        </div>
      </section>

      {/* Pain points */}
      <section className="py-24 px-6 md:px-12 xl:px-20">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-slate-600 mb-4">/ The Problem</p>
          <h2 className="font-heading font-bold text-3xl md:text-5xl tracking-tight mb-14 max-w-2xl">
            If this sounds familiar, you&apos;re not alone.
          </h2>

          <div className="grid md:grid-cols-3 gap-5">
            {service.painPoints.map((p, i) => (
              <div key={i} className="border border-slate-200 bg-white rounded-2xl p-8">
                <h3 className="font-heading font-bold text-xl mb-2">{p.title}</h3>
                <p className="text-slate-600 font-light text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-24 px-6 md:px-12 xl:px-20 bg-white border-t border-slate-200">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-slate-600 mb-4">/ What We Build</p>
            <h2 className="font-heading font-bold text-3xl md:text-5xl tracking-tight mb-8">
              Built around your<br />business, not a template.
            </h2>
            <p className="text-slate-600 font-light leading-relaxed mb-10">
              Every engagement starts with understanding how you actually work, then we build the system around that &mdash; not the other way around.
            </p>
            {service.techStack && (
              <div className="flex flex-wrap gap-2 mb-10">
                {service.techStack.map((t) => (
                  <span key={t} className="text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-full border border-slate-300 text-slate-600">
                    {t}
                  </span>
                ))}
              </div>
            )}
            <Link href="/contact" className="hover-trigger inline-flex items-center gap-3 bg-accent text-accent-foreground font-bold text-xs uppercase tracking-widest px-8 py-4 hover:opacity-90 transition-all duration-300 rounded-full">
              Get a {service.shortTitle} Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="border border-slate-200 rounded-2xl p-8 md:p-10 bg-slate-50">
            <div className="flex items-center gap-3 mb-8">
              <LayoutDashboard className="w-5 h-5 text-brand" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-slate-600">What&apos;s included</span>
            </div>
            <ul className="space-y-4">
              {service.included.map((s, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 md:px-12 xl:px-20 bg-gradient-to-br from-primary via-indigo-600 to-brand border-t border-slate-200 text-center">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-heading font-extrabold text-[clamp(2rem,6vw,4.5rem)] leading-[0.9] tracking-[-0.04em] mb-8 text-white">
            Ready to get started?
          </h2>
          <p className="text-blue-100 font-light text-lg mb-10">
            Tell us about your project and we&apos;ll get back to you with a clear, honest assessment within 24 hours.
          </p>
          <Link href="/contact" className="hover-trigger inline-flex items-center gap-3 bg-white text-primary font-bold text-xs uppercase tracking-widest px-10 py-5 hover:scale-105 transition-all duration-300 rounded-full shadow-[0_0_40px_rgba(255,255,255,0.3)]">
            Get a {service.shortTitle} Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
