import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.dalvinoseo.com" }],
        destination: "https://dalvinoseo.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;