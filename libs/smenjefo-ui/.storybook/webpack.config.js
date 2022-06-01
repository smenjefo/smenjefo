const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
  context: __dirname,
  mode: 'development',
  entry: './src/index.ts',
  output: {
    library: 'ui',
    libraryTarget: 'umd',
    filename: 'smenjefo-ui.js',
  },
  optimization: {
    usedExports: true,
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.scss']
  },
  externals: {
    react: 'react',
    classnames: 'classnames',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
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
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              extract: true,
              spriteFilename: 'sprite-[hash].svg',
            },
          },
          'svg-transform-loader',
          'svgo-loader'
        ],
      },
    ]
  },
  plugins: [
    new SpriteLoaderPlugin(),
  ],
}