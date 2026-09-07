export interface LeadDataInput {
  name: string;
  email: string;
  phone?: string | null;
  companyName?: string | null;
  websiteUrl?: string | null;
  subject: string;
  message: string;
}

const TEMP_EMAIL_DOMAINS = [
  "yopmail.com", "mailinator.com", "guerrillamail.com", "10minutemail.com", 
  "tempmail.com", "dropmail.me", "temp-mail.org", "throwawaymail.com"
];

export interface LeadScoreResult {
  score: number;
  priority: "HIGH" | "MEDIUM" | "LOW";
  reasons: string[];
}

export function calculateLeadScore(lead: LeadDataInput): LeadScoreResult {
  let score = 40;
  const reasons: string[] = [];

  const emailLower = (lead.email || "").toLowerCase();
  const domain = emailLower.split("@")[1] || "";

  // Check domain quality
  if (domain && !TEMP_EMAIL_DOMAINS.includes(domain)) {
    if (!["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "icloud.com"].includes(domain)) {
      score += 25;
      reasons.push("Corporate company email domain (+25 pts)");
    } else {
      score += 10;
      reasons.push("Valid personal email domain (+10 pts)");
    }
  }

  // Check phone contact presence
  if (lead.phone && lead.phone.trim().length >= 8) {
    score += 15;
    reasons.push("Direct phone/WhatsApp contact provided (+15 pts)");
  }

  // Check company / website presence
  if (lead.companyName || lead.websiteUrl) {
    score += 10;
    reasons.push("Company name or current website specified (+10 pts)");
  }

  // Service intent matching
  const textContent = `${lead.subject} ${lead.message}`.toLowerCase();
  if (
    textContent.includes("software") || 
    textContent.includes("crm") || 
    textContent.includes("erp") || 
    textContent.includes("ai") ||
    textContent.includes("saas")
  ) {
    score += 20;
    reasons.push("High-ticket capability match (Software/AI/CRM/ERP) (+20 pts)");
  } else if (textContent.includes("website") || textContent.includes("web")) {
    score += 15;
    reasons.push("Custom Web Development capability match (+15 pts)");
  }

  // Message detail length
  const wordCount = (lead.message || "").split(/\s+/).filter(Boolean).length;
  if (wordCount > 30) {
    score += 15;
    reasons.push("Detailed project scope message (>30 words) (+15 pts)");
  }

  // Cap score
  score = Math.min(100, Math.max(10, score));

  let priority: "HIGH" | "MEDIUM" | "LOW" = "MEDIUM";
  if (score >= 75) priority = "HIGH";
  else if (score < 50) priority = "LOW";

  return { score, priority, reasons };
}

export function generateAILeadBrief(lead: LeadDataInput, scoreResult: LeadScoreResult): string {
  const serviceMatch = lead.subject.replace(/^Inquiry:\s*/i, "").replace(/^Strategy Call:\s*/i, "");
  
  return `### NOVAMAC AI LEAD BRIEF

**Lead Score**: ${scoreResult.score}/100 — ${scoreResult.priority} PRIORITY
**Key Qualification Indicators**:
${scoreResult.reasons.map((r) => `- ${r}`).join("\n")}

**Probable Requirement**:
Prospect is inquiring about ${serviceMatch || "Custom Web & Software Development"}. They need practical engineering to address current operational bottlenecks.

**Biggest Visible Opportunity**:
Connect their digital presence, lead capture, and workflow automation into a unified Next.js & database system.

**Suggested NovaMac Capability**:
${serviceMatch.toLowerCase().includes("ai") ? "AI Development & Automation" : serviceMatch.toLowerCase().includes("crm") ? "CRM Development & Pipeline Systems" : "Custom Web Development & Design"}

**Recommended Discovery Pitch Questions**:
1. "What is the biggest operational delay or lead friction point in your current workflow?"
2. "Are you currently tracking incoming inquiries in a central database or manual spreadsheets?"
3. "What target timeline and technical SLA are you aiming to launch by?"
`;
}
