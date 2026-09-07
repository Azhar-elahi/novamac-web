"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, AlertCircle, Search, Sparkles, Building2, ChevronRight } from "lucide-react";
import Link from "next/link";
import { runSiteAudit, AuditReportOutput } from "@/lib/site-auditor";
import { submitContactForm } from "@/app/actions/contact";
import { trackEvent } from "@/components/seo/AnalyticsTracker";

export default function AuditClientPage() {
  const [domainInput, setDomainInput] = useState("");
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditResult, setAuditResult] = useState<AuditReportOutput | null>(null);
  
  const [leadName, setLeadName] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  const handleAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!domainInput.trim()) return;

    setIsAuditing(true);
    trackEvent("client_audit_start", { domain: domainInput });

    setTimeout(() => {
      const res = runSiteAudit(domainInput);
      setAuditResult(res);
      setIsAuditing(false);
      trackEvent("client_audit_complete", { domain: domainInput, score: res.overallScore });
    }, 1500);
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError("");

    const formData = new FormData();
    formData.append("name", leadName);
    formData.append("email", leadEmail);
    formData.append("phone", leadPhone);
    formData.append("service", "Website Audit Lead");
    formData.append("message", `Free Website Audit Request for domain: ${auditResult?.domain}. Overall Score: ${auditResult?.overallScore}/100.`);

    const res = await submitContactForm(formData);
    setIsSubmitting(false);

    if (res.success) {
      setSubmitted(true);
      trackEvent("client_audit_lead_submitted", { domain: auditResult?.domain });
    } else {
      setFormError(res.error || "Unable to submit request. Please try again.");
    }
  };

  return (
    <div className="bg-[#FAF2F2] text-[#202020] min-h-screen py-20 px-6 sm:px-12 xl:px-20 font-sans">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* HEADER BADGE & TITLE */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] font-mono text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> FREE WEBSITE GROWTH AUDIT
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#202020] tracking-tight leading-tight">
            Discover What's Holding Back Your <span className="text-[#FF5733]">Website Growth</span>.
          </h1>
          <p className="text-gray-600 text-sm sm:text-base font-light">
            Enter your website domain to receive an instant analysis of your mobile conversion friction, technical SEO, speed targets, and revenue opportunities.
          </p>
        </div>

        {/* INPUT FORM CONTAINER */}
        <div className="bg-white border-2 border-[#FF5733]/30 rounded-3xl p-8 sm:p-12 shadow-xl">
          <form onSubmit={handleAuditSubmit} className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                placeholder="enter-your-domain.com (e.g. company.com)"
                value={domainInput}
                onChange={(e) => setDomainInput(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-[#FAF2F2] border border-[#F0DCDC] text-[#202020] rounded-2xl text-sm sm:text-base font-medium focus:outline-none focus:border-[#FF5733]"
              />
            </div>
            <button
              type="submit"
              disabled={isAuditing}
              className="px-8 py-4 bg-[#FF5733] hover:bg-[#202020] text-white font-extrabold text-xs uppercase tracking-widest rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2 flex-shrink-0"
            >
              {isAuditing ? (
                <span>Auditing Domain...</span>
              ) : (
                <>
                  <span>Run Free Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* AUDIT RESULTS SHOWCASE */}
        <AnimatePresence>
          {auditResult && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              {/* AUDIT SCORE CARDS */}
              <div className="bg-[#202020] text-white p-8 sm:p-12 rounded-3xl space-y-8 shadow-2xl border border-white/10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/10 pb-6">
                  <div>
                    <span className="text-[#FF5733] font-mono text-xs font-bold uppercase tracking-widest block mb-1">
                      WEBSITE GROWTH REPORT FOR
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-black text-white">{auditResult.domain}</h2>
                  </div>
                  <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-3 rounded-2xl">
                    <div className="text-3xl font-black text-[#FF5733] font-mono">{auditResult.overallScore}/100</div>
                    <div className="text-xs font-mono text-gray-300 uppercase font-bold">Overall Site Health</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center font-mono">
                  <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                    <div className="text-2xl font-black text-white">{auditResult.seoScore}/100</div>
                    <div className="text-[11px] text-gray-400 font-bold uppercase mt-1">Technical SEO</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                    <div className="text-2xl font-black text-white">{auditResult.perfScore}/100</div>
                    <div className="text-[11px] text-gray-400 font-bold uppercase mt-1">Speed Target</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                    <div className="text-2xl font-black text-white">{auditResult.contentScore}/100</div>
                    <div className="text-[11px] text-gray-400 font-bold uppercase mt-1">Content Depth</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                    <div className="text-2xl font-black text-[#FF5733]">{auditResult.convScore}/100</div>
                    <div className="text-[11px] text-gray-400 font-bold uppercase mt-1">Conversion UX</div>
                  </div>
                </div>
              </div>

              {/* TOP OPPORTUNITIES LIST */}
              <div className="bg-white border border-[#F0DCDC] p-8 sm:p-12 rounded-3xl space-y-6 shadow-sm">
                <h3 className="text-2xl font-extrabold text-[#202020]">Top 5 Revenue Opportunities Identified</h3>
                <div className="space-y-4">
                  {auditResult.opportunities.map((opp, idx) => (
                    <div key={idx} className="p-6 bg-[#FAF2F2] border border-[#F0DCDC] rounded-2xl space-y-2">
                      <div className="flex items-center justify-between gap-4">
                        <span className={`px-3 py-1 text-[10px] font-mono font-bold rounded-full uppercase ${
                          opp.priority === "CRITICAL" ? "bg-red-100 text-red-700 border border-red-200" :
                          opp.priority === "HIGH" ? "bg-orange-100 text-orange-700 border border-orange-200" : "bg-blue-100 text-blue-700 border border-blue-200"
                        }`}>
                          {opp.priority} PRIORITY // {opp.category}
                        </span>
                      </div>
                      <h4 className="text-lg font-black text-[#202020]">{opp.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-600 font-light">{opp.description}</p>
                      <div className="pt-2 text-xs font-mono font-bold text-[#FF5733] flex items-center gap-1">
                        <span>RECOMMENDED FIX: {opp.action}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* LEAD CAPTURE FORM — WANT NOVAMAC TO FIX THIS? */}
              <div className="bg-[#FF5733] text-white p-8 sm:p-12 rounded-3xl space-y-6 shadow-2xl">
                <div>
                  <span className="text-black font-mono text-xs font-bold uppercase tracking-widest block mb-1">
                    READY TO ACCELERATE YOUR GROWTH?
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                    Want NovaMac to Engineer These Fixes?
                  </h3>
                  <p className="text-white/90 text-sm font-light leading-relaxed mt-2">
                    Request a 1-on-1 discovery review with our senior engineering team to discuss implementing these solutions.
                  </p>
                </div>

                {submitted ? (
                  <div className="bg-white text-[#202020] p-8 rounded-2xl text-center space-y-3 shadow-lg">
                    <CheckCircle2 className="w-12 h-12 text-[#FF5733] mx-auto" />
                    <h4 className="text-2xl font-black text-[#202020]">Audit Request Submitted!</h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Our lead architect will review your domain specs and reach out within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleLeadSubmit} className="space-y-4">
                    {formError && (
                      <div className="p-3 bg-red-900/80 text-white rounded-xl text-xs font-mono">
                        {formError}
                      </div>
                    )}
                    <div className="grid sm:grid-cols-3 gap-3">
                      <input
                        required
                        type="text"
                        placeholder="Full Name *"
                        value={leadName}
                        onChange={(e) => setLeadName(e.target.value)}
                        className="p-3.5 bg-white text-[#202020] rounded-xl text-sm font-medium focus:outline-none placeholder-gray-400"
                      />
                      <input
                        required
                        type="email"
                        placeholder="Work Email Address *"
                        value={leadEmail}
                        onChange={(e) => setLeadEmail(e.target.value)}
                        className="p-3.5 bg-white text-[#202020] rounded-xl text-sm font-medium focus:outline-none placeholder-gray-400"
                      />
                      <input
                        type="text"
                        placeholder="Phone / WhatsApp (Optional)"
                        value={leadPhone}
                        onChange={(e) => setLeadPhone(e.target.value)}
                        className="p-3.5 bg-white text-[#202020] rounded-xl text-sm font-medium focus:outline-none placeholder-gray-400"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-[#202020] hover:bg-white hover:text-[#202020] text-white font-extrabold text-xs uppercase tracking-widest rounded-xl transition-all shadow-xl"
                    >
                      {isSubmitting ? "Submitting Request..." : "Schedule Free Audit Review"}
                    </button>
                  </form>
                )}
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
