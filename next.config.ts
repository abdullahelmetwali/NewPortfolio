import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    NEXT_PUBLIC_SPACE_ID: process.env.SPACE_ID,
    NEXT_PUBLIC_ACCESS_TOKEN: process.env.ACCESS_TOKEN,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'images.ctfassets.net',
        pathname: '**/**',
      }
    ],
    domains: ['images.ctfassets.net'],
  },
};

export default nextConfig;
