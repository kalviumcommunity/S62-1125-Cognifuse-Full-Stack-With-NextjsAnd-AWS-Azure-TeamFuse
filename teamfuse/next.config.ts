/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

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

  typescript: {
    ignoreBuildErrors: false,
  },

  typedRoutes: true,

  // Force Next.js to treat THIS folder as the root
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
