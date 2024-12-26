//@ts-check

const REMOTE_URL = 'https://remote-omega.vercel.app';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  images: {
    domains: ['chhcpportalode4.prod.acquia-sites.com'],
  },
  async rewrites() {
    return [
      {
        source: "/news",
        destination: `${REMOTE_URL}/news`,
      },
      {
        source: "/hello",
        destination: `${REMOTE_URL}/hello`,
      }
    ]
  }
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
