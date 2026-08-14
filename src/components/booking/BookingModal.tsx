"use client";

import React, { useState, useTransition, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, Calendar, Clock, CheckCircle2, ArrowRight, ArrowLeft, 
  Sparkles, ShieldCheck, User, Mail, Phone, Code2, Layout, 
  Bot, ShoppingCart, Send
} from "lucide-react";
import { useBookingModal } from "./BookingContext";
import { submitCallBooking } from "@/app/actions/booking";

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

export function BookingModal() {
  const { isBookingOpen, presetService, closeBooking } = useBookingModal();
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(SERVICES_LIST[0].title);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState(TIME_SLOTS[0]);
  const [isPending, startTransition] = useTransition();
  const [errorMsg, setErrorMsg] = useState("");
  const [bookingSuccessData, setBookingSuccessData] = useState<any>(null);

  useEffect(() => {
    if (presetService) {
      const matched = SERVICES_LIST.find(s => s.id === presetService || s.title.toLowerCase().includes(presetService.toLowerCase()));
      if (matched) setSelectedService(matched.title);
    }
  }, [presetService]);

  // Generate next 7 available dates
  const availableDates = React.useMemo(() => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 10; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      // skip weekends
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

  if (!isBookingOpen) return null;

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

  const handleModalClose = () => {
    setStep(1);
    setBookingSuccessData(null);
    closeBooking();
  };

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-[999999] overflow-y-auto flex items-center justify-center p-4 sm:p-6"
        onWheel={(e) => e.stopPropagation()}
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleModalClose}
          className="fixed inset-0 bg-[#070B14]/85 backdrop-blur-md z-0"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-b from-[#0F1C33] via-[#091222] to-[#050A14] border border-[#1E2E4A] border-t-white/15 rounded-3xl p-6 sm:p-9 max-w-2xl w-full max-h-[82vh] overflow-y-auto modal-scroll shadow-[0_30px_90px_rgba(0,0,0,0.9),0_0_50px_rgba(59,130,246,0.25)] relative z-10 my-auto text-[#F8FAFC]"
        >
          {/* Top Control Bar */}
          <div className="flex items-center justify-between border-b border-[#1E2E4A] pb-4 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#3B82F6] animate-pulse" />
              <span className="font-mono text-xs font-bold text-[#3B82F6] uppercase tracking-widest">
                BOOKING PORTAL // STEP 0{step} OF 04
              </span>
            </div>
            <button
              onClick={handleModalClose}
              className="p-2 rounded-full bg-[#070D18] border border-[#1E2E4A] text-[#94A3B8] hover:text-white hover:border-[#3B82F6] transition-all"
              aria-label="Close Booking Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* STEP 1: CHOOSE SERVICE */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#070D18] border border-[#3B82F6]/30 rounded-full text-[11px] font-mono font-bold text-[#3B82F6] uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5" /> FREE 30-MIN STRATEGY CALL
                </div>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#F8FAFC]">
                  Select Project Capability
                </h2>
                <p className="text-xs sm:text-sm text-[#94A3B8] mt-1 font-normal">
                  What service or platform requirement would you like to discuss on the call?
                </p>
              </div>

              <div className="space-y-3">
                {SERVICES_LIST.map((srv) => {
                  const Icon = srv.icon;
                  const isSelected = selectedService === srv.title;
                  return (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => setSelectedService(srv.title)}
                      className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all duration-300 ${
                        isSelected
                          ? "bg-gradient-to-r from-[#0F1C33] to-[#091222] border-[#3B82F6] shadow-[0_0_20px_rgba(59,130,246,0.25)]"
                          : "bg-[#070D18] border-[#1E2E4A] border-t-white/10 hover:border-[#3B82F6]/60"
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${isSelected ? "bg-[#3B82F6] text-white border-[#3B82F6]" : "bg-[#040810] text-[#3B82F6] border-[#1E2E4A]"}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-extrabold text-sm sm:text-base text-[#F8FAFC]">{srv.title}</div>
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
                className="w-full py-4 bg-[#3B82F6] text-white font-black text-xs sm:text-sm tracking-widest uppercase rounded-full hover:bg-white hover:text-[#0B1220] transition-all duration-300 shadow-[0_10px_30px_rgba(59,130,246,0.35)] flex items-center justify-center gap-2"
              >
                <span>Continue To Schedule</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* STEP 2: CHOOSE DATE & TIME */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#F8FAFC]">
                  Select Date & Time Slot
                </h2>
                <p className="text-xs sm:text-sm text-[#94A3B8] mt-1 font-normal">
                  All calls are conducted via Google Meet with a Senior Technical Architect.
                </p>
              </div>

              {/* Date Selector */}
              <div>
                <label className="block text-xs font-mono font-bold text-[#3B82F6] uppercase mb-2.5 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#3B82F6]" /> SELECT DATE (MON - FRI)
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {availableDates.map((item) => {
                    const isSelected = selectedDate === item.full;
                    return (
                      <button
                        key={item.full}
                        type="button"
                        onClick={() => setSelectedDate(item.full)}
                        className={`p-3 rounded-2xl border text-center transition-all ${
                          isSelected
                            ? "bg-[#3B82F6] text-white border-[#3B82F6] shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                            : "bg-[#070D18] border-[#1E2E4A] border-t-white/10 text-[#94A3B8] hover:border-[#3B82F6]"
                        }`}
                      >
                        <div className="text-[10px] font-mono uppercase font-bold opacity-80">{item.shortDay}</div>
                        <div className="text-lg font-black mt-0.5">{item.dateNum}</div>
                        <div className="text-[10px] font-mono uppercase font-bold opacity-80">{item.monthStr}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Slot Selector */}
              <div>
                <label className="block text-xs font-mono font-bold text-[#3B82F6] uppercase mb-2.5 flex items-center gap-2">
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
                        className={`p-3.5 rounded-2xl border font-mono text-xs font-bold transition-all text-center ${
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

          {/* STEP 3: CONTACT & PROJECT DETAILS */}
          {step === 3 && (
            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#F8FAFC]">
                  Your Booking Information
                </h2>
                <p className="text-xs sm:text-sm text-[#94A3B8] mt-1 font-normal">
                  Scheduling: <strong className="text-[#3B82F6]">{selectedService}</strong> on <strong className="text-white">{selectedDate} @ {selectedTime}</strong>
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
                  <input required name="name" type="text" placeholder="John Doe" className="w-full px-4 py-3 bg-[#070D18] border border-[#1E2E4A] border-t-white/10 text-[#F8FAFC] placeholder-[#94A3B8]/50 rounded-xl text-sm focus:outline-none focus:border-[#3B82F6]" />
                </div>
                <div>
                  <label className="block text-xs font-mono font-bold text-[#3B82F6] uppercase mb-1.5">Email Address *</label>
                  <input required name="email" type="email" placeholder="john@company.com" className="w-full px-4 py-3 bg-[#070D18] border border-[#1E2E4A] border-t-white/10 text-[#F8FAFC] placeholder-[#94A3B8]/50 rounded-xl text-sm focus:outline-none focus:border-[#3B82F6]" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-[#3B82F6] uppercase mb-1.5">Phone / WhatsApp (Optional)</label>
                  <input name="phone" type="tel" placeholder="+1 (415) 000-0000" className="w-full px-4 py-3 bg-[#070D18] border border-[#1E2E4A] border-t-white/10 text-[#F8FAFC] placeholder-[#94A3B8]/50 rounded-xl text-sm focus:outline-none focus:border-[#3B82F6]" />
                </div>
                <div>
                  <label className="block text-xs font-mono font-bold text-[#3B82F6] uppercase mb-1.5">Project Budget</label>
                  <select name="budget" className="w-full px-4 py-3 bg-[#070D18] border border-[#1E2E4A] border-t-white/10 text-[#F8FAFC] rounded-xl text-sm focus:outline-none focus:border-[#3B82F6]">
                    <option className="bg-[#070D18] text-[#F8FAFC]">$1,000 - $3,000</option>
                    <option className="bg-[#070D18] text-[#F8FAFC]">$3,000 - $10,000</option>
                    <option className="bg-[#070D18] text-[#F8FAFC]">$10,000 - $25,000</option>
                    <option className="bg-[#070D18] text-[#F8FAFC]">$25,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-[#3B82F6] uppercase mb-1.5">Project Overview / Goals</label>
                <textarea name="notes" rows={3} placeholder="Briefly describe what you'd like to build or achieve..." className="w-full px-4 py-3 bg-[#070D18] border border-[#1E2E4A] border-t-white/10 text-[#F8FAFC] placeholder-[#94A3B8]/50 rounded-xl text-sm focus:outline-none focus:border-[#3B82F6]" />
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
                  {isPending ? "Scheduling..." : "Confirm Booking"}
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: CONFIRMATION TICKET */}
          {step === 4 && bookingSuccessData && (
            <div className="text-center py-6 space-y-6">
              <div className="w-20 h-20 rounded-full bg-[#3B82F6]/20 border-2 border-[#3B82F6] text-[#3B82F6] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                <CheckCircle2 className="w-10 h-10 text-[#3B82F6]" />
              </div>

              <div>
                <span className="px-3 py-1 bg-[#070D18] border border-[#3B82F6]/40 text-[#3B82F6] font-mono text-xs font-bold uppercase tracking-widest rounded-full inline-block mb-3">
                  BOOKING CONFIRMED #NV-{Math.floor(100000 + Math.random() * 900000)}
                </span>
                <h2 className="text-3xl font-black text-[#F8FAFC]">Strategy Call Scheduled!</h2>
                <p className="text-sm text-[#94A3B8] mt-1 font-normal max-w-md mx-auto">
                  A calendar invite and Google Meet link have been dispatched to <strong className="text-white">{bookingSuccessData.email}</strong>.
                </p>
              </div>

              {/* Ticket Summary Card */}
              <div className="bg-[#070D18] border border-[#1E2E4A] border-t-white/10 rounded-2xl p-6 text-left space-y-3 font-mono text-xs shadow-inner max-w-md mx-auto">
                <div className="flex justify-between border-b border-[#1E2E4A] pb-2">
                  <span className="text-[#94A3B8]">CLIENT</span>
                  <span className="font-bold text-white">{bookingSuccessData.name}</span>
                </div>
                <div className="flex justify-between border-b border-[#1E2E4A] pb-2">
                  <span className="text-[#94A3B8]">SERVICE</span>
                  <span className="font-bold text-[#3B82F6]">{bookingSuccessData.service}</span>
                </div>
                <div className="flex justify-between border-b border-[#1E2E4A] pb-2">
                  <span className="text-[#94A3B8]">DATE</span>
                  <span className="font-bold text-white">{bookingSuccessData.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#94A3B8]">TIME SLOT</span>
                  <span className="font-bold text-[#3B82F6]">{bookingSuccessData.timeSlot}</span>
                </div>
              </div>

              <button
                onClick={handleModalClose}
                className="w-full py-4 bg-[#3B82F6] text-white font-black text-xs sm:text-sm tracking-widest uppercase rounded-full hover:bg-white hover:text-[#0B1220] transition-all duration-300 shadow-lg"
              >
                Done & Return To Site
              </button>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
