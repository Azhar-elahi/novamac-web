import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | NovaMac Solutions",
  description: "Frequently Asked Questions about our web development, AI automation, and digital services.",
};

const FAQS = [
  { q: "Do you build custom websites or use templates?", a: "We only provide custom solutions built from scratch to meet your specific goals. No generic templates." },
  { q: "How long does a typical project take?", a: "A marketing site takes 4–6 weeks. A complex web application or e-commerce platform typically takes 8–16 weeks. We will give you a precise timeline during our discovery call, and we stick to it." },
  { q: "Do you offer post-launch support and maintenance?", a: "Yes. We offer managed hosting, monitoring, security patches, and ongoing development retainers. Most of our clients stay with us long-term — we become their permanent development team." },
  { q: "How do you handle project communication?", a: "You get a dedicated project manager, access to our private Slack channel, weekly video syncs, and a live project dashboard. You will always know exactly where things stand." },
  { q: "What is your pricing model?", a: "Every project is unique. Our custom web development projects generally start at $1,500, while smaller tasks or consultations start around $299. Reach out for a tailored quote." },
];

export default function FAQPage() {
  return (
    <main className="bg-black text-white min-h-screen pt-36 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16">
          <p className="font-mono text-[10px] uppercase tracking-widest text-gray-500 mb-4">/ Common Questions</p>
          <h1 className="font-heading font-black text-5xl md:text-7xl tracking-tighter mb-6">Frequently Asked.</h1>
          <p className="text-xl text-gray-400 font-light">Everything you need to know about working with us.</p>
        </div>

        <div className="space-y-12">
          {FAQS.map((faq, i) => (
            <div key={i} className="border-t border-white/10 pt-8">
              <h3 className="text-2xl font-bold mb-4">{faq.q}</h3>
              <p className="text-gray-400 leading-relaxed font-light">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 bg-white/5 border border-white/10 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-bold mb-2">Still have questions?</h4>
            <p className="text-gray-400 font-light">We are happy to answer any questions you might have.</p>
          </div>
          <Link href="/contact" className="px-6 py-3 bg-white text-black font-bold uppercase tracking-widest text-xs inline-flex items-center gap-2 hover:bg-gray-200 transition-colors">
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
