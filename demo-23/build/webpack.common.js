const path = require('path');
const fs = require('fs');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');
const webpack = require('webpack');

function makePlugins(config) {
 let plugins = [
   new cleanWebpackPlugin()
 ];
 Object.keys(config.entry).forEach(key => {
    plugins.push(new htmlWebpackPlugin({
      template: 'src/index.html',
      filename: `${key}.html`,
      chunks: ['runtime', 'vendors', key]
    }))
  })

  const files = fs.readdirSync(path.resolve(__dirname, '../dll'));
  files.forEach(file => {
    if(/.*\.dll.js/.test(file)) {
      plugins.push(new AddAssetHtmlWebpackPlugin({
        filepath: path.resolve(__dirname, '../dll', file)
      }))
    }
    if(/.*\.manifest.json/.test(file)) {
      plugins.push(new webpack.DllReferencePlugin({
        manifest: path.resolve(__dirname, '../dll', file)
      }))
    }
  })

  return plugins;
}

const config = {
  entry: {
    index: './src/index.js',
    list: './src/list.js',
    detail: './src/detail.js'
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
  resolve: {
    // extensions: ['.js', 'jsx']
  },
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
    pathinfo: true,
    path: path.resolve(__dirname, '../dist')
  }
}

config.plugins = makePlugins(config);
module.exports = config;