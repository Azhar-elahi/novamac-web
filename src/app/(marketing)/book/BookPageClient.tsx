"use client";

import React, { useState, useTransition, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Calendar, Clock, CheckCircle2, ArrowRight, ArrowLeft, 
  ShieldCheck, Code2, Layout, ShoppingCart, Send, Cpu, Zap, Terminal
} from "lucide-react";
import { submitCallBooking } from "@/app/actions/booking";
import { DoodleUnderline } from "@/components/immersive/Doodles";
import { RichBackgroundArt } from "@/components/immersive/RichBackgroundArt";
import { useMotionValue } from "framer-motion";
import { OptimizedVideoBackground } from "@/components/ui/OptimizedVideoBackground";

const SERVICES_LIST = [
  { id: "custom-web-development", title: "Custom Next.js & React Web Dev", icon: Code2, desc: "Sub-second, high-performance Next.js 15 & React 19 web platforms" },
  { id: "ui-ux-design", title: "UI/UX Design Systems & Figma Architecture", icon: Layout, desc: "Figma design systems, interactive prototypes & CRO design" },
  { id: "ecommerce-development", title: "Headless E-Commerce & Shopify Storefronts", icon: ShoppingCart, desc: "Fast storefront with Stripe / Shopify API integration" },
  { id: "ai-crm-automation", title: "AI Agents, Autonomous LLM & Bespoke CRM", icon: Cpu, desc: "Custom GPT-4o / Claude agents, RAG vector search & unified CRM" },
  { id: "lead-generation-funnels", title: "B2B Lead Generation & High-Converting Funnels", icon: Zap, desc: "Targeted prospect outreach & landing page funnels" },
  { id: "graphic-design-branding", title: "Graphic Design, Logos & Brand Identity", icon: Layout, desc: "Brand positioning, style guides, logo & vector visual assets" },
  { id: "seo-geo-aeo", title: "Search Everywhere Optimization (SEO / GEO / AEO)", icon: Terminal, desc: "Generative & Answer Engine Optimization for top search visibility" },
  { id: "web-application-development", title: "Full-Stack Web Applications & SaaS Portals", icon: Code2, desc: "Scalable full-stack web applications & internal team portals" },
  { id: "mobile-app-development", title: "Cross-Platform Mobile Apps (iOS & Android)", icon: Code2, desc: "Native-feel iOS and Android mobile apps" },
  { id: "performance-optimization", title: "Performance Optimization & Core Web Vitals Audit", icon: Zap, desc: "Sub-50ms edge caching, bundle size reduction & security audits" },
  { id: "cloud-devops", title: "Cloud DevOps, Edge Infrastructure & Database Setup", icon: ShieldCheck, desc: "Global cloud edge deployment & PostgreSQL database setup" },
  { id: "maintenance-sla", title: "Dedicated Maintenance & 24/7 Technical Retainer", icon: ShieldCheck, desc: "Uptime monitoring, urgent bug patches & ongoing dev team" },
];

const TIME_SLOTS = [
  "10:00 AM PST",
  "01:30 PM PST",
  "04:00 PM PST",
  "06:30 PM PST"
];

