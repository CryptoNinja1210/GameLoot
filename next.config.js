/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  productionBrowserSourceMaps: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
      },
      {
        protocol: "https",
        hostname: "ipfs.io",
      },
      {
        protocol: "https",
        hostname: "images.crazygames.com",
      },
      {
        protocol: "https",
        hostname: "lvwaxofjnhhhzpdtgubf.supabase.co",
      },
      {
        protocol: "https",
        hostname: "img.reservoir.tools",
      },
    ],
  },
};

module.exports = nextConfig;
