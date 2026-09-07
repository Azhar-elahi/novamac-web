"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight, CheckCircle2, Code2 } from "lucide-react";
import { DETAILED_SERVICES_DATA } from "@/data/servicesData";

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState(DETAILED_SERVICES_DATA[1].id);

  return (
    <section className="bg-[#FAF2F2] text-[#202020] py-24 px-6 sm:px-12 xl:px-20 font-sans border-t border-[#F0DCDC]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] font-mono text-xs font-bold uppercase tracking-widest">
            <Code2 className="w-3.5 h-3.5" /> CORE ENGINEERING CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#202020] tracking-tight">
            Comprehensive Digital <span className="text-[#FF5733]">Services</span>.
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
            From Next.js web applications to autonomous AI workflows, we engineer digital products built for scale, performance, and revenue growth.
          </p>
        </div>

        {/* ACCORDION / TABS GRID */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* TABS LIST (LEFT) */}
          <div className="lg:col-span-5 space-y-3">
            {DETAILED_SERVICES_DATA.map((service) => {
              const isActive = activeTab === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`w-full p-6 rounded-2xl border text-left transition-all duration-300 flex items-center justify-between ${
                    isActive
                      ? "bg-white border-[#FF5733] shadow-md"
                      : "bg-white/60 border-[#F0DCDC] hover:border-[#FF5733]/50"
                  }`}
                >
                  <div>
                    <h3 className={`text-lg font-black ${isActive ? "text-[#FF5733]" : "text-[#202020]"}`}>
                      {service.title}
                    </h3>
                    <p className="text-xs text-gray-500 font-normal mt-1 line-clamp-1">
                      {service.shortDesc}
                    </p>
                  </div>
                  <ChevronDown className={`w-5 h-5 transition-transform ${isActive ? "rotate-180 text-[#FF5733]" : "text-gray-400"}`} />
                </button>
              );
            })}
          </div>

          {/* ACTIVE DETAILS PANEL (RIGHT) */}
          <div className="lg:col-span-7">
            {DETAILED_SERVICES_DATA.filter((s) => s.id === activeTab).map((service) => (
              <div key={service.id} className="bg-white border border-[#F0DCDC] rounded-3xl p-8 sm:p-10 shadow-xl space-y-8">
                <div>
                  <span className="text-xs font-mono font-bold text-[#FF5733] uppercase tracking-widest block mb-2">
                    CAPABILITY SPECIFICATION
                  </span>
                  <h3 className="text-3xl font-black text-[#202020] mb-3">{service.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                    {service.fullDesc}
                  </p>
                </div>

                {/* DELIVERABLES CHECKLIST */}
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#202020] mb-4 border-b border-[#F0DCDC] pb-2">
                    Core Deliverables & Outputs
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.deliverables.map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-[#FF5733] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FEATURE TAGS */}
                {service.features && (
                  <div>
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#202020] mb-3">
                      Technical Highlights
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feat) => (
                        <span key={feat} className="px-3 py-1 bg-[#FAF2F2] border border-[#F0DCDC] text-xs font-mono text-gray-700 rounded-full">
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-4 border-t border-[#F0DCDC] flex flex-wrap gap-4 items-center justify-between">
                  <Link
                    href={`/services#${service.slug}`}
                    className="px-6 py-3 bg-[#FF5733] text-white font-extrabold text-xs uppercase tracking-widest rounded-full hover:bg-[#202020] transition-all shadow-md inline-flex items-center gap-2"
                  >
                    <span>View Service Scope</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/contact"
                    className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#202020] hover:text-[#FF5733] transition-colors"
                  >
                    Request Custom Quote →
                  </Link>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
