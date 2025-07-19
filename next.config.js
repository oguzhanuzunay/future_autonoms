/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/panel',
        has: [
          {
            type: 'host',
            value: 'panel.localhost:3000',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
 