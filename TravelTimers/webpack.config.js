const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // this is literally the entry of the application, webpack will start from
  // the places listed here. in this case im using bundle and vendor code
  // so webpack will look in index.tsx in this case and work through the modules 
  // from there. and for vendor were basically useing it in order to split out the 
  // vendor bundles from our code.
  entry: {
    bundle: './src/index.tsx',
    vendor: ['react', 'react-dom', 'react-router', 'react-router-dom']
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    // needed this public path thing in order to work with react router, it 404'd
    // on routes that were not root
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  devtool: 'inline-source-map',
  devServer: {
    // this dev server config is also needed with react router 
    historyApiFallback: true,
  },
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
    }),
    new webpack.WatchIgnorePlugin([
      /css\.d\.ts/
    ])
  ]
}