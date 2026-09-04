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
      link: "https://wa.me/923309063306?text=Hi%20NovaMac%20Team%2C%20I%20would%20like%20to%20consult%20about%20a%20project.",
      tag: "ONLINE",
    },
  ];

  return (
    <div ref={menuRef} className="fixed bottom-24 right-0 z-[9999]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.94 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.94 }}
            transition={{ type: "spring", stiffness: 380, damping: 26, mass: 0.8 }}
            className="absolute bottom-16 right-4 w-[calc(100vw-2rem)] max-w-sm sm:w-96 bg-[#202020]/98 border border-white/15 border-t-white/25 rounded-3xl p-4 sm:p-6 shadow-[0_35px_90px_rgba(0,0,0,0.92),0_0_50px_rgba(37,211,102,0.22)] text-white backdrop-blur-2xl origin-bottom-right"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
                  <span className="font-mono text-[10px] font-bold text-[#25D366] uppercase tracking-widest">
                    DIRECT CONSULTANT DESK
                  </span>
                </div>
                <h3 className="font-black text-base text-white">Talk to Our Consultants</h3>
                <p className="text-xs text-gray-400 font-normal mt-0.5">
                  Select a consultant for a quick, friendly discussion.
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 text-gray-300 hover:text-white flex items-center justify-center border border-white/10 transition-colors shrink-0 cursor-pointer"
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
                  className="group/item flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#25D366] hover:bg-[#25D366]/10 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] flex items-center justify-center shrink-0 group-hover/item:scale-105 transition-transform">
                      <UserCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="font-mono text-[10px] font-bold text-white uppercase tracking-wider">{c.name}</span>
                        <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-[#25D366]/20 text-[#25D366] uppercase">
                          {c.tag}
                        </span>
                      </div>
                      <div className="text-xs text-gray-400 font-normal">{c.role}</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-[#25D366] group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all shrink-0 ml-2" />
                </a>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-gray-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FF5733]" /> Direct WhatsApp Connect
              </span>
              <span className="text-[#25D366] font-bold">Fast Response</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Docked Right-Edge Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-3 bg-[#202020] hover:bg-[#FF5733] text-white h-12 rounded-l-full pl-3.5 pr-6 shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_25px_rgba(37,211,102,0.25)] border-l border-y border-white/20 transition-transform duration-300 ease-out translate-x-[calc(100%-48px)] hover:translate-x-0 cursor-pointer overflow-hidden whitespace-nowrap"
        title="Talk to Our Consultant on WhatsApp"
        aria-label="Talk to Our Consultant on WhatsApp"
      >
        <div className="w-6 h-6 rounded-full bg-[#25D366] text-black flex items-center justify-center font-bold shrink-0 shadow-sm group-hover:rotate-12 transition-transform">
          <MessageSquare className="w-3.5 h-3.5 fill-black text-black" />
        </div>
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
          Talk to Our Consultant
        </span>
        <ArrowUpRight className="w-4 h-4 text-[#25D366] group-hover:text-white shrink-0" />
      </button>
    </div>
  );
}
