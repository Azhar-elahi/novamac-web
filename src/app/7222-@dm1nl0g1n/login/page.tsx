"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ShieldAlert } from "lucide-react";

export default function SecureLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (res?.error) {
        setError("Invalid credentials");
      } else {
        router.push("/7222-@dm1nl0g1n");
      }
    } catch (err) {
      setError("An error occurred");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fafafc] px-4">
      <div className="w-full max-w-md p-8 rounded-2xl glass-card border border-slate-200 bg-[#eaedf2]">
        <div className="flex items-center gap-2 font-heading font-bold text-2xl text-red-500 mb-8 justify-center">
          <ShieldAlert className="w-6 h-6" />
          Restricted Area
        </div>

        {error && <div className="mb-4 p-3 bg-red-500/10 text-red-500 text-sm rounded-lg text-center font-mono">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-slate-600 mb-1 uppercase tracking-widest">Identifier</label>
            <input 
              type="email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/70 border border-slate-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all text-slate-900 font-mono"
            />
          </div>
          <div>
            <label className="block text-xs font-mono text-slate-600 mb-1 uppercase tracking-widest">Passcode</label>
            <input 
              type="password" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/70 border border-slate-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all text-slate-900 font-mono"
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-4 mt-4 bg-red-500/10 text-red-500 border border-red-500/20 rounded-lg font-bold font-mono tracking-widest uppercase hover:bg-red-500 hover:text-slate-900 transition-all"
          >
            Authenticate
          </button>
        </form>
      </div>
    </div>
  );
}
