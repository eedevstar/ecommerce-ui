/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')

const nextConfig = {
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    skipWaiting: true, // Turn this to false once you're ready to deploy a banner to develop update prompt.
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development', // This will create worker-box production build.
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  images: {
    domains: ['images.pexels.com']
  },
};

module.exports = withPWA(nextConfig);
