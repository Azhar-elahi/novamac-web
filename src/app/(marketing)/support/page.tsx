import { ArrowRight, MessageSquare, LifeBuoy, Zap, Clock, CheckCircle, ShieldAlert } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

import { OptimizedVideoBackground } from "@/components/ui/OptimizedVideoBackground";

export const metadata: Metadata = {
  title: "Support & Help Center | NovaMac Solutions",
  description: "Get immediate technical assistance, project management support, and priority emergency help from NovaMac Solutions engineers.",
};

export default function SupportPage() {
  return (
    <main className="bg-[#FAF2F2] text-[#202020] min-h-screen pt-10 sm:pt-16 pb-24 font-sans relative overflow-hidden">
      
      {/* HERO SECTION WITH VIDEO BACKGROUND */}
      <section className="relative min-h-[460px] sm:min-h-[520px] flex items-center justify-center overflow-hidden mb-16 mx-4 sm:mx-8 md:mx-12 rounded-3xl border border-[#F0DCDC] shadow-2xl bg-black contain-content">
        <OptimizedVideoBackground src="/videos/frustrated-woman.mp4" opacity={0.9} className="absolute inset-0 scale-105" />

        {/* Ambient Gradient Overlays (Matching Home Page) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/40 z-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-[#FF5733]/10 to-black/60 z-0" />

        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 py-16 sm:py-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FF5733]/20 border border-[#FF5733]/50 text-[#FF5733] font-mono text-xs sm:text-sm font-bold uppercase tracking-widest rounded-full mb-6 backdrop-blur-md shadow-lg">
            <Zap className="w-4 h-4 text-[#FF5733] animate-pulse" />
            24/7 TECHNICAL SUPPORT & DISPATCH
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05] mb-6 drop-shadow-md">
            Facing Issues? <br />
            We Turn Frustration Into <span className="text-[#FF5733]">Solutions.</span>
          </h1>

          <p className="text-sm sm:text-lg md:text-xl text-gray-200 font-normal max-w-2xl mx-auto leading-relaxed bg-[#202020]/60 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl">
            Whether you need urgent emergency fixes, billing assistance, or dedicated project manager support, our engineering team responds instantly.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT GRID */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 space-y-16 relative z-10">

        {/* SLA GUARANTEE BANNER */}
        <div className="bg-white border border-[#F0DCDC] p-6 sm:p-8 rounded-3xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FF5733]/10 border border-[#FF5733]/30 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6 text-[#FF5733]" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-extrabold text-[#202020]">Rapid 2-Hour Response SLA</h4>
              <p className="text-gray-600 text-xs sm:text-sm">Active retainers include guaranteed response times within 120 minutes for critical issues.</p>
            </div>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#FF5733] bg-[#FF5733]/10 px-4 py-2 rounded-full border border-[#FF5733]/20">
            <CheckCircle className="w-4 h-4" /> 99.9% UPTIME MONITORING
          </div>
        </div>

        {/* SUPPORT CARDS GRID */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
          
          {/* Card 1: Existing Clients */}
          <div className="bg-white border border-[#F0DCDC] hover:border-[#FF5733] transition-all duration-300 shadow-sm hover:shadow-xl p-8 sm:p-10 rounded-3xl group flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] mb-6 group-hover:scale-110 transition-transform">
                <LifeBuoy className="w-7 h-7 text-[#FF5733]" />
              </div>
              <span className="text-xs font-mono font-bold text-[#FF5733] uppercase tracking-wider mb-2 block">PRIORITY TICKET SYSTEM</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#202020] mb-4 group-hover:text-[#FF5733] transition-colors">Existing Clients & Retainers</h3>
              <p className="text-gray-600 font-normal text-xs sm:text-sm mb-8 leading-relaxed">
                If you are an active client or retainer account, contact your designated senior lead directly via Slack, Discord, or priority email dispatch.
              </p>
            </div>
            <a 
              href="mailto:hello@novamacsolutions.com?subject=Priority%20Support%20Request" 
              className="inline-flex items-center justify-center gap-2 py-4 px-6 bg-[#FF5733] text-white font-mono text-xs sm:text-sm font-extrabold uppercase tracking-widest rounded-full hover:bg-[#202020] transition-colors shadow-md"
            >
              Dispatch Priority Support <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Card 2: General Inquiries */}
          <div className="bg-white border border-[#F0DCDC] hover:border-[#FF5733] transition-all duration-300 shadow-sm hover:shadow-xl p-8 sm:p-10 rounded-3xl group flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] mb-6 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-7 h-7 text-[#FF5733]" />
              </div>
              <span className="text-xs font-mono font-bold text-[#FF5733] uppercase tracking-wider mb-2 block">GENERAL HELP & BILLING</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#202020] mb-4 group-hover:text-[#FF5733] transition-colors">General Questions & Quotes</h3>
              <p className="text-gray-600 font-normal text-xs sm:text-sm mb-8 leading-relaxed">
                Have a question about an upcoming build, custom feature request, billing inquiry, or technical scope audit? Send us a message directly.
              </p>
            </div>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 py-4 px-6 bg-[#202020] text-white font-mono text-xs sm:text-sm font-extrabold uppercase tracking-widest rounded-full hover:bg-[#FF5733] transition-colors shadow-md"
            >
              Contact Support Team <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

        {/* EMERGENCY INCIDENT BOX */}
        <div className="bg-[#202020] text-white border border-white/10 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#FF5733] uppercase tracking-widest bg-[#FF5733]/10 px-3.5 py-1 rounded-full border border-[#FF5733]/30">
              <ShieldAlert className="w-4 h-4 text-[#FF5733]" /> EMERGENCY SITE DOWN?
            </div>
            <h4 className="text-2xl sm:text-3xl font-black">Mission-Critical Incident Escalation</h4>
            <p className="text-gray-300 font-normal text-xs sm:text-sm max-w-xl">
              If your production website, server, or API service is down, mark your message header with <code className="text-[#FF5733] font-mono">[URGENT INCIDENT]</code> for immediate emergency triage.
            </p>
          </div>
          <a 
            href="mailto:hello@novamacsolutions.com?subject=[URGENT%20INCIDENT]%20System%20Outage" 
            className="shrink-0 py-4 px-8 bg-[#FF5733] text-white font-black text-xs sm:text-sm tracking-widest uppercase rounded-full hover:bg-white hover:text-[#202020] transition-all duration-300 shadow-xl inline-flex items-center gap-2"
          >
            Escalate Incident <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </main>
  );
}
