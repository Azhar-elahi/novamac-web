"use client";

import React, { useState, useTransition } from "react";
import { motion } from "framer-motion";
import { Star, CheckCircle2, ShieldCheck, Send, Sparkles } from "lucide-react";
import { submitGoogleReview } from "@/app/actions/review";

export default function PrivateSubmitReviewPage() {
  const [isPending, startTransition] = useTransition();
  const [submitted, setSubmitted] = useState(false);
  const [selectedRating, setSelectedRating] = useState(5);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("rating", selectedRating.toString());

    startTransition(async () => {
      const res = await submitGoogleReview(formData);
      if (res.success) {
        setSubmitted(true);
      }
    });
  };

  return (
    <div className="min-h-screen bg-[#F0EDE6] text-[#1C1917] py-20 px-6 font-sans flex items-center justify-center relative overflow-hidden">
      
      {/* Background radial grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#0F52BA_1px,transparent_1px)] [background-size:28px_28px] opacity-15 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/95 backdrop-blur-md rounded-3xl p-8 md:p-10 max-w-lg w-full border border-[#D6D1C8] shadow-2xl relative z-10"
      >
        <div className="border-b border-[#D6D1C8] pb-5 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0F52BA]/10 rounded-full text-[10px] font-mono font-bold text-[#0F52BA] uppercase tracking-wider mb-2">
            <ShieldCheck className="w-3.5 h-3.5" /> PRIVATE CLIENT REVIEW INVITATION
          </div>
          <h1 className="text-2xl font-black text-[#1C1917]">Submit Verified Client Review</h1>
          <p className="text-xs text-[#78716C] mt-1">Leave your feedback for NovaMac Solutions</p>
        </div>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto animate-bounce" />
            <h2 className="font-black text-2xl text-[#1C1917]">Thank You!</h2>
            <p className="text-sm text-[#78716C]">Your verified client review has been recorded successfully.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-mono font-bold text-[#1C1917] uppercase mb-2">Overall Rating</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setSelectedRating(star)}
                    className={`p-3 rounded-2xl border transition-all ${star <= selectedRating ? "border-[#0F52BA] bg-blue-50 text-[#0F52BA]" : "border-[#D6D1C8] text-slate-300"}`}
                  >
                    <Star className="w-6 h-6 fill-current" />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-[#1C1917] uppercase mb-1">Full Name *</label>
              <input required name="name" type="text" placeholder="Alex Morgan" className="w-full px-4 py-3 bg-[#FAF8F4] border border-[#D6D1C8] rounded-xl text-sm focus:outline-none focus:border-[#0F52BA]" />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-[#1C1917] uppercase mb-1">Gmail Address *</label>
              <input required name="email" type="email" placeholder="alex@gmail.com" className="w-full px-4 py-3 bg-[#FAF8F4] border border-[#D6D1C8] rounded-xl text-sm focus:outline-none focus:border-[#0F52BA]" />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-[#1C1917] uppercase mb-1">Role / Business Title</label>
              <input name="role" type="text" placeholder="Founder, E-Commerce Brand" className="w-full px-4 py-3 bg-[#FAF8F4] border border-[#D6D1C8] rounded-xl text-sm focus:outline-none focus:border-[#0F52BA]" />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-[#1C1917] uppercase mb-1">Your Feedback *</label>
              <textarea required name="comment" rows={4} placeholder="Describe the quality of engineering, delivery speed, and overall experience..." className="w-full px-4 py-3 bg-[#FAF8F4] border border-[#D6D1C8] rounded-xl text-sm focus:outline-none focus:border-[#0F52BA]" />
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="w-full py-4 bg-[#0F52BA] text-white font-bold text-xs tracking-widest uppercase rounded-full hover:bg-[#1C1917] transition-all shadow-lg flex items-center justify-center gap-2"
            >
              {isPending ? "Submitting..." : "Submit Review"}
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}
      </motion.div>

    </div>
  );
}
