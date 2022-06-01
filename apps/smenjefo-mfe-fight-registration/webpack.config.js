const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { dependencies } = require('../../package.json');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const clientConfig = {
  entry: {
    client: path.join(__dirname, './src/index.ts'),
  },
  mode: 'development',
  output: {
    filename: '[name].js',
    chunkFilename: '[name].[hash:8].js',
    path: path.join(process.env.NX_WORKSPACE_ROOT, './dist/apps/smenjefo-mfe-fight-registration'),
  },
  devServer: {
    host: process.env.MFE_FIGHT_REGISTRATION_HOST,
    port: process.env.MFE_FIGHT_REGISTRATION_PORT,
    static: {
      directory: path.join(__dirname, './public'),
      watch: {
        // enables docker-compose hot reloading for webpack dev server
        usePolling: true,
      }
    },
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.scss'],
    alias: {
      '@smenjefo/smenjefo-ui': path.join(process.env.NX_WORKSPACE_ROOT, './libs/smenjefo-ui/src'),
      '@smenjefo/smenjefo-localization': path.join(process.env.NX_WORKSPACE_ROOT, './libs/smenjefo-localization/src'),
      '@smenjefo/smenjefo-mfe': path.join(process.env.NX_WORKSPACE_ROOT, './libs/smenjefo-mfe/src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js)?$/,
        // another npm package path searching inside docker-compose env
        ...!process.env.DOCKER_COMPOSE && {
          exclude: /node_modules/,
        },
        loader: 'babel-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName:'[local]',
              },
            },
          },
          { loader: 'sass-loader' },
        ],
      },
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'fightRegistration',
      filename: 'remoteEntry.js',
      exposes: {
        './MFE': path.join(__dirname, './src/MFE'),
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: dependencies['react'],
        },
        'react-dom': {
          singleton: true,
          requiredVersion: dependencies['react-dom'],
        },
        i18next: {
          singleton: true,
          requiredVersion: dependencies['i18next'],
        },
        "react-i18next": {
          singleton: true,
          requiredVersion: dependencies['react-i18next'],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/index.html'),
    }),
  ]
};

const serverConfig = {
  entry: {
    server: path.join(__dirname, './src/server.ts'),
  },
  mode: 'development',
  target: 'node',
  output: {
    filename: '[name].js',
    path: path.join(process.env.NX_WORKSPACE_ROOT, './dist/apps/smenjefo-mfe-fight-registration'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js)?$/,
        // another npm package path searching inside docker-compose env
        ...!process.env.DOCKER_COMPOSE && {
          exclude: /node_modules/,
        },
        loader: 'babel-loader',
      },
    ],
  }
};

module.exports = [clientConfig, serverConfig];