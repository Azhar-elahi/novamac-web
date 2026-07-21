import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  providers: [], // we will configure providers in auth.ts
  pages: {
    signIn: "/7222-@dm1nl0g1n/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isAdminRoute = nextUrl.pathname.startsWith("/7222-@dm1nl0g1n") && nextUrl.pathname !== "/7222-@dm1nl0g1n/login";

      if (isAdminRoute) {
        if (isLoggedIn && (auth?.user as any)?.role === "ADMIN") return true;
        return false;
      }
      
      return true;
    },
    async session({ session, token }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      if (token.role && session.user) {
        session.user.role = token.role as string;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    }
  },
} satisfies NextAuthConfig;
