var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './src/app'
  ],
  devtool: 'eval',
  output: {
    path: 'public',
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  presets: [
    "react", 'es2015'
  ],
  plugins: [
    "transform-object-rest-spread"
  ],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loaders: ['babel'],
        include: path.join('public', 'app')
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
};