"use client";

import React from "react";
import { Cpu, Code2, Database, ShieldCheck, CheckCircle2 } from "lucide-react";

const TECH_PILLARS = [
  {
    icon: Code2,
    category: "FRONTEND & WEB CORE",
    title: "Next.js & React Architecture",
    desc: "Sub-second edge rendering, type-safe Next.js 15, React 19, and optimized Tailwind CSS systems.",
    stack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS"]
  },
  {
    icon: Database,
    category: "BACKEND & CLOUD ARCH",
    title: "Scalable Cloud Infra",
    desc: "High-throughput APIs, relational databases, serverless computing, and edge distribution.",
    stack: ["Node.js", "Python", "PostgreSQL", "Prisma ORM", "Vercel Edge"]
  },
  {
    icon: Cpu,
    category: "AI & AUTOMATION PIPELINE",
    title: "Custom AI & Workflow Engine",
    desc: "Enterprise LLM integrations, autonomous task agents, vector search, and RAG knowledge retrieval.",
    stack: ["OpenAI API", "Claude API", "Vercel AI SDK", "RAG Vector Base"]
  },
  {
    icon: ShieldCheck,
    category: "SECURITY & QUALITY SLA",
    title: "Production Engineering SLA",
    desc: "Zero-trust auth, 98+ PageSpeed SLA, full code auditing, and 100% source code IP transfer.",
    stack: ["100% IP Transfer", "Zero-Trust Auth", "SSL/TLS Security", "98+ PageSpeed"]
  }
];

export function TechMarqueeBelt() {
  return (
    <section className="bg-[#0A0A0A] text-white py-16 px-6 sm:px-12 rounded-3xl border border-white/10 my-8 shadow-2xl max-w-7xl mx-auto overflow-hidden relative">
      {/* BACKGROUND GLOW ACCENT */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF5733]/10 blur-3xl pointer-events-none rounded-full" />

      <div className="relative z-10 space-y-12">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] font-mono text-xs font-bold uppercase tracking-widest rounded-full mb-3">
              <span className="w-2 h-2 rounded-full bg-[#FF5733] animate-pulse" />
              CAPABILITY PROOF // STACK & ARCHITECTURE
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Modern Technology. Practical Engineering.
            </h3>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm font-light max-w-md">
            Built on production-proven frameworks and scalable cloud infrastructure. Zero legacy code, zero bloated templates.
          </p>
        </div>

        {/* 4-COLUMN TECH PILLARS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-[#141414] border border-white/10 hover:border-[#FF5733]/60 p-6 sm:p-7 rounded-2xl transition-all duration-300 flex flex-col justify-between group hover:shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-[#FF5733]" />
                    </div>
                    <span className="font-mono text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                      0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <span className="font-mono text-[10px] font-bold text-[#FF5733] uppercase tracking-wider block mb-1">
                      {pillar.category}
                    </span>
                    <h4 className="text-lg font-bold text-white group-hover:text-[#FF5733] transition-colors">
                      {pillar.title}
                    </h4>
                  </div>

                  <p className="text-gray-400 text-xs font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-white/10">
                  <div className="flex flex-wrap gap-1.5">
                    {pillar.stack.map((item, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-white/5 border border-white/10 text-gray-300 font-mono text-[10px] font-semibold rounded-md flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#FF5733]" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
