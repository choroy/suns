
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const WebpackBrowserPlugin = require('webpack-browser-plugin');
module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './src/scripts/entry-index.js'
  ],
  output: {
    filename: 'scripts/bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new WebpackBrowserPlugin()
  ],
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions', '> 10%', 'ie 9']
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /(node_modules|bower_components)/
    }, {
      test: /\.css$/,
      loaders: ['style', 'css?sourceMap,-minimize', 'postcss-loader']
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css?sourceMap,-minimize', 'sass?sourceMap,outputStyle=expanded', 'postcss-loader']
    }, {
      test: /\.html$/,
      loader: 'raw-loader'
    }]
  },
  devServer: {
    hot: true
  }
};