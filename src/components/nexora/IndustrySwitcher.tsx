"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { INDUSTRIES } from "./data";

export default function IndustrySwitcher() {
  const [activeId, setActiveId] = useState(INDUSTRIES[2].id); // Restaurant default
  const active = INDUSTRIES.find((i) => i.id === activeId)!;

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {INDUSTRIES.map((ind) => {
          const isActive = ind.id === activeId;
          return (
            <button
              key={ind.id}
              onClick={() => setActiveId(ind.id)}
              className="rounded-full border px-4 py-2 text-xs tracking-[0.1em] transition-all"
              style={
                isActive
                  ? { backgroundColor: ind.accent, borderColor: ind.accent, color: "#05060c" }
                  : { borderColor: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.55)" }
              }
            >
              {ind.label.toUpperCase()}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-8"
        >
          <h3 className="font-heading text-2xl font-semibold text-white sm:text-3xl">
            {active.heading}
          </h3>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {active.flow.map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <span
                  className="rounded-full border px-4 py-2 text-sm text-white/85"
                  style={{ borderColor: `${active.accent}55` }}
                >
                  {step}
                </span>
                {i < active.flow.length - 1 && (
                  <ArrowRight className="h-4 w-4 shrink-0" style={{ color: active.accent }} />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
