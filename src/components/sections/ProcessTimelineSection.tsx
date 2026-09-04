"use client";

import React from "react";
import { Sparkles, Code2, Cpu, Rocket, Search } from "lucide-react";

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Blueprinting",
    icon: Search,
    desc: "We analyze your business model, target audience, technical architecture, and project goals to build a precise roadmap within 48 hours."
  },
  {
    step: "02",
    title: "High-Fidelity UI/UX Design",
    icon: Code2,
    desc: "Custom Figma design systems, interactive prototypes, and conversion-focused layouts crafted with pixel perfection before coding."
  },
  {
    step: "03",
    title: "Hand-Coded Next.js Engineering",
    icon: Cpu,
    desc: "Full-stack development using Next.js 15, TypeScript, Tailwind CSS, PostgreSQL, and LLM integrations engineered for sub-second speeds."
  },
  {
    step: "04",
    title: "Edge Deployment & Handover",
    icon: Rocket,
    desc: "Deployment on Vercel Edge networks with 98+ PageSpeed compliance, automated testing, and 100% source code transfer."
  }
];

export function ProcessTimelineSection() {
  return (
    <section className="bg-[#FAF2F2] text-[#202020] py-24 px-6 sm:px-12 xl:px-20 font-sans border-t border-[#F0DCDC]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] font-mono text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> OUR ENGINEERING METHODOLOGY
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#202020] tracking-tight">
            How We Deliver <span className="text-[#FF5733]">Predictable Excellence</span>.
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
            A proven 4-step execution framework engineered to deliver high-performance software on time and within budget.
          </p>
        </div>

        {/* PROCESS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="bg-white border border-[#F0DCDC] hover:border-[#FF5733] rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-black text-[#FF5733]">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-[#FF5733]" />
                    </div>
                  </div>

                  <h3 className="text-xl font-extrabold text-[#202020] group-hover:text-[#FF5733] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#F0DCDC] text-[11px] font-mono text-gray-400 font-bold uppercase">
                  PHASE // {step.step} OF 04
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
