import { ArrowRight, MessageSquare, LifeBuoy } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support | NovaMac Solutions",
  description: "Get help with your NovaMac Solutions projects.",
};

export default function SupportPage() {
  return (
    <main className="bg-[#0B1220] text-[#F8FAFC] min-h-screen pt-12 sm:pt-20 pb-24 px-6 relative font-sans">
      <div className="max-w-4xl mx-auto space-y-16 relative z-10">
        <div className="text-center">
          <span className="px-4 py-1.5 bg-gradient-to-r from-[#0F1C33] to-[#091222] border border-[#1E2E4A] border-t-white/10 text-[#3B82F6] font-mono text-xs sm:text-sm font-bold uppercase tracking-widest rounded-full inline-block mb-4 shadow-md">
            CLIENT SUPPORT CENTER
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black tracking-tight leading-[1.05] sm:leading-[0.9] text-[#F8FAFC] mb-6">
            How can we <span className="text-[#3B82F6]">help?</span>
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-[#94A3B8] font-normal max-w-xl mx-auto leading-relaxed bg-gradient-to-b from-[#0F1C33]/90 via-[#091222]/95 to-[#050A14] p-5 sm:p-7 rounded-2xl border border-[#1E2E4A] border-t-white/10 shadow-md">
            Whether you need technical support, have a billing question, or want to report an issue, our team is here for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
          <div className="bg-gradient-to-b from-[#0F1C33] via-[#091222] to-[#050A14] border border-[#1E2E4A] border-t-white/15 hover:border-[#3B82F6]/80 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.65),0_0_20px_rgba(59,130,246,0.08)] hover:shadow-[0_25px_65px_rgba(0,0,0,0.85),0_0_45px_rgba(59,130,246,0.3)] p-8 sm:p-10 rounded-3xl">
            <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#040810] border border-[#1E2E4A] border-t-white/10 text-[#3B82F6] mb-6 shadow-inner">
              <LifeBuoy className="w-6 h-6 text-[#3B82F6]" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] mb-3">Existing Clients</h3>
            <p className="text-[#94A3B8] font-normal text-xs sm:text-sm mb-8 leading-relaxed">
              If you are an existing client with an active project, please contact your assigned project manager directly, or reach out via email for a high-priority response.
            </p>
            <a href="mailto:hello@novamacsolutions.com" className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-extrabold uppercase tracking-widest text-[#3B82F6] hover:text-[#F8FAFC] transition-colors">
              Email Us <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-gradient-to-b from-[#0F1C33] via-[#091222] to-[#050A14] border border-[#1E2E4A] border-t-white/15 hover:border-[#3B82F6]/80 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.65),0_0_20px_rgba(59,130,246,0.08)] hover:shadow-[0_25px_65px_rgba(0,0,0,0.85),0_0_45px_rgba(59,130,246,0.3)] p-8 sm:p-10 rounded-3xl">
            <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#040810] border border-[#1E2E4A] border-t-white/10 text-[#3B82F6] mb-6 shadow-inner">
              <MessageSquare className="w-6 h-6 text-[#3B82F6]" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] mb-3">General Inquiries</h3>
            <p className="text-[#94A3B8] font-normal text-xs sm:text-sm mb-8 leading-relaxed">
              For general questions or if you don&apos;t have an account, please reach out via our contact form.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-extrabold uppercase tracking-widest text-[#3B82F6] hover:text-[#F8FAFC] transition-colors">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
