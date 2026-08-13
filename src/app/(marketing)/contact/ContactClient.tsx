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
    <div className="bg-[#F0EDE6] text-[#1C1917] min-h-screen pt-4 pb-32 overflow-hidden relative font-sans">
      <RichBackgroundArt mouseX={mouseX} mouseY={mouseY} />

      {/* ── HERO ── */}
      <section className="px-6 md:px-12 xl:px-20 pt-10 pb-16 max-w-[1400px] mx-auto relative z-10 border-b border-[#D6D1C8]">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#0F52BA]/30 rounded-full text-xs font-mono text-[#0F52BA] font-bold uppercase tracking-widest mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#0F52BA]" />
            INITIATE SEQUENCE
          </div>

          <h1 className="text-[clamp(3.5rem,7.5vw,6.5rem)] font-black tracking-tighter leading-[0.9] text-[#1C1917] mb-6 relative">
            Let's Build<br />
            <span className="relative inline-block text-[#0F52BA]">
              Together.
              <DoodleUnderline />
            </span>
          </h1>

          <p className="text-lg md:text-xl text-[#57534E] max-w-2xl leading-relaxed mb-8 font-normal bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-white/90 shadow-sm">
            Tell us about your project — we reply within 24 hours with a clear, honest architectural assessment.
          </p>
        </motion.div>
      </section>

      {/* ── FORM & DETAILS ── */}
      <section className="px-6 md:px-12 xl:px-20 py-20 max-w-[1400px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: FORM */}
          <div className="lg:col-span-7 bg-white/95 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-[#D6D1C8] shadow-lg">
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-black text-[#1C1917] mb-2">Message Received</h3>
                <p className="text-sm text-[#78716C]">Our team will review your requirements and get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#1C1917] uppercase mb-2">Full Name *</label>
                    <input required name="name" type="text" placeholder="John Doe" className="w-full px-4 py-3.5 bg-[#FAF8F4] border border-[#D6D1C8] rounded-xl text-sm focus:outline-none focus:border-[#0F52BA]" />
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#1C1917] uppercase mb-2">Email Address *</label>
                    <input required name="email" type="email" placeholder="john@company.com" className="w-full px-4 py-3.5 bg-[#FAF8F4] border border-[#D6D1C8] rounded-xl text-sm focus:outline-none focus:border-[#0F52BA]" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#1C1917] uppercase mb-2">Service Needed</label>
                    <select name="service" className="w-full px-4 py-3.5 bg-[#FAF8F4] border border-[#D6D1C8] rounded-xl text-sm focus:outline-none focus:border-[#0F52BA]">
                      <option>Custom Web Development</option>
                      <option>UI/UX Design Studio</option>
                      <option>Web Applications & SaaS</option>
                      <option>AI & CRM Automation</option>
                      <option>Headless E-Commerce</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#1C1917] uppercase mb-2">Project Budget</label>
                    <select name="budget" className="w-full px-4 py-3.5 bg-[#FAF8F4] border border-[#D6D1C8] rounded-xl text-sm focus:outline-none focus:border-[#0F52BA]">
                      <option>$1,000 - $3,000</option>
                      <option>$3,000 - $10,000</option>
                      <option>$10,000 - $25,000</option>
                      <option>$25,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-[#1C1917] uppercase mb-2">Project Overview *</label>
                  <textarea required name="message" rows={5} placeholder="Describe your project goals, timeline, and requirements..." className="w-full px-4 py-3.5 bg-[#FAF8F4] border border-[#D6D1C8] rounded-xl text-sm focus:outline-none focus:border-[#0F52BA]" />
                </div>

                <button 
                  type="submit" 
                  disabled={isPending}
                  className="w-full py-4 bg-[#0F52BA] text-white font-bold text-xs tracking-widest uppercase rounded-full hover:bg-[#1C1917] transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                >
                  {isPending ? "Sending..." : "Submit Inquiry"}
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* RIGHT: INFO CARDS */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white/95 backdrop-blur-md p-8 rounded-3xl border border-[#D6D1C8] shadow-sm space-y-6">
              <h3 className="font-bold text-xl text-[#1C1917] border-b border-[#D6D1C8] pb-4">Direct Contacts</h3>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#0F52BA]/10 text-[#0F52BA] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#78716C] uppercase">EMAIL INQUIRIES</div>
                  <a href="mailto:hello@novamacsolutions.com" className="font-bold text-sm text-[#1C1917] hover:text-[#0F52BA]">hello@novamacsolutions.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#0F52BA]/10 text-[#0F52BA] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#78716C] uppercase">DIRECT PHONE</div>
                  <a href="tel:+14154804281" className="font-bold text-sm text-[#1C1917] hover:text-[#0F52BA]">415 480 4281</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#0F52BA]/10 text-[#0F52BA] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#78716C] uppercase">RESPONSE SLA</div>
                  <div className="font-bold text-sm text-[#1C1917]">Within 24 Hours (Mon - Fri)</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
