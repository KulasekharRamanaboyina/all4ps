import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  images: {
    domains: ["cdn.sanity.io"],
  },
};

export default nextConfig;
