import { createOpenAI } from '@ai-sdk/openai';
import { streamText, convertToModelMessages, type UIMessage } from 'ai';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';

// Simple in-memory rate limiter: max 5 requests / 10s per IP.
// NOTE: like before, this resets per server instance and is not
// perfectly reliable on serverless platforms with multiple instances.
// For guaranteed enforcement at scale, swap this for a durable store
// (Upstash Redis / Vercel KV). This version also caps the map size so
// it can't grow unbounded and become a memory-exhaustion vector.
const RATE_LIMIT = 5;
const WINDOW_MS = 10_000;
const MAX_TRACKED_IPS = 5000;
const rateLimitMap = new Map<string, number>();

function isRateLimited(ip: string) {
  const currentCount = rateLimitMap.get(ip) || 0;
  if (currentCount >= RATE_LIMIT) return true;

  // Prevent unbounded growth from a flood of distinct/spoofed IPs.
  if (rateLimitMap.size >= MAX_TRACKED_IPS) {
    rateLimitMap.clear();
  }

  rateLimitMap.set(ip, currentCount + 1);
  setTimeout(() => {
    const count = rateLimitMap.get(ip) || 0;
    if (count > 1) rateLimitMap.set(ip, count - 1);
    else rateLimitMap.delete(ip);
  }, WINDOW_MS);

  return false;
}

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

    if (isRateLimited(ip)) {
      return new Response(JSON.stringify({ error: "Too many requests. Please wait a moment and try again." }), { status: 429 });
    }

    const { messages }: { messages: UIMessage[] } = await req.json();

    // Attempt to authenticate the user to provide context
    const session = await auth();
    let systemPrompt = `You are the NovaMac Guide, the AI support agent on the NovaMac Solutions website (novamacsolutions.com).

GROUND TRUTH FACTS about this site — only use these, never invent URLs, domains, buttons, or features that aren't listed here:
- The website's real domain is novamacsolutions.com (NOT novamac.com, NOT any other domain).
- Public navigation pages: Home (/), Services (/services), Work (/work), About (/about), Blog (/blog), FAQ (/faq), Pricing (/pricing), Products (/products), Contact (/contact), Support (/support).
- Services offered: custom web development, e-commerce, AI automation/agents, 360 performance marketing, social media marketing, and cloud/DevOps.
- There is currently NO public self-service login or signup button on the marketing site for visitors or prospective clients. Client accounts are set up manually by the NovaMac team after a project begins.
- To start a project or ask a question, direct people to the Contact page (/contact) or the email hello@novamacsolutions.com — do not tell people to "log in" or "click a login button" since none exists publicly.
- When mentioning the Contact page, phone number, or email, write them as markdown links so they render as clickable: [Contact page](/contact), [hello@novamacsolutions.com](mailto:hello@novamacsolutions.com), [415 480 4281](tel:+14154804281).
- Keep responses short (2-4 sentences typically). Use **bold** sparingly for key terms only.
- If you don't know something specific about pricing, timelines, or a feature, say so honestly and point them to the Contact page rather than guessing.

Be concise, professional, and friendly.`;

    if (session?.user?.id) {
      // Fetch user's orders and tickets for context injection
      const orders = await prisma.order.findMany({
        where: { userId: session.user.id },
        select: { id: true, title: true, status: true, deliveryDate: true }
      });

      const tickets = await prisma.ticket.findMany({
        where: { userId: session.user.id },
        select: { id: true, subject: true, status: true }
      });

      systemPrompt += `\n\nContext for the current user (Name: ${session.user.name || "Client"}):\n`;
      if (orders.length > 0) {
        systemPrompt += `Active Orders:\n${orders.map(o => `- Order ${o.id}: ${o.title} (${o.status})`).join('\n')}\n`;
      } else {
        systemPrompt += `The user currently has no active orders.\n`;
      }

      if (tickets.length > 0) {
        systemPrompt += `Support Tickets:\n${tickets.map(t => `- Ticket ${t.id}: ${t.subject} (${t.status})`).join('\n')}\n`;
      }
    } else {
      systemPrompt += `\n\nThe current visitor is browsing the public site and is not logged in (and there is no public login for them to use — see ground truth facts above). If they want to start a project or need help, direct them to the Contact page (/contact).`;
    }

    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      console.error("Chat API Error: OPENROUTER_API_KEY is not set.");
      return new Response(JSON.stringify({ error: "Chat is temporarily unavailable." }), { status: 503 });
    }

    // Configure OpenRouter using the OpenAI provider
    const openrouter = createOpenAI({
      baseURL: 'https://openrouter.ai/api/v1',
      apiKey,
    });

    // Switched to NVIDIA Nemotron 3 Nano Omni (free) — a much smaller,
    // faster model (30B total, only 3B active parameters) than the
    // previous Nemotron 3 Ultra (550B), which had unacceptably slow
    // response times (30-40+ seconds) for a live chat widget. This nano
    // model trades some raw capability for response speed, which matters
    // more for a support-chat UX than maximum reasoning power.
    const result = streamText({
      model: openrouter('nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free'),
      system: systemPrompt,
      messages: await convertToModelMessages(messages),
    });
    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("Chat API Error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}
