const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OfflinePlugin = require('offline-plugin');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

const env = process.env.NODE_ENV || 'production';

module.exports = {
  devServer: {
    contentBase: path.resolve('./dist'),
    historyApiFallback: true,
    port: 8567,
  },
  entry: './src/index.js',
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        grommet: {
          test: /[\\/]node_modules[\\/]grommet/,
          name: 'grommet',
          priority: -10,
        },
        vendors: {
          test: context => (
            context.resource
            && context.resource.search(/[\\/]node_modules[\\/]/) !== -1
            && context.resource.search(/[\\/]node_modules[\\/]grommet/) === -1
          ),
          name: 'vendors',
          priority: -10,
        },
      },
    },
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name]-[hash].js',
    chunkFilename: '[name]-[chunkhash].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([{ from: './public' }]),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({ template: 'public/index.html' }),
    new MonacoWebpackPlugin(),
    env === 'production' ? new OfflinePlugin() : undefined, // can't seem to load google analytics this way :(
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ],
  },
};
