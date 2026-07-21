import { prisma } from "@/lib/prisma";
import BlogClient from "./BlogClient";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Blog & Insights | NovaMac",
  description: "Read the latest updates, industry insights, and news from our team.",
};

export default async function BlogPage() {
  const posts = await prisma.blogPost.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" }
  });

  return <BlogClient posts={posts} />;
}
