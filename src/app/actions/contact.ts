"use server";

import { prisma } from "@/lib/prisma";
import { calculateLeadScore, generateAILeadBrief } from "@/lib/lead-scoring";

const TEMP_EMAIL_DOMAINS = [
  "yopmail.com", "mailinator.com", "guerrillamail.com", "10minutemail.com", 
  "tempmail.com", "dropmail.me", "temp-mail.org", "throwawaymail.com",
  "disposablemail.com", "maildrop.cc", "sharklasers.com", "getairmail.com",
  "test.com", "example.com", "abc.com", "asdf.com"
];

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PHONE_REGEX = /^\+?[0-9\s\-\(\)]{8,20}$/;

export async function submitContactForm(formData: FormData) {
  try {
    const name = (formData.get("name") as string || formData.get("firstName") as string || "").trim();
    const email = (formData.get("email") as string || "").trim().toLowerCase();
    const phone = (formData.get("phone") as string || "").trim();
    const service = (formData.get("service") as string || "General Inquiry").trim();
    const message = (formData.get("notes") as string || formData.get("message") as string || formData.get("comment") as string || "").trim();

    if (!name || name.length < 2) {
      return { success: false, error: "Please enter your full name (minimum 2 characters)." };
    }

    if (!email || !EMAIL_REGEX.test(email)) {
      return { success: false, error: "Please enter a valid email address (e.g. name@company.com)." };
    }

    const domain = email.split("@")[1]?.toLowerCase();
    if (domain && TEMP_EMAIL_DOMAINS.includes(domain)) {
      return { success: false, error: "Please use a valid corporate or personal email. Disposable email addresses are not permitted." };
    }

    if (phone && !PHONE_REGEX.test(phone)) {
      return { success: false, error: "Please enter a valid phone number (e.g. +1 415 555 0199 or 0300 1234567)." };
    }

    if (!message || message.length < 5) {
      return { success: false, error: "Please enter your project details or inquiry (minimum 5 characters)." };
    }

    const scoreResult = calculateLeadScore({ name, email, phone, subject: `Inquiry: ${service}`, message });
    const leadBrief = generateAILeadBrief({ name, email, phone, subject: `Inquiry: ${service}`, message }, scoreResult);

    await prisma.contactMessage.create({
      data: {
        name,
        email,
        phone: phone || null,
        subject: `Inquiry: ${service}`,
        message,
        score: scoreResult.score,
        priority: scoreResult.priority,
        pipelineStatus: "NEW",
        leadBrief,
        status: "UNREAD"
      }
    });

    return { success: true };
  } catch (err) {
    console.error("Contact Form Action Error:", err);
    return { success: false, error: "Unable to process your request at this time. Please try again or email hello@novamacsolutions.com." };
  }
}
