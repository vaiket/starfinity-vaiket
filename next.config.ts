// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn3d.iconscout.com",
      },
      {
        protocol: "https",
        hostname: "eazygrow.com",
      },
    ],
  },
};

export default nextConfig;
