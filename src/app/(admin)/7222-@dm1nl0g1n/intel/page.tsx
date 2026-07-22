import { prisma } from "@/lib/prisma";
import { formatDistanceToNow, subDays } from "date-fns";

export const dynamic = "force-dynamic";

export default async function AdminWebIntelPage() {
  const thirtyDaysAgo = subDays(new Date(), 30);
  
  const visits = await prisma.analyticsVisit.findMany({
    where: { createdAt: { gte: thirtyDaysAgo } },
    orderBy: { createdAt: "desc" }
  });

  const totalVisits = visits.length;
  const uniqueCountries = new Set(visits.map(v => v.country)).size;
  const serviceInterests = visits.filter(v => v.service !== null);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-white">Web Intel</h2>
        <p className="text-muted-foreground mt-1">Analytics and traffic insights from the last 30 days.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border border-white/10 bg-[#050505] rounded-xl p-6">
          <p className="text-sm font-medium text-gray-400">Total Visits</p>
          <p className="text-3xl font-bold text-white mt-2">{totalVisits}</p>
        </div>
        <div className="border border-white/10 bg-[#050505] rounded-xl p-6">
          <p className="text-sm font-medium text-gray-400">Unique Countries</p>
          <p className="text-3xl font-bold text-white mt-2">{uniqueCountries}</p>
        </div>
        <div className="border border-white/10 bg-[#050505] rounded-xl p-6">
          <p className="text-sm font-medium text-gray-400">Service Page Views</p>
          <p className="text-3xl font-bold text-white mt-2">{serviceInterests.length}</p>
        </div>
      </div>

      <div className="border border-white/10 rounded-xl overflow-hidden bg-[#050505]">
        <table className="w-full text-sm text-left">
          <thead className="bg-[#111116] text-gray-400 font-mono text-[10px] uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4 font-medium border-b border-white/10">Date</th>
              <th className="px-6 py-4 font-medium border-b border-white/10">Location</th>
              <th className="px-6 py-4 font-medium border-b border-white/10">Path</th>
              <th className="px-6 py-4 font-medium border-b border-white/10">Identified Interest</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10 text-gray-300">
            {visits.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-6 py-12 text-center text-gray-500">
                  No data collected yet.
                </td>
              </tr>
            ) : (
              visits.map((visit) => (
                <tr key={visit.id} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-gray-400">
                    {formatDistanceToNow(new Date(visit.createdAt), { addSuffix: true })}
                  </td>
                  <td className="px-6 py-4 font-medium text-white">
                    {visit.city && visit.city !== "Unknown" ? `${visit.city}, ` : ""}{visit.country || "Unknown"}
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-white/5 rounded text-xs text-gray-300 font-mono break-all">{visit.path}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-brand font-medium">
                    {visit.service || "-"}
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
