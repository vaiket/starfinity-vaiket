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
        hostname: "www.startfinitynavigator.com",
      },
    ],
  },
};

export default nextConfig;