export default function BookPageClient() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(SERVICES_LIST[0].title);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState(TIME_SLOTS[0]);
  const [isPending, startTransition] = useTransition();
  const [errorMsg, setErrorMsg] = useState("");
  const [bookingSuccessData, setBookingSuccessData] = useState<any>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth) - 0.5);
      mouseY.set((e.clientY / window.innerHeight) - 0.5);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Generate next available dates
  const availableDates = React.useMemo(() => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 10; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      if (d.getDay() !== 0 && d.getDay() !== 6) {
        dates.push({
          full: d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" }),
          shortDay: d.toLocaleDateString("en-US", { weekday: "short" }),
          dateNum: d.getDate(),
          monthStr: d.toLocaleDateString("en-US", { month: "short" }),
        });
      }
      if (dates.length >= 6) break;
    }
    return dates;
  }, []);

  useEffect(() => {
    if (availableDates.length > 0 && !selectedDate) {
      setSelectedDate(availableDates[0].full);
    }
  }, [availableDates, selectedDate]);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg("");
    const formData = new FormData(e.currentTarget);

    const name = (formData.get("name") as string || "").trim();
    const email = (formData.get("email") as string || "").trim().toLowerCase();
    const phone = (formData.get("phone") as string || "").trim();

    const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const PHONE_REGEX = /^\+?[0-9\s\-\(\)]{8,20}$/;

    if (!name || name.length < 2) {
      setErrorMsg("Please enter your full name (minimum 2 characters).");
      return;
    }

    if (!email || !EMAIL_REGEX.test(email)) {
      setErrorMsg("Please enter a valid email address (e.g. john@company.com).");
      return;
    }

    if (phone && !PHONE_REGEX.test(phone)) {
      setErrorMsg("Please enter a valid phone number (minimum 8 digits).");
      return;
    }

    formData.append("service", selectedService);
    formData.append("date", selectedDate);
    formData.append("timeSlot", selectedTime);

    startTransition(async () => {
      const res = await submitCallBooking(formData);
      if (res.success) {
        setBookingSuccessData(res.details);
        setStep(4);
      } else {
        setErrorMsg(res.error || "Failed to schedule strategy call.");
      }
    });
  };

  return (
    <div className="bg-[#FAF2F2] text-[#202020] min-h-screen pt-10 sm:pt-16 pb-32 overflow-hidden relative font-sans">
      <RichBackgroundArt mouseX={mouseX} mouseY={mouseY} />

      {/* HERO SECTION WITH VIDEO BACKGROUND */}
      <section className="relative min-h-[380px] sm:min-h-[440px] flex items-center justify-center overflow-hidden mb-12 mx-4 sm:mx-8 md:mx-12 rounded-3xl border border-[#F0DCDC] shadow-2xl bg-black contain-content">
        <OptimizedVideoBackground src="/videos/girl-working.mp4" opacity={0.9} className="absolute inset-0 scale-105" />

        {/* Ambient Gradient Overlays (Matching Home Page) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/40 z-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-[#FF5733]/10 to-black/60 z-0" />

        <div className="relative z-10 max-w-3xl mx-auto text-center px-6 py-12 sm:py-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FF5733]/20 border border-[#FF5733]/50 text-[#FF5733] font-mono text-xs sm:text-sm font-bold uppercase tracking-widest rounded-full mb-4 backdrop-blur-md shadow-lg">
            <Calendar className="w-4 h-4 text-[#FF5733]" />
            30-MINUTE TECHNICAL STRATEGY CALL
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05] sm:leading-[0.95] mb-4 drop-shadow-md">
            Schedule Your <span className="text-[#FF5733] relative inline-block">Call.</span>
          </h1>
          <p className="text-sm sm:text-lg text-gray-200 font-normal max-w-xl mx-auto leading-relaxed bg-[#202020]/60 backdrop-blur-md p-5 rounded-2xl border border-white/10 shadow-xl">
            Directly consult with our engineering leads. We analyze your tech stack, system architecture, and growth goals with zero commitment.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-8 md:px-12 xl:px-20 max-w-[1200px] mx-auto relative z-10">

        {/* BOOKING CONTAINER CARD */}
        <div className="bg-white border border-[#F0DCDC] rounded-3xl p-6 sm:p-12 max-w-3xl mx-auto shadow-xl relative z-10 text-[#202020]">
          
          {/* STEP INDICATOR BAR */}
          <div className="flex items-center justify-between border-b border-[#F0DCDC] pb-5 mb-8">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5733] animate-pulse" />
              <span className="font-mono text-xs font-bold text-[#FF5733] uppercase tracking-widest">
                BOOKING PORTAL // STEP 0{step} OF 04
              </span>
            </div>
            <span className="text-xs font-mono text-gray-500 font-bold uppercase">
              24/7 RESPONSE GUARANTEED
            </span>
          </div>

          {/* STEP 1: SERVICE */}
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-black text-[#202020]">Select Project Capability</h2>
              <div className="space-y-3">
                {SERVICES_LIST.map((srv) => {
                  const Icon = srv.icon;
                  const isSelected = selectedService === srv.title;
                  return (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => setSelectedService(srv.title)}
                      className={`w-full p-4.5 rounded-2xl border text-left flex items-center justify-between transition-all duration-300 ${
                        isSelected
                          ? "bg-[#FF5733]/10 border-[#FF5733] shadow-sm"
                          : "bg-[#FAF2F2] border-[#F0DCDC] hover:border-[#FF5733]/60"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${isSelected ? "bg-[#FF5733] text-white border-[#FF5733]" : "bg-white text-[#FF5733] border-[#F0DCDC]"}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-extrabold text-base text-[#202020]">{srv.title}</div>
                          <div className="text-xs text-gray-600 font-normal">{srv.desc}</div>
                        </div>
                      </div>
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${isSelected ? "border-[#FF5733] bg-[#FF5733]" : "border-[#F0DCDC]"}`}>
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => setStep(2)}
                className="w-full py-4.5 bg-[#FF5733] text-white font-black text-xs sm:text-sm tracking-widest uppercase rounded-full hover:bg-[#202020] transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
              >
                <span>Continue To Schedule</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* STEP 2: DATE & TIME */}
          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-black text-[#202020]">Select Date & Time Slot</h2>
              
              <div>
                <label className="block text-xs font-mono font-bold text-[#FF5733] uppercase mb-3 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#FF5733]" /> SELECT DATE (MON - FRI)
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
                  {availableDates.map((item) => {
                    const isSelected = selectedDate === item.full;
                    return (
                      <button
                        key={item.full}
                        type="button"
                        onClick={() => setSelectedDate(item.full)}
                        className={`p-3.5 rounded-2xl border text-center transition-all ${
                          isSelected
                            ? "bg-[#FF5733] text-white border-[#FF5733] shadow-md"
                            : "bg-[#FAF2F2] border-[#F0DCDC] text-gray-700 hover:border-[#FF5733]"
                        }`}
                      >
                        <div className="text-[10px] font-mono uppercase font-bold opacity-80">{item.shortDay}</div>
                        <div className="text-xl font-black mt-0.5">{item.dateNum}</div>
                        <div className="text-[10px] font-mono uppercase font-bold opacity-80">{item.monthStr}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-[#FF5733] uppercase mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#FF5733]" /> SELECT TIME SLOT (PST)
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {TIME_SLOTS.map((slot) => {
                    const isSelected = selectedTime === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTime(slot)}
                        className={`p-4 rounded-2xl border font-mono text-xs sm:text-sm font-bold transition-all text-center ${
                          isSelected
                            ? "bg-[#FF5733] text-white border-[#FF5733] shadow-md"
                            : "bg-[#FAF2F2] border-[#F0DCDC] text-[#202020] hover:border-[#FF5733]"
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-1/3 py-4 bg-[#FAF2F2] border border-[#F0DCDC] text-[#202020] font-bold text-xs tracking-widest uppercase rounded-full hover:border-[#FF5733] transition-all flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="w-2/3 py-4 bg-[#FF5733] text-white font-black text-xs sm:text-sm tracking-widest uppercase rounded-full hover:bg-[#202020] transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
                >
                  <span>Enter Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: DETAILS */}
          {step === 3 && (
            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#202020]">Your Information</h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1 font-normal">
                  Booking <strong className="text-[#FF5733]">{selectedService}</strong> on <strong className="text-[#202020]">{selectedDate} @ {selectedTime}</strong>
                </p>
              </div>

              {errorMsg && (
                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-2xl text-xs text-red-600 font-bold">
                  {errorMsg}
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-[#FF5733] uppercase mb-1.5">Full Name *</label>
                  <input required name="name" type="text" placeholder="John Doe" className="w-full px-4 py-3.5 bg-[#FAF2F2] border border-[#F0DCDC] text-[#202020] placeholder-gray-400 rounded-xl text-sm focus:outline-none focus:border-[#FF5733]" />
                </div>
                <div>
                  <label className="block text-xs font-mono font-bold text-[#FF5733] uppercase mb-1.5">Email Address *</label>
                  <input required name="email" type="email" placeholder="john@company.com" className="w-full px-4 py-3.5 bg-[#FAF2F2] border border-[#F0DCDC] text-[#202020] placeholder-gray-400 rounded-xl text-sm focus:outline-none focus:border-[#FF5733]" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-[#FF5733] uppercase mb-1.5">Phone / WhatsApp (Optional)</label>
                  <input name="phone" type="tel" placeholder="Phone / WhatsApp Number" className="w-full px-4 py-3.5 bg-[#FAF2F2] border border-[#F0DCDC] text-[#202020] placeholder-gray-400 rounded-xl text-sm focus:outline-none focus:border-[#FF5733]" />
                </div>
                <div>
                  <label className="block text-xs font-mono font-bold text-[#FF5733] uppercase mb-1.5">Project Budget</label>
                  <select name="budget" className="w-full px-4 py-3.5 bg-[#FAF2F2] border border-[#F0DCDC] text-[#202020] rounded-xl text-sm focus:outline-none focus:border-[#FF5733]">
                    <option className="bg-white text-[#202020]">$1,000 - $3,000</option>
                    <option className="bg-white text-[#202020]">$3,000 - $10,000</option>
                    <option className="bg-white text-[#202020]">$10,000 - $25,000</option>
                    <option className="bg-white text-[#202020]">$25,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-[#FF5733] uppercase mb-1.5">Project Overview / Goals</label>
                <textarea name="notes" rows={4} placeholder="Describe your project requirements, tech stack, and goals..." className="w-full px-4 py-3.5 bg-[#FAF2F2] border border-[#F0DCDC] text-[#202020] placeholder-gray-400 rounded-xl text-sm focus:outline-none focus:border-[#FF5733]" />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-1/3 py-4 bg-[#FAF2F2] border border-[#F0DCDC] text-[#202020] font-bold text-xs tracking-widest uppercase rounded-full hover:border-[#FF5733] transition-all flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <button
                  type="submit"
                  disabled={isPending}
                  className="w-2/3 py-4 bg-[#FF5733] text-white font-black text-xs sm:text-sm tracking-widest uppercase rounded-full hover:bg-[#202020] transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
                >
                  {isPending ? "Scheduling..." : "Confirm Call Booking"}
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: SUCCESS CONFIRMATION */}
          {step === 4 && bookingSuccessData && (
            <div className="text-center py-8 space-y-6">
              <div className="w-24 h-24 rounded-full bg-[#FF5733]/10 border-2 border-[#FF5733] text-[#FF5733] flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-12 h-12 text-[#FF5733]" />
              </div>

              <div>
                <span className="px-3.5 py-1 bg-[#FAF2F2] border border-[#FF5733]/40 text-[#FF5733] font-mono text-xs font-bold uppercase tracking-widest rounded-full inline-block mb-3">
                  BOOKING CONFIRMED #NV-{Math.floor(100000 + Math.random() * 900000)}
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#202020]">Strategy Call Confirmed!</h2>
                <p className="text-sm sm:text-base text-gray-600 mt-2 font-normal max-w-md mx-auto">
                  A Google Meet link and confirmation details have been dispatched to <strong className="text-[#202020]">{bookingSuccessData.email}</strong>.
                </p>
              </div>

              <div className="bg-[#FAF2F2] border border-[#F0DCDC] rounded-2xl p-6 text-left space-y-3 font-mono text-xs sm:text-sm shadow-inner max-w-md mx-auto text-[#202020]">
                <div className="flex justify-between border-b border-[#F0DCDC] pb-2.5">
                  <span className="text-gray-500">CLIENT</span>
                  <span className="font-bold text-[#202020]">{bookingSuccessData.name}</span>
                </div>
                <div className="flex justify-between border-b border-[#F0DCDC] pb-2.5">
                  <span className="text-gray-500">CAPABILITY</span>
                  <span className="font-bold text-[#FF5733]">{bookingSuccessData.service}</span>
                </div>
                <div className="flex justify-between border-b border-[#F0DCDC] pb-2.5">
                  <span className="text-gray-500">SCHEDULED DATE</span>
                  <span className="font-bold text-[#202020]">{bookingSuccessData.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">TIME SLOT</span>
                  <span className="font-bold text-[#FF5733]">{bookingSuccessData.timeSlot}</span>
                </div>
              </div>

            </div>
          )}

        </div>
      </section>
    </div>
  );
}

