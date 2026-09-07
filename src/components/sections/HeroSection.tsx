"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, X, Sparkles, CheckCircle2 } from "lucide-react";

function SeamlessVideoLoop({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
    video.setAttribute("autoplay", "");

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        const enablePlay = () => {
          if (video) {
            video.muted = true;
            video.play().catch(() => {});
          }
          window.removeEventListener("touchstart", enablePlay);
          window.removeEventListener("click", enablePlay);
          window.removeEventListener("scroll", enablePlay);
        };
        window.addEventListener("touchstart", enablePlay, { once: true, passive: true });
        window.addEventListener("click", enablePlay, { once: true, passive: true });
        window.addEventListener("scroll", enablePlay, { once: true, passive: true });
      });
    }
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover opacity-95 transform-gpu pointer-events-none"
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-[#FAF2F2] via-black/40 to-black/70 z-20 pointer-events-none" />
    </div>
  );
}

export function HeroSection() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Custom Web Development");
  const [budget, setBudget] = useState("$3,000 - $10,000");
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center px-6 sm:px-12 xl:px-20 pt-24 pb-20 overflow-hidden font-sans text-white">
      {/* VIDEO BACKGROUND LOOP */}
      <SeamlessVideoLoop src="/videos/showreel.mp4" />

      {/* HERO CONTENT CONTAINER */}
      <div className="max-w-7xl w-full mx-auto relative z-30 grid lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT COLUMN: EYE-CATCHING HEADING & CTA */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF5733]/20 border border-[#FF5733]/40 text-[#FF5733] font-mono text-xs font-bold uppercase tracking-widest backdrop-blur-md shadow-lg">
            <Sparkles className="w-3.5 h-3.5" />
            DIGITAL ENGINEERING STUDIO
          </div>

          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05] text-white drop-shadow-md">
            We Build Digital Systems That <span className="text-[#FF5733]">Drive Growth</span>.
          </h1>

          <p className="text-base sm:text-xl text-gray-200 font-normal leading-relaxed max-w-2xl drop-shadow">
            We build websites, custom software, and AI-powered systems that help businesses work smarter and grow. We connect your digital presence, business operations, and automation into a system built around how your business works.
          </p>

          <div className="pt-4 flex flex-wrap gap-4 items-center">
            <button
              onClick={() => setDrawerOpen(true)}
              className="px-8 py-4 bg-[#FF5733] hover:bg-white hover:text-[#202020] text-white font-extrabold text-sm uppercase tracking-wider rounded-full shadow-2xl transition-all duration-300 flex items-center gap-3 group"
            >
              <span>Request Instant Proposal</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <Link
              href="/work"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm uppercase tracking-wider rounded-full backdrop-blur-md transition-all duration-300"
            >
              Explore Our Work
            </Link>
          </div>

          {/* SLA BADGES */}
          <div className="pt-6 border-t border-white/15 flex flex-wrap gap-6 text-xs font-mono text-gray-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#FF5733]" />
              <span>Sub-300ms Page Speed</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#FF5733]" />
              <span>100% Source Code Ownership</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#FF5733]" />
              <span>24/7 SLA Response</span>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: QUICK PROPOSAL DRAWER CARD / TEASER */}
        <div className="lg:col-span-5 hidden lg:block">
          <div className="bg-[#202020]/90 backdrop-blur-xl border border-white/15 rounded-3xl p-8 shadow-2xl text-white space-y-6">
            <div className="border-b border-white/10 pb-4">
              <span className="text-xs font-mono text-[#FF5733] uppercase tracking-widest font-bold block mb-1">
                INSTANT SCOPE ESTIMATOR
              </span>
              <h3 className="text-2xl font-black">Build Your Project Scope</h3>
            </div>

            <div className="space-y-4 text-xs font-mono">
              <div>
                <label className="block text-gray-400 mb-2 uppercase font-bold">Select Service Needed</label>
                <div className="grid grid-cols-2 gap-2">
                  {["Next.js Web Dev", "Headless Shopify", "AI & CRM Portal", "SEO & Growth"].map((srv) => (
                    <button
                      key={srv}
                      type="button"
                      onClick={() => setSelectedService(srv)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        selectedService === srv
                          ? "bg-[#FF5733] border-[#FF5733] text-white font-bold"
                          : "bg-white/5 border-white/10 text-gray-300 hover:border-white/30"
                      }`}
                    >
                      {srv}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-gray-400 mb-2 uppercase font-bold">Target Budget</label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full p-3 bg-[#0D0D0D] border border-white/15 text-white rounded-xl focus:outline-none focus:border-[#FF5733]"
                >
                  <option>$1,000 - $3,000</option>
                  <option>$3,000 - $10,000</option>
                  <option>$10,000 - $25,000</option>
                  <option>$25,000+</option>
                </select>
              </div>
            </div>

            <button
              onClick={() => setDrawerOpen(true)}
              className="w-full py-4 bg-[#FF5733] text-white font-extrabold text-xs uppercase tracking-widest rounded-full hover:bg-white hover:text-[#202020] transition-all shadow-xl flex items-center justify-center gap-2"
            >
              <span>Get Custom Scope Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* PROPOSAL DRAWER MODAL OVERLAY */}
      <AnimatePresence>
        {drawerOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white text-[#202020] rounded-3xl p-8 sm:p-10 max-w-xl w-full border border-[#F0DCDC] shadow-2xl relative"
            >
              <button
                onClick={() => {
                  setDrawerOpen(false);
                  setFormSubmitted(false);
                }}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 text-gray-500"
              >
                <X className="w-5 h-5" />
              </button>

              {formSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-[#FF5733] mx-auto animate-bounce" />
                  <h3 className="text-3xl font-black text-[#202020]">Proposal Request Sent!</h3>
                  <p className="text-sm text-gray-600">
                    Our lead architect will review your project specs and send a detailed proposal within 2 hours.
                  </p>
                  <button
                    onClick={() => {
                      setDrawerOpen(false);
                      setFormSubmitted(false);
                    }}
                    className="px-8 py-3 bg-[#FF5733] text-white font-bold text-xs uppercase rounded-full"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFormSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <span className="px-3 py-1 bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] font-mono text-xs font-bold uppercase rounded-full inline-block">
                    PROPOSAL CALCULATOR
                  </span>
                  <h2 className="text-2xl font-black text-[#202020]">Request Detailed Scope & Quote</h2>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-mono font-bold text-gray-500 uppercase mb-1">Full Name *</label>
                      <input required type="text" placeholder="Alex Morgan" className="w-full p-3 bg-[#FAF2F2] border border-[#F0DCDC] text-[#202020] rounded-xl text-sm focus:outline-none focus:border-[#FF5733]" />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold text-gray-500 uppercase mb-1">Email Address *</label>
                      <input required type="email" placeholder="alex@company.com" className="w-full p-3 bg-[#FAF2F2] border border-[#F0DCDC] text-[#202020] rounded-xl text-sm focus:outline-none focus:border-[#FF5733]" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-mono font-bold text-gray-500 uppercase mb-1">Selected Capability</label>
                      <input type="text" value={selectedService} readOnly className="w-full p-3 bg-[#FAF2F2] border border-[#F0DCDC] text-[#202020] rounded-xl text-sm font-bold" />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold text-gray-500 uppercase mb-1">Budget Allocation</label>
                      <input type="text" value={budget} readOnly className="w-full p-3 bg-[#FAF2F2] border border-[#F0DCDC] text-[#202020] rounded-xl text-sm font-bold" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-gray-500 uppercase mb-1">Project Notes / Requirements</label>
                    <textarea rows={3} placeholder="Tell us about your target timeline, features, or design goals..." className="w-full p-3 bg-[#FAF2F2] border border-[#F0DCDC] text-[#202020] rounded-xl text-sm focus:outline-none focus:border-[#FF5733]" />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#FF5733] text-white font-extrabold text-xs uppercase tracking-widest rounded-full hover:bg-[#202020] transition-all shadow-xl"
                  >
                    Submit Proposal Request
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
