const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: {
    index: './src/scripts/entry-index.js',
    sub: './src/scripts/entry-sub.js'
  },
  output: {
    path: './dist',
    filename: 'scripts/[name].bundle.js',
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunks: ['index'],
      minify: {
        collapseWhitespace: true,
        keepClosingSlash: true,
        removeComments: true,
      },
      xhtml: true
    }),
    new HtmlWebpackPlugin({
      template: './src/sub.html',
      filename: 'sub.html',
      chunks: ['sub'],
      minify: {
        collapseWhitespace: true,
        keepClosingSlash: true,
        removeComments: true,
      },
      xhtml: true
    }),
    new ExtractTextPlugin('style/[name].bundle.css')
  ],
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions', '> 10%', 'ie 9']
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel', 'webpack-strip?strip[]=debug,strip[]=console.log,strip[]=console.dir'],
      exclude: /(node_modules|bower_components)/
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style', 'css!postcss-loader', {publicPath: '../'}),
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style', 'css!sass!postcss-loader', {publicPath: '../'})
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]'
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file?name=fonts/[name].[ext]'
    }, {
      test: /\.(jp(e)g|gif|png)?$/,
      loader: 'file?name=img/[name].[ext]'
    }]
  }
};