import { prisma } from "@/lib/prisma";
import { updateTicketStatus } from "../actions";

export const dynamic = "force-dynamic";

export default async function AdminTicketsPage() {
  const tickets = await prisma.ticket.findMany({
    include: { user: { select: { name: true, email: true } } },
    orderBy: { createdAt: "desc" }
  });

  return (
    <div className="space-y-8 max-w-6xl">
      <div>
        <h1 className="text-3xl font-heading font-bold">Support Tickets</h1>
        <p className="text-muted-foreground mt-2">Resolve client inquiries and requests.</p>
      </div>

      <div className="grid gap-6">
        {tickets.length === 0 ? (
          <div className="p-8 text-center border border-border rounded-xl glass-card">
            <p className="text-muted-foreground">No support tickets found.</p>
          </div>
        ) : (
          tickets.map(ticket => (
            <div key={ticket.id} className="p-6 border border-border rounded-xl glass-card flex flex-col md:flex-row gap-6 justify-between items-start">
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-3">
                  <h3 className="font-semibold text-lg">{ticket.subject}</h3>
                </div>
                <p className="text-sm text-foreground bg-secondary/30 p-4 rounded-lg border border-border/50">
                  {ticket.message}
                </p>
                <div className="flex gap-4 text-xs text-muted-foreground mt-2">
                  <span>From: {ticket.user.name} ({ticket.user.email})</span>
                  <span>Date: {new Date(ticket.createdAt).toLocaleString()}</span>
                </div>
              </div>
              
              <div className="w-full md:w-48">
                <form action={async (formData: FormData) => {
                  "use server";
                  const status = formData.get("status") as any;
                  await updateTicketStatus(ticket.id, status);
                }}>
                  <label className="block text-xs font-medium mb-1">Status</label>
                  <select 
                    name="status"
                    defaultValue={ticket.status}
                    onChange={(e) => e.target.form?.requestSubmit()}
                    className={`w-full px-3 py-2 rounded-md text-sm font-semibold bg-secondary border focus:outline-none focus:ring-1 focus:ring-brand
                      ${ticket.status === 'RESOLVED' ? 'border-green-500 text-green-500' : 'border-border'}
                    `}
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
