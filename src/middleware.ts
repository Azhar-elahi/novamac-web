import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const acceptHeader = request.headers.get("accept") || "";
  const pathname = request.nextUrl.pathname;

  // Check if client explicitly requests Markdown
  const isMarkdownRequest = acceptHeader.includes("text/markdown") || acceptHeader.includes("text/x-markdown");

  let response: NextResponse;

  // If client requests markdown and hitting a page route (not static assets, api, or direct files)
  if (isMarkdownRequest && !pathname.startsWith("/_next") && !pathname.startsWith("/api") && !pathname.includes(".")) {
    const url = request.nextUrl.clone();
    url.pathname = "/llms-full.txt";
    response = NextResponse.rewrite(url);
    response.headers.set("Content-Type", "text/markdown; charset=utf-8");
  } else {
    response = NextResponse.next();
  }

  // CRITICAL REQUIREMENT for acceptmarkdown.com & CDN caching:
  // Add Accept to Vary header so CDNs cache HTML and Markdown variants separately.
  const existingVary = response.headers.get("Vary");
  if (!existingVary) {
    response.headers.set("Vary", "Accept, Accept-Encoding");
  } else if (!existingVary.includes("Accept")) {
    response.headers.set("Vary", `Accept, ${existingVary}`);
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except static files (_next/static, _next/image, favicon.ico, images, fonts)
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js)$).*)",
  ],
};
