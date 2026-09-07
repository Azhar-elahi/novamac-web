"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Sparkles, CheckCircle2, AlertCircle, Phone, Globe, Building, ArrowRight, X, Clock, ShieldCheck } from "lucide-react";
import { calculateLeadScore, generateAILeadBrief } from "@/lib/lead-scoring";

export default function LeadsClientPage({ initialLeads }: { initialLeads: any[] }) {
  const [leads, setLeads] = useState(initialLeads);
  const [selectedLead, setSelectedLead] = useState<any | null>(null);

  const updateLeadStatus = async (leadId: string, newStatus: string) => {
    setLeads((prev) =>
      prev.map((l) => (l.id === leadId ? { ...l, pipelineStatus: newStatus } : l))
    );
  };

  return (
    <div className="space-y-8 font-sans text-white">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <span className="px-3.5 py-1 bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] font-mono text-xs font-bold uppercase tracking-wider rounded-full inline-block mb-2">
            LEAD INTELLIGENCE & AI BRIEF GENERATOR
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">Lead Intelligence Portal</h1>
          <p className="text-gray-400 text-sm mt-1">Automated 0-100 Lead Scoring, qualification heuristics, and AI discovery briefs.</p>
        </div>
      </div>

      {/* LEADS LIST */}
      {leads.length === 0 ? (
        <div className="bg-[#202020] border border-white/10 rounded-2xl p-12 text-center text-gray-400 font-mono">
          No leads captured yet. Submissions from `/contact` and `/audit` will appear here automatically.
        </div>
      ) : (
        <div className="space-y-4">
          {leads.map((lead) => {
            const scoreRes = calculateLeadScore({
              name: lead.name,
              email: lead.email,
              phone: lead.phone,
              subject: lead.subject,
              message: lead.message
            });

            return (
              <div
                key={lead.id}
                className="bg-[#202020] border border-white/10 hover:border-[#FF5733] rounded-2xl p-6 transition-all shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-extrabold text-white">{lead.name}</h3>
                    <span className="text-xs font-mono text-gray-400">&lt;{lead.email}&gt;</span>
                    
                    <span className={`px-3 py-0.5 font-mono text-xs font-bold rounded-full uppercase ${
                      scoreRes.priority === "HIGH" ? "bg-red-500/20 text-red-400 border border-red-500/40" :
                      scoreRes.priority === "MEDIUM" ? "bg-[#FF5733]/20 text-[#FF5733] border border-[#FF5733]/40" : "bg-gray-700 text-gray-300"
                    }`}>
                      {scoreRes.score}/100 SCORE // {scoreRes.priority}
                    </span>

                    <span className="px-3 py-0.5 bg-white/10 text-gray-300 font-mono text-[11px] font-bold rounded-full uppercase">
                      STATUS: {lead.pipelineStatus || "NEW"}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                    <strong className="text-white font-mono">{lead.subject}</strong> — {lead.message}
                  </p>

                  <div className="flex flex-wrap gap-4 text-xs font-mono text-gray-400 pt-1">
                    {lead.phone && <span>📞 {lead.phone}</span>}
                    <span>📅 {new Date(lead.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 flex-shrink-0">
                  <button
                    onClick={() => setSelectedLead(lead)}
                    className="px-5 py-2.5 bg-[#FF5733] hover:bg-white hover:text-[#202020] text-white text-xs font-extrabold uppercase tracking-wider rounded-full transition-colors inline-flex items-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>AI Lead Brief</span>
                  </button>

                  <select
                    value={lead.pipelineStatus || "NEW"}
                    onChange={(e) => updateLeadStatus(lead.id, e.target.value)}
                    className="p-2.5 bg-[#141414] border border-white/15 text-white text-xs font-mono rounded-xl focus:outline-none focus:border-[#FF5733]"
                  >
                    <option value="NEW">NEW</option>
                    <option value="REVIEWING">REVIEWING</option>
                    <option value="QUALIFIED">QUALIFIED</option>
                    <option value="CALL_BOOKED">CALL BOOKED</option>
                    <option value="PROPOSAL">PROPOSAL</option>
                    <option value="WON">WON</option>
                    <option value="LOST">LOST</option>
                  </select>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* AI LEAD BRIEF MODAL */}
      <AnimatePresence>
        {selectedLead && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#202020] border border-white/15 rounded-3xl p-8 max-w-2xl w-full shadow-2xl relative text-white space-y-6"
            >
              <button
                onClick={() => setSelectedLead(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 text-gray-400"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="border-b border-white/10 pb-4">
                <span className="text-xs font-mono text-[#FF5733] font-bold uppercase tracking-widest block mb-1">
                  AI DISCOVERY BRIEF GENERATOR
                </span>
                <h2 className="text-2xl font-black text-white">{selectedLead.name}</h2>
                <p className="text-xs text-gray-400 font-mono mt-0.5">&lt;{selectedLead.email}&gt;</p>
              </div>

              <div className="bg-[#141414] border border-white/10 p-6 rounded-2xl font-sans text-xs sm:text-sm whitespace-pre-wrap leading-relaxed text-gray-300">
                {generateAILeadBrief(
                  {
                    name: selectedLead.name,
                    email: selectedLead.email,
                    phone: selectedLead.phone,
                    subject: selectedLead.subject,
                    message: selectedLead.message
                  },
                  calculateLeadScore({
                    name: selectedLead.name,
                    email: selectedLead.email,
                    phone: selectedLead.phone,
                    subject: selectedLead.subject,
                    message: selectedLead.message
                  })
                )}
              </div>

              <button
                onClick={() => setSelectedLead(null)}
                className="w-full py-3.5 bg-[#FF5733] text-white font-extrabold text-xs uppercase tracking-widest rounded-full hover:bg-white hover:text-[#202020] transition-colors"
              >
                Close Brief
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
