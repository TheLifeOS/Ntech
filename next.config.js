/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel-specific optimizations
  images: {
    unoptimized: true, // Free tier: no image optimization (use external CDN)
  },
  
  // Enable strict mode for better development
  reactStrictMode: true,
  
  // Speed up builds on Vercel
  swcMinify: true,
  
  // Static export for ultra-fast deployment
  output: 'export',
  
  // Base path for assets
  basePath: '',
  
  // Trailing slash for static sites
  trailingSlash: true,
}

module.exports = nextConfig
