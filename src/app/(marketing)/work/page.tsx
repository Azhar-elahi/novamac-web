import { prisma } from "@/lib/prisma";
import WorkClient from "./WorkClient";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Our Work & Growth | NovaMac",
  description: "See how we help businesses scale, grow, and achieve their full potential with custom digital solutions.",
};

export default async function WorkPage() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" }
  });

  return <WorkClient projects={projects} />;
}
