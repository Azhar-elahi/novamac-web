import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ & Knowledgebase | NovaMac Solutions",
  description: "Frequently asked questions about our custom digital systems, software engineering, code ownership, and transparent pricing model.",
};

const FAQS = [
  {
    category: "1. Core Digital Engineering & Capabilities",
    questions: [
      { 
        q: "Why choose custom Next.js web applications over WordPress or Wix?", 
        a: "Unlike template page builders that depend on 30+ bloated plugins and slow database queries, NovaMac hand-codes Next.js 15 web systems deployed on edge networks. This guarantees sub-second response speeds, 98+ Google Core Web Vitals, zero plugin vulnerability risks, and significantly higher conversion rates for your paid and organic traffic." 
      },
      { 
        q: "How does a custom CRM or ERP replace expensive SaaS monthly fees?", 
        a: "Off-the-shelf platforms like Salesforce or HubSpot charge per-seat monthly fees that scale into thousands of dollars per month as your team grows. NovaMac builds bespoke CRM and ERP operational portals tailored 100% around your exact business logic. You pay once for development with zero monthly seat licensing fees, saving your company over $20,000 annually." 
      },
      { 
        q: "How can AI Automation Agents be integrated into our business?", 
        a: "We develop autonomous LLM agents and Retrieval-Augmented Generation (RAG) knowledge systems that connect directly into your CRM, website, or backend. They operate 24/7 to automatically qualify leads, generate project briefs, process incoming documents, and answer customer support inquiries based on your private company documentation." 
      },
      { 
        q: "Do you build complete SaaS MVPs from scratch?", 
        a: "Yes. We engineer production-ready SaaS platforms — from initial database schema architecture and Figma UI/UX to multi-tenant user authentication, Stripe subscription billing, and edge cloud deployment in 4 weeks." 
      }
    ]
  },
  {
    category: "2. IP Ownership, Security & Performance SLA",
    questions: [
      { 
        q: "Do clients get 100% full source code and database IP ownership?", 
        a: "Yes. Upon project completion, NovaMac transfers full 100% intellectual property and Git repository ownership directly to your company. There are zero proprietary locks, zero vendor holdbacks, and zero recurring royalty fees. Your software belongs entirely to your business asset portfolio." 
      },
      { 
        q: "How do you guarantee sub-second page speed and Core Web Vitals?", 
        a: "Every build undergoes rigorous performance optimization: automatic WebP image compression, edge CDN routing, server-side route pre-fetching, and zero render-blocking scripts. We guarantee sub-0.8s LCP and top Google PageSpeed scores on all production launches." 
      },
      { 
        q: "What ongoing post-launch maintenance and security support do you offer?", 
        a: "We provide comprehensive post-launch retainer packages including 24/7 uptime monitoring, security updates, database backups, cloud hosting management, and ongoing feature enhancements so your systems scale smoothly." 
      }
    ]
  },
  {
    category: "3. Process, Scoping & Global Collaboration",
    questions: [
      { 
        q: "How do you manage projects across US, UK, Middle East, and Asia timezones?", 
        a: "We maintain dedicated async-first communication workflows with daily Slack updates, weekly live video demos, and transparent milestone tracking. Whether your team operates in PST, EST, GMT, GST, or PKT, communication is seamless and zero friction." 
      },
      { 
        q: "How is project pricing determined and do you offer fixed-scope quotes?", 
        a: "All pricing is transparent and project-scoped based on technical requirements. Web projects start from $1,500, while custom software, CRMs, and SaaS products receive fixed-scope blueprints before coding begins — ensuring zero surprise costs." 
      },
      { 
        q: "What is the exact process to start our project?", 
        a: "Starting is simple. Book a 30-minute Discovery Call or fill out our quick intake form. Our engineering lead analyzes your goals, identifies operational bottlenecks, and delivers a complete technical blueprint and timeline estimate within 24 hours." 
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


