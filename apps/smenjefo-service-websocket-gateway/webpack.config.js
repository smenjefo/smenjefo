const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: path.join(__dirname, './src/index.ts'),
  mode: 'development',
  target: 'node',
  output: {
    filename: '[name].js',
    chunkFilename: '[name].[hash:8].js',
    path: path.join(process.env.NX_WORKSPACE_ROOT, './dist/apps/smenjefo-service-websocket-gateway'),
    clean: true,
  },
  devServer: {
    proxy: {
      '/websocket': {
         target: 'ws://localhost:4000',
         ws: true,
      },
    },
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)?$/,
        // another npm package path searching inside docker-compose env
        ...!process.env.DOCKER_COMPOSE && {
          exclude: /node_modules/,
        },
        loader: 'babel-loader',
      },
    ]
  },
  externals: [
    nodeExternals(),
  ],
}