import { prisma } from "@/lib/prisma";
import { formatDistanceToNow, subDays, subHours } from "date-fns";
import { Activity, Globe, Eye, MapPin, Smartphone, ShieldCheck, Layers, Server } from "lucide-react";

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
    <div className="space-y-8 p-2 font-sans">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0F52BA]/10 rounded-full text-xs font-mono font-bold text-[#0F52BA] uppercase tracking-wider mb-2">
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            LIVE TELEMETRY & TRAFFIC ANALYTICS
          </div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900">Visitor Intel & Live Reports</h1>
          <p className="text-slate-500 text-sm mt-1">Real-time visitor logs, geographic sources, and page traffic breakdown.</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-bold rounded-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            LIVE STREAM ACTIVE
          </span>
        </div>
      </div>

      {/* Top Telemetry KPI Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between text-slate-500 mb-3">
            <span className="text-xs font-mono uppercase font-bold text-slate-500">Total Visits (30D)</span>
            <Eye className="w-4 h-4 text-[#0F52BA]" />
          </div>
          <div className="text-3xl font-black text-slate-900">{totalVisits}</div>
          <p className="text-[11px] text-slate-400 mt-1">Total pageviews tracked</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between text-slate-500 mb-3">
            <span className="text-xs font-mono uppercase font-bold text-slate-500">Visits Last 24H</span>
            <Activity className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-3xl font-black text-slate-900">{visitsToday}</div>
          <p className="text-[11px] text-emerald-600 font-medium mt-1">Active daily traffic</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between text-slate-500 mb-3">
            <span className="text-xs font-mono uppercase font-bold text-slate-500">Unique Countries</span>
            <Globe className="w-4 h-4 text-purple-600" />
          </div>
          <div className="text-3xl font-black text-slate-900">{uniqueCountries}</div>
          <p className="text-[11px] text-slate-400 mt-1">Global visitor origins</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between text-slate-500 mb-3">
            <span className="text-xs font-mono uppercase font-bold text-slate-500">Service Page Views</span>
            <Layers className="w-4 h-4 text-[#0F52BA]" />
          </div>
          <div className="text-3xl font-black text-slate-900">
            {visits.filter(v => v.service !== null).length}
          </div>
          <p className="text-[11px] text-slate-400 mt-1">High-intent service interest</p>
        </div>
      </div>

      {/* Breakdown Grid: Top Pages & Geographic Traffic */}
      <div className="grid lg:grid-cols-12 gap-6">
        
        {/* Most Visited Pages */}
        <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
            <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
              <Eye className="w-4 h-4 text-[#0F52BA]" /> Most Visited Pages
            </h3>
            <span className="text-[10px] font-mono text-slate-400 uppercase font-bold">BY PAGEVIEWS</span>
          </div>

          <div className="space-y-3">
            {topPages.length === 0 ? (
              <p className="text-xs text-slate-400 py-4 text-center">No traffic logged yet.</p>
            ) : (
              topPages.map(([path, count], idx) => {
                const percentage = Math.round((count / (totalVisits || 1)) * 100);
                return (
                  <div key={path} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono font-medium text-slate-800 truncate max-w-[240px]">{path}</span>
                      <span className="font-mono text-slate-500">{count} views ({percentage}%)</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#0F52BA] rounded-full" style={{ width: `${percentage}%` }} />
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Geographic Traffic Breakdown */}
        <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
            <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-purple-600" /> Geographic Traffic Sources
            </h3>
            <span className="text-[10px] font-mono text-slate-400 uppercase font-bold">BY COUNTRY</span>
          </div>

          <div className="space-y-3">
            {topLocations.length === 0 ? (
              <p className="text-xs text-slate-400 py-4 text-center">No location data logged yet.</p>
            ) : (
              topLocations.map(([loc, count]) => {
                const percentage = Math.round((count / (totalVisits || 1)) * 100);
                return (
                  <div key={loc} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-slate-800">{loc}</span>
                      <span className="font-mono text-slate-500">{count} visitors ({percentage}%)</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-600 rounded-full" style={{ width: `${percentage}%` }} />
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

      </div>

      {/* Live Visitor Activity Log Table */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
        <div className="p-6 border-b border-slate-200 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg text-slate-900">Live Visitor Access Log</h3>
            <p className="text-xs text-slate-500 mt-0.5">Detailed IP, country, visited page, and device telemetry.</p>
          </div>
          <span className="text-xs font-mono px-3 py-1 bg-slate-100 text-slate-600 rounded-full font-bold">
            SHOWING {visits.length} ENTRIES
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-slate-50 text-slate-500 font-mono text-[10px] uppercase tracking-wider border-b border-slate-200">
              <tr>
                <th className="px-6 py-3.5 font-semibold">Time</th>
                <th className="px-6 py-3.5 font-semibold">IP Address</th>
                <th className="px-6 py-3.5 font-semibold">Location</th>
                <th className="px-6 py-3.5 font-semibold">Visited Route</th>
                <th className="px-6 py-3.5 font-semibold">Identified Service</th>
                <th className="px-6 py-3.5 font-semibold">User Agent / Device</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {visits.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-slate-400 font-mono">
                    No visitor logs recorded yet.
                  </td>
                </tr>
              ) : (
                visits.map((v) => (
                  <tr key={v.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-slate-500 font-mono">
                      {formatDistanceToNow(new Date(v.createdAt), { addSuffix: true })}
                    </td>
                    <td className="px-6 py-4 font-mono text-slate-900 font-medium">
                      {v.ip ? v.ip : "127.0.0.1 (Local)"}
                    </td>
                    <td className="px-6 py-4 font-medium text-slate-800">
                      {v.city && v.city !== "Unknown" ? `${v.city}, ` : ""}{v.country || "Global"}
                    </td>
                    <td className="px-6 py-4 font-mono text-[#0F52BA] font-semibold">
                      {v.path}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {v.service ? (
                        <span className="px-2.5 py-1 bg-blue-50 text-[#0F52BA] border border-blue-200 rounded-full font-mono text-[10px] font-bold">
                          {v.service}
                        </span>
                      ) : (
                        <span className="text-slate-400 font-mono">-</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-slate-500 font-mono truncate max-w-[200px]" title={v.userAgent || ""}>
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
