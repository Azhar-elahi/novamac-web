import { prisma } from "@/lib/prisma";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import { Mail, MessageSquare, ArrowRight, UserCheck } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminMessagesPage() {
  let messages: any[] = [];
  try {
    messages = await prisma.contactMessage.findMany({
      orderBy: { createdAt: "desc" }
    });
  } catch (e) {
    console.warn("Error fetching contact messages:", e);
  }

  return (
    <div className="space-y-8 font-sans text-white">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <span className="px-3.5 py-1 bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] font-mono text-xs font-bold uppercase tracking-wider rounded-full inline-block mb-2">
            DIRECT CLIENT COMMUNICATIONS
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">Proposal Requests & Messages</h1>
          <p className="text-gray-400 text-sm mt-1">Manage, inspect, and reply to inquiries from the website contact forms.</p>
        </div>

        <Link
          href="/7222-@dm1nl0g1n/leads"
          className="px-5 py-2.5 bg-[#FF5733] hover:bg-white hover:text-[#202020] text-white font-extrabold text-xs uppercase tracking-wider rounded-full transition-all shadow-lg inline-flex items-center gap-2 self-start sm:self-auto"
        >
          <span>Open Lead Intelligence</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* MESSAGES TABLE CONTAINER */}
      <div className="bg-[#202020] border border-white/10 rounded-2xl overflow-hidden shadow-xl">
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#FF5733]/10 text-[#FF5733] rounded-xl border border-[#FF5733]/20">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-bold text-lg text-white">Incoming Message Stream</h2>
              <p className="text-xs text-gray-400">Total stored contact submissions ({messages.length})</p>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-black/40 text-gray-400 font-mono text-[10px] uppercase tracking-wider border-b border-white/10">
              <tr>
                <th className="px-6 py-4 font-semibold">Received</th>
                <th className="px-6 py-4 font-semibold">Sender Details</th>
                <th className="px-6 py-4 font-semibold">Subject / Service</th>
                <th className="px-6 py-4 font-semibold">Message Preview</th>
                <th className="px-6 py-4 font-semibold">Score / Priority</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-gray-300">
              {messages.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-400 font-mono">
                    No messages received yet. Test your contact form at <Link href="/contact" className="text-[#FF5733] underline">/contact</Link>.
                  </td>
                </tr>
              ) : (
                messages.map((msg) => (
                  <tr key={msg.id} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-gray-400 font-mono">
                      {formatDistanceToNow(new Date(msg.createdAt), { addSuffix: true })}
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-bold text-white text-sm">{msg.name}</div>
                      <div className="text-gray-400 font-mono text-[11px]">{msg.email}</div>
                      {msg.phone && <div className="text-gray-500 font-mono text-[10px]">{msg.phone}</div>}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2.5 py-1 bg-white/10 text-white rounded-full font-mono text-[10px] font-bold">
                        {msg.subject || "General Inquiry"}
                      </span>
                    </td>
                    <td className="px-6 py-4 max-w-xs">
                      <p className="line-clamp-2 text-gray-300 font-light">{msg.message}</p>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap font-mono">
                      <span className={`px-2.5 py-0.5 text-[10px] font-bold rounded-full uppercase ${
                        msg.priority === "HIGH" ? "bg-red-500/20 text-red-400 border border-red-500/40" : "bg-blue-500/20 text-blue-400 border border-blue-500/40"
                      }`}>
                        {msg.score || 50}/100 Score
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right space-x-2">
                      <a
                        href={`mailto:${msg.email}?subject=Re:%20${encodeURIComponent(msg.subject || "NovaMac Inquiry")}`}
                        className="px-3 py-1.5 bg-[#FF5733] hover:bg-white hover:text-[#202020] text-white font-extrabold text-[11px] rounded-lg transition-colors inline-flex items-center gap-1"
                      >
                        <Mail className="w-3 h-3" /> Reply
                      </a>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
