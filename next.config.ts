import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NEXT_BASE_PATH ?? "",
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
