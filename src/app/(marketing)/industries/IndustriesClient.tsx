"use client";

import Link from "next/link";
import { ArrowRight, MapPin, Building2 } from "lucide-react";

const INDUSTRIES = [
  {
    slug: "real-estate-wholesaling",
    icon: MapPin,
    title: "Real Estate Wholesaling",
    desc: "Automated lead pipelines, skip-tracing workflows, and buyer-matching CRMs built for wholesalers who are done chasing spreadsheets.",
    live: true,
  },
  {
    slug: "e-commerce",
    icon: Building2,
    title: "E-Commerce & Retail",
    desc: "Coming soon.",
    live: false,
  },
];

export default function IndustriesClient() {
  return (
    <main className="bg-[#05060c] text-white min-h-screen">
      <section className="pt-40 pb-24 px-6 md:px-12 xl:px-20 gradient-mesh">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/40 mb-5">/ Industries We Serve</p>
          <h1 className="font-heading font-extrabold text-[clamp(2.5rem,7vw,6rem)] leading-[0.9] tracking-[-0.04em] mb-10 text-white">
            Built for your industry,<br /><span className="text-gradient-brand">not a generic template.</span>
          </h1>
          <p className="text-lg text-white/55 font-light max-w-2xl mb-16 leading-relaxed">
            Every industry has its own workflow, its own bottlenecks, and its own way of losing deals to disorganization. We build systems around how your industry actually works.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {INDUSTRIES.map((ind) => (
              <div key={ind.slug} className={`border p-8 md:p-10 rounded-2xl transition-all ${ind.live ? "card-vibrant" : "border-white/10 bg-white/[0.01] opacity-60"}`}>
                <div className="w-12 h-12 flex items-center justify-center border border-white/10 bg-white/[0.03] rounded-xl mb-6">
                  <ind.icon className="w-5 h-5 text-brand" />
                </div>
                <h3 className="font-heading font-bold text-2xl mb-3 text-white">{ind.title}</h3>
                <p className="text-white/50 font-light text-sm leading-relaxed mb-6">{ind.desc}</p>
                {ind.live ? (
                  <Link href={`/industries/${ind.slug}`} className="hover-trigger inline-flex items-center gap-2 text-sm font-bold text-brand hover:opacity-80">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <span className="text-xs font-mono uppercase tracking-widest text-white/35">Coming Soon</span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 border-t border-white/10 pt-10">
            <p className="text-white/50 font-light mb-4">Don&apos;t see your industry listed?</p>
            <Link href="/contact" className="hover-trigger inline-flex items-center gap-2 text-sm font-bold text-brand hover:opacity-80">
              Tell us what you need <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
