/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co', 
        port: '', // Leave empty if no specific port is required
        pathname: '/**', // Allows any path
      },
      {
        protocol: 'https',
        hostname: 'www.ziprecruiter.com', 
        port: '', // Leave empty if no specific port is required
        pathname: '/**', // Allows any path
      },
    ],
  },
};

module.exports = nextConfig;
