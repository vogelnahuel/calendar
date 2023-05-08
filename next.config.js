/** @type {import('next').NextConfig} */
const nextConfig = {
  reactServerComponents: {
    experimental: true
  },
  images: {
    domains: ['apod.nasa.gov']
  }
}

module.exports = nextConfig
