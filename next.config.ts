import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", //уменьшает размер образа
  images: {
    domains: [
      "images.unsplash.com",
      "media.istockphoto.com",
      "freepik.com",
      "localhost",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
