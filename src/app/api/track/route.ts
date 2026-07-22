import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";

export async function POST(req: Request) {
  try {
    const { path } = await req.json();
    const headersList = await headers();
    
    // Attempt to extract IP and Geolocation from Vercel headers
    const ip = headersList.get("x-forwarded-for") || headersList.get("x-real-ip") || "Unknown";
    const country = headersList.get("x-vercel-ip-country") || "Unknown";
    const city = headersList.get("x-vercel-ip-city") || "Unknown";
    const userAgent = headersList.get("user-agent") || "Unknown";

    // Basic heuristic to determine "service interest" based on path
    let service = null;
    if (path.includes("services")) service = "Services General";
    if (path.includes("ecommerce")) service = "E-Commerce";
    if (path.includes("web-development")) service = "Web Development";
    if (path.includes("automation") || path.includes("ai")) service = "AI Automation";

    await prisma.analyticsVisit.create({
      data: {
        ip: ip.substring(0, 45), // IPv6 safe
        country,
        city: decodeURIComponent(city),
        path: path.substring(0, 200),
        service,
        userAgent: userAgent.substring(0, 200)
      }
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Analytics Error:", err);
    // Return 200 anyway so we don't block the client
    return new Response(JSON.stringify({ success: false }), { status: 200 });
  }
}
