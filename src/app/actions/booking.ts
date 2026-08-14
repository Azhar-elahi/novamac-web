"use server";

import { prisma } from "@/lib/prisma";

const TEMP_EMAIL_DOMAINS = [
  "yopmail.com", "mailinator.com", "guerrillamail.com", "10minutemail.com", 
  "tempmail.com", "dropmail.me", "temp-mail.org", "throwawaymail.com",
  "disposablemail.com", "maildrop.cc", "sharklasers.com", "getairmail.com"
];

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

    if (!name || !email || !date || !timeSlot) {
      return { success: false, error: "Please fill in all required booking fields." };
    }

    const domain = email.split("@")[1]?.toLowerCase();
    if (domain && TEMP_EMAIL_DOMAINS.includes(domain)) {
      return { success: false, error: "Please use a valid professional or personal email address." };
    }

    const bookingMessage = `STRATEGY CALL BOOKING:
- Date: ${date}
- Time Slot: ${timeSlot}
- Preferred Service: ${service}
- Budget Range: ${budget || "Not Specified"}
- Phone/WhatsApp: ${phone || "Not Provided"}
- Notes/Overview: ${notes || "None"}`;

    const record = await prisma.contactMessage.create({
      data: {
        name,
        email,
        phone,
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
