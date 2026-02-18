import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'v8jkacgtuvjxnp2l.public.blob.vercel-storage.com',
      },
    ],
  },
};

export default nextConfig;
