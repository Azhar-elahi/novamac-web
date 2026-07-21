"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

// Ensure only admins can execute these actions
async function requireAdmin() {
  const session = await auth();
  if (session?.user?.role !== "ADMIN") {
    throw new Error("Unauthorized Access");
  }
}

export async function updateOrderStatus(orderId: string, status: "RECEIVED" | "IN_PROGRESS" | "REVIEW" | "DELIVERED") {
  await requireAdmin();
  
  await prisma.order.update({
    where: { id: orderId },
    data: { status }
  });
  
  revalidatePath("/7222-@dm1nl0g1n/orders");
}

export async function updateTicketStatus(ticketId: string, status: "OPEN" | "IN_PROGRESS" | "RESOLVED" | "CLOSED") {
  await requireAdmin();

  await prisma.ticket.update({
    where: { id: ticketId },
    data: { status }
  });

  revalidatePath("/7222-@dm1nl0g1n/tickets");
}

export async function updateClientRole(userId: string, role: "USER" | "ADMIN") {
  await requireAdmin();

  await prisma.user.update({
    where: { id: userId },
    data: { role }
  });

  revalidatePath("/7222-@dm1nl0g1n/clients");
}
