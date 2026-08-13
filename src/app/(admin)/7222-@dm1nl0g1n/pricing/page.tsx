"use client";

import React, { useEffect, useState, useTransition } from "react";
import { getPricingPlans, updatePricingPlan, PricingPlanItem } from "@/app/actions/pricing";
import { DollarSign, Save, Sparkles, CheckCircle2, AlertCircle, RefreshCw, Layers } from "lucide-react";

export default function AdminPricingPage() {
  const [plans, setPlans] = useState<PricingPlanItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [isPending, startTransition] = useTransition();
  const [saveStatus, setSaveStatus] = useState<Record<string, string>>({});

  useEffect(() => {
    loadPlans();
  }, []);

  const loadPlans = async () => {
    setLoading(true);
    const data = await getPricingPlans();
    setPlans(data);
    setLoading(false);
  };

  const handlePriceChange = (slug: string, newPrice: string) => {
    setPlans((prev) =>
      prev.map((p) => (p.slug === slug ? { ...p, price: newPrice } : p))
    );
  };

  const handleTitleChange = (slug: string, newTitle: string) => {
    setPlans((prev) =>
      prev.map((p) => (p.slug === slug ? { ...p, title: newTitle } : p))
    );
  };

  const handleSubtitleChange = (slug: string, newSubtitle: string) => {
    setPlans((prev) =>
      prev.map((p) => (p.slug === slug ? { ...p, subtitle: newSubtitle } : p))
    );
  };

  const handleSave = (plan: PricingPlanItem) => {
    startTransition(async () => {
      const res = await updatePricingPlan(plan.slug, plan.price, plan.title, plan.subtitle, plan.features);
      if (res.success) {
        setSaveStatus((prev) => ({ ...prev, [plan.slug]: "SAVED" }));
        setTimeout(() => {
          setSaveStatus((prev) => ({ ...prev, [plan.slug]: "" }));
        }, 3000);
      } else {
        setSaveStatus((prev) => ({ ...prev, [plan.slug]: "ERROR" }));
      }
    });
  };

  if (loading) {
    return (
      <div className="p-8 text-center text-zinc-500 font-mono">
        <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-4 text-[#0F52BA]" />
        Loading pricing & product configuration...
      </div>
    );
  }

  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto space-y-8 font-sans">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-zinc-200">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0F52BA]/10 text-[#0F52BA] rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <DollarSign className="w-3.5 h-3.5" />
            ADMIN MANAGEMENT
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-zinc-900 tracking-tight">
            Product Price & Tier Management
          </h1>
          <p className="text-zinc-500 text-sm mt-1">
            Edit live pricing for website tiers, service packages, and add-on products in real time.
          </p>
        </div>

        <button
          onClick={loadPlans}
          className="px-4 py-2 bg-white border border-zinc-300 rounded-xl text-xs font-bold text-zinc-700 hover:bg-zinc-50 flex items-center gap-2 shadow-sm"
        >
          <RefreshCw className="w-4 h-4" /> Refresh Data
        </button>
      </div>

      {/* Grid of editable pricing plans */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.slug}
            className={`p-6 rounded-2xl border bg-white shadow-md flex flex-col justify-between transition-all relative overflow-hidden ${
              plan.popular ? "border-[#0F52BA] ring-2 ring-[#0F52BA]/20" : "border-zinc-200"
            }`}
          >
            {plan.popular && (
              <div className="absolute top-3 right-3 px-2.5 py-0.5 bg-[#0F52BA] text-white text-[10px] font-mono font-bold rounded-full uppercase tracking-wider">
                POPULAR
              </div>
            )}

            <div className="space-y-4">
              {/* Title input */}
              <div>
                <label className="text-[10px] font-mono font-bold uppercase text-zinc-400 block mb-1">
                  Plan / Product Title
                </label>
                <input
                  type="text"
                  value={plan.title}
                  onChange={(e) => handleTitleChange(plan.slug, e.target.value)}
                  className="w-full font-black text-lg text-zinc-900 bg-zinc-50 border border-zinc-200 rounded-xl px-3 py-2 focus:bg-white focus:border-[#0F52BA] outline-none"
                />
              </div>

              {/* Price input */}
              <div>
                <label className="text-[10px] font-mono font-bold uppercase text-[#0F52BA] block mb-1">
                  Live Price (USD)
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={plan.price}
                    onChange={(e) => handlePriceChange(plan.slug, e.target.value)}
                    className="w-full font-black text-2xl text-[#0F52BA] bg-blue-50/50 border-2 border-[#0F52BA]/30 rounded-xl px-3 py-2 focus:bg-white focus:border-[#0F52BA] outline-none"
                  />
                </div>
              </div>

              {/* Subtitle input */}
              <div>
                <label className="text-[10px] font-mono font-bold uppercase text-zinc-400 block mb-1">
                  Subtitle / Target Audience
                </label>
                <input
                  type="text"
                  value={plan.subtitle}
                  onChange={(e) => handleSubtitleChange(plan.slug, e.target.value)}
                  className="w-full text-xs text-zinc-600 bg-zinc-50 border border-zinc-200 rounded-xl px-3 py-2 focus:bg-white focus:border-[#0F52BA] outline-none"
                />
              </div>

              {/* Features preview */}
              <div>
                <label className="text-[10px] font-mono font-bold uppercase text-zinc-400 block mb-1">
                  Included Features ({plan.features.length})
                </label>
                <ul className="space-y-1 text-xs text-zinc-600 max-h-28 overflow-y-auto bg-zinc-50 p-2.5 rounded-xl border border-zinc-200">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0F52BA]" />
                      <span className="truncate">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Save Button */}
            <div className="pt-6 mt-4 border-t border-zinc-100 flex items-center justify-between">
              <button
                onClick={() => handleSave(plan)}
                disabled={isPending}
                className="w-full py-3 bg-zinc-900 hover:bg-[#0F52BA] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
              >
                <Save className="w-4 h-4" /> Save Price Change
              </button>

              {saveStatus[plan.slug] === "SAVED" && (
                <span className="text-xs text-green-600 font-bold font-mono ml-3 flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" /> Saved!
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
