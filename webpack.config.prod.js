const devConfig = require('./webpack.config');
const WebpackStrip = require('strip-loader');

const stripLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  loader: WebpackStrip.loader('console.log')
}

devConfig.module.loaders.push(stripLoader);

module.exports = devConfig;