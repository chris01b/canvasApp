const path = require('path')
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {

  mode: 'development',

  entry: {
    background: path.join(__dirname, '../src/background.js'),
  },

  output: {
    path: path.join(__dirname, '../../ChromeExtension'),
    filename: '[name].js'
  },

  plugins: [
    new CopyPlugin([
      { from: path.join(__dirname, '../static') }
    ]),
  ],

};
