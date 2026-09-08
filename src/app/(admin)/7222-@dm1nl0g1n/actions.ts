"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

// Security Check: Ensure only authenticated ADMIN users execute server actions
export async function requireAdmin() {
  const session = await auth();
  if (!session?.user || (session.user as { role?: string })?.role !== "ADMIN") {
    throw new Error("Unauthorized: Admin credentials required.");
  }
}

// 1. LEAD INTELLIGENCE ACTIONS
export async function updateLeadPipelineStatus(leadId: string, pipelineStatus: string) {
  await requireAdmin();

  await prisma.contactMessage.update({
    where: { id: leadId },
    data: { pipelineStatus }
  });

  revalidatePath("/7222-@dm1nl0g1n/leads");
  revalidatePath("/7222-@dm1nl0g1n");
  return { success: true };
}

export async function deleteLead(leadId: string) {
  await requireAdmin();

  await prisma.contactMessage.delete({
    where: { id: leadId }
  });

  revalidatePath("/7222-@dm1nl0g1n/leads");
  revalidatePath("/7222-@dm1nl0g1n");
  return { success: true };
}

// 2. FAQ CMS ACTIONS
export async function createFaqItem(data: { question: string; answer: string; category?: string; service?: string }) {
  await requireAdmin();

  const newFaq = await prisma.faqItem.create({
    data: {
      question: data.question,
      answer: data.answer,
      category: data.category || "General",
      service: data.service || "website-development",
      published: true
    }
  });

  revalidatePath("/7222-@dm1nl0g1n/faq");
  return { success: true, faq: newFaq };
}

export async function deleteFaqItem(id: string) {
  await requireAdmin();

  await prisma.faqItem.delete({
    where: { id }
  });

  revalidatePath("/7222-@dm1nl0g1n/faq");
  return { success: true };
}

// 3. ORDERS, TICKETS & CLIENTS ACTIONS
export async function updateOrderStatus(orderId: string, status: "RECEIVED" | "IN_PROGRESS" | "REVIEW" | "DELIVERED") {
  await requireAdmin();
  
  await prisma.order.update({
    where: { id: orderId },
    data: { status }
  });
  
  revalidatePath("/7222-@dm1nl0g1n/orders");
  return { success: true };
}

export async function updateTicketStatus(ticketId: string, status: "OPEN" | "IN_PROGRESS" | "RESOLVED" | "CLOSED") {
  await requireAdmin();

  await prisma.ticket.update({
    where: { id: ticketId },
    data: { status }
  });

  revalidatePath("/7222-@dm1nl0g1n/tickets");
  return { success: true };
}

export async function updateClientRole(userId: string, role: "USER" | "ADMIN") {
  await requireAdmin();

  await prisma.user.update({
    where: { id: userId },
    data: { role }
  });

  revalidatePath("/7222-@dm1nl0g1n/clients");
  return { success: true };
}

// 4. PORTFOLIO PROJECTS ACTIONS
export async function createProject(formData: FormData) {
  await requireAdmin();

  const title = formData.get("title") as string;
  const tech = formData.get("tech") as string;
  const category = formData.get("category") as string;
  const year = formData.get("year") as string;
  const desc = formData.get("desc") as string;
  const img = formData.get("img") as string;
  const seoTitle = (formData.get("seoTitle") as string) || null;
  const seoDesc = (formData.get("seoDesc") as string) || null;

  if (!title || !tech || !category || !img || !desc) {
    throw new Error("Missing required project fields.");
  }

  await prisma.project.create({
    data: { title, tech, category, year: year || new Date().getFullYear().toString(), desc, img, seoTitle, seoDesc }
  });

  revalidatePath("/7222-@dm1nl0g1n/projects");
  revalidatePath("/work");
  return { success: true };
}

export async function deleteProject(id: string) {
  await requireAdmin();

  await prisma.project.delete({ where: { id } });

  revalidatePath("/7222-@dm1nl0g1n/projects");
  revalidatePath("/work");
  return { success: true };
}

// 5. BLOG CMS ACTIONS
export async function createBlogPost(formData: FormData) {
  await requireAdmin();

  const title = formData.get("title") as string;
  let slug = formData.get("slug") as string;
  if (!slug && title) {
    slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  }

  const content = formData.get("content") as string;
  const excerpt = (formData.get("excerpt") as string) || null;
  const coverImage = (formData.get("coverImage") as string) || null;
  const seoTitle = (formData.get("seoTitle") as string) || null;
  const seoDesc = (formData.get("seoDesc") as string) || null;

  if (!title || !content || !slug) {
    throw new Error("Missing required blog fields.");
  }

  await prisma.blogPost.create({
    data: { title, slug, content, excerpt, coverImage, seoTitle, seoDesc, published: true }
  });

  revalidatePath("/7222-@dm1nl0g1n/blog");
  revalidatePath("/blog");
  return { success: true };
}

export async function deleteBlogPost(id: string) {
  await requireAdmin();

  await prisma.blogPost.delete({ where: { id } });

  revalidatePath("/7222-@dm1nl0g1n/blog");
  revalidatePath("/blog");
  return { success: true };
}


