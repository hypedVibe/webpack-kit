const WebpackStrip = require('strip-loader');
const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src/js'),
  entry: ['./app.js', './utils.js'],
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: '/\.js$/',
        exclude: '/node_modules',
        loader: "babel-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: WebpackStrip.loader('console.log')
      }
    ]
  }
};