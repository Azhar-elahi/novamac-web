"use server";

import { prisma } from "@/lib/prisma";

export async function submitGoogleReview(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const role = formData.get("role") as string;
    const ratingStr = formData.get("rating") as string;
    const comment = formData.get("comment") as string;

    if (!name || !email || !comment) {
      return { success: false, error: "Please fill in all required fields." };
    }

    const rating = Math.min(5, Math.max(1, parseInt(ratingStr || "5", 10)));

    await (prisma as any).review.create({
      data: {
        name,
        email: email.toLowerCase(),
        role: role || "Business Client",
        rating,
        comment,
        verifiedGoogle: true,
        approved: true,
      }
    });

    return { success: true };
  } catch (err) {
    console.error("Review Submission Error:", err);
    return { success: false, error: "Something went wrong submitting your review." };
  }
}

export async function getApprovedReviews() {
  try {
    const reviews = await (prisma as any).review.findMany({
      where: { approved: true },
      orderBy: { createdAt: "desc" }
    });
    return reviews;
  } catch (err) {
    return [];
  }
}
