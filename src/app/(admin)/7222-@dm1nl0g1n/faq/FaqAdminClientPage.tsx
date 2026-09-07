"use client";

import React, { useState } from "react";
import { HelpCircle, Plus, Trash2, Edit2, CheckCircle2, Sparkles } from "lucide-react";

export default function FaqAdminClientPage({ initialFaqs }: { initialFaqs: any[] }) {
  const [faqs, setFaqs] = useState(initialFaqs);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [category, setCategory] = useState("General");
  const [service, setService] = useState("website-development");

  const handleAddFaq = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question || !answer) return;

    const newFaq = {
      id: "faq-" + Date.now(),
      question,
      answer,
      category,
      service,
      published: true
    };

    setFaqs([newFaq, ...faqs]);
    setQuestion("");
    setAnswer("");
  };

  const handleDeleteFaq = (id: string) => {
    setFaqs((prev) => prev.filter((f) => f.id !== id));
  };

  return (
    <div className="space-y-8 font-sans text-white">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <span className="px-3.5 py-1 bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] font-mono text-xs font-bold uppercase tracking-wider rounded-full inline-block mb-2">
            FAQ CONTENT CMS & JSON-LD SCHEMAS
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">FAQ Manager</h1>
          <p className="text-gray-400 text-sm mt-1">Manage high-frequency business Q&As and auto-generate search engine schema markup.</p>
        </div>
      </div>

      {/* CREATE FAQ FORM */}
      <div className="bg-[#202020] border border-white/10 p-6 sm:p-8 rounded-2xl space-y-4">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <Plus className="w-5 h-5 text-[#FF5733]" />
          <span>Add New FAQ Item</span>
        </h3>

        <form onSubmit={handleAddFaq} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono font-bold text-gray-400 uppercase mb-1">Question *</label>
              <input
                required
                type="text"
                placeholder="e.g. What does custom CRM development include?"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="w-full p-3.5 bg-[#141414] border border-white/15 text-white rounded-xl text-sm focus:outline-none focus:border-[#FF5733]"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-gray-400 uppercase mb-1">Target Capability / Category</label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full p-3.5 bg-[#141414] border border-white/15 text-white rounded-xl text-sm font-mono focus:outline-none focus:border-[#FF5733]"
              >
                <option value="website-development">Website Development & Design</option>
                <option value="custom-software">Custom Software Engineering</option>
                <option value="ai-automation">AI Development & Automation</option>
                <option value="crm-development">CRM Development</option>
                <option value="erp-development">ERP Operations Development</option>
                <option value="saas-development">SaaS Product Engineering</option>
                <option value="digital-marketing">Digital Marketing & Growth</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono font-bold text-gray-400 uppercase mb-1">Concise Factual Answer *</label>
            <textarea
              required
              rows={3}
              placeholder="Provide a clear, direct answer optimized for AI Search (AEO/GEO) and Google answer snippets..."
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="w-full p-3.5 bg-[#141414] border border-white/15 text-white rounded-xl text-sm focus:outline-none focus:border-[#FF5733]"
            />
          </div>

          <button
            type="submit"
            className="px-6 py-3.5 bg-[#FF5733] text-white font-extrabold text-xs uppercase tracking-widest rounded-xl hover:bg-white hover:text-[#202020] transition-colors shadow-lg"
          >
            Publish FAQ Item
          </button>
        </form>
      </div>

      {/* FAQS LIST */}
      <div className="bg-[#202020] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
        <div className="border-b border-white/10 pb-4 flex items-center justify-between">
          <h3 className="text-xl font-bold text-white">Active FAQ Items ({faqs.length})</h3>
          <span className="text-xs font-mono text-[#FF5733]">FAQPage JSON-LD Auto-Generated</span>
        </div>

        <div className="space-y-3 font-mono">
          {faqs.map((f) => (
            <div key={f.id} className="p-4 bg-[#141414] border border-white/10 rounded-xl space-y-2">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="px-2.5 py-0.5 bg-[#FF5733]/20 text-[#FF5733] border border-[#FF5733]/40 text-[10px] font-bold rounded-full uppercase">
                    {f.service || f.category}
                  </span>
                  <h4 className="text-sm font-bold text-white mt-1">{f.question}</h4>
                </div>
                <button
                  onClick={() => handleDeleteFaq(f.id)}
                  className="p-2 text-gray-500 hover:text-red-400 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-gray-400 font-sans font-light leading-relaxed">{f.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
