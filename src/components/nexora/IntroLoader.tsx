"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroLoader({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 1400);
    const t2 = setTimeout(() => setLeaving(true), 2900);
    const t3 = setTimeout(() => onDone(), 3500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence>
      {!leaving && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#05060c]"
          role="status"
          aria-label="Loading NovaMac"
        >
          <AnimatePresence mode="wait">
            {phase === 0 ? (
              <motion.p
                key="line1"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.5 }}
                className="px-6 text-center font-heading text-xl italic text-[#9fb4ff] sm:text-2xl"
              >
                Pricing is just a number.
              </motion.p>
            ) : (
              <motion.p
                key="line2"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.5 }}
                className="px-6 text-center font-heading text-xl italic text-[#9fb4ff] sm:text-2xl"
              >
                Experience is what you&rsquo;re buying.
              </motion.p>
            )}
          </AnimatePresence>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === 1 ? 1 : 0 }}
            transition={{ duration: 0.6 }}
            className="absolute bottom-16 text-[11px] tracking-[0.35em] text-white/30"
          >
            MOVE TO BEGIN
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
