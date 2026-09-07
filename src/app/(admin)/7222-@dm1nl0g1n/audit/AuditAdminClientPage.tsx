"use client";

import React, { useState } from "react";
import { ShieldAlert, Search, Sparkles, CheckCircle2, ArrowRight, Activity, Terminal, Code2, AlertTriangle } from "lucide-react";
import { runSiteAudit, AuditReportOutput } from "@/lib/site-auditor";

export default function AuditAdminClientPage() {
  const [domain, setDomain] = useState("novamacsolutions.com");
  const [audit, setAudit] = useState<AuditReportOutput>(runSiteAudit("novamacsolutions.com"));

  const handleRunAudit = (e: React.FormEvent) => {
    e.preventDefault();
    setAudit(runSiteAudit(domain));
  };

  return (
    <div className="space-y-8 font-sans text-white">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <span className="px-3.5 py-1 bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] font-mono text-xs font-bold uppercase tracking-wider rounded-full inline-block mb-2">
            SITE INTELLIGENCE & AUDIT ENGINE
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">Website Health & Recommendations</h1>
          <p className="text-gray-400 text-sm mt-1">Automated technical SEO, content depth, speed targets, accessibility, and AEO/GEO entity audits.</p>
        </div>
      </div>

      {/* AUDIT SEARCH CONTROL */}
      <div className="bg-[#202020] border border-white/10 p-6 rounded-2xl">
        <form onSubmit={handleRunAudit} className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-[#141414] border border-white/15 text-white rounded-xl text-sm font-mono focus:outline-none focus:border-[#FF5733]"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3.5 bg-[#FF5733] hover:bg-white hover:text-[#202020] text-white font-extrabold text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
          >
            <span>Run Real-Time Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>

      {/* OVERALL HEALTH SCORES */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center font-mono">
        <div className="p-6 bg-[#202020] border border-white/10 rounded-2xl space-y-1">
          <div className="text-3xl font-black text-[#FF5733]">{audit.overallScore}/100</div>
          <div className="text-xs font-bold uppercase text-gray-400">Overall Health</div>
        </div>
        <div className="p-6 bg-[#202020] border border-white/10 rounded-2xl space-y-1">
          <div className="text-3xl font-black text-white">{audit.seoScore}/100</div>
          <div className="text-xs font-bold uppercase text-gray-400">Technical SEO</div>
        </div>
        <div className="p-6 bg-[#202020] border border-white/10 rounded-2xl space-y-1">
          <div className="text-3xl font-black text-white">{audit.perfScore}/100</div>
          <div className="text-xs font-bold uppercase text-gray-400">Performance</div>
        </div>
        <div className="p-6 bg-[#202020] border border-white/10 rounded-2xl space-y-1">
          <div className="text-3xl font-black text-white">{audit.contentScore}/100</div>
          <div className="text-xs font-bold uppercase text-gray-400">Content Depth</div>
        </div>
        <div className="p-6 bg-[#202020] border border-white/10 rounded-2xl space-y-1">
          <div className="text-3xl font-black text-white">{audit.convScore}/100</div>
          <div className="text-xs font-bold uppercase text-gray-400">Conversion CRO</div>
        </div>
      </div>

      {/* RECOMMENDATIONS FEED */}
      <div className="bg-[#202020] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="border-b border-white/10 pb-4">
          <span className="text-[#FF5733] font-mono text-xs font-bold uppercase tracking-wider">ACTIONABLE RECOMMENDATIONS</span>
          <h3 className="text-2xl font-black text-white">Audit Insights for {audit.domain}</h3>
        </div>

        <div className="space-y-4">
          {audit.opportunities.map((opp, idx) => (
            <div key={idx} className="p-6 bg-[#141414] border border-white/10 rounded-2xl space-y-3">
              <div className="flex items-center justify-between gap-4">
                <span className={`px-3 py-1 text-[10px] font-mono font-bold rounded-full uppercase ${
                  opp.priority === "CRITICAL" ? "bg-red-500/20 text-red-400 border border-red-500/40" :
                  opp.priority === "HIGH" ? "bg-orange-500/20 text-orange-400 border border-orange-500/40" : "bg-blue-500/20 text-blue-400 border border-blue-500/40"
                }`}>
                  {opp.priority} // {opp.category}
                </span>
              </div>
              <h4 className="text-lg font-black text-white">{opp.title}</h4>
              <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">{opp.description}</p>
              <div className="pt-2 text-xs font-mono font-bold text-[#FF5733]">
                ACTION REQUIRED: {opp.action}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
