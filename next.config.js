/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'food-side-zezezenya.s3.eu-north-1.amazonaws.com',
      },
    ]
  }
}

module.exports = nextConfig
