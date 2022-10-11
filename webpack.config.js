const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, 'src/scripts/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name][contenthash].bundle.js',
    clean: true,
    assetModuleFilename: '[name][ext]'
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '## Webpack dad jokes boilerplate',
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/template.html')
    })
  ]
}
