"use server";

import { prisma } from "@/lib/prisma";

const TEMP_EMAIL_DOMAINS = [
  "yopmail.com", "mailinator.com", "guerrillamail.com", "10minutemail.com", 
  "tempmail.com", "dropmail.me", "temp-mail.org", "throwawaymail.com",
  "disposablemail.com", "maildrop.cc", "sharklasers.com", "getairmail.com",
  "test.com", "example.com", "abc.com", "asdf.com"
];

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PHONE_REGEX = /^\+?[0-9\s\-\(\)]{8,20}$/;

export async function submitCallBooking(formData: FormData) {
  try {
    const name = (formData.get("name") as string || "").trim();
    const email = (formData.get("email") as string || "").trim().toLowerCase();
    const phone = (formData.get("phone") as string || "").trim();
    const service = (formData.get("service") as string || "Strategy Call").trim();
    const date = (formData.get("date") as string || "").trim();
    const timeSlot = (formData.get("timeSlot") as string || "").trim();
    const budget = (formData.get("budget") as string || "").trim();
    const notes = (formData.get("notes") as string || "").trim();

    if (!name || name.length < 2) {
      return { success: false, error: "Please enter your full name (minimum 2 characters)." };
    }

    if (!email || !EMAIL_REGEX.test(email)) {
      return { success: false, error: "Please enter a valid email address (e.g. john@company.com)." };
    }

    const domain = email.split("@")[1]?.toLowerCase();
    if (domain && TEMP_EMAIL_DOMAINS.includes(domain)) {
      return { success: false, error: "Please use a valid corporate or personal email. Disposable email domains are blocked." };
    }

    if (phone && !PHONE_REGEX.test(phone)) {
      return { success: false, error: "Please enter a valid phone number format (minimum 8 digits)." };
    }

    if (!date || !timeSlot) {
      return { success: false, error: "Please select a preferred date and time slot for your call." };
    }

    const bookingMessage = `STRATEGY CALL BOOKING:
- Date: ${date}
- Time Slot: ${timeSlot}
- Preferred Service: ${service}
- Budget Range: ${budget || "Not Specified"}
- Phone/WhatsApp: ${phone || "Not Provided"}
- Project Overview: ${notes || "None"}`;

    const record = await prisma.contactMessage.create({
      data: {
        name,
        email,
        phone: phone || null,
        subject: `Strategy Call: ${service} (${date} @ ${timeSlot})`,
        message: bookingMessage,
        status: "UNREAD"
      }
    });

    return { 
      success: true, 
      bookingId: record.id,
      details: {
        name,
        email,
        service,
        date,
        timeSlot
      }
    };
  } catch (err) {
    console.error("Booking Action Error:", err);
    return { success: false, error: "Unable to schedule strategy call. Please try again or contact us directly." };
  }
}
