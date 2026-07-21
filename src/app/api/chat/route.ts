import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';

const rateLimitMap = new Map<string, number>();

export async function POST(req: Request) {
  try {
    // Simple Rate Limiting: max 5 requests per 10 seconds per IP (fallback to generic string)
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    const currentCount = rateLimitMap.get(ip) || 0;
    
    if (currentCount > 5) {
      return new Response(JSON.stringify({ error: "Too many requests" }), { status: 429 });
    }
    
    rateLimitMap.set(ip, currentCount + 1);
    setTimeout(() => {
      const count = rateLimitMap.get(ip) || 0;
      if (count > 0) rateLimitMap.set(ip, count - 1);
    }, 10000);

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

    // Configure OpenRouter using the OpenAI provider
    const openrouter = createOpenAI({
      baseURL: 'https://openrouter.ai/api/v1',
      apiKey: process.env.OPENROUTER_API_KEY || "sk-or-v1-...", // The user will set this in .env.local
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
