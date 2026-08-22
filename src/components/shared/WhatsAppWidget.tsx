"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, ArrowUpRight, X, ShieldCheck, UserCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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

  const consultants = [
    {
      name: "Consultant Line 1",
      role: "Senior Solutions & Tech Lead",
      link: "https://wa.me/923256611920?text=Hi%20NovaMac%20Team%2C%20I%20would%20like%20to%20consult%20about%20a%20project.",
      tag: "ONLINE",
    },
    {
      name: "Consultant Line 2",
      role: "Project Strategy & Execution",
      link: "https://wa.me/92309063306?text=Hi%20NovaMac%20Team%2C%20I%20would%20like%20to%20consult%20about%20a%20project.",
      tag: "ONLINE",
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
            className="mb-3 w-80 sm:w-96 bg-gradient-to-b from-[#0F1C33] via-[#091222] to-[#050A14] border border-[#1E2E4A] border-t-white/15 rounded-3xl p-5 sm:p-6 shadow-[0_30px_90px_rgba(0,0,0,0.9),0_0_40px_rgba(37,211,102,0.2)] relative text-[#F8FAFC] backdrop-blur-xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#1E2E4A] pb-4 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
                  <span className="font-mono text-[10px] font-bold text-[#25D366] uppercase tracking-widest">
                    DIRECT CONSULTANT DESK
                  </span>
                </div>
                <h3 className="font-black text-base text-[#F8FAFC]">Talk to Our Consultants</h3>
                <p className="text-xs text-[#94A3B8] font-normal mt-0.5">
                  Select a consultant to start direct WhatsApp discussion.
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-[#070D18] text-[#94A3B8] hover:text-white flex items-center justify-center border border-[#1E2E4A] transition-colors shrink-0 cursor-pointer"
                title="Close"
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Consultants List */}
            <div className="space-y-3">
              {consultants.map((c, i) => (
                <a
                  key={i}
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center justify-between p-4 rounded-2xl bg-[#070D18] border border-[#1E2E4A] hover:border-[#25D366] hover:bg-[#25D366]/10 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <UserCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="font-mono text-[10px] font-bold text-[#F8FAFC] uppercase tracking-wider">{c.name}</span>
                        <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-[#25D366]/20 text-[#25D366] uppercase">
                          {c.tag}
                        </span>
                      </div>
                      <div className="text-xs text-[#94A3B8] font-normal">{c.role}</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-[#25D366] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
                </a>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-4 pt-3 border-t border-[#1E2E4A] flex items-center justify-between font-mono text-[10px] text-[#94A3B8]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#3B82F6]" /> Direct WhatsApp Connect
              </span>
              <span className="text-[#25D366] font-bold">24/7 SLA</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
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
      </button>
    </div>
  );
}
