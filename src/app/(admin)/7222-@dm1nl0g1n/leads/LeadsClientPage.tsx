"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Sparkles, CheckCircle2, AlertCircle, Phone, Globe, Building, ArrowRight, X, Clock, ShieldCheck, Trash2 } from "lucide-react";
import { calculateLeadScore } from "@/lib/lead-scoring";
import { updateLeadPipelineStatus, deleteLead } from "@/app/(admin)/7222-@dm1nl0g1n/actions";

export default function LeadsClientPage({ initialLeads }: { initialLeads: any[] }) {
  const [leads, setLeads] = useState(initialLeads);
  const [selectedLead, setSelectedLead] = useState<any | null>(null);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const handleUpdateStatus = async (leadId: string, newStatus: string) => {
    setUpdatingId(leadId);
    setLeads((prev) =>
      prev.map((l) => (l.id === leadId ? { ...l, pipelineStatus: newStatus } : l))
    );
    try {
      await updateLeadPipelineStatus(leadId, newStatus);
    } catch (e) {
      console.error("Status update error:", e);
    } finally {
      setUpdatingId(null);
    }
  };

  const handleDelete = async (leadId: string) => {
    if (!confirm("Are you sure you want to delete this lead record?")) return;
    setLeads((prev) => prev.filter((l) => l.id !== leadId));
    try {
      await deleteLead(leadId);
    } catch (e) {
      console.error("Delete lead error:", e);
    }
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
                    disabled={updatingId === lead.id}
                    onChange={(e) => handleUpdateStatus(lead.id, e.target.value)}
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

                  <button
                    onClick={() => handleDelete(lead.id)}
                    className="p-2.5 bg-[#141414] border border-white/15 text-gray-400 hover:text-red-400 hover:border-red-500/40 rounded-xl transition-colors"
                    title="Delete Lead"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* AI LEAD BRIEF MODAL */}
      <AnimatePresence>
        {selectedLead && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-[#1A1A1A] border border-white/15 rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden relative text-white"
            >
              {/* MODAL HEADER */}
              <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#141414] shrink-0">
                <div>
                  <span className="text-[11px] font-mono text-[#FF5733] font-bold uppercase tracking-widest block mb-1">
                    AI DISCOVERY BRIEF GENERATOR
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-white">{selectedLead.name}</h2>
                  <p className="text-xs text-gray-400 font-mono mt-0.5">&lt;{selectedLead.email}&gt;</p>
                </div>
                <button
                  onClick={() => setSelectedLead(null)}
                  className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close Modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* MODAL BODY (SCROLLABLE) */}
              <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1 font-sans">
                {(() => {
                  const scoreRes = calculateLeadScore({
                    name: selectedLead.name,
                    email: selectedLead.email,
                    phone: selectedLead.phone,
                    subject: selectedLead.subject,
                    message: selectedLead.message
                  });
                  const serviceMatch = selectedLead.subject.replace(/^Inquiry:\s*/i, "").replace(/^Strategy Call:\s*/i, "");

                  return (
                    <>
                      {/* SCORE CARD */}
                      <div className="p-5 bg-[#242424] border border-white/10 rounded-2xl flex items-center justify-between gap-4">
                        <div>
                          <div className="text-xs font-mono font-bold text-gray-400 uppercase">LEAD QUALIFICATION SCORE</div>
                          <div className="text-3xl font-black text-[#FF5733] font-mono mt-1">{scoreRes.score}/100</div>
                        </div>
                        <span className={`px-4 py-1.5 font-mono text-xs font-bold rounded-full uppercase border ${
                          scoreRes.priority === "HIGH" ? "bg-red-500/20 text-red-400 border-red-500/40" :
                          scoreRes.priority === "MEDIUM" ? "bg-[#FF5733]/20 text-[#FF5733] border-[#FF5733]/40" : "bg-gray-700 text-gray-300 border-gray-600"
                        }`}>
                          {scoreRes.priority} PRIORITY
                        </span>
                      </div>

                      {/* QUALIFICATION REASONS */}
                      <div className="space-y-2">
                        <h4 className="text-xs font-mono font-bold uppercase text-gray-400">Key Qualification Indicators</h4>
                        <div className="space-y-1.5">
                          {scoreRes.reasons.map((r: string, idx: number) => (
                            <div key={idx} className="flex items-start gap-2.5 p-3 bg-[#141414] border border-white/5 rounded-xl text-xs text-gray-200">
                              <CheckCircle2 className="w-4 h-4 text-[#FF5733] shrink-0 mt-0.5" />
                              <span>{r}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* PROBABLE REQUIREMENT & OPPORTUNITY */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="p-4 bg-[#141414] border border-white/5 rounded-xl space-y-1">
                          <span className="text-[11px] font-mono font-bold text-gray-400 uppercase block">Probable Requirement</span>
                          <p className="text-xs text-gray-300 font-light leading-relaxed">
                            Prospect is inquiring about <strong className="text-white font-medium">{serviceMatch || "Custom Web & Software"}</strong>. They need engineering to address operational bottlenecks.
                          </p>
                        </div>
                        <div className="p-4 bg-[#141414] border border-white/5 rounded-xl space-y-1">
                          <span className="text-[11px] font-mono font-bold text-gray-400 uppercase block">Biggest Visible Opportunity</span>
                          <p className="text-xs text-gray-300 font-light leading-relaxed">
                            Connect digital presence, lead capture, and workflow automation into a unified Next.js & database system.
                          </p>
                        </div>
                      </div>

                      {/* RECOMMENDED PITCH QUESTIONS */}
                      <div className="p-5 bg-[#242424] border border-white/10 rounded-2xl space-y-3">
                        <h4 className="text-xs font-mono font-bold uppercase text-[#FF5733]">Recommended Discovery Questions</h4>
                        <ol className="space-y-2 text-xs text-gray-300 list-decimal list-inside font-light">
                          <li>What is the biggest operational delay or lead friction point in your current workflow?</li>
                          <li>Are you currently tracking incoming inquiries in a central database or manual spreadsheets?</li>
                          <li>What target timeline and technical SLA are you aiming to launch by?</li>
                        </ol>
                      </div>
                    </>
                  );
                })()}
              </div>

              {/* MODAL FOOTER */}
              <div className="p-4 border-t border-white/10 bg-[#141414] shrink-0">
                <button
                  onClick={() => setSelectedLead(null)}
                  className="w-full py-3.5 bg-[#FF5733] text-white font-extrabold text-xs uppercase tracking-widest rounded-xl hover:bg-white hover:text-[#202020] transition-colors"
                >
                  Close Brief
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
