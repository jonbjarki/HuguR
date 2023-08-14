/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    mdxRs: true,
  },
  images: {
    domains: ['localhost', 'picsum.photos'],
  },
  options: {
    providerImportSource: '@mdx-js/react',
  },
};

const withMDX = require('@next/mdx')();
module.exports = withMDX(nextConfig);
