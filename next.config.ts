import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  compiler: {
    // ativa o transform do Emotion no SWC
    emotion: true,
  },
};

export default nextConfig;
