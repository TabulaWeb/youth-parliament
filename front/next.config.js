/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://85.193.90.213/strapi/api/:path*',
      }
    ]
  },
  reactStrictMode: true,
  images: { domains: ['images.unsplash.com', 'localhost', 'mp60.ru'] }
}

module.exports = nextConfig
