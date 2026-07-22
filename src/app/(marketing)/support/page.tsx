import { ArrowRight, MessageSquare, LifeBuoy } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support | NovaMac Solutions",
  description: "Get help with your NovaMac Solutions projects.",
};

export default function SupportPage() {
  return (
    <main className="bg-black text-white min-h-screen pt-36 pb-20 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center">
          <p className="font-mono text-[10px] uppercase tracking-widest text-gray-500 mb-4">/ Help Center</p>
          <h1 className="font-heading font-black text-5xl md:text-7xl tracking-tighter mb-6">How can we help?</h1>
          <p className="text-xl text-gray-400 font-light max-w-xl mx-auto">
            Whether you need technical support, have a billing question, or want to report an issue, our team is here for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-16">
          <div className="p-8 border border-white/10 bg-[#050505] rounded-2xl hover:border-white/30 transition-colors">
            <LifeBuoy className="w-8 h-8 text-white mb-6" />
            <h3 className="text-2xl font-bold mb-3">Client Portal</h3>
            <p className="text-gray-400 font-light mb-8">
              If you are an existing client, please log in to your dashboard to submit a high-priority support ticket.
            </p>
            <Link href="/7222-@dm1nl0g1n/login" className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest hover:text-gray-300">
              Go to Portal <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="p-8 border border-white/10 bg-[#050505] rounded-2xl hover:border-white/30 transition-colors">
            <MessageSquare className="w-8 h-8 text-white mb-6" />
            <h3 className="text-2xl font-bold mb-3">General Inquiries</h3>
            <p className="text-gray-400 font-light mb-8">
              For general questions or if you don't have an account, please reach out via our contact form.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest hover:text-gray-300">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
