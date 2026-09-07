"use client";

import React from "react";
import { Terminal, Search, Compass, Palette, Code2, Rocket, TrendingUp } from "lucide-react";

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discover",
    icon: Search,
    desc: "Understand your business, goals and challenges."
  },
  {
    step: "02",
    title: "Plan",
    icon: Compass,
    desc: "Define requirements, scope and technical roadmap."
  },
  {
    step: "03",
    title: "Design",
    icon: Palette,
    desc: "Create the user experience and system architecture."
  },
  {
    step: "04",
    title: "Build",
    icon: Code2,
    desc: "Develop, integrate and test the solution."
  },
  {
    step: "05",
    title: "Launch",
    icon: Rocket,
    desc: "Deploy and make everything production-ready."
  },
  {
    step: "06",
    title: "Improve",
    icon: TrendingUp,
    desc: "Support, optimize and expand."
  }
];

export function ProcessTimelineSection() {
  return (
    <section className="bg-[#FAF2F2] text-[#0A2540] py-24 px-6 sm:px-12 xl:px-20 font-sans border-t border-[#F0DCDC]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] font-mono text-xs font-bold uppercase tracking-widest">
            <Terminal className="w-3.5 h-3.5" /> OUR 6-STEP PROCESS
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0A2540] tracking-tight">
            How We Build & Deploy <span className="text-[#FF5733]">High-Growth Digital Systems</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
            A structured, transparent engineering process designed to deliver predictable business results on time and on budget.
          </p>
        </div>

        {/* PROCESS GRID (6 Columns / 2 Rows) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

                  <h3 className="text-xl font-extrabold text-[#0A2540] group-hover:text-[#FF5733] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#F0DCDC] text-[11px] font-mono text-gray-400 font-bold uppercase">
                  PHASE // {step.step} OF 06
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

