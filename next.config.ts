import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["localhost", "www.antservices.in"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/web/image**",
      },
      {
        protocol: "https",
        hostname: "www.antservices.in",
        pathname: "/web/image**",
      },
    ],
  },
};

export default nextConfig;
