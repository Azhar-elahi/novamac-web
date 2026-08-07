/**
 * Combined content for the NovaMac "AI Control Center" homepage —
 * merges NovaMac's existing service lineup (web dev, marketing, SEO)
 * with the new AI systems pricing lineup (WhatsApp AI + CRM, voice
 * agents, custom AI) shown in the reference design.
 */

export type AiSystem = {
  id: string;
  index: string;
  name: string;
  description: string;
  fromPrice: string;
  dotColor: string;
  accent: string; // rgb triplet for box-shadow glows
  setup: string;
  maintenance: string;
  maintenanceNote: string;
  includes: string[];
  goodToKnow: string[];
};

export const AI_SYSTEMS: AiSystem[] = [
  {
    id: "whatsapp-crm",
    index: "01",
    name: "WhatsApp AI + CRM",
    description:
      "Conversational AI that captures, qualifies and converts on WhatsApp.",
    fromPrice: "₹12,000",
    dotColor: "#22c55e",
    accent: "34,197,94",
    setup: "₹12,000",
    maintenance: "₹2,000/mo",
    maintenanceNote: "Optional",
    includes: [
      "Meta WhatsApp API setup",
      "Brand customization",
      "n8n workflow automation",
      "CRM setup",
      "Deployment guidance",
    ],
    goodToKnow: [
      "Actual AI / API usage billed separately.",
      "Domain & hosting are client owned.",
    ],
  },
  {
    id: "inbound-voice",
    index: "02",
    name: "Inbound Voice Agent",
    description:
      "A voice agent that answers, understands and routes every inbound call.",
    fromPrice: "₹15,000",
    dotColor: "#38bdf8",
    accent: "56,189,248",
    setup: "₹15,000",
    maintenance: "₹2,500/mo",
    maintenanceNote: "Optional",
    includes: [
      "Call flow & IVR design",
      "Voice AI configuration",
      "Number porting / setup",
      "CRM + call log sync",
      "Deployment guidance",
    ],
    goodToKnow: [
      "Actual AI / telephony usage billed separately.",
      "Works with existing business numbers.",
    ],
  },
  {
    id: "outbound-voice",
    index: "03",
    name: "Outbound Voice Agent",
    description:
      "Proactive outbound calling that follows up and books at scale.",
    fromPrice: "₹15,000",
    dotColor: "#f59e0b",
    accent: "245,158,11",
    setup: "₹15,000",
    maintenance: "₹2,500/mo",
    maintenanceNote: "Optional",
    includes: [
      "Campaign & script design",
      "Voice AI configuration",
      "Lead list integration",
      "CRM + call log sync",
      "Deployment guidance",
    ],
    goodToKnow: [
      "Actual AI / telephony usage billed separately.",
      "Calling limits follow local regulations.",
    ],
  },
  {
    id: "custom-ai",
    index: "04",
    name: "Custom AI Solutions",
    description:
      "Bespoke pipelines wiring every channel into one intelligent system.",
    fromPrice: "₹45,000+",
    dotColor: "#a78bfa",
    accent: "167,139,250",
    setup: "₹45,000+",
    maintenance: "Custom",
    maintenanceNote: "Scoped per project",
    includes: [
      "Discovery & systems audit",
      "Multi-channel workflow design",
      "Custom integrations",
      "Dedicated CRM architecture",
      "Ongoing deployment support",
    ],
    goodToKnow: [
      "Final quote depends on scope & channels.",
      "Includes a working prototype before build-out.",
    ],
  },
];

export const PIPELINE_STEPS = [
  "Lead",
  "WhatsApp",
  "AI Qualification",
  "CRM",
  "Outbound Follow-up",
  "Booking",
  "Calendar",
  "Sales Team",
];

export type Industry = {
  id: string;
  label: string;
  accent: string;
  heading: string;
  flow: string[];
};

export const INDUSTRIES: Industry[] = [
  {
    id: "real-estate",
    label: "Real Estate",
    accent: "#4f8dfd",
    heading: "Turn enquiries into booked site visits.",
    flow: ["Lead", "WhatsApp Reply", "Property Match", "CRM Entry", "Site Visit Booking"],
  },
  {
    id: "education",
    label: "Education",
    accent: "#10b981",
    heading: "Turn course enquiries into enrolments.",
    flow: ["Enquiry", "WhatsApp Reply", "Course Info", "CRM Entry", "Enrolment Follow-up"],
  },
  {
    id: "restaurant",
    label: "Restaurant",
    accent: "#ec4899",
    heading: "Turn messages into booked tables.",
    flow: ["Message", "WhatsApp Reply", "Party Size & Timing", "CRM Entry", "Reservation Follow-up"],
  },
  {
    id: "hospital",
    label: "Hospital",
    accent: "#06b6d4",
    heading: "Turn enquiries into booked appointments.",
    flow: ["Enquiry", "WhatsApp Reply", "Symptom Triage", "CRM Entry", "Appointment Booking"],
  },
];
