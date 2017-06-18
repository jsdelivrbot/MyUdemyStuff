var webpack = require('webpack');
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: [
      'react', 'lodash', 'redux', 'react-redux', 'react-dom',
      'faker', 'react-input-range', 'redux-form', 'redux-thunk'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      // manifest basically answers the question did vendor actually change
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
