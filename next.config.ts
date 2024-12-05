export default {
  experimental: {
    ppr: true,
    dynamicIO: true,
    inlineCss: true,
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
