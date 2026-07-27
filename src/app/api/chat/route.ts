import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';
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

    const { messages } = await req.json();

    // Attempt to authenticate the user to provide context
    const session = await auth();
    let systemPrompt = `You are the NovaMac AI Support Agent. You help users navigate their CRM needs, developer services, and AI automation requests. Be concise, professional, and friendly.`;

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
      systemPrompt += `\n\nThe user is currently browsing the public site and is not logged in. Guide them to our services, products, or the login page.`;
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

    // Call OpenRouter API with a free model
    const result = await streamText({
      model: openrouter('google/gemini-2.0-flash-lite-preview-02-05:free') as any,
      system: systemPrompt,
      messages,
    });
    return result.toDataStreamResponse();
  } catch (error) {
    console.error("Chat API Error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}
