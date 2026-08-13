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
    <main className="bg-[#f6f1e7] text-[#211f1a] min-h-screen pt-40 pb-28 px-6 md:px-12 ">
      <div className="max-w-[1000px] mx-auto text-center">
        <span className="annotation-label -rotate-2 inline-flex items-center gap-2 mb-6">
          <Sparkles className="w-4 h-4 text-[#2f6b45]" /> in the works
        </span>

        <h1 className="font-heading font-medium text-[clamp(2.6rem,7vw,5rem)] tracking-[-0.01em] leading-[1.05] mb-6">
          NovaMac <span className="text-script">Engine.</span>
        </h1>

        <p className="text-lg text-[#211f1a]/55 font-light max-w-xl mx-auto leading-relaxed mb-16">
          Our proprietary CRM and automation platform — built to run the whole
          growth loop we set up for clients from one dashboard. Currently in
          private development.
        </p>

        <div className="grid md:grid-cols-3 gap-5 text-left mb-20">
          {PILLARS.map((p, i) => (
            <div key={i} className="bg-white border border-black/5 shadow-sm rounded-2xl p-8">
              <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#2f6b45]/10 mb-6">
                <p.icon className="w-5 h-5 text-[#2f6b45]" />
              </div>
              <h3 className="font-heading text-xl font-medium mb-2">{p.title}</h3>
              <p className="text-[#211f1a]/55 text-[15px] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="paper-sheet rounded-3xl px-8 py-14 md:px-16 md:py-16">
          <p className="font-heading text-2xl md:text-3xl mb-4">
            Want early access when it <span className="text-script">launches?</span>
          </p>
          <p className="text-[#211f1a]/55 font-light mb-8 max-w-md mx-auto">
            Tell us about your business and we&rsquo;ll reach out as soon as the Engine opens up.
          </p>
          <Link href="/contact" className="hover-trigger group inline-flex items-center gap-2 bg-[#211f1a] text-[#f6f1e7] font-medium text-sm px-7 py-3.5 rounded-full hover:bg-[#2f6b45] transition-all duration-300">
            Get in Touch <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </main>
  );
}
