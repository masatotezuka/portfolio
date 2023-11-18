const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')
const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zenn.dev',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'assets.st-note.com',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: ''
      }
    ]
  }
}

module.exports = withVanillaExtract(nextConfig)
