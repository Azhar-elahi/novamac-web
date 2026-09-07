import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ & Knowledgebase | NovaMac Solutions",
  description: "Frequently asked questions about our custom digital systems, software engineering, code ownership, and transparent pricing model.",
};

const FAQS = [
  {
    category: "Services & Capabilities",
    questions: [
      { 
        q: "What does NovaMac build?", 
        a: "NovaMac designs and engineers custom high-performance websites, tailored CRM and ERP business systems, AI automations, and full-stack SaaS software applications built specifically around your operations." 
      },
      { 
        q: "Do you work with international businesses?", 
        a: "Yes. We work with companies, founders, and enterprises globally across North America, Europe, the Middle East, and Asia with async-friendly workflows and clear milestones." 
      },
      { 
        q: "Can you build custom CRM and ERP systems?", 
        a: "Yes. We build bespoke CRM pipelines, operational dashboards, inventory trackers, and internal ERP systems that streamline your business workflows without expensive monthly seat licenses." 
      },
      { 
        q: "Can you integrate AI into existing systems?", 
        a: "Yes. We integrate AI capabilities, automated customer response systems, data extraction pipelines, and smart workflow automations into existing software stacks and custom applications." 
      },
      { 
        q: "Do you build SaaS products from scratch?", 
        a: "Yes. We engineer complete SaaS platforms — from initial architecture and vector UI design to database schemas, payment processing, multi-tenant billing, and launch-ready MVPs." 
      },
      { 
        q: "Can you improve an existing website?", 
        a: "Yes. We audit, redesign, and re-engineer existing websites to fix poor speed, weak mobile conversion, outdated tech stacks, and inefficient messaging." 
      }
    ]
  },
  {
    category: "Process, Pricing & Partnership",
    questions: [
      { 
        q: "How does a project start?", 
        a: "Every project starts with a Discovery & Scoping call. We analyze your requirements, identify bottlenecks, and deliver a detailed technical blueprint, timeline, and transparent quote." 
      },
      { 
        q: "How is project pricing determined?", 
        a: "Pricing is transparent and project-based depending on complexity, required integrations, and system scope. Web projects start from $1,500, while custom software and business systems receive tailored proposals." 
      },
      { 
        q: "Do you provide ongoing support?", 
        a: "Yes. We offer post-launch monitoring, security updates, feature expansions, and technical retainers so your digital systems continue operating reliably as your business scales." 
      }
    ]
  }
];

import { OptimizedVideoBackground } from "@/components/ui/OptimizedVideoBackground";

export default function FAQPage() {
  return (
    <main className="bg-[#FAF2F2] text-[#0A2540] min-h-screen pt-10 sm:pt-16 pb-24 font-sans relative overflow-hidden">
      
      {/* HERO SECTION WITH VIDEO BACKGROUND */}
      <section className="relative min-h-[420px] sm:min-h-[480px] flex items-center justify-center overflow-hidden mb-16 mx-4 sm:mx-8 md:mx-12 rounded-3xl border border-[#F0DCDC] shadow-2xl bg-[#060D17] contain-content">
        <OptimizedVideoBackground src="/videos/tech-innovation.mp4" opacity={0.35} className="absolute inset-0 scale-105" />

        {/* Ambient Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060D17]/80 via-[#060D17]/40 to-[#060D17]/60 z-0" />

        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 py-16 sm:py-20 space-y-6">
          <span className="px-4 py-1.5 bg-[#FF5733]/20 border border-[#FF5733]/50 text-[#FF5733] font-mono text-xs sm:text-sm font-bold uppercase tracking-widest rounded-full inline-block backdrop-blur-md shadow-lg">
            BUSINESS FAQ & KNOWLEDGEBASE
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Clear Answers to Your <span className="text-[#FF5733]">Questions.</span>
          </h1>
          <p className="text-sm sm:text-lg text-gray-200 font-normal max-w-2xl mx-auto leading-relaxed bg-white/5 backdrop-blur-md p-5 sm:p-7 rounded-2xl border border-white/10 shadow-xl">
            Everything you need to know about our custom digital systems, engineering process, code ownership, and transparent project estimates.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        <div className="space-y-16">
          {FAQS.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-8 border-b border-[#F0DCDC] pb-4 text-[#FF5733]">{section.category}</h2>
              <div className="space-y-6">
                {section.questions.map((faq, i) => (
                  <div key={i} className="bg-white border border-[#F0DCDC] hover:border-[#FF5733] transition-all shadow-sm p-7 md:p-9 rounded-3xl">
                    <h3 className="text-xl md:text-2xl font-extrabold text-[#0A2540] mb-3">{faq.q}</h3>
                    <p className="text-gray-600 leading-relaxed font-normal text-xs sm:text-base">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-[#060D17] text-white border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left shadow-2xl">
          <div>
            <h4 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">Ready to Discuss Your Project?</h4>
            <p className="text-gray-300 font-normal max-w-md text-xs sm:text-base">Our engineering team is ready to analyze your goals and build a fixed-scope proposal.</p>
          </div>
          <Link href="/contact" className="shrink-0 px-9 py-4.5 bg-[#FF5733] text-white font-black text-xs sm:text-sm tracking-widest uppercase rounded-full inline-flex items-center gap-2 hover:bg-white hover:text-[#0A2540] transition-all duration-300 shadow-xl">
            <span>Get Started</span> <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}


