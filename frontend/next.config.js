/* eslint-disable @typescript-eslint/no-var-requires */
const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
/* Uncomment to unable sentry */
// const { withSentryConfig } = require('@sentry/nextjs')

const nextConfig = {
  // TODO: revert it to true and fix map issues
  reactStrictMode: false,
  scrollRestoration: false,
  pageExtensions: ['page.tsx', 'api.ts'],
  i18n,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  jest: {
    ignoreDuringBuild: true,
  },
  experimental: {
    scrollRestoration: true,
  },
}

module.exports = nextConfig
