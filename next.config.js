/** @type {import('next').NextConfig} */


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





