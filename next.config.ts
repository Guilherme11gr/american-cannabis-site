import type { NextConfig } from "next";

const assetPrefix = process.env.AssetPrefix ?? "";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  assetPrefix: assetPrefix,
  images: {
    loader: 'akamai',    // usa o path abaixo
    path: assetPrefix, // prefixo absoluto para todas as <Image>
    unoptimized: true,
  },
  compiler: {
    emotion: true,
  },
};

export default nextConfig;
