const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  module: {
    rules: [{
      test: /\.(png|jpg)$/,
      use:[
        'file-loader'
      ]
    }, {
      test: /\.(eot|ttf|woff|svg)$/,
      use:[{
        loader: 'file-loader',
        options: {
          outputPath: 'fonts'
        }
      }]
    }, {
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2
          }, 
        },
        'postcss-loader',
        'sass-loader'
      ]
    }]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}