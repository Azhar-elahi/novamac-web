"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, Phone, X, ExternalLink, Sparkles } from "lucide-react";
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

  const numbers = [
    {
      label: "US Direct Line",
      phone: "+1 (510) 585-4258",
      raw: "15105854258",
      badge: "USA",
      desc: "Client Strategy & Support",
    },
    {
      label: "Global Instant WhatsApp",
      phone: "+92 317 4723510",
      raw: "923174723510",
      badge: "24/7",
      desc: "Fast Technical & Sales Chat",
    },
  ];

  return (
    <div ref={menuRef} className="fixed bottom-6 left-6 z-[9999]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mb-3 w-80 sm:w-88 bg-gradient-to-b from-[#0F1C33] via-[#091222] to-[#050A14] border border-[#25D366]/40 rounded-3xl p-5 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(37,211,102,0.2)] relative text-[#F8FAFC] backdrop-blur-xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#1E2E4A] pb-3 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] flex items-center justify-center font-bold">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-[#F8FAFC] flex items-center gap-1.5">
                    Start WhatsApp Chat
                    <Sparkles className="w-3.5 h-3.5 text-[#25D366]" />
                  </h4>
                  <p className="text-[10px] font-mono text-[#94A3B8]">Select number to open chat</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 rounded-full bg-[#070D18] text-[#94A3B8] hover:text-white flex items-center justify-center border border-[#1E2E4A] transition-colors"
                title="Close menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Options List */}
            <div className="space-y-3">
              {numbers.map((item) => (
                <a
                  key={item.raw}
                  href={`https://wa.me/${item.raw}?text=Hi%20NovaMac%20Team%2C%20I%20would%20like%20to%20discuss%20a%20project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center justify-between p-3.5 rounded-2xl bg-[#070D18] border border-[#1E2E4A] hover:border-[#25D366] hover:bg-[#25D366]/10 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider">{item.label}</span>
                        <span className="text-[9px] font-mono font-extrabold px-1.5 py-0.5 rounded bg-[#25D366] text-black uppercase">
                          {item.badge}
                        </span>
                      </div>
                      <div className="font-extrabold text-sm text-[#F8FAFC] group-hover:text-[#25D366] transition-colors">
                        {item.phone}
                      </div>
                      <div className="text-[10px] text-[#94A3B8]/80 font-normal">{item.desc}</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#94A3B8] group-hover:text-[#25D366] group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                </a>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-[#1E2E4A] text-center font-mono text-[10px] text-[#94A3B8]">
              ⚡ Typical response time: &lt; 15 mins
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#25D366] hover:bg-[#20ba5a] text-black font-black px-4 py-3 rounded-full shadow-[0_10px_35px_rgba(37,211,102,0.45)] flex items-center gap-2.5 hover:scale-105 transition-all duration-300 border border-white/30 text-xs sm:text-sm cursor-pointer group"
        title="Chat on WhatsApp"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-black animate-pulse" />
        <MessageSquare className="w-4 h-4 text-black group-hover:rotate-12 transition-transform" />
        <span>WhatsApp</span>
      </button>
    </div>
  );
}
