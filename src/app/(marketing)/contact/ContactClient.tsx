"use client";

import React, { useState, useTransition } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Clock, CheckCircle2, MessageSquare, AlertCircle } from "lucide-react";
import { submitContactForm } from "@/app/actions/contact";

const SERVICES_OPTIONS = [
  "Custom Next.js & React Web Engineering",
  "UI/UX Design Systems & Figma Architecture",
  "Headless E-Commerce & Shopify Storefronts",
  "AI Agents, Autonomous LLM & Bespoke CRM",
  "B2B Lead Generation & High-Converting Funnels",
  "Graphic Design, Logos & Brand Identity",
  "Search Everywhere Optimization (SEO / GEO / AEO)",
  "Full-Stack Web Applications & SaaS Portals",
  "Cross-Platform Mobile Apps (iOS & Android)",
  "Performance Optimization & Core Web Vitals Audit",
  "Cloud DevOps, Edge Infrastructure & Database Setup",
  "Dedicated Maintenance & 24/7 SLA Technical Retainer"
];

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PHONE_REGEX = /^\+?[0-9\s\-\(\)]{8,20}$/;

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const name = (formData.get("name") as string || "").trim();
    const email = (formData.get("email") as string || "").trim().toLowerCase();
    const phone = (formData.get("phone") as string || "").trim();
    const message = (formData.get("notes") as string || "").trim();

    // Client-side validation
    if (!name || name.length < 2) {
      setErrorMsg("Please enter your full name (at least 2 characters).");
      return;
    }

    if (!email || !EMAIL_REGEX.test(email)) {
      setErrorMsg("Please enter a valid email address (e.g. name@company.com).");
      return;
    }

    if (phone && !PHONE_REGEX.test(phone)) {
      setErrorMsg("Please enter a valid phone number (minimum 8 digits).");
      return;
    }

    if (!message || message.length < 5) {
      setErrorMsg("Please enter your project details or requirements (at least 5 characters).");
      return;
    }

    startTransition(async () => {
      const res = await submitContactForm(formData);
      if (res.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(res.error || "Failed to submit inquiry. Please try again.");
      }
    });
  };

  return (
    <div className="bg-[#FAF2F2] text-[#202020] min-h-screen pt-0 pb-20 overflow-hidden font-sans">
      
      {/* HERO SECTION WITH VIDEO BACKGROUND */}
      <section className="relative px-6 sm:px-12 lg:px-20 py-24 border-b border-white/10 overflow-hidden min-h-[50vh] flex items-center bg-[#0D0D0D] text-white">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-90">
            <source src="/videos/girl-working.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/90 via-[#0D0D0D]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-black/40" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl relative z-10"
        >
          <span className="px-4 py-1.5 bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] font-mono text-xs font-bold uppercase tracking-widest rounded-full inline-block mb-6">
            START YOUR PROJECT
          </span>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-8">
            Let&apos;s Build Something Extraordinary Together.
          </h1>

          <p className="text-gray-300 text-base sm:text-xl font-light leading-relaxed mb-10 max-w-2xl">
            Tell us about your project — we reply within 24 hours with a clear, honest assessment and technical proposal.
          </p>
        </motion.div>
      </section>

      {/* FORM & CONTACT INFO SECTION */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* LEFT: Proposal Request Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white border border-[#F0DCDC] text-[#202020] rounded-3xl p-8 sm:p-12 shadow-sm">
            
            {submitted ? (
              <div className="text-center py-16 space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#FF5733] text-white flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-extrabold text-[#202020] uppercase">Inquiry Successfully Submitted!</h3>
                <p className="text-gray-600 text-sm sm:text-base font-normal max-w-md mx-auto leading-relaxed">
                  Thank you! Our engineering team has received your inquiry and will respond to your email within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-[#FF5733] text-white font-extrabold text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-[#202020] transition-colors shadow-lg"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {errorMsg && (
                  <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-2xl flex items-center gap-3 text-xs sm:text-sm text-red-600 font-bold">
                    <AlertCircle className="w-5 h-5 shrink-0 text-red-500" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-mono uppercase text-gray-500 font-bold block mb-2">Full Name *</label>
                    <input 
                      required 
                      name="name" 
                      type="text" 
                      placeholder="Alex Morgan" 
                      className="w-full bg-[#FAF2F2] border border-[#F0DCDC] rounded-xl px-4 py-3.5 text-[#202020] focus:border-[#FF5733] outline-none transition-colors text-sm font-medium" 
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono uppercase text-gray-500 font-bold block mb-2">Work Email *</label>
                    <input 
                      required 
                      name="email" 
                      type="email" 
                      placeholder="alex@company.com" 
                      className="w-full bg-[#FAF2F2] border border-[#F0DCDC] rounded-xl px-4 py-3.5 text-[#202020] focus:border-[#FF5733] outline-none transition-colors text-sm font-medium" 
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-mono uppercase text-gray-500 font-bold block mb-2">Phone / WhatsApp (Optional)</label>
                    <input 
                      name="phone" 
                      type="tel" 
                      placeholder="+1 (510) 555-0199" 
                      className="w-full bg-[#FAF2F2] border border-[#F0DCDC] rounded-xl px-4 py-3.5 text-[#202020] focus:border-[#FF5733] outline-none transition-colors text-sm font-medium" 
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono uppercase text-gray-500 font-bold block mb-2">Service Capability Required</label>
                    <select 
                      name="service" 
                      className="w-full bg-[#FAF2F2] border border-[#F0DCDC] rounded-xl px-4 py-3.5 text-[#202020] focus:border-[#FF5733] outline-none transition-colors text-sm font-medium"
                    >
                      {SERVICES_OPTIONS.map((srv, i) => (
                        <option key={i} value={srv}>{srv}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono uppercase text-gray-500 font-bold block mb-2">Project Overview / Goals *</label>
                  <textarea 
                    required 
                    name="notes" 
                    rows={5} 
                    placeholder="Describe your project requirements, goals, budget, and estimated timeline..." 
                    className="w-full bg-[#FAF2F2] border border-[#F0DCDC] rounded-xl px-4 py-3.5 text-[#202020] focus:border-[#FF5733] outline-none transition-colors text-sm font-medium" 
                  />
                </div>

                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full bg-[#FF5733] text-white font-extrabold text-xs uppercase tracking-widest py-4.5 rounded-full hover:bg-[#202020] transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
                >
                  <span>{isPending ? "Validating & Submitting..." : "Submit Proposal Request"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

          </div>

          {/* RIGHT: Direct Contact Info (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            
            <div className="bg-white border border-[#F0DCDC] text-[#202020] rounded-3xl p-8 space-y-6 shadow-sm">
              <h3 className="text-xl font-extrabold text-[#202020] uppercase tracking-tight border-b border-[#F0DCDC] pb-4">
                Direct Contact Lines
              </h3>

              <div className="space-y-4 text-sm text-gray-700">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FF5733]/10 text-[#FF5733] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-gray-500 font-bold">Email Inquiry</div>
                    <a href="mailto:hello@novamacsolutions.com" className="font-bold text-[#202020] hover:text-[#FF5733] transition-colors">
                      hello@novamacsolutions.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-gray-500 font-bold">WhatsApp Direct Line 1</div>
                    <a href="https://wa.me/923256611920?text=Hi%20NovaMac%20Team%2C%20I%20would%20like%20to%20consult%20about%20a%20project." target="_blank" rel="noreferrer" className="font-bold text-[#FF5733] hover:text-[#202020] transition-colors flex items-center gap-1">
                      Start WhatsApp Chat <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-gray-500 font-bold">WhatsApp Direct Line 2</div>
                    <a href="https://wa.me/923309063306?text=Hi%20NovaMac%20Team%2C%20I%20would%20like%20to%20consult%20about%20a%20project." target="_blank" rel="noreferrer" className="font-bold text-[#FF5733] hover:text-[#202020] transition-colors flex items-center gap-1">
                      Start WhatsApp Chat <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FF5733]/10 text-[#FF5733] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-gray-500 font-bold">Response SLA</div>
                    <span className="font-bold text-[#202020]">Within 24 Hours (7 Days a Week)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Checklist Card */}
            <div className="bg-[#FF5733] text-white rounded-3xl p-8 shadow-md">
              <h4 className="text-xl font-extrabold uppercase mb-4">What to Expect:</h4>
              <ul className="space-y-3 text-sm font-medium">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>Free Initial Technical Strategy Call</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>Honest Architectural Scope & Fixed Price</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>100% Full Source Code Ownership</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
