import { prisma } from "@/lib/prisma";
import { formatDistanceToNow, subDays, subHours } from "date-fns";
import { Activity, Globe, Eye, MapPin, Layers } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminWebIntelPage() {
  const thirtyDaysAgo = subDays(new Date(), 30);
  const twentyFourHoursAgo = subHours(new Date(), 24);

  let visits: any[] = [];
  try {
    visits = await prisma.analyticsVisit.findMany({
      where: { createdAt: { gte: thirtyDaysAgo } },
      orderBy: { createdAt: "desc" }
    });
  } catch (e) {
    console.warn("Analytics DB query failed:", e);
  }

  const totalVisits = visits.length;
  const visitsToday = visits.filter(v => new Date(v.createdAt) >= twentyFourHoursAgo).length;
  const uniqueCountries = new Set(visits.map(v => v.country).filter(Boolean)).size;

  // Aggregate Top Visited Pages
  const pageCounts: Record<string, number> = {};
  visits.forEach(v => {
    const p = v.path || "/";
    pageCounts[p] = (pageCounts[p] || 0) + 1;
  });
  const topPages = Object.entries(pageCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  // Aggregate Top Geographic Locations
  const geoCounts: Record<string, number> = {};
  visits.forEach(v => {
    const loc = (v.country && v.country !== "Unknown") ? `${v.country}` : "Global / Unknown";
    geoCounts[loc] = (geoCounts[loc] || 0) + 1;
  });
  const topLocations = Object.entries(geoCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  return (
    <div className="space-y-8 font-sans">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#FF5733]/10 rounded-full text-xs font-mono font-bold text-[#FF5733] uppercase tracking-wider mb-2">
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            LIVE TRAFFIC & VISITOR TELEMETRY
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Web Intel Analytics</h1>
          <p className="text-gray-400 text-sm mt-1">Real-time visitor logs, geographic sources, and page traffic breakdown.</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold rounded-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            LIVE STREAM ACTIVE
          </span>
        </div>
      </div>

      {/* Top Telemetry KPI Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-[#202020] border border-white/10 rounded-2xl p-6 shadow-md">
          <div className="flex items-center justify-between text-gray-400 mb-3">
            <span className="text-xs font-mono uppercase font-bold text-gray-400">Total Visits (30D)</span>
            <Eye className="w-4 h-4 text-[#FF5733]" />
          </div>
          <div className="text-3xl font-black text-white">{totalVisits}</div>
          <p className="text-[11px] text-gray-400 mt-1">Total pageviews tracked</p>
        </div>

        <div className="bg-[#202020] border border-white/10 rounded-2xl p-6 shadow-md">
          <div className="flex items-center justify-between text-gray-400 mb-3">
            <span className="text-xs font-mono uppercase font-bold text-gray-400">Visits Last 24H</span>
            <Activity className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-3xl font-black text-white">{visitsToday}</div>
          <p className="text-[11px] text-emerald-400 font-medium mt-1">Active daily traffic</p>
        </div>

        <div className="bg-[#202020] border border-white/10 rounded-2xl p-6 shadow-md">
          <div className="flex items-center justify-between text-gray-400 mb-3">
            <span className="text-xs font-mono uppercase font-bold text-gray-400">Unique Countries</span>
            <Globe className="w-4 h-4 text-[#FF5733]" />
          </div>
          <div className="text-3xl font-black text-white">{uniqueCountries}</div>
          <p className="text-[11px] text-gray-400 mt-1">Global visitor origins</p>
        </div>

        <div className="bg-[#202020] border border-white/10 rounded-2xl p-6 shadow-md">
          <div className="flex items-center justify-between text-gray-400 mb-3">
            <span className="text-xs font-mono uppercase font-bold text-gray-400">Service Page Views</span>
            <Layers className="w-4 h-4 text-[#FF5733]" />
          </div>
          <div className="text-3xl font-black text-white">
            {visits.filter(v => v.service !== null).length}
          </div>
          <p className="text-[11px] text-gray-400 mt-1">High-intent service interest</p>
        </div>
      </div>

      {/* Breakdown Grid: Top Pages & Geographic Traffic */}
      <div className="grid lg:grid-cols-12 gap-6">
        
        {/* Most Visited Pages */}
        <div className="lg:col-span-6 bg-[#202020] border border-white/10 rounded-2xl p-6 shadow-md">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
            <h3 className="font-bold text-base text-white flex items-center gap-2">
              <Eye className="w-4 h-4 text-[#FF5733]" /> Most Visited Pages
            </h3>
            <span className="text-[10px] font-mono text-gray-400 uppercase font-bold">BY PAGEVIEWS</span>
          </div>

          <div className="space-y-3">
            {topPages.length === 0 ? (
              <p className="text-xs text-gray-400 py-4 text-center">No traffic logged yet.</p>
            ) : (
              topPages.map(([path, count]) => {
                const percentage = Math.round((count / (totalVisits || 1)) * 100);
                return (
                  <div key={path} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono font-medium text-white truncate max-w-[240px]">{path}</span>
                      <span className="font-mono text-gray-400">{count} views ({percentage}%)</span>
                    </div>
                    <div className="w-full h-2 bg-black/40 rounded-full overflow-hidden">
                      <div className="h-full bg-[#FF5733] rounded-full" style={{ width: `${percentage}%` }} />
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Geographic Traffic Breakdown */}
        <div className="lg:col-span-6 bg-[#202020] border border-white/10 rounded-2xl p-6 shadow-md">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
            <h3 className="font-bold text-base text-white flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#FF5733]" /> Geographic Traffic Sources
            </h3>
            <span className="text-[10px] font-mono text-gray-400 uppercase font-bold">BY COUNTRY</span>
          </div>

          <div className="space-y-3">
            {topLocations.length === 0 ? (
              <p className="text-xs text-gray-400 py-4 text-center">No location data logged yet.</p>
            ) : (
              topLocations.map(([loc, count]) => {
                const percentage = Math.round((count / (totalVisits || 1)) * 100);
                return (
                  <div key={loc} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-white">{loc}</span>
                      <span className="font-mono text-gray-400">{count} visitors ({percentage}%)</span>
                    </div>
                    <div className="w-full h-2 bg-black/40 rounded-full overflow-hidden">
                      <div className="h-full bg-[#FF5733] rounded-full" style={{ width: `${percentage}%` }} />
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

      </div>

      {/* Live Visitor Activity Log Table */}
      <div className="bg-[#202020] border border-white/10 rounded-2xl overflow-hidden shadow-md">
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg text-white">Live Visitor Access Log</h3>
            <p className="text-xs text-gray-400 mt-0.5">Detailed IP, country, visited page, and device telemetry.</p>
          </div>
          <span className="text-xs font-mono px-3 py-1 bg-white/10 text-white rounded-full font-bold">
            SHOWING {visits.length} ENTRIES
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-black/40 text-gray-400 font-mono text-[10px] uppercase tracking-wider border-b border-white/10">
              <tr>
                <th className="px-6 py-3.5 font-semibold">Time</th>
                <th className="px-6 py-3.5 font-semibold">IP Address</th>
                <th className="px-6 py-3.5 font-semibold">Location</th>
                <th className="px-6 py-3.5 font-semibold">Visited Route</th>
                <th className="px-6 py-3.5 font-semibold">Identified Service</th>
                <th className="px-6 py-3.5 font-semibold">User Agent / Device</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-gray-300">
              {visits.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-400 font-mono">
                    No visitor logs recorded yet.
                  </td>
                </tr>
              ) : (
                visits.map((v) => (
                  <tr key={v.id} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-gray-400 font-mono">
                      {formatDistanceToNow(new Date(v.createdAt), { addSuffix: true })}
                    </td>
                    <td className="px-6 py-4 font-mono text-white font-medium">
                      {v.ip ? v.ip : "127.0.0.1 (Local)"}
                    </td>
                    <td className="px-6 py-4 font-medium text-white">
                      {v.city && v.city !== "Unknown" ? `${v.city}, ` : ""}{v.country || "Global"}
                    </td>
                    <td className="px-6 py-4 font-mono text-[#FF5733] font-semibold">
                      {v.path}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {v.service ? (
                        <span className="px-2.5 py-1 bg-[#FF5733]/10 text-[#FF5733] border border-[#FF5733]/30 rounded-full font-mono text-[10px] font-bold">
                          {v.service}
                        </span>
                      ) : (
                        <span className="text-gray-500 font-mono">-</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-gray-400 font-mono truncate max-w-[200px]" title={v.userAgent || ""}>
                      {v.userAgent || "Desktop Browser"}
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
