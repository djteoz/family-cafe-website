import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "boncake.cafe",
      },
      {
        protocol: "https",
        hostname: "images.gastronom.ru",
      },
      {
        protocol: "https",
        hostname: "avatars.mds.yandex.net",
      },
      {
        protocol: "https",
        hostname: "lifehacker.ru",
      },
    ],
  },
};

export default nextConfig;
