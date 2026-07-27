import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

// Simple brute-force protection: track failed attempts per identifier (email).
// Note: this is in-memory, so it resets on server restart and is NOT shared
// across multiple serverless instances. For production at scale (e.g. Vercel),
// replace this with a durable store (Upstash Redis / Vercel KV) keyed by
// email + IP. This is still a meaningful improvement over no protection at all.
const MAX_ATTEMPTS = 5;
const LOCKOUT_MS = 10 * 60 * 1000; // 10 minutes
const attemptMap = new Map<string, { count: number; lockedUntil: number }>();

function isLocked(key: string) {
  const entry = attemptMap.get(key);
  if (!entry) return false;
  if (entry.lockedUntil && entry.lockedUntil > Date.now()) return true;
  if (entry.lockedUntil && entry.lockedUntil <= Date.now()) {
    attemptMap.delete(key);
    return false;
  }
  return false;
}

function recordFailure(key: string) {
  const entry = attemptMap.get(key) || { count: 0, lockedUntil: 0 };
  entry.count += 1;
  if (entry.count >= MAX_ATTEMPTS) {
    entry.lockedUntil = Date.now() + LOCKOUT_MS;
  }
  attemptMap.set(key, entry);
}

function clearFailures(key: string) {
  attemptMap.delete(key);
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const email = (credentials.email as string).toLowerCase();

        if (isLocked(email)) {
          throw new Error("Too many failed attempts. Please try again in a few minutes.");
        }

        const user = await prisma.user.findUnique({
          where: { email }
        });

        if (!user || !user.password) {
          recordFailure(email);
          return null;
        }

        const passwordsMatch = await bcrypt.compare(
          credentials.password as string,
          user.password
        );

        if (passwordsMatch) {
          clearFailures(email);
          return user;
        }

        recordFailure(email);
        return null;
      }
    })
  ],
});
