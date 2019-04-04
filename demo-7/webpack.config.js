const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    bundle: './src/index.js'
  },
  devtool: 'cheap-module-eval-source-map',
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
  plugins: [
    new cleanWebpackPlugin(),
    new htmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  output: {
    filename: '[name].js',
    pathinfo: true,
    path: path.resolve(__dirname, 'dist')
  }
}