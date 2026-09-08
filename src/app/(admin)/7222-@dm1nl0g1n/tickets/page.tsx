import { prisma } from "@/lib/prisma";
import { updateTicketStatus } from "../actions";
import { LifeBuoy, CheckCircle2, Clock, AlertCircle } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminTicketsPage() {
  let tickets: any[] = [];
  try {
    tickets = await prisma.ticket.findMany({
      include: { user: { select: { name: true, email: true } } },
      orderBy: { createdAt: "desc" }
    });
  } catch (e) {
    console.warn("Error fetching support tickets:", e);
  }

  return (
    <div className="space-y-8 font-sans text-white">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <span className="px-3.5 py-1 bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] font-mono text-xs font-bold uppercase tracking-wider rounded-full inline-block mb-2">
            CLIENT SUPPORT & MAINTENANCE DESK
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">Support Tickets</h1>
          <p className="text-gray-400 text-sm mt-1">Resolve technical assistance requests, feature tweaks, and maintenance inquiries.</p>
        </div>
      </div>

      {/* TICKETS LIST CONTAINER */}
      <div className="space-y-4">
        {tickets.length === 0 ? (
          <div className="p-12 text-center bg-[#202020] border border-white/10 rounded-2xl">
            <LifeBuoy className="w-10 h-10 text-gray-500 mx-auto mb-3" />
            <p className="text-gray-400 text-sm font-mono">No support tickets filed by clients yet.</p>
          </div>
        ) : (
          tickets.map((ticket) => (
            <div key={ticket.id} className="p-6 bg-[#202020] border border-white/10 rounded-2xl flex flex-col md:flex-row gap-6 justify-between items-start shadow-xl">
              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-0.5 bg-[#FF5733]/10 text-[#FF5733] border border-[#FF5733]/30 rounded-full font-mono text-[10px] font-bold uppercase">
                    TICKET #{ticket.id.slice(-6).toUpperCase()}
                  </span>
                  <h3 className="font-extrabold text-lg text-white">{ticket.subject}</h3>
                </div>
                <div className="p-4 bg-[#141414] border border-white/10 rounded-xl text-sm text-gray-300 font-light leading-relaxed">
                  {ticket.message}
                </div>
                <div className="flex flex-wrap gap-4 text-xs font-mono text-gray-400">
                  <span>Client: <strong className="text-white">{ticket.user?.name || "Client"}</strong> ({ticket.user?.email})</span>
                  <span>Filed: {new Date(ticket.createdAt).toLocaleString()}</span>
                </div>
              </div>
              
              <div className="w-full md:w-52 shrink-0">
                <form action={async (formData: FormData) => {
                  "use server";
                  const status = formData.get("status") as any;
                  await updateTicketStatus(ticket.id, status);
                }}>
                  <label className="block text-[10px] font-mono font-bold uppercase text-gray-400 mb-1.5">Ticket Status</label>
                  <select 
                    name="status"
                    defaultValue={ticket.status}
                    onChange={(e) => e.target.form?.requestSubmit()}
                    className={`w-full px-3 py-2 rounded-xl text-xs font-mono font-bold bg-[#141414] text-white border outline-none focus:border-[#FF5733] transition-colors ${
                      ticket.status === 'RESOLVED' ? 'border-emerald-500 text-emerald-400' :
                      ticket.status === 'IN_PROGRESS' ? 'border-blue-500 text-blue-400' : 'border-white/20'
                    }`}
                  >
                    <option value="OPEN">OPEN</option>
                    <option value="IN_PROGRESS">IN PROGRESS</option>
                    <option value="RESOLVED">RESOLVED</option>
                    <option value="CLOSED">CLOSED</option>
                  </select>
                </form>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
