"use client";

import { useChat } from "@ai-sdk/react";
import { useState, useRef, useEffect, Fragment } from "react";
import { MessageSquare, X, Send, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const QUICK_SUGGESTIONS = [
  { label: "View Services", text: "What services do you offer?" },
  { label: "See Pricing", text: "How much do your services cost?" },
  { label: "Contact Us", text: "How can I get in touch with your team?" },
];

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
      const label = match[1];
      const url = match[2];
      const isInternal = url.startsWith("/");
      nodes.push(
        <a
          key={key++}
          href={url}
          target={isInternal ? undefined : "_blank"}
          rel={isInternal ? undefined : "noopener noreferrer"}
          className="underline font-bold text-[#FF5733] hover:opacity-80"
        >
          {label}
        </a>
      );
    } else if (match[3]) {
      nodes.push(<strong key={key++} className="font-semibold">{match[3]}</strong>);
    } else if (match[4]) {
      nodes.push(
        <a key={key++} href={`mailto:${match[4]}`} className="underline font-medium text-[#FF5733] hover:opacity-80">
          {match[4]}
        </a>
      );
    } else if (match[5]) {
      const digits = match[5].replace(/[^\d+]/g, "");
      nodes.push(
        <a key={key++} href={`tel:${digits}`} className="underline font-medium text-[#FF5733] hover:opacity-80">
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
      {/* Docked Right-Edge Trigger Button (Slides out on hover) */}
      <div className={cn("fixed bottom-8 right-0 z-50", isOpen && "pointer-events-none opacity-0")}>
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open Assistant"
          className="group flex items-center gap-3 bg-[#202020] hover:bg-[#FF5733] text-white h-12 rounded-l-full pl-3.5 pr-6 shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_25px_rgba(255,87,51,0.3)] border-l border-y border-white/20 transition-transform duration-300 ease-out translate-x-[calc(100%-48px)] hover:translate-x-0 cursor-pointer overflow-hidden whitespace-nowrap"
        >
          <div className="w-6 h-6 rounded-full bg-[#FF5733]/20 border border-[#FF5733]/40 text-[#FF5733] group-hover:text-white group-hover:bg-white/20 flex items-center justify-center shrink-0 shadow-sm group-hover:rotate-12 transition-transform">
            <MessageSquare className="w-3.5 h-3.5" />
          </div>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
            Studio Desk
          </span>
          <ArrowRight className="w-4 h-4 text-[#FF5733] group-hover:text-white shrink-0" />
        </button>
      </div>

      {/* Main Chat Box Window */}
      <div
        className={cn(
          "fixed bottom-4 right-3 sm:bottom-6 sm:right-6 w-[calc(100vw-1.5rem)] max-w-sm sm:w-[420px] h-[500px] max-h-[78vh] flex flex-col rounded-3xl border border-white/15 border-t-white/25 shadow-[0_30px_90px_rgba(0,0,0,0.95),0_0_50px_rgba(255,87,51,0.15)] bg-[#202020]/98 backdrop-blur-2xl transition-all duration-300 origin-bottom-right z-50 overflow-hidden text-white",
          isOpen ? "scale-100 opacity-100" : "scale-50 opacity-0 pointer-events-none"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-black/40">
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <span className="font-mono text-[9px] font-bold text-[#FF5733] uppercase tracking-widest">
                STUDIO DESK // ONLINE
              </span>
            </div>
            <h3 className="font-extrabold text-sm text-white">
              {isPortal ? "NovaMac Support Desk" : "NovaMac Studio Assistant"}
            </h3>
            <p className="text-[11px] text-gray-400 font-normal">
              {isPortal ? "Real-time project & ticket assistant" : "Ask about our services, tech stack & pricing"}
            </p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close Chat"
            className="w-8 h-8 rounded-full bg-white/10 text-gray-300 hover:text-white flex items-center justify-center border border-white/10 transition-colors shrink-0 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Message Log */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 font-sans text-xs sm:text-sm">
          {messages.length === 0 && (
            <div className="space-y-4 mt-6">
              <div className="text-center text-xs text-gray-400 leading-relaxed px-2">
                Welcome to NovaMac Solutions! How can we help your business today?
              </div>
              <div className="flex flex-col gap-2.5 px-2">
                {QUICK_SUGGESTIONS.map((s) => (
                  <button
                    key={s.label}
                    onClick={() => submitText(s.text)}
                    className="text-xs font-mono font-bold px-4 py-2.5 rounded-xl border border-white/10 text-white bg-white/5 hover:border-[#FF5733] hover:bg-[#FF5733]/15 transition-all cursor-pointer shadow-sm text-left flex items-center justify-between"
                  >
                    <span>{s.label}</span>
                    <span className="text-[#FF5733] text-xs font-normal">→</span>
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
                  ? "bg-[#FF5733] text-white rounded-br-none shadow-md"
                  : "bg-white/10 text-white border border-white/10 rounded-bl-none shadow-sm"
              )}>
                {m.parts.map((part, i) =>
                  part.type === "text" ? <MessageContent key={`${m.id}-${i}`} text={part.text} /> : null
                )}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start w-full">
              <div className="max-w-[80%] rounded-2xl px-4 py-3 bg-white/10 border border-white/10 text-white rounded-bl-none flex gap-1.5 items-center">
                <div className="w-1.5 h-1.5 bg-[#FF5733] rounded-full animate-bounce" />
                <div className="w-1.5 h-1.5 bg-[#FF5733] rounded-full animate-bounce [animation-delay:0.2s]" />
                <div className="w-1.5 h-1.5 bg-[#FF5733] rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="p-3 border-t border-white/10 bg-black/40 flex items-center gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 bg-white/5 border border-white/10 text-white placeholder-gray-400 rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#FF5733] transition-colors"
          />
          <button
            type="submit"
            aria-label="Send message"
            disabled={!input.trim() || isLoading}
            className="w-9 h-9 rounded-xl bg-[#FF5733] text-white flex items-center justify-center disabled:opacity-40 hover:bg-white hover:text-[#202020] transition-colors shadow-md shrink-0 cursor-pointer"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </>
  );
}
