import { prisma } from "@/lib/prisma";
import { formatDistanceToNow } from "date-fns";

export const dynamic = "force-dynamic";

export default async function AdminMessagesPage() {
  const messages = await prisma.contactMessage.findMany({
    orderBy: { createdAt: "desc" }
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-800">Proposal Requests & Messages</h2>
          <p className="text-muted-foreground mt-1">Manage inquiries from the public website contact form.</p>
        </div>
      </div>

      <div className="border border-slate-200 rounded-xl overflow-hidden bg-white">
        <table className="w-full text-sm text-left">
          <thead className="bg-[#111116] text-slate-600 font-mono text-[10px] uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4 font-medium border-b border-slate-200">Date</th>
              <th className="px-6 py-4 font-medium border-b border-slate-200">Name</th>
              <th className="px-6 py-4 font-medium border-b border-slate-200">Email</th>
              <th className="px-6 py-4 font-medium border-b border-slate-200">Service</th>
              <th className="px-6 py-4 font-medium border-b border-slate-200">Message</th>
              <th className="px-6 py-4 font-medium border-b border-slate-200 text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10 text-slate-700">
            {messages.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-12 text-center text-slate-600">
                  No messages received yet.
                </td>
              </tr>
            ) : (
              messages.map((msg) => (
                <tr key={msg.id} className="hover:bg-slate-100/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-slate-600">
                    {formatDistanceToNow(new Date(msg.createdAt), { addSuffix: true })}
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-800">{msg.name}</td>
                  <td className="px-6 py-4">
                    <a href={`mailto:${msg.email}`} className="text-blue-600 hover:underline">{msg.email}</a>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 bg-slate-50/10 text-slate-800 rounded text-xs">{msg.subject}</span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="line-clamp-2 max-w-xs">{msg.message}</p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <span className={`px-2 py-1 rounded text-xs ${
                      msg.status === 'UNREAD' ? 'bg-red-500/20 text-red-400' : 'bg-gray-800 text-slate-600'
                    }`}>
                      {msg.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
