import type { NextConfig } from "next";

const assetPrefix = process.env.AssetPrefix ?? "";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  assetPrefix: assetPrefix,
  images: { unoptimized: true },
  compiler: {
    emotion: true,
  },
};

export default nextConfig;
