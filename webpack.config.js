const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OfflinePlugin = require('offline-plugin');

const useAlias = process.env.USE_ALIAS;

const plugins = [
  new CleanWebpackPlugin(['dist']),
  new CopyWebpackPlugin([{ from: './public' }]),
  new webpack.NamedModulesPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin({ template: 'public/index.html' }),
  new OfflinePlugin(), // can't seem to load google analytics this way :(
];

let alias;
if (useAlias) {
  console.log('Using alias to local grommet.');
  alias = {
    'grommet': path.resolve(__dirname, '../grommet/src/js'),
    'grommet-icons': path.resolve(__dirname, '../grommet-icons/src/js'),
  };
}

module.exports = {
  devServer: {
    contentBase: path.resolve('./dist'),
    historyApiFallback: true,
    hot: true,
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
          test: context =>
            (context.resource &&
              context.resource.search(/[\\/]node_modules[\\/]/) !== -1 &&
              context.resource.search(/[\\/]node_modules[\\/]grommet/) === -1),
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
    alias,
    extensions: ['.js', '.json'],
  },
  plugins,
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
