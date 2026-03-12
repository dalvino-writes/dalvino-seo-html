import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.archoric.com" }],
        destination: "https://archoric.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;