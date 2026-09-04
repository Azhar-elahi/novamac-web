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
    <div className="min-h-screen bg-[#FAF2F2] text-[#202020] py-20 px-6 font-sans flex items-center justify-center relative overflow-hidden">
      
      {/* Background radial grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#FF5733_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl p-8 md:p-10 max-w-lg w-full border border-[#F0DCDC] shadow-xl relative z-10 text-[#202020]"
      >
        <div className="border-b border-[#F0DCDC] pb-5 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#FF5733]/10 border border-[#FF5733]/30 rounded-full text-xs font-mono font-bold text-[#FF5733] uppercase tracking-wider mb-3 shadow-sm">
            <ShieldCheck className="w-4 h-4" /> PRIVATE CLIENT REVIEW INVITATION
          </div>
          <h1 className="text-3xl font-black text-[#202020]">Submit Verified Client Review</h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1 font-normal">Leave your feedback for NovaMac Solutions</p>
        </div>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <CheckCircle2 className="w-16 h-16 text-[#FF5733] mx-auto animate-bounce" />
            <h2 className="font-black text-3xl text-[#202020]">Thank You!</h2>
            <p className="text-base text-gray-600">Your verified client review has been recorded successfully.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-mono font-bold text-[#FF5733] uppercase mb-2">Overall Rating</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setSelectedRating(star)}
                    className={`p-3 rounded-2xl border transition-all ${star <= selectedRating ? "border-[#FF5733] bg-[#FF5733]/10 text-[#FF5733] shadow-sm" : "border-[#F0DCDC] text-slate-400"}`}
                  >
                    <Star className="w-6 h-6 fill-current" />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-gray-500 uppercase mb-1">Full Name *</label>
              <input required name="name" type="text" placeholder="Alex Morgan" className="w-full px-4 py-3 bg-[#FAF2F2] border border-[#F0DCDC] text-[#202020] placeholder-gray-400 rounded-xl text-sm focus:outline-none focus:border-[#FF5733] transition-colors" />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-gray-500 uppercase mb-1">Gmail Address *</label>
              <input required name="email" type="email" placeholder="alex@gmail.com" className="w-full px-4 py-3 bg-[#FAF2F2] border border-[#F0DCDC] text-[#202020] placeholder-gray-400 rounded-xl text-sm focus:outline-none focus:border-[#FF5733] transition-colors" />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-gray-500 uppercase mb-1">Role / Business Title</label>
              <input name="role" type="text" placeholder="Founder, E-Commerce Brand" className="w-full px-4 py-3 bg-[#FAF2F2] border border-[#F0DCDC] text-[#202020] placeholder-gray-400 rounded-xl text-sm focus:outline-none focus:border-[#FF5733] transition-colors" />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-gray-500 uppercase mb-1">Your Feedback *</label>
              <textarea required name="comment" rows={4} placeholder="Describe the quality of engineering, delivery speed, and overall experience..." className="w-full px-4 py-3 bg-[#FAF2F2] border border-[#F0DCDC] text-[#202020] placeholder-gray-400 rounded-xl text-sm focus:outline-none focus:border-[#FF5733] transition-colors" />
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="w-full py-4.5 bg-[#FF5733] text-white font-black text-xs sm:text-sm tracking-widest uppercase rounded-full hover:bg-[#202020] transition-all shadow-xl flex items-center justify-center gap-2"
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

