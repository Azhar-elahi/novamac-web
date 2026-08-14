import { Sparkles, ArrowRight, Zap, Users, LineChart } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NovaMac Engine | Proprietary CRM & Automation Platform",
  description: "NovaMac Engine is our proprietary CRM and business automation platform, built to streamline client management, AI workflows, and operations.",
};

const PILLARS = [
  { icon: Users, title: "Client Management", desc: "Every lead, conversation and deal in one pipeline — no more scattered spreadsheets." },
  { icon: Zap, title: "AI Workflows", desc: "WhatsApp and voice AI agents plug straight into the Engine, so nothing gets missed." },
  { icon: LineChart, title: "Operations", desc: "Reporting, invoicing and task tracking built for small, fast-moving teams." },
];

export default function ProductsPage() {
  return (
    <main className="bg-[#0B1220] text-[#F8FAFC] min-h-screen pt-12 sm:pt-20 pb-28 px-6 md:px-12 relative font-sans">
      <div className="max-w-[1000px] mx-auto text-center relative z-10">
        <span className="px-4 py-1.5 bg-gradient-to-r from-[#0F1C33] to-[#091222] border border-[#1E2E4A] border-t-white/10 text-[#3B82F6] font-mono text-xs sm:text-sm font-bold uppercase tracking-widest rounded-full inline-flex items-center gap-2 mb-6 shadow-md">
          <Sparkles className="w-4 h-4 text-[#3B82F6]" /> IN PRIVATE DEVELOPMENT
        </span>

        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black tracking-tight leading-[1.05] sm:leading-[0.9] text-[#F8FAFC] mb-6">
          NovaMac <span className="text-[#3B82F6]">Engine.</span>
        </h1>

        <p className="text-sm sm:text-lg md:text-xl text-[#94A3B8] font-normal max-w-xl mx-auto leading-relaxed mb-16 bg-gradient-to-b from-[#0F1C33]/90 via-[#091222]/95 to-[#050A14] p-5 sm:p-7 rounded-2xl border border-[#1E2E4A] border-t-white/10 shadow-md">
          Our proprietary CRM and automation platform — built to run the whole
          growth loop we set up for clients from one dashboard. Currently in
          private development.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left mb-20">
          {PILLARS.map((p, i) => (
            <div key={i} className="bg-gradient-to-b from-[#0F1C33] via-[#091222] to-[#050A14] border border-[#1E2E4A] border-t-white/15 hover:border-[#3B82F6]/80 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.65),0_0_20px_rgba(59,130,246,0.08)] hover:shadow-[0_25px_65px_rgba(0,0,0,0.85),0_0_45px_rgba(59,130,246,0.3)] rounded-3xl p-8 sm:p-9">
              <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#040810] border border-[#1E2E4A] border-t-white/10 text-[#3B82F6] mb-6 shadow-inner">
                <p.icon className="w-6 h-6 text-[#3B82F6]" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#F8FAFC] mb-3">{p.title}</h3>
              <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed font-normal">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#0F1C33] via-[#091222] to-[#0F1C33] border border-[#1E2E4A] border-t-white/15 rounded-3xl px-8 py-14 md:px-16 md:py-16 shadow-[0_25px_60px_rgba(0,0,0,0.7)]">
          <p className="text-2xl sm:text-4xl font-extrabold text-[#F8FAFC] mb-4">
            Want early access when it <span className="text-[#3B82F6]">launches?</span>
          </p>
          <p className="text-[#94A3B8] font-normal mb-8 max-w-md mx-auto text-xs sm:text-base">
            Tell us about your business and we&rsquo;ll reach out as soon as the Engine opens up.
          </p>
          <Link href="/contact" className="group inline-flex items-center gap-2 bg-[#3B82F6] text-white font-black text-xs sm:text-sm tracking-widest uppercase px-9 py-4.5 rounded-full hover:bg-white hover:text-[#0B1220] transition-all duration-300 shadow-[0_10px_30px_rgba(59,130,246,0.35)]">
            Get in Touch <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </main>
  );
}
