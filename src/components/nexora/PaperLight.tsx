"use client";

import { useScroll, useTransform, motion } from "framer-motion";

/**
 * Ambient "dappled light through leaves" overlay — soft, slowly
 * drifting blurred shadow shapes that shift position with scroll.
 * Echoes the reference video's real desk/paper photography, done
 * as a lightweight CSS/SVG effect instead of a photo.
 */
export default function PaperLight() {
  const { scrollYProgress } = useScroll();
  const x1 = useTransform(scrollYProgress, [0, 1], ["-5%", "8%"]);
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["6%", "-10%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["10%", "-6%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 12]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden mix-blend-multiply opacity-[0.05]" aria-hidden>
      <motion.svg
        style={{ x: x1, y: y1, rotate }}
        className="absolute -top-1/4 -left-1/4 w-[80vw] h-[80vw] max-w-[900px] max-h-[900px]"
        viewBox="0 0 400 400"
      >
        <g style={{ filter: "blur(18px)" }}>
          <path d="M40 180C60 100 140 40 220 60C300 80 340 160 320 230C300 300 220 340 150 320C80 300 20 260 40 180Z" fill="#211f1a" />
        </g>
      </motion.svg>
      <motion.svg
        style={{ x: x2, y: y2 }}
        className="absolute bottom-0 right-0 w-[70vw] h-[70vw] max-w-[800px] max-h-[800px]"
        viewBox="0 0 400 400"
      >
        <g style={{ filter: "blur(20px)" }}>
          <ellipse cx="200" cy="200" rx="180" ry="120" fill="#211f1a" />
        </g>
      </motion.svg>
    </div>
  );
}
