const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const MiniCssPlugin = require('mini-css-extract-plugin');

const webpackProdConfig = {};
webpackProdConfig.module = {};
webpackProdConfig.mode = 'production';

webpackProdConfig.plugins = [
  new MiniCssPlugin({
    filename: '[name].[hash].css'
  })
];

webpackProdConfig.module.rules = [{
  test: /\.[s]?css$/,
  use: [
    MiniCssPlugin.loader,
    "css-loader",
    "sass-loader"
  ]
}];

module.exports = merge(commonConfig, webpackProdConfig);
