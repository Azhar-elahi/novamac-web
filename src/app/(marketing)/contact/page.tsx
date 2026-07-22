"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, Send, ChevronDown, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

function BlurReveal({ children, delay = 0, className = "", style = {} }: { children: React.ReactNode; delay?: number; className?: string; style?: React.CSSProperties }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease }}
      className={className + " will-change-transform"}
      style={style}
    >
      {children}
    </motion.div>
  );
}

function WordReveal({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) {
  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ staggerChildren: 0.04, delayChildren: delay }}
      className={className}
    >
      {text.split(" ").map((word, i) => (
        <span key={i} className="overflow-hidden inline-block mr-[0.28em] pb-4 -mb-4 pt-4 -mt-4">
          <motion.span
            variants={{
              hidden: { y: "110%", opacity: 0 },
              visible: { y: "0%", opacity: 1, transition: { ease, duration: 0.8 } },
            }}
            className="inline-block will-change-transform"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

import { submitContactForm } from "@/app/actions/contact";

const FAQS = [
  { q: "Do you build custom websites or use templates?", a: "We only provide custom solutions built from scratch to meet your specific goals. No generic templates." },
  { q: "How long does a typical project take?", a: "A marketing site takes 4–6 weeks. A complex web application or e-commerce platform typically takes 8–16 weeks. We will give you a precise timeline during our discovery call, and we stick to it." },
  { q: "Do you offer post-launch support and maintenance?", a: "Yes. We offer managed hosting, monitoring, security patches, and ongoing development retainers. Most of our clients stay with us long-term — we become their permanent development team." },
  { q: "How do you handle project communication?", a: "You get a dedicated project manager, access to our private Slack channel, weekly video syncs, and a live project dashboard. You will always know exactly where things stand." },
  { q: "What is your pricing model?", a: "Every project is unique. Our custom web development projects generally start at $1,500, while smaller tasks or consultations start around $299. Reach out for a tailored quote." },
];

export default function ContactPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden">

      {/* ══════════ HERO ══════════ */}
      <section className="relative min-h-[70vh] flex flex-col justify-end pb-16 pt-36 px-6 md:px-12 xl:px-20 overflow-hidden bg-black">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: "linear-gradient(#ffffff 1px,transparent 1px),linear-gradient(90deg,#ffffff 1px,transparent 1px)", backgroundSize: "100px 100px" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white opacity-[0.03] blur-[150px]" />
        </div>

        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.2, duration: 0.9, ease }}
            className="inline-flex items-center gap-3 mb-10 border border-white/20 px-5 py-3 bg-black/50 backdrop-blur-xl"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-gray-400">We reply within 24 hours</span>
          </motion.div>

          <h1 className="font-heading font-black leading-[0.82] tracking-[-0.045em] text-[clamp(3rem,10vw,10rem)] mb-14">
            {[
              { text: "Let's", delay: 0.3, cls: "block text-white" },
              { text: "Talk.", delay: 0.5, cls: "block text-gray-500" },
            ].map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.div
                  initial={{ y: "115%", opacity: 0, filter: "blur(22px)" }}
                  animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
                  transition={{ delay: line.delay, duration: 1.2, ease }}
                  className={line.cls}
                >
                  {line.text}
                </motion.div>
              </div>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.9, ease }}
            className="text-xl text-gray-400 font-light max-w-xl leading-relaxed border-t border-white/10 pt-10"
          >
            Tell us about your project. We will respond with a clear, honest assessment and a path forward — no sales fluff.
          </motion.p>
        </div>
      </section>

      {/* ══════════ CONTACT FORM + INFO ══════════ */}
      <section className="py-24 px-6 md:px-12 xl:px-20 bg-[#050505] border-t border-white/10">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 items-start">

          {/* Contact Info */}
          <BlurReveal className="space-y-8">
            <div>
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-8">/ Direct Contact</p>
              <div className="space-y-8">
                {[
                  { icon: Mail, label: "Email", value: "hello@novamacsolutions.com" },
                  { icon: Phone, label: "Phone", value: "415 480 4281" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-5">
                    <div className="w-11 h-11 border border-white/20 bg-white/5 flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-gray-500 mb-1">{item.label}</p>
                      <p className="font-medium text-lg text-white">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-white/10 p-8 bg-black hover:border-white/20 transition-colors">
              <p className="font-mono text-[10px] uppercase tracking-widest text-gray-500 mb-6">Office Hours</p>
              <div className="space-y-3">
                {[["Mon – Fri", "9:00 AM – 6:00 PM PST"], ["Sat – Sun", "Emergency support only"]].map(([day, hours], i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <span className="text-gray-400 font-light">{day}</span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-white">{hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust signals */}
            <div className="border border-white/10 p-8 bg-black hover:border-white/20 transition-colors">
              <p className="font-mono text-[10px] uppercase tracking-widest text-gray-500 mb-6">Our Promise</p>
              <div className="space-y-3">
                {["Response within 24 hours", "Free 30-min discovery call", "No-pressure, honest assessment", "NDA available upon request"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-400 font-light">
                    <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </BlurReveal>

          {/* Form */}
          <BlurReveal delay={0.15}>
            <form action={async (formData) => {
              const res = await submitContactForm(formData);
              if (res.error) {
                setError(res.error);
                setSubmitted(false);
              } else {
                setError(null);
                setSubmitted(true);
                setTimeout(() => setSubmitted(false), 5000);
              }
            }} className="border border-white/10 bg-black p-8 md:p-10 space-y-6 relative">
              <p className="font-mono text-[10px] uppercase tracking-widest text-gray-500 mb-8">/ Request a Proposal</p>

              {error && (
                <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-4 text-sm rounded-md mb-6">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block font-mono text-[9px] uppercase tracking-[0.2em] text-gray-500 mb-2">First Name</label>
                  <input type="text" name="firstName" placeholder="John" required
                    className="w-full px-4 py-3.5 bg-[#050505] border border-white/10 text-sm text-white placeholder:text-gray-600 focus:border-white focus:ring-1 focus:ring-white outline-none transition-all duration-300" />
                </div>
                <div>
                  <label className="block font-mono text-[9px] uppercase tracking-[0.2em] text-gray-500 mb-2">Last Name</label>
                  <input type="text" name="lastName" placeholder="Doe" required
                    className="w-full px-4 py-3.5 bg-[#050505] border border-white/10 text-sm text-white placeholder:text-gray-600 focus:border-white focus:ring-1 focus:ring-white outline-none transition-all duration-300" />
                </div>
              </div>

              <div>
                <label className="block font-mono text-[9px] uppercase tracking-[0.2em] text-gray-500 mb-2">Email Address</label>
                <input type="email" name="email" placeholder="john@company.com" required
                  className="w-full px-4 py-3.5 bg-[#050505] border border-white/10 text-sm text-white placeholder:text-gray-600 focus:border-white focus:ring-1 focus:ring-white outline-none transition-all duration-300" />
              </div>

              <div>
                <label className="block font-mono text-[9px] uppercase tracking-[0.2em] text-gray-500 mb-2">Service Needed</label>
                <select name="service" className="w-full px-4 py-3.5 bg-[#050505] border border-white/10 text-sm text-white focus:border-white focus:ring-1 focus:ring-white outline-none transition-all duration-300">
                  <option value="">Select a service...</option>
                  <option value="Web Development">Web Development</option>
                  <option value="E-Commerce">E-Commerce</option>
                  <option value="AI Automation">AI Automation</option>
                  <option value="Performance Marketing">Performance Marketing</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block font-mono text-[9px] uppercase tracking-[0.2em] text-gray-500 mb-2">Project Details</label>
                <textarea name="message" rows={5} placeholder="Tell us about your project, timeline, and budget..." required
                  className="w-full px-4 py-3.5 bg-[#050505] border border-white/10 text-sm text-white placeholder:text-gray-600 focus:border-white focus:ring-1 focus:ring-white outline-none transition-all duration-300 resize-none" />
              </div>

              <button type="submit" disabled={submitted}
                className="hover-trigger w-full py-4 bg-white text-black font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-gray-200 disabled:opacity-70 transition-all duration-300">
                {submitted ? (
                  <><CheckCircle2 className="w-4 h-4" /> Message Sent!</>
                ) : (
                  <>Submit Request <Send className="w-4 h-4" /></>
                )}
              </button>
            </form>
          </BlurReveal>
        </div>
      </section>

      {/* ══════════ FAQ ══════════ */}
      <section className="py-32 px-6 md:px-12 xl:px-20 bg-black border-t border-white/10">
        <div className="max-w-[900px] mx-auto">
          <BlurReveal className="mb-20">
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-5">/ Common Questions</p>
            <h2 className="font-heading font-black text-[clamp(2rem,5vw,4.5rem)] leading-[0.88] tracking-[-0.04em]">
              <WordReveal text="Frequently asked." />
            </h2>
          </BlurReveal>

          <div className="divide-y divide-white/10 border-t border-white/10">
            {FAQS.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.8, ease }}
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="hover-trigger w-full flex items-center justify-between gap-6 py-7 text-left group"
                >
                  <span className="font-heading font-bold text-lg md:text-xl tracking-tight text-gray-300 group-hover:text-white transition-colors duration-300">{faq.q}</span>
                  <motion.div
                    animate={{ rotate: activeFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.35, ease }}
                    className="shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, filter: "blur(8px)" }}
                      animate={{ height: "auto", opacity: 1, filter: "blur(0px)" }}
                      exit={{ height: 0, opacity: 0, filter: "blur(4px)" }}
                      transition={{ duration: 0.45, ease }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-400 font-light text-base leading-relaxed pb-8">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
