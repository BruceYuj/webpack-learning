const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const devConfig = require('./webpack.dev');
const prodConfig = require('./webpack.prod');

const commonConfig = {
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
      use: ['babel-loader']
    }]
  },
  plugins: [
    new cleanWebpackPlugin(),
    new htmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.ProvidePlugin({
      _: 'lodash'
    })
  ],
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js',
    pathinfo: true,
    path: path.resolve(__dirname, '../dist')
  }
}

module.exports = (env) => {
  if(env && env.production) return merge(commonConfig, prodConfig);
  else return merge(commonConfig, devConfig);
}