import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Optional: Change image optimization if you're using next/image, 
  // since standard Next.js Image Optimization doesn't work in static exports.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
