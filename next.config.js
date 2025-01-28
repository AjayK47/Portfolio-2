/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,      // Enables React strict mode for better development
  output: 'export',           // Generates static HTML export in 'out' directory
  images: {
    unoptimized: true,        // Required for static exports with Next.js images
  }
}

module.exports = nextConfig