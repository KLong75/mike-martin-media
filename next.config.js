/** @type {import('next').NextConfig} */

// const { createProxyMiddleware } = require('http-proxy-middleware');

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/our_work",
        destination: "/our-work",
        permanent: true, // This indicates a 301 permanent redirect
      },
      {
        source: "/our_work/drone",
        destination: "/capabilities/drone",
        permanent: true, // This indicates a 301 permanent redirect
      },
      {
        source: "/our_work/photography",
        destination: "/capabilities/photography",
        permanent: true, // This indicates a 301 permanent redirect
      },
      {
        source: "/our_work/livestreaming",
        destination: "/capabilities/livestreaming",
        permanent: true, // This indicates a 301 permanent redirect
      },
      {
        source: "/our_work/animation-motion-graphics",
        destination: "/capabilities/animation-motion-graphics",
        permanent: true, // This indicates a 301 permanent redirect
      },
      {
        source: "/our_work/mmm-video",
        destination: "/our-work",
        permanent: true, // This indicates a 301 permanent redirect
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.ziprecruiter.com",
        port: "", // Leave empty if no specific port is required
        pathname: "/**", // Allows any path
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/proxy/:path*',
        destination: 'https://mmmmarketing42.activehosted.com/:path*', // Proxy to external API
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/api/proxy/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // async headers() {
//   //   return [
//   //     {
//   //       source: '/(.*)',
//   //       headers: [
//   //         {
//   //           key: 'Content-Security-Policy',
//   //           // value: "script-src 'self' https://cdn-cookieyes.com https://cdn-cookieyes.com/client_data/*/script.js https://www.googletagmanager.com https://www.gstatic.com https://www.gstatic.com/cv/js/sender/v1/cast_sender.js https://f.vimeocdn.com https://player.vimeo.com;",
//   //         },
//   //         {
//   //           key: 'Permissions-Policy',
//   //           value: 'autoplay=https://player.vimeo.com',
//   //         },
//   //       ],
//   //     },
//   //   ];
//   // },
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'www.ziprecruiter.com',
//         port: '', // Leave empty if no specific port is required
//         pathname: '/**', // Allows any path
//       },
//     ],
//   },
// };

// module.exports = nextConfig;
