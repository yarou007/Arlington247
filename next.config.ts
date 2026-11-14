import type { NextConfig } from "next";
import { DOMAIN } from "./src/lib/business";
const nextConfig: NextConfig = {
  turbopack: { root: process.cwd() },
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: `www.${new URL(DOMAIN).hostname}` }],
        destination: `${DOMAIN}/:path*`,
        statusCode: 301,
      },
    ];
  },
};
export default nextConfig;
