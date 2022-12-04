/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { concurrentFeatures: true },
  
  // compiler: { emotion: true },
  images: { domains: ['images.unsplash.com', 'localhost'] }
}

module.exports = nextConfig
