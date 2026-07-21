import { prisma } from "@/lib/prisma";
import { updateClientRole } from "../actions";

export const dynamic = "force-dynamic";

export default async function AdminClientsPage() {
  const users = await prisma.user.findMany({
    orderBy: { createdAt: "desc" }
  });

  return (
    <div className="space-y-8 max-w-6xl">
      <div>
        <h1 className="text-3xl font-heading font-bold">Manage Clients</h1>
        <p className="text-muted-foreground mt-2">View registered users and modify their roles.</p>
      </div>

      <div className="border border-border rounded-xl glass-card overflow-hidden">
        <table className="w-full text-sm text-left">
          <thead className="bg-secondary/50 text-muted-foreground uppercase">
            <tr>
              <th className="px-6 py-4 font-medium">Name</th>
              <th className="px-6 py-4 font-medium">Email</th>
              <th className="px-6 py-4 font-medium">Joined Date</th>
              <th className="px-6 py-4 font-medium">Role</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {users.map(user => (
              <tr key={user.id} className="hover:bg-secondary/30 transition-colors">
                <td className="px-6 py-4 font-medium">{user.name || "N/A"}</td>
                <td className="px-6 py-4 text-muted-foreground">{user.email}</td>
                <td className="px-6 py-4 text-muted-foreground">{new Date(user.createdAt).toLocaleDateString()}</td>
                <td className="px-6 py-4">
                  <form action={async (formData: FormData) => {
                    "use server";
                    const role = formData.get("role") as any;
                    await updateClientRole(user.id, role);
                  }}>
                    <select 
                      name="role"
                      defaultValue={user.role}
                      onChange={(e) => e.target.form?.requestSubmit()}
                      className={`px-3 py-1.5 rounded-md text-xs font-semibold bg-secondary border focus:outline-none focus:ring-1 focus:ring-brand
                        ${user.role === 'ADMIN' ? 'border-red-500 text-red-500' : 'border-border'}
                      `}
                    >
                      <option value="USER">USER</option>
                      <option value="ADMIN">ADMIN</option>
                    </select>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
