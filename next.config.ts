import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.artic.edu",
      },
    ],
    domains: ["lh3.googleusercontent.com", "avatars.githubusercontent.com"],
  },
};

export default nextConfig;
