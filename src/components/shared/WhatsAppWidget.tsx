"use client";

import React from "react";
import { MessageSquare, ArrowUpRight } from "lucide-react";

export function WhatsAppWidget() {
  const whatsappUrl = "https://wa.me/923174723510?text=Hi%20NovaMac%20Team%2C%20I%20would%20like%20to%20consult%20about%20a%20project.";

  return (
    <div className="fixed bottom-6 left-4 sm:left-6 z-[9999]">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-[#0F1C33] via-[#091222] to-[#050A14] hover:from-[#132442] hover:to-[#091222] border border-[#1E2E4A] border-t-white/15 text-[#F8FAFC] font-extrabold px-5 py-3.5 rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_25px_rgba(37,211,102,0.25)] flex items-center gap-3 hover:scale-105 transition-all duration-300 text-xs sm:text-sm cursor-pointer group min-h-[44px]"
        title="Talk to Our Consultant on WhatsApp"
        aria-label="Talk to Our Consultant on WhatsApp"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
        <div className="w-7 h-7 rounded-full bg-[#25D366] text-black flex items-center justify-center font-bold shrink-0 shadow-sm group-hover:rotate-12 transition-transform">
          <MessageSquare className="w-4 h-4 fill-black text-black" />
        </div>
        <span className="font-mono tracking-wider text-xs font-bold uppercase">Talk to Our Consultant</span>
        <ArrowUpRight className="w-4 h-4 text-[#25D366] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
      </a>
    </div>
  );
}
