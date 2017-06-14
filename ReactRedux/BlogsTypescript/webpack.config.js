const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.tsx',

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },

  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { test: /\.js$/, loader: 'source-map-loader' }
    ]
  }
};