import type { NextConfig } from "next";

// const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/american-cannabis-site',
  assetPrefix: '/american-cannabis-site/',
  images: { unoptimized: true },
  compiler: {
    emotion: true,
  },
};

export default nextConfig;
