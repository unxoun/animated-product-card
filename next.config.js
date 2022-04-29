/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/products/1',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
