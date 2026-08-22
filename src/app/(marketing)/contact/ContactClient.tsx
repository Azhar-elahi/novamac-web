"use client";

import React, { useEffect, useState, useTransition } from "react";
import { motion, useMotionValue } from "framer-motion";
import { submitContactForm } from "@/app/actions/contact";
import { ArrowRight, CheckCircle2, Mail, Phone, Clock, Send, Sparkles } from "lucide-react";
import { DoodleUnderline } from "@/components/immersive/Doodles";
import { RichBackgroundArt } from "@/components/immersive/RichBackgroundArt";

export default function ContactClient() {
  const [isPending, startTransition] = useTransition();
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth) - 0.5);
      mouseY.set((e.clientY / window.innerHeight) - 0.5);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(async () => {
      try {
        const res = await submitContactForm(formData);
        if (res.success) {
          setSubmitted(true);
        } else {
          setErrorMsg(res.error || "Something went wrong.");
        }
      } catch (err) {
        setSubmitted(true);
      }
    });
  };

  return (
    <div className="bg-[#0B1220] text-[#F8FAFC] min-h-screen pt-4 pb-32 overflow-hidden relative font-sans">
      <RichBackgroundArt mouseX={mouseX} mouseY={mouseY} />

      {/* ── HERO ── */}
      <section className="px-4 sm:px-8 md:px-12 xl:px-20 pt-6 sm:pt-10 pb-10 sm:pb-16 max-w-[1400px] mx-auto relative z-10 border-b border-[#1E2E4A]">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#0F1C33] to-[#091222] border border-[#1E2E4A] border-t-white/10 rounded-full text-xs sm:text-sm font-mono text-[#3B82F6] font-bold uppercase tracking-widest mb-4 sm:mb-6 shadow-md">
            <Sparkles className="w-4 h-4 text-[#3B82F6]" />
            INITIATE SEQUENCE
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black tracking-tight leading-[1.05] sm:leading-[0.9] text-[#F8FAFC] mb-4 sm:mb-6 relative">
            Let's Build<br />
            <span className="relative inline-block text-[#3B82F6]">
              Together.
              <DoodleUnderline />
            </span>
          </h1>

          <p className="text-sm sm:text-lg md:text-xl text-[#94A3B8] max-w-2xl leading-relaxed mb-6 sm:mb-8 font-normal bg-gradient-to-b from-[#0F1C33]/90 via-[#091222]/95 to-[#050A14] p-5 sm:p-7 rounded-2xl border border-[#1E2E4A] border-t-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
            Tell us about your project — we reply within 24 hours with a clear, honest architectural assessment.
          </p>
        </motion.div>
      </section>

      {/* ── FORM & DETAILS ── */}
      <section className="px-4 sm:px-8 md:px-12 xl:px-20 py-10 sm:py-20 max-w-[1400px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          
          {/* LEFT: FORM */}
          <div className="lg:col-span-7 bg-gradient-to-b from-[#0F1C33] via-[#091222] to-[#050A14] p-6 sm:p-9 md:p-11 rounded-3xl border border-[#1E2E4A] border-t-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.75),0_0_30px_rgba(59,130,246,0.12)]">
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle2 className="w-16 h-16 text-[#3B82F6] mx-auto mb-4" />
                <h3 className="text-3xl font-black text-[#F8FAFC] mb-2">Message Received</h3>
                <p className="text-base text-[#94A3B8]">Our team will review your requirements and get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#3B82F6] uppercase mb-2">Full Name *</label>
                    <input required name="name" type="text" placeholder="John Doe" className="w-full px-4 py-3.5 bg-[#070D18] border border-[#1E2E4A] border-t-white/10 text-[#F8FAFC] placeholder-[#94A3B8]/50 rounded-xl text-sm focus:outline-none focus:border-[#3B82F6] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#3B82F6] uppercase mb-2">Email Address *</label>
                    <input required name="email" type="email" placeholder="john@company.com" className="w-full px-4 py-3.5 bg-[#070D18] border border-[#1E2E4A] border-t-white/10 text-[#F8FAFC] placeholder-[#94A3B8]/50 rounded-xl text-sm focus:outline-none focus:border-[#3B82F6] transition-colors" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#3B82F6] uppercase mb-2">Service Needed</label>
                    <select name="service" className="w-full px-4 py-3.5 bg-[#070D18] border border-[#1E2E4A] border-t-white/10 text-[#F8FAFC] rounded-xl text-sm focus:outline-none focus:border-[#3B82F6] transition-colors">
                      <option className="bg-[#070D18] text-[#F8FAFC]">Custom Web Development</option>
                      <option className="bg-[#070D18] text-[#F8FAFC]">Graphic Design & Brand Identity</option>
                      <option className="bg-[#070D18] text-[#F8FAFC]">B2B Lead Generation & Sales Funnels</option>
                      <option className="bg-[#070D18] text-[#F8FAFC]">UI/UX Design Studio</option>
                      <option className="bg-[#070D18] text-[#F8FAFC]">Web Applications & SaaS</option>
                      <option className="bg-[#070D18] text-[#F8FAFC]">AI & CRM Automation</option>
                      <option className="bg-[#070D18] text-[#F8FAFC]">Headless E-Commerce</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#3B82F6] uppercase mb-2">Project Budget</label>
                    <select name="budget" className="w-full px-4 py-3.5 bg-[#070D18] border border-[#1E2E4A] border-t-white/10 text-[#F8FAFC] rounded-xl text-sm focus:outline-none focus:border-[#3B82F6] transition-colors">
                      <option className="bg-[#070D18] text-[#F8FAFC]">$1,000 - $3,000</option>
                      <option className="bg-[#070D18] text-[#F8FAFC]">$3,000 - $10,000</option>
                      <option className="bg-[#070D18] text-[#F8FAFC]">$10,000 - $25,000</option>
                      <option className="bg-[#070D18] text-[#F8FAFC]">$25,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-[#3B82F6] uppercase mb-2">Project Overview *</label>
                  <textarea required name="message" rows={5} placeholder="Describe your project goals, timeline, and requirements..." className="w-full px-4 py-3.5 bg-[#070D18] border border-[#1E2E4A] border-t-white/10 text-[#F8FAFC] placeholder-[#94A3B8]/50 rounded-xl text-sm focus:outline-none focus:border-[#3B82F6] transition-colors" />
                </div>

                <button 
                  type="submit" 
                  disabled={isPending}
                  className="w-full py-4.5 bg-[#3B82F6] text-white font-black text-xs sm:text-sm tracking-widest uppercase rounded-full hover:bg-white hover:text-[#0B1220] transition-all duration-300 shadow-[0_10px_30px_rgba(59,130,246,0.35)] flex items-center justify-center gap-2"
                >
                  {isPending ? "Sending..." : "Submit Inquiry"}
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* RIGHT: INFO CARDS */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-b from-[#0F1C33] via-[#091222] to-[#050A14] p-8 sm:p-9 rounded-3xl border border-[#1E2E4A] border-t-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.65)] space-y-6">
              <h3 className="font-extrabold text-2xl text-[#F8FAFC] border-b border-[#1E2E4A] pb-4">Direct Contacts</h3>
              
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#040810] border border-[#1E2E4A] border-t-white/10 text-[#3B82F6] flex items-center justify-center shrink-0 shadow-inner">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#94A3B8] font-bold uppercase">EMAIL INQUIRIES</div>
                  <a href="mailto:hello@novamacsolutions.com" className="font-bold text-base text-[#F8FAFC] hover:text-[#3B82F6] transition-colors">hello@novamacsolutions.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-2">
                <div className="w-11 h-11 rounded-full bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] flex items-center justify-center shrink-0 shadow-inner mt-1">
                  <Phone className="w-5 h-5 text-[#25D366]" />
                </div>
                <div className="space-y-3 flex-1">
                  <div className="text-[10px] font-mono text-[#25D366] font-bold uppercase">INSTANT CONSULTATION</div>
                  <div className="flex flex-col sm:flex-row gap-2.5">
                    <a 
                      href="https://wa.me/923256611920?text=Hi%20NovaMac%20Team%2C%20I%20would%20like%20to%20consult%20about%20a%20project." 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-black font-extrabold text-xs px-4 py-2.5 rounded-full transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)] min-h-[44px]"
                    >
                      <span>Consultant 1</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                    <a 
                      href="https://wa.me/92309063306?text=Hi%20NovaMac%20Team%2C%20I%20would%20like%20to%20consult%20about%20a%20project." 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center justify-center gap-2 bg-[#0F1C33] border border-[#25D366]/50 hover:bg-[#25D366]/20 text-[#25D366] font-extrabold text-xs px-4 py-2.5 rounded-full transition-all min-h-[44px]"
                    >
                      <span>Consultant 2</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#040810] border border-[#1E2E4A] border-t-white/10 text-[#3B82F6] flex items-center justify-center shrink-0 shadow-inner">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#94A3B8] font-bold uppercase">RESPONSE SLA</div>
                  <div className="font-bold text-base text-[#F8FAFC]">Within 24 Hours (Mon - Fri)</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
