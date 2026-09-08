import { prisma } from "@/lib/prisma";
import { updateOrderStatus } from "../actions";
import { ShoppingBag, CheckCircle2, Clock, Package } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminOrdersPage() {
  let orders: any[] = [];
  try {
    orders = await prisma.order.findMany({
      include: { user: { select: { name: true, email: true } } },
      orderBy: { createdAt: "desc" }
    });
  } catch (e) {
    console.warn("Error fetching client orders:", e);
  }

  return (
    <div className="space-y-8 font-sans text-white">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <span className="px-3.5 py-1 bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] font-mono text-xs font-bold uppercase tracking-wider rounded-full inline-block mb-2">
            CLIENT SERVICE FULFILLMENT
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">Manage Client Orders</h1>
          <p className="text-gray-400 text-sm mt-1">Track service milestones, update delivery status, and review active client packages.</p>
        </div>
      </div>

      {/* ORDERS TABLE CONTAINER */}
      <div className="bg-[#202020] border border-white/10 rounded-2xl overflow-hidden shadow-xl">
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#FF5733]/10 text-[#FF5733] rounded-xl border border-[#FF5733]/20">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-bold text-lg text-white">Active Order Registry</h2>
              <p className="text-xs text-gray-400">Total client orders logged ({orders.length})</p>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-black/40 text-gray-400 font-mono text-[10px] uppercase tracking-wider border-b border-white/10">
              <tr>
                <th className="px-6 py-4 font-semibold">Order Title</th>
                <th className="px-6 py-4 font-semibold">Client</th>
                <th className="px-6 py-4 font-semibold">Amount</th>
                <th className="px-6 py-4 font-semibold">Date</th>
                <th className="px-6 py-4 font-semibold">Status Update</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-gray-300">
              {orders.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-gray-400 font-mono">
                    No active client orders found in database.
                  </td>
                </tr>
              ) : (
                orders.map((order) => (
                  <tr key={order.id} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-bold text-white text-sm">{order.title}</td>
                    <td className="px-6 py-4">
                      <p className="font-bold text-white">{order.user?.name || "Client"}</p>
                      <p className="text-xs text-gray-400 font-mono">{order.user?.email}</p>
                    </td>
                    <td className="px-6 py-4 font-black text-[#FF5733] text-sm font-mono">${order.totalAmount}</td>
                    <td className="px-6 py-4 text-gray-400 font-mono">{new Date(order.createdAt).toLocaleDateString()}</td>
                    <td className="px-6 py-4">
                      <form action={async (formData: FormData) => {
                        "use server";
                        const status = formData.get("status") as any;
                        await updateOrderStatus(order.id, status);
                      }}>
                        <select 
                          name="status"
                          defaultValue={order.status}
                          onChange={(e) => e.target.form?.requestSubmit()}
                          className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold bg-[#141414] text-white border outline-none focus:border-[#FF5733] transition-colors ${
                            order.status === 'DELIVERED' ? 'border-emerald-500 text-emerald-400' :
                            order.status === 'IN_PROGRESS' ? 'border-blue-500 text-blue-400' : 'border-white/20'
                          }`}
                        >
                          <option value="RECEIVED">RECEIVED</option>
                          <option value="IN_PROGRESS">IN PROGRESS</option>
                          <option value="REVIEW">REVIEW</option>
                          <option value="DELIVERED">DELIVERED</option>
                        </select>
                      </form>
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
