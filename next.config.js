//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    svgr: false,
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ Ignore ESLint errors on Vercel
  },
};

const plugins = [withNx];

module.exports = composePlugins(...plugins)(nextConfig);
