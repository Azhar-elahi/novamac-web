"use server";

import { prisma } from "@/lib/prisma";

const TEMP_EMAIL_DOMAINS = [
  "yopmail.com", "mailinator.com", "guerrillamail.com", "10minutemail.com", 
  "tempmail.com", "dropmail.me", "temp-mail.org", "throwawaymail.com",
  "disposablemail.com", "maildrop.cc", "sharklasers.com", "getairmail.com"
];

export async function submitContactForm(formData: FormData) {
  try {
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const service = formData.get("service") as string;
    const message = formData.get("message") as string;

    if (!firstName || !email || !message) {
      return { success: false, error: "Please fill in all required fields." };
    }

    const domain = email.split("@")[1]?.toLowerCase();
    if (TEMP_EMAIL_DOMAINS.includes(domain)) {
      return { success: false, error: "Please use a valid professional or personal email address. Temporary emails are not allowed." };
    }

    await prisma.contactMessage.create({
      data: {
        name: `${firstName} ${lastName}`.trim(),
        email: email.toLowerCase(),
        subject: service || "General Inquiry",
        message: message
      }
    });

    return { success: true };
  } catch (err) {
    console.error("Contact Form Error:", err);
    return { success: false, error: "Something went wrong. Please try again later." };
  }
}
