var resolve = require('path').resolve
var webpack = require('webpack')

module.exports = {
  entry: './src/main.js',
  output: {
    path: resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['vue-app']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.md$/,
        loader: 'vue-markdown-loader'
      }
    ]
  },
  devServer: {
    disableHostCheck: true
  }
}
