"use client";

import React, { useEffect, useState, useTransition } from "react";
import { getPricingPlans, updatePricingPlan, PricingPlanItem } from "@/app/actions/pricing";
import { DollarSign, Save, CheckCircle2, RefreshCw } from "lucide-react";

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
      <div className="p-12 text-center text-gray-400 font-mono">
        <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-4 text-[#FF5733]" />
        Loading pricing & package configuration...
      </div>
    );
  }

  return (
    <div className="space-y-8 font-sans">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#FF5733]/10 text-[#FF5733] border border-[#FF5733]/30 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <DollarSign className="w-3.5 h-3.5" />
            ADMIN MANAGEMENT
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Package & Pricing Manager
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Customize live rates, package titles, and target audience text for all agency pricing tiers.
          </p>
        </div>

        <button
          onClick={loadPlans}
          className="px-4 py-2.5 bg-white/10 border border-white/10 hover:bg-white/20 rounded-xl text-xs font-bold text-white flex items-center gap-2 transition-colors"
        >
          <RefreshCw className="w-4 h-4" /> Refresh Data
        </button>
      </div>

      {/* Grid of editable pricing plans */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.slug}
            className={`p-6 rounded-2xl border bg-[#202020] text-white shadow-xl flex flex-col justify-between transition-all relative overflow-hidden ${
              plan.popular ? "border-[#FF5733] ring-1 ring-[#FF5733]" : "border-white/10"
            }`}
          >
            {plan.popular && (
              <div className="absolute top-3 right-3 px-2.5 py-0.5 bg-[#FF5733] text-white text-[10px] font-mono font-bold rounded-full uppercase tracking-wider shadow-sm">
                POPULAR TIER
              </div>
            )}

            <div className="space-y-4">
              {/* Title input */}
              <div>
                <label className="text-[10px] font-mono font-bold uppercase text-gray-400 block mb-1">
                  Package / Product Title
                </label>
                <input
                  type="text"
                  value={plan.title}
                  onChange={(e) => handleTitleChange(plan.slug, e.target.value)}
                  className="w-full font-black text-lg text-white bg-white/5 border border-white/10 rounded-xl px-3 py-2 focus:border-[#FF5733] outline-none transition-colors"
                />
              </div>

              {/* Price input */}
              <div>
                <label className="text-[10px] font-mono font-bold uppercase text-[#FF5733] block mb-1">
                  Live Price (USD)
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={plan.price}
                    onChange={(e) => handlePriceChange(plan.slug, e.target.value)}
                    className="w-full font-black text-2xl text-[#FF5733] bg-white/5 border border-[#FF5733]/40 rounded-xl px-3 py-2 focus:border-[#FF5733] outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Subtitle input */}
              <div>
                <label className="text-[10px] font-mono font-bold uppercase text-gray-400 block mb-1">
                  Target Business / Scope Summary
                </label>
                <input
                  type="text"
                  value={plan.subtitle}
                  onChange={(e) => handleSubtitleChange(plan.slug, e.target.value)}
                  className="w-full text-xs text-gray-300 bg-white/5 border border-white/10 rounded-xl px-3 py-2 focus:border-[#FF5733] outline-none transition-colors"
                />
              </div>

              {/* Features preview */}
              <div>
                <label className="text-[10px] font-mono font-bold uppercase text-gray-400 block mb-1">
                  Included Features ({plan.features.length})
                </label>
                <ul className="space-y-1.5 text-xs text-gray-300 max-h-32 overflow-y-auto bg-black/40 p-3 rounded-xl border border-white/10">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF5733] shrink-0" />
                      <span className="truncate">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Save Button */}
            <div className="pt-6 mt-4 border-t border-white/10 flex items-center justify-between gap-3">
              <button
                onClick={() => handleSave(plan)}
                disabled={isPending}
                className="flex-1 py-3 bg-[#FF5733] hover:bg-white hover:text-[#202020] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
              >
                <Save className="w-4 h-4" /> Save Pricing
              </button>

              {saveStatus[plan.slug] === "SAVED" && (
                <span className="text-xs text-emerald-400 font-bold font-mono flex items-center gap-1">
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
