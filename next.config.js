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
};





