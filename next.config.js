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

/** @type {import('next').NextConfig} */
const nextConfig = {
  // async headers() {
  //   return [
  //     {
  //       source: "/(.*)", // Apply headers to all routes
  //       headers: [
  //         {
  //           key: "Content-Security-Policy",
  //           value: `
  //             default-src 'self';
  //             script-src 'self' 'unsafe-inline' 'unsafe-eval'
  //             https://cdn-cookieyes.com 
  //             https://cdn-cookieyes.com/client_data/*/script.js 
  //             https://www.googletagmanager.com 
  //             https://www.gstatic.com 
  //             https://www.gstatic.com/cv/js/sender/v1/cast_sender.js 
  //             https://f.vimeocdn.com 
  //             https://player.vimeo.com
  //             https://cdn.lightwidget.com/widgets/lightwidget.js
  //             https://cdn.lightwidget.com/widgets/fe8af16ea57f5ce0b3df76d3341327a5.html
  //             https://va.vercel-scripts.com/v1/script.debug.js
  //             ;
  //             style-src 'self';
  //             img-src 'self' data: https: https://i.vimeocdn.com https"//www.ziprecruiter.com;
  //             font-src 'self';
  //             connect-src 'self' https://player.vimeo.com https://f.vimeocdn.com;
  //             frame-src https://player.vimeo.com/ https://f.vimeocdn.com
  //             https://www.google.com; 
  //             object-src 'none';
  //             base-uri 'self';
  //             form-action 'self';
  //             frame-ancestors 'none';
  //             upgrade-insecure-requests;
  //             block-all-mixed-content;
  //           `
  //             .replace(/\s{2,}/g, " ")
  //             .trim(), // Minify the CSP string
  //         },
  //       ],
  //     },
  //   ];
  // },
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
};

module.exports = nextConfig;
