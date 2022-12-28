/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => [
    {
      source: '/gallery',
      destination: 'https://gallery.phatsanphon.com/'
    }
  ]
}

module.exports = nextConfig
