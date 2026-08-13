import { ArrowRight, MessageSquare, LifeBuoy } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support | NovaMac Solutions",
  description: "Get help with your NovaMac Solutions projects.",
};

export default function SupportPage() {
  return (
    <main className="bg-[#f6f1e7] text-[#211f1a] min-h-screen pt-40 pb-24 px-6 ">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center">
          <span className="annotation-label -rotate-2 inline-block mb-4">— help center</span>
          <h1 className="font-heading font-medium text-[clamp(2.4rem,6vw,4.4rem)] tracking-[-0.01em] leading-[1.05] mb-6">
            How can we <span className="text-script">help?</span>
          </h1>
          <p className="text-lg text-[#211f1a]/55 font-light max-w-xl mx-auto leading-relaxed">
            Whether you need technical support, have a billing question, or want to report an issue, our team is here for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-black/5 shadow-sm p-8 rounded-2xl">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#2f6b45]/10 mb-6">
              <LifeBuoy className="w-5 h-5 text-[#2f6b45]" />
            </div>
            <h3 className="font-heading text-2xl font-medium mb-3">Existing Clients</h3>
            <p className="text-[#211f1a]/55 font-light mb-8 leading-relaxed">
              If you are an existing client with an active project, please contact your assigned project manager directly, or reach out via email for a high-priority response.
            </p>
            <a href="mailto:hello@novamacsolutions.com" className="hover-trigger inline-flex items-center gap-2 text-sm font-medium text-[#2f6b45] hover:opacity-80 transition-colors">
              Email Us <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-white border border-black/5 shadow-sm p-8 rounded-2xl">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#2f6b45]/10 mb-6">
              <MessageSquare className="w-5 h-5 text-[#2f6b45]" />
            </div>
            <h3 className="font-heading text-2xl font-medium mb-3">General Inquiries</h3>
            <p className="text-[#211f1a]/55 font-light mb-8 leading-relaxed">
              For general questions or if you don&apos;t have an account, please reach out via our contact form.
            </p>
            <Link href="/contact" className="hover-trigger inline-flex items-center gap-2 text-sm font-medium text-[#2f6b45] hover:opacity-80 transition-colors">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
