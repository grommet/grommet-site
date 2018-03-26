const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const useAlias = process.env.USE_ALIAS;

const plugins = [
  new CopyWebpackPlugin([{ from: './public' }]),
  new webpack.NamedModulesPlugin(),
  new webpack.HotModuleReplacementPlugin(),
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
  output: {
    path: path.resolve('./dist'),
    filename: 'index.js',
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
        loader: 'babel-loader',
      },
    ],
  },
};
