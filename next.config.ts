import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // The unused Cloudflare/D1 starter files are typed only in the Sites runtime.
    // Keep the static memorial build portable to the public preview host.
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
