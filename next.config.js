/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'cdn.sanity.io',
      'scottklein.dev'
    ],
    // loader: 'custom'
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};





