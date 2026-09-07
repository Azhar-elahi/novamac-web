"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useBookingModal } from "@/components/booking/BookingContext";

export function PreFooterCTASection() {
  const { openBooking } = useBookingModal();

  return (
    <section className="bg-[#FAF2F2] py-20 px-6 sm:px-12 xl:px-20 font-sans border-t border-[#F0DCDC]">
      <div className="max-w-7xl mx-auto bg-[#060D17] text-white rounded-3xl p-10 sm:p-16 border border-white/10 shadow-2xl relative overflow-hidden">
        
        {/* BACKGROUND GLOW */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF5733]/15 blur-3xl pointer-events-none rounded-full" />

        <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF5733]/20 border border-[#FF5733]/40 text-[#FF5733] font-mono text-xs font-bold uppercase tracking-widest">
              <CheckCircle2 className="w-3.5 h-3.5" /> START YOUR NEXT PROJECT
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Have a Project <span className="text-[#FF5733]">in Mind?</span>
            </h2>

            <p className="text-sm sm:text-lg text-gray-300 font-normal max-w-xl leading-relaxed">
              Tell us what you&apos;re trying to build, improve or automate. We&apos;ll review your requirements and recommend the right approach.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 items-stretch lg:items-end">
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#FF5733] hover:bg-white hover:text-[#0A2540] text-white font-extrabold text-xs uppercase tracking-widest rounded-full shadow-xl transition-all flex items-center justify-center gap-2 text-center"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => openBooking()}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all text-center"
            >
              Book a Consultation
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

