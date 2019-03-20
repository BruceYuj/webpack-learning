const path = require('path');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.(jpg|png|gif)$/,
      use: [{
        loader: 'url-loader',
        options: {
          name: '[name]-[hash].[ext]',
          limit: 2048
        }
      }]
    }, {
      test: /\.scss$/,
      use: [
        'style-loader',
        // MiniCssExtractPlugin.loader,
        {
          loader:'css-loader',
          options: {
            importLoaders: 0,
          }
        },
        'sass-loader',
        'postcss-loader',
      ]
    }]
  },
  plugins: [
      // new MiniCssExtractPlugin({
      //     // Options similar to the same options in webpackOptions.output
      //     // both options are optional
      //     filename: "[name].css",
      //     chunkFilename: "[id].css"
      // })
  ]
}