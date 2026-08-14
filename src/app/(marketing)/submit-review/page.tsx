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
    <div className="min-h-screen bg-[#0B1220] text-[#F8FAFC] py-20 px-6 font-sans flex items-center justify-center relative overflow-hidden">
      
      {/* Background radial grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-b from-[#0F1C33] via-[#091222] to-[#050A14] rounded-3xl p-8 md:p-10 max-w-lg w-full border border-[#1E2E4A] border-t-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_35px_rgba(59,130,246,0.2)] relative z-10"
      >
        <div className="border-b border-[#1E2E4A] pb-5 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#040810] border border-[#3B82F6]/40 rounded-full text-xs font-mono font-bold text-[#3B82F6] uppercase tracking-wider mb-3 shadow-inner">
            <ShieldCheck className="w-4 h-4" /> PRIVATE CLIENT REVIEW INVITATION
          </div>
          <h1 className="text-3xl font-black text-[#F8FAFC]">Submit Verified Client Review</h1>
          <p className="text-xs sm:text-sm text-[#94A3B8] mt-1 font-normal">Leave your feedback for NovaMac Solutions</p>
        </div>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <CheckCircle2 className="w-16 h-16 text-[#3B82F6] mx-auto animate-bounce" />
            <h2 className="font-black text-3xl text-[#F8FAFC]">Thank You!</h2>
            <p className="text-base text-[#94A3B8]">Your verified client review has been recorded successfully.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-mono font-bold text-[#3B82F6] uppercase mb-2">Overall Rating</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setSelectedRating(star)}
                    className={`p-3 rounded-2xl border transition-all ${star <= selectedRating ? "border-[#3B82F6] bg-[#040810] text-[#3B82F6] shadow-[0_0_15px_rgba(59,130,246,0.3)]" : "border-[#1E2E4A] text-slate-700"}`}
                  >
                    <Star className="w-6 h-6 fill-current" />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-[#3B82F6] uppercase mb-1">Full Name *</label>
              <input required name="name" type="text" placeholder="Alex Morgan" className="w-full px-4 py-3 bg-[#070D18] border border-[#1E2E4A] border-t-white/10 text-[#F8FAFC] placeholder-[#94A3B8]/50 rounded-xl text-sm focus:outline-none focus:border-[#3B82F6] transition-colors" />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-[#3B82F6] uppercase mb-1">Gmail Address *</label>
              <input required name="email" type="email" placeholder="alex@gmail.com" className="w-full px-4 py-3 bg-[#070D18] border border-[#1E2E4A] border-t-white/10 text-[#F8FAFC] placeholder-[#94A3B8]/50 rounded-xl text-sm focus:outline-none focus:border-[#3B82F6] transition-colors" />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-[#3B82F6] uppercase mb-1">Role / Business Title</label>
              <input name="role" type="text" placeholder="Founder, E-Commerce Brand" className="w-full px-4 py-3 bg-[#070D18] border border-[#1E2E4A] border-t-white/10 text-[#F8FAFC] placeholder-[#94A3B8]/50 rounded-xl text-sm focus:outline-none focus:border-[#3B82F6] transition-colors" />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-[#3B82F6] uppercase mb-1">Your Feedback *</label>
              <textarea required name="comment" rows={4} placeholder="Describe the quality of engineering, delivery speed, and overall experience..." className="w-full px-4 py-3 bg-[#070D18] border border-[#1E2E4A] border-t-white/10 text-[#F8FAFC] placeholder-[#94A3B8]/50 rounded-xl text-sm focus:outline-none focus:border-[#3B82F6] transition-colors" />
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="w-full py-4.5 bg-[#3B82F6] text-white font-black text-xs sm:text-sm tracking-widest uppercase rounded-full hover:bg-white hover:text-[#0B1220] transition-all shadow-[0_10px_30px_rgba(59,130,246,0.35)] flex items-center justify-center gap-2"
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
