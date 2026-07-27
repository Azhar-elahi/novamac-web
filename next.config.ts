import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Admin panel currently accepts any external image URL for
    // project/blog cover images. This wildcard keeps that working while
    // still routing images through Next's image optimizer (resizing,
    // lazy-loading, modern formats). Once you settle on a fixed set of
    // trusted image hosts (e.g. your own CDN, Cloudinary, Unsplash),
    // replace this with an explicit list of hostnames for tighter security.
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
        ],
      },
    ];
  },
};

export default nextConfig;
