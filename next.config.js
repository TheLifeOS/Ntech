/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Use external image URLs (free tier optimization)
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
