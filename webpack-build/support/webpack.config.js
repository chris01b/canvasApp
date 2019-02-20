const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './lib/background.js',
  output: {
    path: require('path').join(__dirname, '../../ChromeExtension'),
    filename: 'background.js'
  },
  mode: 'development',
  plugins: [
    new CopyPlugin([
      { from: 'static' }
    ]),
  ],
};
