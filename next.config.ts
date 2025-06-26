import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  theme: {
    extend: {
      colors: {
        cardGlass: "rgba(255, 255, 255, 0.05)"
      },
      boxShadow: {
        glassGlow: "0 0 20px rgba(255, 255, 255, 0.08)"
      }
    }
  }
};

export default nextConfig;
