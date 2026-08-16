"use client";

import { useChat } from "@ai-sdk/react";
import { useState, useRef, useEffect, Fragment } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { cn } from "@/lib/utils";

const QUICK_SUGGESTIONS = [
  { label: "View Services", text: "What services do you offer?" },
  { label: "See Pricing", text: "How much do your services cost?" },
  { label: "Contact Us", text: "How can I get in touch with your team?" },
];

// Lightweight inline-markdown renderer: handles **bold**, [label](url) links,
// and auto-links bare email addresses / phone numbers so they're clickable
// (mailto: / tel:) without pulling in a full markdown library.
function MessageContent({ text }: { text: string }) {
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|([\w.+-]+@[\w-]+\.[\w.-]+)|(\+?\d[\d\s()-]{8,}\d)/g;

  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = linkPattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(<Fragment key={key++}>{text.slice(lastIndex, match.index)}</Fragment>);
    }

    if (match[1] && match[2]) {
      // [label](url)
      const label = match[1];
      const url = match[2];
      const isInternal = url.startsWith("/");
      nodes.push(
        <a
          key={key++}
          href={url}
          target={isInternal ? undefined : "_blank"}
          rel={isInternal ? undefined : "noopener noreferrer"}
          className="underline font-medium text-brand hover:opacity-80"
        >
          {label}
        </a>
      );
    } else if (match[3]) {
      // **bold**
      nodes.push(<strong key={key++} className="font-semibold">{match[3]}</strong>);
    } else if (match[4]) {
      // bare email
      nodes.push(
        <a key={key++} href={`mailto:${match[4]}`} className="underline font-medium text-brand hover:opacity-80">
          {match[4]}
        </a>
      );
    } else if (match[5]) {
      // bare phone number
      const digits = match[5].replace(/[^\d+]/g, "");
      nodes.push(
        <a key={key++} href={`tel:${digits}`} className="underline font-medium text-brand hover:opacity-80">
          {match[5]}
        </a>
      );
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(<Fragment key={key++}>{text.slice(lastIndex)}</Fragment>);
  }

  return <>{nodes}</>;
}

export function ChatWidget({ isPortal = false }: { isPortal?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const { messages, sendMessage, status } = useChat();
  const isLoading = status === "submitted" || status === "streaming";
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const submitText = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;
    sendMessage({ text: trimmed });
    setInput("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitText(input);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open AI Assistant"
        className={cn(
          "fixed bottom-6 right-6 p-4 rounded-full shadow-xl shadow-brand/20 text-slate-800 transition-all hover:scale-110 z-50",
          isOpen ? "scale-0 opacity-0 pointer-events-none" : "scale-100 opacity-100",
          isPortal ? "bg-primary" : "bg-brand"
        )}
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      <div
        className={cn(
          "fixed bottom-6 right-6 w-[350px] sm:w-[400px] h-[500px] max-h-[80vh] flex flex-col rounded-2xl border border-black/10 shadow-2xl bg-[#f6f1e7] backdrop-blur-xl transition-all origin-bottom-right z-50 overflow-hidden",
          isOpen ? "scale-100 opacity-100" : "scale-50 opacity-0 pointer-events-none"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-black/10 bg-white/60">
          <div>
            <h3 className="font-heading font-medium text-[#211f1a]">
              {isPortal ? "NovaMac Support Agent" : "NovaMac Guide"}
            </h3>
            <p className="text-xs text-muted-foreground">
              {isPortal ? "Ask about your orders or tickets" : "How can we help you today?"}
            </p>
          </div>
          <button onClick={() => setIsOpen(false)} aria-label="Close Chat" className="p-1 rounded-md hover:bg-secondary transition-colors text-muted-foreground">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.length === 0 && (
            <div className="space-y-4 mt-6">
              <div className="text-center text-sm text-muted-foreground">
                Send a message to start chatting, or pick a quick option:
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {QUICK_SUGGESTIONS.map((s) => (
                  <button
                    key={s.label}
                    onClick={() => submitText(s.text)}
                    className="text-xs font-medium px-3 py-1.5 rounded-full border border-brand/40 text-white/80 bg-brand/10 hover:bg-brand/20 transition-colors"
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
          )}
          {messages.map((m) => (
            <div key={m.id} className={cn("flex w-full", m.role === 'user' ? "justify-end" : "justify-start")}>
              <div className={cn(
                "max-w-[80%] rounded-2xl px-4 py-2 text-sm whitespace-pre-wrap break-words",
                m.role === 'user' ? "bg-brand text-slate-800 rounded-br-none" : "bg-secondary text-foreground rounded-bl-none"
              )}>
                {m.parts.map((part, i) =>
                  part.type === "text" ? <MessageContent key={`${m.id}-${i}`} text={part.text} /> : null
                )}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start w-full">
              <div className="max-w-[80%] rounded-2xl px-4 py-3 bg-secondary text-foreground rounded-bl-none flex gap-1 items-center">
                <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" />
                <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce [animation-delay:0.2s]" />
                <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        <form onSubmit={handleSubmit} className="p-3 border-t border-border/50 bg-background/50 flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 bg-secondary border border-border rounded-full px-4 py-2 text-sm focus:outline-none focus:border-brand"
          />
          <button
            type="submit"
            aria-label="Send message"
            disabled={!input.trim() || isLoading}
            className="p-2 rounded-full bg-brand text-slate-800 disabled:opacity-50 transition-colors"
          >
            <Send className="w-4 h-4 ml-0.5" />
          </button>
        </form>
      </div>
    </>
  );
}
