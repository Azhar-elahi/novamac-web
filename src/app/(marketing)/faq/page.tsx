import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | NovaMac Solutions",
  description: "Frequently Asked Questions about our custom web development, AI automation, and digital growth services.",
};

const FAQS = [
  {
    category: "General & Process",
    questions: [
      { q: "What exactly does NovaMac Solutions do?", a: "We are a premium digital engineering agency. We build bespoke, high-performance web applications, complex e-commerce platforms, and advanced AI-driven business automations. Our goal is to solve complex business problems through elite software engineering rather than just building basic websites." },
      { q: "Do you use templates like WordPress or Shopify themes?", a: "No. We engineer every project from scratch using modern frameworks like Next.js, React, and Node.js. This ensures your platform is infinitely scalable, completely secure, and operates at lightning speed without the bloat of traditional templates." },
      { q: "How does the project process work?", a: "It starts with a deep Discovery Phase where we analyze your business needs. We then move into Architecture & Design, followed by Agile Development where you get weekly updates. Finally, we handle rigorous Testing and Deployment, providing you with a fully finished, battle-tested product." },
      { q: "Will I have a dedicated project manager?", a: "Absolutely. Every client is assigned a dedicated project manager and given access to a private communication channel (like Slack or Discord). You will always know exactly where your project stands." },
      { q: "Can I see progress during development?", a: "Yes. We deploy to a staging environment early and often. You will be able to click through the application, test features as they are built, and provide feedback in real-time." }
    ]
  },
  {
    category: "Timelines & Delivery",
    questions: [
      { q: "How long does a typical project take?", a: "A custom marketing or corporate website usually takes 4 to 6 weeks. Complex web applications, SaaS products, or large-scale e-commerce platforms typically require 8 to 16 weeks depending on feature complexity." },
      { q: "Can you deliver a project faster if I am in a rush?", a: "We maintain strict quality standards, but we do offer expedited timelines for mission-critical projects at a premium rate. Let us know your deadline during the initial consultation." },
      { q: "What happens if a project goes past the estimated timeline?", a: "Because we scope projects meticulously during the Discovery Phase, delays are rare. However, if the scope expands because of new feature requests, we will clearly communicate any timeline adjustments before proceeding." },
      { q: "Do you handle the deployment and hosting setup?", a: "Yes. We handle end-to-end deployment. We typically deploy on modern edge-networks like Vercel or AWS to ensure your application has 99.99% uptime and scales automatically." },
      { q: "Will I own the code after the project is done?", a: "100%. Once the final invoice is paid, all intellectual property, source code, and assets are fully transferred to you. We do not hold your code hostage." }
    ]
  },
  {
    category: "Pricing & Billing",
    questions: [
      { q: "What is your pricing model?", a: "We offer both Fixed-Bid pricing for clearly scoped projects and Time-and-Materials (Retainer) pricing for ongoing or highly dynamic development. Our custom engineering projects typically start at $1,500." },
      { q: "Do you require a deposit upfront?", a: "Yes. We typically structure payments in milestones: 50% upfront to commence work, 25% upon completion of the beta build, and 25% prior to the final launch and handover." },
      { q: "Are there any hidden fees or ongoing mandatory costs?", a: "No hidden fees. We provide a transparent proposal before any work begins. Ongoing costs only apply if you opt into our optional post-launch maintenance, hosting, and support retainers." },
      { q: "Do you offer financing or payment plans?", a: "For large enterprise projects, we can structure payments across multiple monthly milestones to align with your budgeting cycles." },
      { q: "What if I just need a small change or a consultation?", a: "We offer hourly consultation and small-task development blocks starting at $299. Reach out via our contact form to discuss your specific need." }
    ]
  },
  {
    category: "Support & Maintenance",
    questions: [
      { q: "Do you offer post-launch support and maintenance?", a: "Yes. We offer comprehensive managed hosting, 24/7 uptime monitoring, security patching, and ongoing development retainers. Most of our clients retain us as their permanent technical team." },
      { q: "What if there is a bug after the site goes live?", a: "We provide a 30-day warranty period after launch. Any bugs or issues related to the original scope of work will be fixed completely free of charge." },
      { q: "Can you take over an existing project built by another agency?", a: "Yes, but we require a paid Technical Audit first. We need to evaluate the existing codebase for security, scalability, and technical debt before committing to taking it over." },
      { q: "How do you ensure the security of the web applications?", a: "We follow strict security best practices, including data encryption, SQL injection prevention, CSRF protection, and regular dependency audits. We build applications designed to handle sensitive data securely." },
      { q: "Will I be able to update content on the site myself?", a: "Yes. Depending on your needs, we integrate modern, headless Content Management Systems (like Sanity or Contentful) so you can easily edit text, images, and blogs without touching any code." }
    ]
  }
];

export default function FAQPage() {
  return (
    <main className="bg-[#0B1220] text-[#F8FAFC] min-h-screen pt-12 sm:pt-20 pb-24 px-6 md:px-12 relative font-sans">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-20 text-center">
          <span className="px-4 py-1.5 bg-gradient-to-r from-[#0F1C33] to-[#091222] border border-[#1E2E4A] border-t-white/10 text-[#3B82F6] font-mono text-xs sm:text-sm font-bold uppercase tracking-widest rounded-full inline-block mb-4 shadow-md">
            COMMON QUESTIONS & ANSWERS
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black tracking-tight leading-[1.05] sm:leading-[0.9] text-[#F8FAFC] mb-6">
            Everything you need<br />to <span className="text-[#3B82F6]">know.</span>
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-[#94A3B8] font-normal max-w-2xl mx-auto leading-relaxed bg-gradient-to-b from-[#0F1C33]/90 via-[#091222]/95 to-[#050A14] p-5 sm:p-7 rounded-2xl border border-[#1E2E4A] border-t-white/10 shadow-md">
            Detailed answers to the questions we get asked most about our engineering, process, and pricing.
          </p>
        </div>

        <div className="space-y-16">
          {FAQS.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-8 border-b border-[#1E2E4A] pb-4 text-[#3B82F6]">{section.category}</h2>
              <div className="space-y-6">
                {section.questions.map((faq, i) => (
                  <div key={i} className="bg-gradient-to-b from-[#0F1C33] via-[#091222] to-[#050A14] border border-[#1E2E4A] border-t-white/15 hover:border-[#3B82F6]/80 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.65),0_0_20px_rgba(59,130,246,0.08)] hover:shadow-[0_25px_65px_rgba(0,0,0,0.85),0_0_45px_rgba(59,130,246,0.3)] p-7 md:p-9 rounded-3xl">
                    <h3 className="text-xl md:text-2xl font-extrabold text-[#F8FAFC] mb-3">{faq.q}</h3>
                    <p className="text-[#94A3B8] leading-relaxed font-normal text-xs sm:text-base">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-gradient-to-r from-[#0F1C33] via-[#091222] to-[#0F1C33] border border-[#1E2E4A] border-t-white/15 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left shadow-[0_25px_60px_rgba(0,0,0,0.7)]">
          <div>
            <h4 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] mb-3">Still have questions?</h4>
            <p className="text-[#94A3B8] font-normal max-w-md text-xs sm:text-base">We are always happy to answer any specific questions you might have about your unique project.</p>
          </div>
          <Link href="/contact" className="shrink-0 px-9 py-4.5 bg-[#3B82F6] text-white font-black text-xs sm:text-sm tracking-widest uppercase rounded-full inline-flex items-center gap-2 hover:bg-white hover:text-[#0B1220] transition-all duration-300 shadow-[0_10px_30px_rgba(59,130,246,0.35)]">
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
