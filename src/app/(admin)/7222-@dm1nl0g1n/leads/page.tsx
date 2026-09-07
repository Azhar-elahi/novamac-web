import { prisma } from "@/lib/prisma";
import LeadsClientPage from "./LeadsClientPage";

export const dynamic = "force-dynamic";

export default async function LeadsPage() {
  let leads: any[] = [];
  try {
    leads = await prisma.contactMessage.findMany({
      orderBy: { createdAt: "desc" }
    });
  } catch (e) {
    console.warn("Prisma query notice in leads page:", e);
  }

  return <LeadsClientPage initialLeads={leads} />;
}
