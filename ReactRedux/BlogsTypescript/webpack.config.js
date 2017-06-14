const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.tsx'
  ],

  devtool: 'source-maps',

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: './dist'
  },

  devServer: {
    port: 3000,
    historyApiFallback: true,
    inline: true,
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },

  module: {
    loaders: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { test: /\.js$/, loader: 'source-map-loader' }
    ]
  }
};