/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');
const withNx = require('@nrwl/next/plugins/with-nx');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  webpack5: true,
  compress: false,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    const { dependencies } = fs.existsSync(path.join(__dirname, '../../package.json'))
      ? require('../../package.json')
      : require('./package.json');

    config.optimization.minimize = false;

    config.plugins.push(
      new ModuleFederationPlugin({
        name: "appShell",
        shared: {
          react: {
            eager: true,
            singleton: true,
            requiredVersion: dependencies['react'],
          },
          'react-dom': {
            eager: true,
            singleton: true,
            requiredVersion: dependencies['react-dom'],
          },
          i18next: {
            eager: true,
            singleton: true,
            requiredVersion: dependencies['i18next'],
          },
          "react-i18next": {
            eager: true,
            singleton: true,
            requiredVersion: dependencies['react-i18next'],
          },
        },
      }),

      new webpack.DefinePlugin({
        _DEVELOPMENT_: true,
        _PRODUCTION_: false,
      }),
    );

    config.module.rules.unshift(
      {
        test: /\.(ts|tsx|js)?$/,
        // another npm package path searching inside docker-compose env
        ...!process.env.DOCKER_COMPOSE && {
          exclude: /node_modules/,
        },
        loader: 'babel-loader',
      },
    );

    config.mode = 'development';

    // Important: return the modified config
    return config;
  },
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
};

module.exports = withNx(nextConfig);
