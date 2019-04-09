const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js'
  },
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
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader', 
        'postcss-loader'
      ]
    }, {
      test: /\.js$/,
      exclude: /node-modules/,
      use: ['babel-loader', 'eslint-loader']
    }]
  },
  plugins: [
    new cleanWebpackPlugin(),
    new htmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
    pathinfo: true,
    path: path.resolve(__dirname, '../dist')
  }
}