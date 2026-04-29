/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    qualities: [75, 95],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [450, 500, 550, 600, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  devIndicators: false,
}

export default nextConfig
