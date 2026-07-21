import { prisma } from "@/lib/prisma";
import { updateOrderStatus } from "../actions";

export const dynamic = "force-dynamic";

export default async function AdminOrdersPage() {
  const orders = await prisma.order.findMany({
    include: { user: { select: { name: true, email: true } } },
    orderBy: { createdAt: "desc" }
  });

  return (
    <div className="space-y-8 max-w-6xl">
      <div>
        <h1 className="text-3xl font-heading font-bold">Manage Orders</h1>
        <p className="text-muted-foreground mt-2">Update status and track delivery of client services.</p>
      </div>

      <div className="border border-border rounded-xl glass-card overflow-hidden">
        <table className="w-full text-sm text-left">
          <thead className="bg-secondary/50 text-muted-foreground uppercase">
            <tr>
              <th className="px-6 py-4 font-medium">Order Title</th>
              <th className="px-6 py-4 font-medium">Client</th>
              <th className="px-6 py-4 font-medium">Amount</th>
              <th className="px-6 py-4 font-medium">Date</th>
              <th className="px-6 py-4 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {orders.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-muted-foreground">
                  No orders found.
                </td>
              </tr>
            ) : (
              orders.map(order => (
                <tr key={order.id} className="hover:bg-secondary/30 transition-colors">
                  <td className="px-6 py-4 font-medium">{order.title}</td>
                  <td className="px-6 py-4">
                    <p>{order.user.name}</p>
                    <p className="text-xs text-muted-foreground">{order.user.email}</p>
                  </td>
                  <td className="px-6 py-4 font-semibold">${order.totalAmount}</td>
                  <td className="px-6 py-4 text-muted-foreground">{new Date(order.createdAt).toLocaleDateString()}</td>
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
                        className={`px-3 py-1.5 rounded-md text-xs font-semibold bg-secondary border focus:outline-none focus:ring-1 focus:ring-brand
                          ${order.status === 'DELIVERED' ? 'border-green-500 text-green-500' : 'border-border'}
                        `}
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
  );
}
