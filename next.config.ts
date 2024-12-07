export default {
  experimental: {
    ppr: true,
    dynamicIO: true,
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.gr-assets.com',
        port: '',
      },
    ],
  },
};
