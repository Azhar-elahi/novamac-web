"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, ShieldCheck } from "lucide-react";
import { getApprovedReviews } from "@/app/actions/review";

export function GoogleReviewsSection() {
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadLiveReviews() {
      try {
        const live = await getApprovedReviews();
        if (live && live.length > 0) {
          setReviews(live);
        } else {
          setReviews([]);
        }
      } catch (err) {
        setReviews([]);
      } finally {
        setLoading(false);
      }
    }
    loadLiveReviews();
  }, []);

  // DO NOT RENDER ANYTHING until an actual review exists in the database
  if (loading || reviews.length === 0) {
    return null;
  }

  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "NovaMac Solutions Software & UI/UX Engineering",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": reviews.length.toString(),
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <section className="py-24 px-6 md:px-12 xl:px-20 max-w-[1400px] mx-auto relative z-10 border-b border-[#1E2E4A]">
      
      {/* Aggregate Rating Schema for Google SERP Gold Stars */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#0F1C33] to-[#091222] border border-[#1E2E4A] border-t-white/10 rounded-full text-xs sm:text-sm font-mono font-bold text-[#3B82F6] uppercase tracking-widest mb-3 shadow-[0_10px_25px_rgba(0,0,0,0.4)]">
            <Star className="w-4 h-4 text-[#3B82F6] fill-current" />
            VERIFIED REVIEWS & RATINGS
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[#F8FAFC]">
            Client Ratings & Feedback.
          </h2>
        </div>

        {/* Overall Star Badge */}
        <div className="flex items-center gap-3 bg-gradient-to-r from-[#0F1C33] to-[#091222] p-4 rounded-2xl border border-[#1E2E4A] border-t-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.5)]">
          <div className="flex text-[#3B82F6]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <span className="text-xs font-mono font-bold text-[#3B82F6] uppercase tracking-wider">
            VERIFIED RECORD
          </span>
        </div>
      </div>

      {/* Review Cards Grid (GRADIENT LOOK CARDS) */}
      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((rev, idx) => (
          <motion.div
            key={rev.id || idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -6 }}
            className="bg-gradient-to-b from-[#0F1C33] via-[#091222] to-[#050A14] border border-[#1E2E4A] border-t-white/15 rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.65),0_0_20px_rgba(59,130,246,0.08)] hover:shadow-[0_25px_65px_rgba(0,0,0,0.85),0_0_45px_rgba(59,130,246,0.3)] hover:border-[#3B82F6]/80 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex text-[#3B82F6]">
                  {[...Array(rev.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-[#0B1426] to-[#040810] text-[#3B82F6] border border-[#1E2E4A] border-t-white/10 rounded-full font-mono text-[10px] font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#3B82F6]" /> VERIFIED GMAIL
                </span>
              </div>
              <p className="text-[#F8FAFC] text-sm leading-relaxed mb-8 font-medium italic">
                "{rev.comment}"
              </p>
            </div>

            <div className="border-t border-[#1E2E4A] pt-5 flex items-center justify-between">
              <div>
                <div className="font-bold text-base text-[#F8FAFC]">{rev.name}</div>
                <div className="text-xs font-mono text-[#94A3B8] mt-0.5">{rev.role || "Client"}</div>
              </div>
              <span className="w-2.5 h-2.5 rounded-full bg-[#3B82F6] animate-pulse shadow-[0_0_10px_#3B82F6]" title="Active Verified Review" />
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
