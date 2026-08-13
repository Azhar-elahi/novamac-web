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
    <section className="py-24 px-6 md:px-12 xl:px-20 max-w-[1400px] mx-auto relative z-10 border-b border-[#D6D1C8]">
      
      {/* Aggregate Rating Schema for Google SERP Gold Stars */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#0F52BA]/30 rounded-full text-xs font-mono font-bold text-[#0F52BA] uppercase tracking-widest mb-3 shadow-sm">
            <Star className="w-3.5 h-3.5 text-[#0F52BA] fill-current" />
            VERIFIED REVIEWS & RATINGS
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[#1C1917]">
            Client Ratings & Feedback.
          </h2>
        </div>

        {/* Overall Star Badge */}
        <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-[#D6D1C8] shadow-sm">
          <div className="flex text-[#0F52BA]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <span className="text-xs font-mono font-bold text-[#0F52BA] uppercase tracking-wider">
            VERIFIED RECORD
          </span>
        </div>
      </div>

      {/* Solid Review Cards Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((rev, idx) => (
          <motion.div
            key={rev.id || idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -6 }}
            className="bg-white border-2 border-[#D6D1C8] rounded-3xl p-8 shadow-md hover:shadow-2xl hover:border-[#0F52BA] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex text-[#0F52BA]">
                  {[...Array(rev.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-[#0F52BA] border border-blue-200 rounded-full font-mono text-[10px] font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0F52BA]" /> VERIFIED GMAIL
                </span>
              </div>
              <p className="text-[#1C1917] text-sm leading-relaxed mb-8 font-medium italic">
                "{rev.comment}"
              </p>
            </div>

            <div className="border-t border-[#D6D1C8] pt-5 flex items-center justify-between">
              <div>
                <div className="font-bold text-base text-[#1C1917]">{rev.name}</div>
                <div className="text-xs font-mono text-[#57534E] mt-0.5">{rev.role || "Client"}</div>
              </div>
              <span className="w-2.5 h-2.5 rounded-full bg-[#0F52BA] animate-pulse" title="Active Verified Review" />
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
