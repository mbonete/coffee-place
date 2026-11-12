/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  experimental: {
    viewTransition: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
