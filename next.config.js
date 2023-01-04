/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: '**.unsplash.com',
    //     port: '',
    //     pathname: '',
    //   },
    // ],
    domains: ['images.unsplash.com', '**.freepik.com']
  }
}

module.exports = nextConfig
