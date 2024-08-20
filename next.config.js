/** @type {import('next').NextConfig} */
const nextConfig = {
  // async headers() {
  //   return [
  //     {
  //       source: '/(.*)',
  //       headers: [
  //         {
  //           key: 'Content-Security-Policy',
  //           value: "script-src 'self' https://cdn-cookieyes.com https://www.googletagmanager.com https://www.gstatic.com https://www.gstatic.com/cv/js/sender/v1/cast_sender.js;",
  //         },
  //       ],
  //     },
  //   ];
  // },
  images: {
    remotePatterns: [
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
