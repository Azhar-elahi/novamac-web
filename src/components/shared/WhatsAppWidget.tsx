"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, PhoneCall, X, ArrowUpRight, ShieldCheck, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const channels = [
    {
      title: "United States HQ",
      phone: "+1 (510) 585-4258",
      raw: "15105854258",
      tag: "USA OFFICE",
      desc: "Direct Executive & Strategy Line",
      hoverBorder: "hover:border-[#3B82F6] hover:bg-[#3B82F6]/10",
      accentColor: "text-[#3B82F6]",
      bgAccent: "bg-[#3B82F6]/15 border-[#3B82F6]/30",
    },
    {
      title: "Global WhatsApp Desk",
      phone: "+92 317 4723510",
      raw: "923174723510",
      tag: "24/7 SUPPORT",
      desc: "Instant Technical & Project Consult",
      hoverBorder: "hover:border-[#25D366] hover:bg-[#25D366]/10",
      accentColor: "text-[#25D366]",
      bgAccent: "bg-[#25D366]/15 border-[#25D366]/30",
    },
  ];

  return (
    <div ref={menuRef} className="fixed bottom-6 left-4 sm:left-6 z-[9999]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mb-3 w-80 sm:w-96 bg-gradient-to-b from-[#0F1C33] via-[#091222] to-[#050A14] border border-[#1E2E4A] border-t-white/15 rounded-3xl p-5 sm:p-6 shadow-[0_30px_90px_rgba(0,0,0,0.9),0_0_40px_rgba(59,130,246,0.15)] relative text-[#F8FAFC] backdrop-blur-xl"
          >
            {/* Executive Header */}
            <div className="flex items-center justify-between border-b border-[#1E2E4A] pb-4 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
                  <span className="font-mono text-[10px] font-bold text-[#25D366] uppercase tracking-widest">
                    DIRECT WHATSAPP CONNECT
                  </span>
                </div>
                <h3 className="font-black text-base text-[#F8FAFC]">NovaMac Engineering Desk</h3>
                <p className="text-xs text-[#94A3B8] font-normal mt-0.5">
                  Select a direct line to start instant WhatsApp chat.
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-[#070D18] text-[#94A3B8] hover:text-white flex items-center justify-center border border-[#1E2E4A] transition-colors shrink-0"
                title="Close"
                aria-label="Close WhatsApp menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Channels */}
            <div className="space-y-3">
              {channels.map((ch) => (
                <a
                  key={ch.raw}
                  href={`https://wa.me/${ch.raw}?text=Hi%20NovaMac%20Team%2C%20I%20would%20like%20to%20discuss%20a%20project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className={`group flex items-center justify-between p-4 rounded-2xl bg-[#070D18] border border-[#1E2E4A] ${ch.hoverBorder} transition-all duration-300 relative overflow-hidden`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-10 h-10 rounded-xl ${ch.bgAccent} border ${ch.accentColor} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                      <PhoneCall className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="font-mono text-[9px] font-bold text-[#94A3B8] uppercase tracking-wider">{ch.title}</span>
                        <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-[#1E2E4A] text-[#F8FAFC] uppercase">
                          {ch.tag}
                        </span>
                      </div>
                      <div className="font-black text-base text-[#F8FAFC] group-hover:text-white transition-colors">
                        {ch.phone}
                      </div>
                      <div className="text-[11px] text-[#94A3B8] font-normal">{ch.desc}</div>
                    </div>
                  </div>
                  <ArrowUpRight className={`w-5 h-5 ${ch.accentColor} group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2`} />
                </a>
              ))}
            </div>

            {/* Footer Trust Indicator */}
            <div className="mt-4 pt-3 border-t border-[#1E2E4A] flex items-center justify-between font-mono text-[10px] text-[#94A3B8]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#3B82F6]" /> Verified Studio Channels
              </span>
              <span className="flex items-center gap-1 text-[#F8FAFC] font-bold">
                <Globe className="w-3 h-3 text-[#3B82F6]" /> Worldwide
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-[#0F1C33] via-[#091222] to-[#050A14] hover:from-[#132442] hover:to-[#091222] border border-[#1E2E4A] border-t-white/15 text-[#F8FAFC] font-extrabold px-5 py-3.5 rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_25px_rgba(37,211,102,0.25)] flex items-center gap-3 hover:scale-105 transition-all duration-300 text-xs sm:text-sm cursor-pointer group"
        title="Open WhatsApp Contacts"
        aria-label="Open WhatsApp direct chat options"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
        <div className="w-6 h-6 rounded-full bg-[#25D366] text-black flex items-center justify-center font-bold shrink-0 shadow-sm group-hover:rotate-12 transition-transform">
          <MessageSquare className="w-3.5 h-3.5 fill-black" />
        </div>
        <span className="font-mono tracking-wider text-xs font-bold uppercase">WhatsApp Connect</span>
      </button>
    </div>
  );
}
