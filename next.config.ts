import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // SEO оптимизации
  poweredByHeader: false,

  // Статическая генерация для максимального SEO
  output: 'standalone',

  // Оптимизация изображений
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
