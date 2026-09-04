import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cinemaguide.skillbox.cc",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
