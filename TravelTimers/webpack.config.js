const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    bundle: './src/index.tsx',
    vendor: ['react', 'react-dom']
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              namedExport: true,
              camelCase: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunksSortMode: 'dependency'
    })
  ]
}