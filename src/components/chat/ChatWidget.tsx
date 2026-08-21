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
          className="underline font-bold text-[#3B82F6] hover:opacity-80"
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
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open AI Assistant"
        className={cn(
          "fixed bottom-6 right-6 p-3.5 sm:p-4 rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_25px_rgba(59,130,246,0.3)] bg-gradient-to-r from-[#0F1C33] via-[#091222] to-[#050A14] border border-[#1E2E4A] border-t-white/15 text-[#3B82F6] transition-all duration-300 hover:scale-110 cursor-pointer z-50 flex items-center gap-2",
          isOpen ? "scale-0 opacity-0 pointer-events-none" : "scale-100 opacity-100"
        )}
      >
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
        <MessageSquare className="w-5 h-5 text-[#3B82F6]" />
        <span className="hidden sm:inline font-mono text-xs font-bold uppercase tracking-wider text-[#F8FAFC]">AI Assistant</span>
      </button>

      {/* Main Chat Box Window */}
      <div
        className={cn(
          "fixed bottom-6 right-4 sm:right-6 w-[340px] sm:w-[420px] h-[520px] max-h-[82vh] flex flex-col rounded-3xl border border-[#1E2E4A] border-t-white/15 shadow-[0_30px_90px_rgba(0,0,0,0.95),0_0_50px_rgba(59,130,246,0.15)] bg-gradient-to-b from-[#0F1C33] via-[#091222] to-[#050A14] backdrop-blur-2xl transition-all duration-300 origin-bottom-right z-50 overflow-hidden text-[#F8FAFC]",
          isOpen ? "scale-100 opacity-100" : "scale-50 opacity-0 pointer-events-none"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#1E2E4A] bg-[#070D18]/90">
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <span className="font-mono text-[9px] font-bold text-[#3B82F6] uppercase tracking-widest">
                SYS_AI // ONLINE
              </span>
            </div>
            <h3 className="font-extrabold text-sm text-[#F8FAFC]">
              {isPortal ? "NovaMac Support Agent" : "NovaMac Executive AI"}
            </h3>
            <p className="text-[11px] text-[#94A3B8] font-normal">
              {isPortal ? "Real-time project & ticket assistant" : "Ask about our services, tech stack & pricing"}
            </p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close Chat"
            className="w-8 h-8 rounded-full bg-[#0F1C33] text-[#94A3B8] hover:text-white flex items-center justify-center border border-[#1E2E4A] transition-colors shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Message Log */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 font-sans text-xs sm:text-sm">
          {messages.length === 0 && (
            <div className="space-y-4 mt-6">
              <div className="text-center text-xs text-[#94A3B8] leading-relaxed px-2">
                Welcome to NovaMac Solutions. Ask a custom question or pick a quick suggestion below:
              </div>
              <div className="flex flex-col gap-2.5 px-2">
                {QUICK_SUGGESTIONS.map((s) => (
                  <button
                    key={s.label}
                    onClick={() => submitText(s.text)}
                    className="text-xs font-mono font-bold px-4 py-2.5 rounded-xl border border-[#1E2E4A] text-[#F8FAFC] bg-[#070D18] hover:border-[#3B82F6] hover:bg-[#3B82F6]/15 hover:text-white transition-all cursor-pointer shadow-sm text-left flex items-center justify-between"
                  >
                    <span>{s.label}</span>
                    <span className="text-[#3B82F6] text-xs font-normal">→</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((m) => (
            <div key={m.id} className={cn("flex w-full", m.role === 'user' ? "justify-end" : "justify-start")}>
              <div className={cn(
                "max-w-[85%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm whitespace-pre-wrap break-words leading-relaxed",
                m.role === 'user'
                  ? "bg-[#3B82F6] text-white rounded-br-none shadow-md"
                  : "bg-[#070D18] text-[#F8FAFC] border border-[#1E2E4A] rounded-bl-none shadow-sm"
              )}>
                {m.parts.map((part, i) =>
                  part.type === "text" ? <MessageContent key={`${m.id}-${i}`} text={part.text} /> : null
                )}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start w-full">
              <div className="max-w-[80%] rounded-2xl px-4 py-3 bg-[#070D18] border border-[#1E2E4A] text-[#F8FAFC] rounded-bl-none flex gap-1.5 items-center">
                <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full animate-bounce" />
                <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full animate-bounce [animation-delay:0.2s]" />
                <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="p-3 border-t border-[#1E2E4A] bg-[#070D18]/90 flex items-center gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 bg-[#0F1C33] border border-[#1E2E4A] text-[#F8FAFC] placeholder-[#94A3B8] rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#3B82F6] transition-colors"
          />
          <button
            type="submit"
            aria-label="Send message"
            disabled={!input.trim() || isLoading}
            className="w-9 h-9 rounded-xl bg-[#3B82F6] text-white flex items-center justify-center disabled:opacity-40 hover:bg-[#2563EB] transition-colors shadow-md shrink-0 cursor-pointer"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </>
  );
}
