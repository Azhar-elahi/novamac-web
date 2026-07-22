"use client";

import { useChat } from "ai/react";
import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { cn } from "@/lib/utils";

export function ChatWidget({ isPortal = false }: { isPortal?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat'
  });
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
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
          "fixed bottom-6 right-6 w-[350px] sm:w-[400px] h-[500px] max-h-[80vh] flex flex-col rounded-2xl border border-slate-200 shadow-2xl bg-slate-50 transition-all origin-bottom-right z-50 overflow-hidden",
          isOpen ? "scale-100 opacity-100" : "scale-50 opacity-0 pointer-events-none"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-[#111116]">
          <div>
            <h3 className="font-heading font-semibold">
              {isPortal ? "NovaMac Support Agent" : "NovaMac Guide"}
            </h3>
            <p className="text-xs text-muted-foreground">
              {isPortal ? "Ask about your orders or tickets" : "How can we help you today?"}
            </p>
          </div>
          <button onClick={() => setIsOpen(false)} className="p-1 rounded-md hover:bg-secondary transition-colors text-muted-foreground">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.length === 0 && (
            <div className="text-center text-sm text-muted-foreground mt-10">
              Send a message to start chatting!
            </div>
          )}
          {messages.map((m) => (
            <div key={m.id} className={cn("flex w-full", m.role === 'user' ? "justify-end" : "justify-start")}>
              <div className={cn(
                "max-w-[80%] rounded-2xl px-4 py-2 text-sm",
                m.role === 'user' ? "bg-brand text-slate-800 rounded-br-none" : "bg-secondary text-foreground rounded-bl-none"
              )}>
                {m.content}
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
            onChange={handleInputChange}
            placeholder="Type your message..."
            className="flex-1 bg-secondary border border-border rounded-full px-4 py-2 text-sm focus:outline-none focus:border-brand"
          />
          <button 
            type="submit" 
            disabled={!input || isLoading}
            className="p-2 rounded-full bg-brand text-slate-800 disabled:opacity-50 transition-colors"
          >
            <Send className="w-4 h-4 ml-0.5" />
          </button>
        </form>
      </div>
    </>
  );
}
