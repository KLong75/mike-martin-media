/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "script-src 'self' https://cdn-cookieyes.com https://www.googletagmanager.com;",
          },
        ],
      },
    ];
  },
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
