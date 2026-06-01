import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/SEEDSTHERAPHY' : '',
  assetPrefix: isProd ? '/SEEDSTHERAPHY/' : '',
};

export default nextConfig;
