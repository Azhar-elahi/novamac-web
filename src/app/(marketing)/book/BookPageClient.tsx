"use client";

import React, { useState, useTransition, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Calendar, Clock, CheckCircle2, ArrowRight, ArrowLeft, 
  Sparkles, ShieldCheck, Code2, Layout, Bot, ShoppingCart, Send
} from "lucide-react";
import { submitCallBooking } from "@/app/actions/booking";
import { DoodleUnderline } from "@/components/immersive/Doodles";
import { RichBackgroundArt } from "@/components/immersive/RichBackgroundArt";
import { useMotionValue } from "framer-motion";

const SERVICES_LIST = [
  { id: "custom-web-development", title: "Custom Web Development", icon: Code2, desc: "High-speed Next.js / React web platform" },
  { id: "graphic-design-branding", title: "Graphic Design & Brand Identity", icon: Layout, desc: "Logos, brand identity, vector assets & social graphics" },
  { id: "lead-generation-funnels", title: "B2B Lead Generation & Funnels", icon: Bot, desc: "Automated prospect outreach & landing page funnels" },
  { id: "ui-ux-design", title: "UI/UX Design Studio", icon: Layout, desc: "Figma design system & interactive prototypes" },
  { id: "web-application-development", title: "Web Applications & SaaS", icon: Code2, desc: "Full-stack SaaS app or internal portal" },
  { id: "ai-crm-automation", title: "AI & CRM Automation", icon: Bot, desc: "Bespoke CRM & autonomous AI agents" },
  { id: "ecommerce-development", title: "Headless E-Commerce", icon: ShoppingCart, desc: "Fast storefront with Stripe / Shopify integration" },
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
    <div className="bg-[#0B1220] text-[#F8FAFC] min-h-screen pt-12 sm:pt-20 pb-32 overflow-hidden relative font-sans">
      <RichBackgroundArt mouseX={mouseX} mouseY={mouseY} />

      <section className="px-4 sm:px-8 md:px-12 xl:px-20 max-w-[1200px] mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#0F1C33] to-[#091222] border border-[#1E2E4A] border-t-white/10 rounded-full text-xs sm:text-sm font-mono text-[#3B82F6] font-bold uppercase tracking-widest mb-4 shadow-md">
            <Sparkles className="w-4 h-4 text-[#3B82F6]" />
            30-MINUTE TECHNICAL STRATEGY CALL
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] sm:leading-[0.9] text-[#F8FAFC] mb-4">
            Schedule Your <span className="text-[#3B82F6] relative inline-block">Call.<DoodleUnderline /></span>
          </h1>
          <p className="text-sm sm:text-lg text-[#94A3B8] font-normal max-w-xl mx-auto leading-relaxed">
            Directly consult with a Senior Software Architect. We analyze your tech stack, architecture, and project goals with zero fluff.
          </p>
        </div>

        {/* BOOKING CONTAINER CARD */}
        <div className="bg-gradient-to-b from-[#0F1C33] via-[#091222] to-[#050A14] border border-[#1E2E4A] border-t-white/15 rounded-3xl p-6 sm:p-12 max-w-3xl mx-auto shadow-[0_30px_90px_rgba(0,0,0,0.9),0_0_50px_rgba(59,130,246,0.2)] relative z-10">
          
          {/* STEP INDICATOR BAR */}
          <div className="flex items-center justify-between border-b border-[#1E2E4A] pb-5 mb-8">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3B82F6] animate-pulse" />
              <span className="font-mono text-xs font-bold text-[#3B82F6] uppercase tracking-widest">
                BOOKING PORTAL // STEP 0{step} OF 04
              </span>
            </div>
            <span className="text-xs font-mono text-[#94A3B8] font-bold uppercase">
              CONFIRMED SLA
            </span>
          </div>

          {/* STEP 1: SERVICE */}
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-black text-[#F8FAFC]">Select Project Capability</h2>
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
                          ? "bg-gradient-to-r from-[#0F1C33] to-[#091222] border-[#3B82F6] shadow-[0_0_20px_rgba(59,130,246,0.25)]"
                          : "bg-[#070D18] border-[#1E2E4A] border-t-white/10 hover:border-[#3B82F6]/60"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${isSelected ? "bg-[#3B82F6] text-white border-[#3B82F6]" : "bg-[#040810] text-[#3B82F6] border-[#1E2E4A]"}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-extrabold text-base text-[#F8FAFC]">{srv.title}</div>
                          <div className="text-xs text-[#94A3B8] font-normal">{srv.desc}</div>
                        </div>
                      </div>
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${isSelected ? "border-[#3B82F6] bg-[#3B82F6]" : "border-[#1E2E4A]"}`}>
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => setStep(2)}
                className="w-full py-4.5 bg-[#3B82F6] text-white font-black text-xs sm:text-sm tracking-widest uppercase rounded-full hover:bg-white hover:text-[#0B1220] transition-all duration-300 shadow-[0_10px_30px_rgba(59,130,246,0.35)] flex items-center justify-center gap-2"
              >
                <span>Continue To Schedule</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* STEP 2: DATE & TIME */}
          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-black text-[#F8FAFC]">Select Date & Time Slot</h2>
              
              <div>
                <label className="block text-xs font-mono font-bold text-[#3B82F6] uppercase mb-3 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#3B82F6]" /> SELECT DATE (MON - FRI)
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
                            ? "bg-[#3B82F6] text-white border-[#3B82F6] shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                            : "bg-[#070D18] border-[#1E2E4A] border-t-white/10 text-[#94A3B8] hover:border-[#3B82F6]"
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
                <label className="block text-xs font-mono font-bold text-[#3B82F6] uppercase mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#3B82F6]" /> SELECT TIME SLOT (PST)
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
                            ? "bg-[#3B82F6] text-white border-[#3B82F6] shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                            : "bg-[#070D18] border-[#1E2E4A] border-t-white/10 text-[#F8FAFC] hover:border-[#3B82F6]"
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
                  className="w-1/3 py-4 bg-[#070D18] border border-[#1E2E4A] text-[#F8FAFC] font-bold text-xs tracking-widest uppercase rounded-full hover:border-[#3B82F6] transition-all flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="w-2/3 py-4 bg-[#3B82F6] text-white font-black text-xs sm:text-sm tracking-widest uppercase rounded-full hover:bg-white hover:text-[#0B1220] transition-all duration-300 shadow-[0_10px_30px_rgba(59,130,246,0.35)] flex items-center justify-center gap-2"
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
                <h2 className="text-2xl sm:text-3xl font-black text-[#F8FAFC]">Your Information</h2>
                <p className="text-xs sm:text-sm text-[#94A3B8] mt-1 font-normal">
                  Booking <strong className="text-[#3B82F6]">{selectedService}</strong> on <strong className="text-white">{selectedDate} @ {selectedTime}</strong>
                </p>
              </div>

              {errorMsg && (
                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-2xl text-xs text-red-400 font-bold">
                  {errorMsg}
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-[#3B82F6] uppercase mb-1.5">Full Name *</label>
                  <input required name="name" type="text" placeholder="John Doe" className="w-full px-4 py-3.5 bg-[#070D18] border border-[#1E2E4A] border-t-white/10 text-[#F8FAFC] placeholder-[#94A3B8]/50 rounded-xl text-sm focus:outline-none focus:border-[#3B82F6]" />
                </div>
                <div>
                  <label className="block text-xs font-mono font-bold text-[#3B82F6] uppercase mb-1.5">Email Address *</label>
                  <input required name="email" type="email" placeholder="john@company.com" className="w-full px-4 py-3.5 bg-[#070D18] border border-[#1E2E4A] border-t-white/10 text-[#F8FAFC] placeholder-[#94A3B8]/50 rounded-xl text-sm focus:outline-none focus:border-[#3B82F6]" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-[#3B82F6] uppercase mb-1.5">Phone / WhatsApp (Optional)</label>
                  <input name="phone" type="tel" placeholder="+1 (415) 000-0000" className="w-full px-4 py-3.5 bg-[#070D18] border border-[#1E2E4A] border-t-white/10 text-[#F8FAFC] placeholder-[#94A3B8]/50 rounded-xl text-sm focus:outline-none focus:border-[#3B82F6]" />
                </div>
                <div>
                  <label className="block text-xs font-mono font-bold text-[#3B82F6] uppercase mb-1.5">Project Budget</label>
                  <select name="budget" className="w-full px-4 py-3.5 bg-[#070D18] border border-[#1E2E4A] border-t-white/10 text-[#F8FAFC] rounded-xl text-sm focus:outline-none focus:border-[#3B82F6]">
                    <option className="bg-[#070D18] text-[#F8FAFC]">$1,000 - $3,000</option>
                    <option className="bg-[#070D18] text-[#F8FAFC]">$3,000 - $10,000</option>
                    <option className="bg-[#070D18] text-[#F8FAFC]">$10,000 - $25,000</option>
                    <option className="bg-[#070D18] text-[#F8FAFC]">$25,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-[#3B82F6] uppercase mb-1.5">Project Overview / Goals</label>
                <textarea name="notes" rows={4} placeholder="Describe your project requirements, tech stack, and goals..." className="w-full px-4 py-3.5 bg-[#070D18] border border-[#1E2E4A] border-t-white/10 text-[#F8FAFC] placeholder-[#94A3B8]/50 rounded-xl text-sm focus:outline-none focus:border-[#3B82F6]" />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-1/3 py-4 bg-[#070D18] border border-[#1E2E4A] text-[#F8FAFC] font-bold text-xs tracking-widest uppercase rounded-full hover:border-[#3B82F6] transition-all flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <button
                  type="submit"
                  disabled={isPending}
                  className="w-2/3 py-4 bg-[#3B82F6] text-white font-black text-xs sm:text-sm tracking-widest uppercase rounded-full hover:bg-white hover:text-[#0B1220] transition-all duration-300 shadow-[0_10px_30px_rgba(59,130,246,0.35)] flex items-center justify-center gap-2"
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
              <div className="w-24 h-24 rounded-full bg-[#3B82F6]/20 border-2 border-[#3B82F6] text-[#3B82F6] flex items-center justify-center mx-auto shadow-[0_0_35px_rgba(59,130,246,0.5)]">
                <CheckCircle2 className="w-12 h-12 text-[#3B82F6]" />
              </div>

              <div>
                <span className="px-3.5 py-1 bg-[#070D18] border border-[#3B82F6]/40 text-[#3B82F6] font-mono text-xs font-bold uppercase tracking-widest rounded-full inline-block mb-3">
                  BOOKING CONFIRMED #NV-{Math.floor(100000 + Math.random() * 900000)}
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#F8FAFC]">Strategy Call Confirmed!</h2>
                <p className="text-sm sm:text-base text-[#94A3B8] mt-2 font-normal max-w-md mx-auto">
                  A Google Meet link and confirmation details have been dispatched to <strong className="text-white">{bookingSuccessData.email}</strong>.
                </p>
              </div>

              <div className="bg-[#070D18] border border-[#1E2E4A] border-t-white/10 rounded-2xl p-6 text-left space-y-3 font-mono text-xs sm:text-sm shadow-inner max-w-md mx-auto">
                <div className="flex justify-between border-b border-[#1E2E4A] pb-2.5">
                  <span className="text-[#94A3B8]">CLIENT</span>
                  <span className="font-bold text-white">{bookingSuccessData.name}</span>
                </div>
                <div className="flex justify-between border-b border-[#1E2E4A] pb-2.5">
                  <span className="text-[#94A3B8]">CAPABILITY</span>
                  <span className="font-bold text-[#3B82F6]">{bookingSuccessData.service}</span>
                </div>
                <div className="flex justify-between border-b border-[#1E2E4A] pb-2.5">
                  <span className="text-[#94A3B8]">SCHEDULED DATE</span>
                  <span className="font-bold text-white">{bookingSuccessData.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#94A3B8]">TIME SLOT</span>
                  <span className="font-bold text-[#3B82F6]">{bookingSuccessData.timeSlot}</span>
                </div>
              </div>

            </div>
          )}

        </div>
      </section>
    </div>
  );
}
