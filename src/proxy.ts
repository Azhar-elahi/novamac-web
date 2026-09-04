import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const { auth } = NextAuth(authConfig);

export default auth(function proxy(request: NextRequest) {
  const acceptHeader = request.headers.get("accept") || "";
  const pathname = request.nextUrl.pathname;

  // Check if client explicitly requests Markdown
  const isMarkdownRequest = acceptHeader.includes("text/markdown") || acceptHeader.includes("text/x-markdown");

  let response: NextResponse;

  if (isMarkdownRequest && !pathname.startsWith("/_next") && !pathname.startsWith("/api") && !pathname.includes(".")) {
    const url = request.nextUrl.clone();
    url.pathname = "/llms-full.txt";
    response = NextResponse.rewrite(url);
    response.headers.set("Content-Type", "text/markdown; charset=utf-8");
  } else {
    response = NextResponse.next();
  }

  // Set Vary: Accept header for CDN caching & agent negotiation
  const existingVary = response.headers.get("Vary");
  if (!existingVary) {
    response.headers.set("Vary", "Accept, Accept-Encoding");
  } else if (!existingVary.includes("Accept")) {
    response.headers.set("Vary", `Accept, ${existingVary}`);
  }

  return response;
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|7222-@dm1nl0g1n/login|$).*)"],
};

