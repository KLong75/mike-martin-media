/** @type {import('next').NextConfig} */

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
        source: "/our-work/drone",
        destination: "/capabilities/drone",
        permanent: true, // This indicates a 301 permanent redirect
      },
      {
        source: "/our_work/photography",
        destination: "/capabilities/photography",
        permanent: true, // This indicates a 301 permanent redirect
      },
      {
        source: "/our-work/photography",
        destination: "/capabilities/photography",
        permanent: true, // This indicates a 301 permanent redirect
      },
      {
        source: "/our_work/livestreaming",
        destination: "/capabilities/livestreaming",
        permanent: true, // This indicates a 301 permanent redirect
      },
      {
        source: "/our-work/livestreaming",
        destination: "/capabilities/livestreaming",
        permanent: true, // This indicates a 301 permanent redirect
      },
      {
        source: "/our_work/animation-motion-graphics",
        destination: "/capabilities/animation-motion-graphics",
        permanent: true, // This indicates a 301 permanent redirect
      },
      {
        source: "/our-work/animation-motion-graphics",
        destination: "/capabilities/animation-motion-graphics",
        permanent: true, // This indicates a 301 permanent redirect
      },
      {
        source: "/our_work/mmm-video",
        destination: "/our-work",
        permanent: true, // This indicates a 301 permanent redirect
      },
      {
        source: "/our-work/mmm-video",
        destination: "/our-work",
        permanent: true, // This indicates a 301 permanent redirect
      },
      {
        source: "/blog/blog-posts/learning-never-stops",
        destination: "/blog/posts/learning-never-stops",
        permanent: true, // This indicates a 301 permanent redirect
      },
      {
        source: "/blog/blog-posts/growth-and-gratitude",
        destination: "/blog/posts/growth-and-gratitude",
        permanent: true, // This indicates a 301 permanent redirect
      },
      {
        source: "/blog/blog-posts/starting-my-career",
        destination: "/blog/posts/starting-my-career",
        permanent: true, // This indicates a 301 permanent redirect
      },
      {
        source: "/blog/blog-posts/year-end-review",
        destination: "/blog/posts/year-end-review",
        permanent: true, // This indicates a 301 permanent redirect
      },
      {
        source: "/blog/blog-posts/note-from-ceo",
        destination: "/blog/posts/note-from-ceo",
        permanent: true, // This indicates a 301 permanent redirect
      },
      {
        source: "/blog/blog-posts/olympic-fever",
        destination: "/blog/posts/olympic-fever",
        permanent: true, // This indicates a 301 permanent redirect
      },
      {
        source: "/blog/blog-posts/note-from-tom",
        destination: "/blog/posts/note-from-tom",
        permanent: true, // This indicates a 301 permanent redirect
      },
      {
        source: "/blog/blog-posts/note-from-luke",
        destination: "/blog/posts/note-from-luke",
        permanent: true, // This indicates a 301 permanent redirect
      },
      {
        source: "/blog/blog-posts/dayton-ohio-adventure",
        destination: "/blog/posts/dayton-ohio-adventure",
        permanent: true, // This indicates a 301 permanent redirect
      },
      {
        source: "/blog/blog-posts/out-and-about-2024",
        destination: "/blog/posts/out-and-about-2024",
        permanent: true, // This indicates a 301 permanent redirect
      },
      {
        source: "/blog/blog-posts/inside-mmm-arizona-trip",
        destination: "/blog/posts/inside-mmm-arizona-trip",
        permanent: true, // This indicates a 301 permanent redirect
      },
      {
        source: "/blog/blog-posts/reflecting-on-the-season",
        destination: "/blog/posts/reflecting-on-the-season",
        permanent: true, // This indicates a 301 permanent redirect
      },
      {
        source: "/blog/blog-posts/six-months-down-six-more-to-go",
        destination: "/blog/posts/six-months-down-six-more-to-go",
        permanent: true, // This indicates a 301 permanent redirect
      },
      {
        source: "/blog/blog-posts/letter-from-kevin",
        destination: "/blog/posts/letter-from-kevin",
        permanent: true, // This indicates a 301 permanent redirect
      },
      {
        source: "/blog/blog-posts/note-from-rachel",
        destination: "/blog/posts/note-from-rachel",
        permanent: true, // This indicates a 301 permanent redirect
      },
      {
        source: "/blog/blog-posts/note-from-mike",
        destination: "/blog/posts/note-from-mike",
        permanent: true, // This indicates a 301 permanent redirect
      },
      {
        source: "/blog/blog-posts/note-from-mary",
        destination: "/blog/posts/note-from-mary",
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
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            // Adjust time values as needed
            value: "public, max-age=600, s-maxage=1200",
          },
        ],
      },
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
