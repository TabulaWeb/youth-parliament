/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    emotion: true
  },
  images: {
    domains: ['images.unsplash.com']
  }
}

module.exports = nextConfig
