const path = require('path');
const copyrightWebpackPlugin = require('./plugins/CopyrightWebpackPlugin.js');
module.exports = {
  entry: {
    main: './src/index.js'
  },
  plugins: [
    new copyrightWebpackPlugin()
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
}