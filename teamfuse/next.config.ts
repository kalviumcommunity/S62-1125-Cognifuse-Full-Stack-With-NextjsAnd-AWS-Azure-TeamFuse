import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Turbopack now works automatically. "root" is deprecated.
  // If you want to force Turbopack:
  // default is auto based on dev/build command

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
    ],
  },

  // TypeScript settings (tsconfigPath is not needed unless you use a custom file)
  typescript: {
    ignoreBuildErrors: false,
  },
  typedRoutes: true,
};

export default nextConfig;
