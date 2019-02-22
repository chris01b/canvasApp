var webpack = require("webpack");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {

  mode: 'development',

  entry: {
    background: './src/background.js',
  },

  output: {
    path: require('path').join(__dirname, '../../ChromeExtension'),
    filename: '[name].js'
  },

  plugins: [
    new CopyPlugin([
      { from: 'static' }
    ]),
  ],

};
