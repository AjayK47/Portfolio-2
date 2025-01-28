/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Add this to handle browser APIs during build
  experimental: {
    runtime: 'edge'
  }
}

module.exports = nextConfig