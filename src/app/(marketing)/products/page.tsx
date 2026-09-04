import { Sparkles, ArrowRight, Zap, Users, LineChart } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NovaMac Engine | Proprietary CRM & Automation Platform",
  description: "NovaMac Engine is our proprietary CRM and business automation platform, built to streamline client management, AI workflows, and operations.",
  alternates: {
    canonical: "https://novamacsolutions.com/products",
  },
  openGraph: {
    title: "NovaMac Engine | Proprietary CRM & Business Automation Platform",
    description: "Streamline client management, AI workflows, and operations with NovaMac Engine.",
    url: "https://novamacsolutions.com/products",
  },
  twitter: {
    title: "NovaMac Engine | Proprietary CRM & Automation Platform",
    description: "Streamline client management, AI workflows, and operations.",
  },
};

const PILLARS = [
  { icon: Users, title: "Client Management", desc: "Every lead, conversation and deal in one pipeline — no more scattered spreadsheets." },
  { icon: Zap, title: "AI Workflows", desc: "WhatsApp and voice AI agents plug straight into the Engine, so nothing gets missed." },
  { icon: LineChart, title: "Operations", desc: "Reporting, invoicing and task tracking built for small, fast-moving teams." },
];

export default function ProductsPage() {
  return (
    <main className="bg-[#FAF2F2] text-[#202020] min-h-screen pt-12 sm:pt-20 pb-28 px-6 md:px-12 relative font-sans">
      <div className="max-w-[1000px] mx-auto text-center relative z-10">
        <span className="px-4 py-1.5 bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] font-mono text-xs sm:text-sm font-bold uppercase tracking-widest rounded-full inline-flex items-center gap-2 mb-6 shadow-md">
          <Sparkles className="w-4 h-4 text-[#FF5733]" /> IN PRIVATE DEVELOPMENT
        </span>

        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black tracking-tight leading-[1.05] sm:leading-[0.9] text-[#202020] mb-6">
          NovaMac <span className="text-[#FF5733]">Engine.</span>
        </h1>

        <p className="text-sm sm:text-lg md:text-xl text-gray-600 font-normal max-w-xl mx-auto leading-relaxed mb-16 bg-white p-5 sm:p-7 rounded-2xl border border-[#F0DCDC] shadow-sm">
          Our proprietary CRM and automation platform — built to run the whole
          growth loop we set up for clients from one dashboard. Currently in
          private development.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left mb-20">
          {PILLARS.map((p, i) => (
            <div key={i} className="bg-white border border-[#F0DCDC] hover:border-[#FF5733] transition-all shadow-sm rounded-3xl p-8 sm:p-9 group">
              <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] mb-6 group-hover:scale-110 transition-transform">
                <p.icon className="w-6 h-6 text-[#FF5733]" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#202020] mb-3 group-hover:text-[#FF5733] transition-colors">{p.title}</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-normal">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#202020] text-white border border-white/10 rounded-3xl px-8 py-14 md:px-16 md:py-16 shadow-2xl">
          <p className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
            Want early access when it <span className="text-[#FF5733]">launches?</span>
          </p>
          <p className="text-gray-300 font-normal mb-8 max-w-md mx-auto text-xs sm:text-base">
            Tell us about your business and we&rsquo;ll reach out as soon as the Engine opens up.
          </p>
          <Link href="/contact" className="group inline-flex items-center gap-2 bg-[#FF5733] text-white font-black text-xs sm:text-sm tracking-widest uppercase px-9 py-4.5 rounded-full hover:bg-white hover:text-[#202020] transition-all duration-300 shadow-xl">
            Get in Touch <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </main>
  );
}

