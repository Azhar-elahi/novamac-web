"use client";

import React, { useState, useEffect } from "react";
import { X, Sparkles, Send, CheckCircle2, Phone, Mail, User, Building, ArrowRight, ShieldCheck } from "lucide-react";
import { submitContactForm } from "@/app/actions/contact";

export function LeadPopupModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [clientType, setClientType] = useState<"INDIVIDUAL" | "COMPANY">("INDIVIDUAL");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Website Development");
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check if user has already dismissed or submitted the lead popup in this session
    const isDismissed = sessionStorage.getItem("novamac_lead_popup_dismissed");
    if (isDismissed) return;

    // 1. Timed trigger: Show popup after 12 seconds of browsing
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 12000);

    // 2. Exit-intent trigger: Mouse leaves the top of the browser window (desktop)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 10) {
        setIsOpen(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("novamac_lead_popup_dismissed", "true");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setIsPending(true);

    try {
      const formData = new FormData();
      formData.append("clientType", clientType);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("service", service);
      formData.append("message", message || `Lead inquiry for ${service} (${clientType})`);

      const res = await submitContactForm(formData);

      if (res.success) {
        setIsSubmitted(true);
        sessionStorage.setItem("novamac_lead_popup_dismissed", "true");
        setTimeout(() => {
          setIsOpen(false);
        }, 5000);
      } else {
        setErrorMessage(res.error || "Failed to submit. Please check your information.");
      }
    } catch (err) {
      setErrorMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsPending(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in font-sans">
      {/* Dark Blurred Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={handleClose}
      />

      {/* Modal Container */}
      <div 
        className="relative w-full max-w-xl bg-[#141414] border border-white/20 text-white rounded-3xl p-6 sm:p-8 shadow-2xl z-10 overflow-hidden transform transition-all my-8"
        onWheel={(e) => e.stopPropagation()}
      >
        {/* Subtle Decorative Glow Effects */}
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#FF5733]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#3B82F6]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors z-20"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          /* SUCCESS STATE */
          <div className="py-8 text-center space-y-4 animate-fade-in">
            <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Inquiry Received!</h3>
            <p className="text-gray-300 text-sm max-w-md mx-auto leading-relaxed">
              Thank you <strong className="text-white">{name}</strong>! We have dispatched a confirmation email to <span className="text-[#FF5733] font-mono">{email}</span>.
            </p>
            <p className="text-xs text-gray-400 font-mono">Our senior engineering lead will review your project scope and contact you within 24 hours.</p>
            <button
              onClick={handleClose}
              className="mt-4 px-6 py-3 bg-[#FF5733] hover:bg-white hover:text-[#202020] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md"
            >
              Back to Browsing
            </button>
          </div>
        ) : (
          /* LEAD FORM STATE */
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#FF5733]/10 text-[#FF5733] border border-[#FF5733]/30 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                FREE ARCHITECTURE & PROJECT CONSULTATION
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Accelerate Your Next Digital Platform
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                Tell us about your project. Receive a custom technical roadmap, architecture proposal, and timeline estimate.
              </p>
            </div>

            {/* Error Banner */}
            {errorMessage && (
              <div className="p-3.5 bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono rounded-xl">
                {errorMessage}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Account / Client Type Toggle */}
              <div>
                <label className="block text-[10px] font-mono font-bold uppercase text-gray-400 mb-1.5">
                  I am inquiring as:
                </label>
                <div className="grid grid-cols-2 gap-2 p-1 bg-black/40 border border-white/10 rounded-xl font-mono text-xs">
                  <button
                    type="button"
                    onClick={() => setClientType("INDIVIDUAL")}
                    className={`py-2 px-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2 ${
                      clientType === "INDIVIDUAL" ? "bg-[#FF5733] text-white shadow-md" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <User className="w-3.5 h-3.5" /> Individual / Startup
                  </button>
                  <button
                    type="button"
                    onClick={() => setClientType("COMPANY")}
                    className={`py-2 px-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2 ${
                      clientType === "COMPANY" ? "bg-[#FF5733] text-white shadow-md" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <Building className="w-3.5 h-3.5" /> Company / Business
                  </button>
                </div>
              </div>

              {/* Input Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                <div>
                  <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      required
                      type="text"
                      placeholder="e.g. Alex Rivera"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-3 bg-[#1F1F1F] border border-white/15 rounded-xl text-white outline-none focus:border-[#FF5733] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      required
                      type="email"
                      placeholder="alex@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-3 bg-[#1F1F1F] border border-white/15 rounded-xl text-white outline-none focus:border-[#FF5733] transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                <div>
                  <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1">
                    Phone / WhatsApp Number
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      placeholder="+1 (555) 019-2834"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-3 bg-[#1F1F1F] border border-white/15 rounded-xl text-white outline-none focus:border-[#FF5733] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1">
                    Primary Service Needed
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3.5 py-3 bg-[#1F1F1F] border border-white/15 rounded-xl text-white outline-none focus:border-[#FF5733] transition-colors"
                  >
                    <option value="Website Development">Website Development & Design</option>
                    <option value="Custom Software">Custom Software Engineering</option>
                    <option value="CRM Development">Custom CRM Development</option>
                    <option value="ERP Development">ERP Operations Platform</option>
                    <option value="AI Automation">AI Agents & Automation</option>
                    <option value="SaaS Product">SaaS Product Development</option>
                    <option value="Digital Marketing">Digital Marketing & Growth</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase font-bold text-gray-400 mb-1">
                  Project Notes / Specific Goals (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us briefly about target features, budget range, or timeline..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 bg-[#1F1F1F] border border-white/15 rounded-xl text-white text-xs outline-none focus:border-[#FF5733] font-sans"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full py-4 bg-[#FF5733] hover:bg-white hover:text-[#202020] text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-xl flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isPending ? (
                    <span>Submitting Inquiry...</span>
                  ) : (
                    <>
                      <span>Get Free Project Proposal</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-gray-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% Confidential • Instant Email Confirmation</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
