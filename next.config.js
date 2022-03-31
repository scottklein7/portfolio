/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer')

module.exports = {
  reactStrictMode: true,
  wcMinify: true,
  images: {
    domains: ['cdn.sanity.io'],
    loader: 'custom'
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        'react/jsx-runtime.js': 'preact/compat/jsx-runtime',
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat'
      });
    }

    return config;
  }
};





