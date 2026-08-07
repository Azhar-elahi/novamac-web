"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { AI_SYSTEMS, type AiSystem } from "./data";

function SystemCard({
  system,
  onOpen,
}: {
  system: AiSystem;
  onOpen: (s: AiSystem) => void;
}) {
  return (
    <button
      onClick={() => onOpen(system)}
      className="group relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-2xl card-vibrant p-6 text-left"
    >
      <div className="flex items-start justify-between">
        <span className="font-mono text-xs tracking-[0.2em] text-white/35">
          {system.index}
        </span>
        <span
          className="h-2 w-2 rounded-full"
          style={{
            backgroundColor: system.dotColor,
            boxShadow: `0 0 10px 2px ${system.dotColor}`,
          }}
        />
      </div>

      <div className="space-y-2">
        <h3 className="font-heading text-xl font-semibold text-white sm:text-2xl">
          {system.name}
        </h3>
        <p className="max-w-xs text-sm leading-relaxed text-white/50">
          {system.description}
        </p>
      </div>

      <div className="flex items-center justify-between pt-4">
        <span className="text-sm text-white/70">
          From <span className="font-semibold text-white">{system.fromPrice}</span>
        </span>
        <span className="flex items-center gap-1 text-xs tracking-[0.15em] text-white/50 transition group-hover:text-white">
          EXPLORE
          <ArrowRight className="h-3 w-3 transition group-hover:translate-x-0.5" />
        </span>
      </div>
    </button>
  );
}

function SystemModal({
  system,
  onClose,
}: {
  system: AiSystem;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/70 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 40, opacity: 0, scale: 0.97 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 20, opacity: 0, scale: 0.97 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg rounded-t-3xl border border-white/10 bg-[#0a0c14] p-6 sm:rounded-3xl sm:p-8"
        style={{ boxShadow: `0 0 60px -10px rgba(${system.accent},0.35)` }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/50 transition hover:border-white/30 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        <span className="font-mono text-xs tracking-[0.2em] text-white/35">
          {system.index}
        </span>
        <h3 className="mt-2 font-heading text-2xl font-semibold text-white sm:text-3xl">
          {system.name}
        </h3>
        <p className="mt-2 text-sm text-white/55">{system.description}</p>

        <div className="mt-6 grid grid-cols-2 divide-x divide-white/10 rounded-xl border border-white/10 bg-white/[0.02]">
          <div className="p-4">
            <p className="text-[10px] tracking-[0.2em] text-white/35">SETUP</p>
            <p className="mt-1 font-heading text-lg font-semibold text-white">
              {system.setup}
            </p>
          </div>
          <div className="p-4">
            <p className="text-[10px] tracking-[0.2em] text-white/35">MAINTENANCE</p>
            <p className="mt-1 font-heading text-lg font-semibold text-white">
              {system.maintenance}
            </p>
            <p className="mt-0.5 text-[11px] text-emerald-400/80">
              {system.maintenanceNote}
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div>
            <p className="text-[10px] tracking-[0.2em] text-white/35">INCLUDES</p>
            <ul className="mt-3 space-y-2">
              {system.includes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-white/70">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.2em] text-white/35">GOOD TO KNOW</p>
            <ul className="mt-3 space-y-2">
              {system.goodToKnow.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-white/50">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/30" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <a
          href="/contact"
          className="mt-8 flex w-full items-center justify-center rounded-full bg-white py-3 text-sm font-medium text-[#05060c] transition hover:bg-white/90"
        >
          Book a call about {system.name}
        </a>
      </motion.div>
    </motion.div>
  );
}

export default function AiSystemsGrid() {
  const [active, setActive] = useState<AiSystem | null>(null);

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2">
        {AI_SYSTEMS.map((s) => (
          <SystemCard key={s.id} system={s} onOpen={setActive} />
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <SystemModal system={active} onClose={() => setActive(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
