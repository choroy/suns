const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const WebpackBrowserPlugin = require('webpack-browser-plugin');
const dev = [
  'webpack-dev-server/client?http://localhost:8080',
  'webpack/hot/dev-server'
];
module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: {
    index: [
      dev[0], dev[1],
      './src/scripts/entry-index.js'
    ],
    sub: [
      dev[0], dev[1],
      './src/scripts/entry-sub.js'
    ]
  },
  output: {
    publicPath: 'http://127.0.0.1:8080/',
    filename: 'scripts/[name].bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/sub.html',
      filename: 'sub.html',
      chunks: ['sub']
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
      loader: 'raw'
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
  },
  devServer: {
    hot: true
  }
};