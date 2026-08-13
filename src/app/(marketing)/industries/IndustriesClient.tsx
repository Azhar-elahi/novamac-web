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
    <main className="bg-[#f6f1e7] text-[#211f1a] min-h-screen">
      <section className="pt-40 pb-24 px-6 md:px-12 xl:px-20 ">
        <div className="max-w-[1400px] mx-auto">
          <span className="annotation-label -rotate-3 inline-block mb-5">— industries we serve</span>
          <h1 className="font-heading font-medium text-[clamp(2.4rem,6.5vw,5.4rem)] leading-[1.03] tracking-[-0.02em] mb-10">
            Built for your industry,<br /><span className="text-script">not a generic template.</span>
          </h1>
          <p className="text-lg text-[#211f1a]/60 font-light max-w-2xl mb-16 leading-relaxed">
            Every industry has its own workflow, its own bottlenecks, and its own way of losing deals to disorganization. We build systems around how your industry actually works.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {INDUSTRIES.map((ind) => (
              <div key={ind.slug} className={`p-8 md:p-10 rounded-2xl transition-all ${ind.live ? "bg-white border border-black/5 shadow-sm" : "border border-black/10 bg-[#f6f1e7]/[0.02] opacity-70"}`}>
                <div className="w-12 h-12 flex items-center justify-center bg-[#2f6b45]/10 rounded-xl mb-6">
                  <ind.icon className="w-5 h-5 text-[#2f6b45]" />
                </div>
                <h3 className="font-heading font-medium text-2xl mb-3">{ind.title}</h3>
                <p className="text-[#211f1a]/55 font-light text-sm leading-relaxed mb-6">{ind.desc}</p>
                {ind.live ? (
                  <Link href={`/industries/${ind.slug}`} className="hover-trigger inline-flex items-center gap-2 text-sm font-medium text-[#2f6b45] hover:opacity-80">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <span className="text-xs uppercase tracking-widest text-[#211f1a]/35">Coming Soon</span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 border-t border-black/10 pt-10">
            <p className="text-[#211f1a]/55 font-light mb-4">Don&apos;t see your industry listed?</p>
            <Link href="/contact" className="hover-trigger inline-flex items-center gap-2 text-sm font-medium text-[#2f6b45] hover:opacity-80">
              Tell us what you need <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
