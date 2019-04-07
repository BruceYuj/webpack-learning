const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
console.log(require.resolve('../src/globals.js'));
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
      test: require.resolve('../src/index.js'),
      use: 'imports-loader?this=>window'
    }, {
      test: require.resolve('../src/globals.js'),
      use: 'exports-loader?file,parse=helpers.parse'
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
    filename: '[name].js',
    chunkFilename: '[name].js',
    pathinfo: true,
    path: path.resolve(__dirname, '../dist')
  }
}