const path = require('path');

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
          limit: 207000
        }
      }]
    }, {
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader:'css-loader',
          options: {
            importLoaders: 2,
          }
        },
        'sass-loader',
        'postcss-loader',

      ]
    }]
  }
}