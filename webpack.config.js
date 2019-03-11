var path = require('path')
var os = require('os')
var HappyPack = require('happypack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var happyThreadPool = HappyPack.ThreadPool({size: os.cpus().length})

module.exports = {
  entry: {main: './src/app.ts'},
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    publicPath: './'
  },
  mode: process.env.NODE_ENV,
  resolve: {
    extensions: ['.js','.jsx', '.ts', '.tsx']
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.(js|jsx|ts|tsx)$/,
      use: [
        'happypack/loader?id=babel'
      ],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.html$/,
      use: 'html-loader'
    }]
  },
  plugins: [
    new HappyPack({
      id:'babel',
      threadPool: happyThreadPool,
      loaders: ['babel-loader'],
      verbose: false
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'Redux Blog',
      inject: 'body'
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 9000,
    hot: true
  }
}