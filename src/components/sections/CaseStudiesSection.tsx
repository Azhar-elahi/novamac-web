"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from "lucide-react";
import { PROJECTS_DATA } from "@/data/projectsData";

export function CaseStudiesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? PROJECTS_DATA.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === PROJECTS_DATA.length - 1 ? 0 : prev + 1));
  };

  const currentProject = PROJECTS_DATA[currentIndex];

  return (
    <section className="bg-[#FAF2F2] text-[#202020] py-24 px-6 sm:px-12 xl:px-20 font-sans border-t border-[#F0DCDC]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#F0DCDC] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] font-mono text-xs font-bold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" /> NOVAMAC LABS
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#202020] tracking-tight">
              Concepts, Prototypes & <span className="text-[#FF5733]">Systems Showcase</span>.
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-[#F0DCDC] bg-white hover:bg-[#FF5733] hover:text-white hover:border-[#FF5733] transition-all flex items-center justify-center shadow-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-[#F0DCDC] bg-white hover:bg-[#FF5733] hover:text-white hover:border-[#FF5733] transition-all flex items-center justify-center shadow-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <Link
              href="/work"
              className="hidden sm:inline-flex items-center gap-2 text-xs font-mono font-extrabold uppercase tracking-widest text-[#FF5733] hover:text-[#202020] transition-colors"
            >
              View All Work ({PROJECTS_DATA.length}) <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* ACTIVE CASE STUDY CAROUSEL ITEM */}
        <div className="bg-white border border-[#F0DCDC] rounded-3xl p-8 sm:p-12 shadow-xl grid lg:grid-cols-12 gap-10 items-center">
          
          {/* IMAGE COLUMN */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden shadow-lg group aspect-video">
            <img
              src={currentProject.image}
              alt={currentProject.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-4 left-4 px-3 py-1 bg-[#202020]/90 backdrop-blur-md text-white text-xs font-mono font-bold rounded-full border border-white/20">
              {currentProject.category}
            </div>
          </div>

          {/* CONTENT COLUMN */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-baseline gap-3">
              <span className="text-4xl sm:text-6xl font-black text-[#FF5733]">
                {currentProject.statVal}
              </span>
              <span className="text-xs sm:text-sm font-mono text-gray-500 font-bold uppercase tracking-wider">
                {currentProject.statLabel}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-[#202020] leading-tight">
              {currentProject.title}
            </h3>

            <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
              {currentProject.shortDesc}
            </p>

            {currentProject.techStack && (
              <div className="flex flex-wrap gap-2 pt-2">
                {currentProject.techStack.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-[#FAF2F2] border border-[#F0DCDC] text-xs font-mono text-gray-700 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            )}

            <div className="pt-4 border-t border-[#F0DCDC] flex items-center justify-between">
              <Link
                href={`/work/${currentProject.slug}`}
                className="px-6 py-3 bg-[#FF5733] text-white font-extrabold text-xs uppercase tracking-widest rounded-full hover:bg-[#202020] transition-all shadow-md inline-flex items-center gap-2"
              >
                View System Details <ArrowRight className="w-4 h-4" />
              </Link>
              <span className="text-xs font-mono text-gray-400 font-bold">
                0{currentIndex + 1} / 0{PROJECTS_DATA.length}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
