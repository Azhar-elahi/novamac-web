"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";
import type { ServiceData } from "@/lib/services-data";

export default function ServiceDetailClient({ service }: { service: ServiceData }) {
  return (
    <main className="bg-slate-50 text-slate-800 min-h-screen">
      {/* Hero */}
      <section className="pt-40 pb-20 px-6 md:px-12 xl:px-20 gradient-mesh border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto">
          <div className="inline-flex items-center gap-2 mb-8 border border-slate-300 px-4 py-2 rounded-full bg-white/60 backdrop-blur">
            <Sparkles className="w-4 h-4 text-brand" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-600">
              Services / {service.category}
            </span>
          </div>
          <h1 className="font-heading font-extrabold text-[clamp(2.5rem,7vw,6rem)] leading-[0.92] tracking-[-0.04em] mb-8">
            <span className="text-gradient-brand">{service.title}</span>
          </h1>
          <p className="text-lg text-slate-600 font-light max-w-2xl leading-relaxed">
            {service.tagline}
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 px-6 md:px-12 xl:px-20">
        <div className="max-w-[900px] mx-auto">
          <p className="text-lg text-slate-700 font-light leading-relaxed">{service.overview}</p>
        </div>
      </section>

      {/* Pain points + Deliverables */}
      <section className="py-20 px-6 md:px-12 xl:px-20 bg-white border-y border-slate-200">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <AlertCircle className="w-5 h-5 text-accent" />
              <p className="font-mono text-[10px] uppercase tracking-widest text-slate-600">Sound Familiar?</p>
            </div>
            <ul className="space-y-5">
              {service.painPoints.map((p, i) => (
                <li key={i} className="text-slate-700 font-light leading-relaxed pl-6 relative before:content-['\u2014'] before:absolute before:left-0 before:text-accent">
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <CheckCircle2 className="w-5 h-5 text-brand" />
              <p className="font-mono text-[10px] uppercase tracking-widest text-slate-600">What You Get</p>
            </div>
            <ul className="space-y-4">
              {service.deliverables.map((d, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Ideal for */}
      <section className="py-16 px-6 md:px-12 xl:px-20">
        <div className="max-w-[900px] mx-auto border-l-2 border-brand pl-8">
          <p className="font-mono text-[10px] uppercase tracking-widest text-slate-600 mb-3">Ideal For</p>
          <p className="text-xl text-slate-700 font-light leading-relaxed">{service.idealFor}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 px-6 md:px-12 xl:px-20 bg-gradient-to-br from-primary via-indigo-700 to-brand border-t border-slate-200 text-center overflow-hidden">
        <div className="max-w-[900px] mx-auto relative z-10">
          <h2 className="font-heading font-extrabold text-[clamp(2rem,6vw,4rem)] leading-[0.95] tracking-[-0.04em] mb-8 text-white">
            Let&apos;s talk about your {service.title.toLowerCase()} project.
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link href="/contact" className="hover-trigger group inline-flex items-center gap-3 bg-white text-primary font-bold text-xs uppercase tracking-widest px-10 py-5 hover:scale-105 transition-all duration-300 rounded-full shadow-[0_0_40px_rgba(255,255,255,0.3)]">
              Start a Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/services" className="hover-trigger inline-flex items-center gap-3 border border-white/30 text-white font-bold text-xs uppercase tracking-widest px-10 py-5 hover:bg-white/10 transition-all duration-300 rounded-full">
              All Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
