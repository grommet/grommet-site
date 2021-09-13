const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const OfflinePlugin = require('@lcdp/offline-plugin');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

const env = process.env.NODE_ENV || 'production';

const baseConfig = {
  devServer: {
    static: './dist',
    historyApiFallback: true,
    port: 8567,
  },
  entry: './src/index.js',
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
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './public',
          globOptions: { ignore: ['**/*.html'] },
        },
      ],
    }), // SSR will generate our html string.
    new MonacoWebpackPlugin({ languages: ['javascript'] }),
    new WebpackManifestPlugin({ fileName: 'webpack-manifest.json' }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src'),
          // the following modules contain un-transpiled es6 code
          path.resolve(__dirname, 'node_modules/regexpu-core'),
          path.resolve(__dirname, 'node_modules/unicode-match-property'),
        ],
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};

if (env === 'production') {
  baseConfig.plugins.push(new OfflinePlugin());
  baseConfig.optimization = {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        grommet: {
          test: /[\\/]node_modules[\\/]grommet/,
          name: 'grommet',
          priority: -10,
        },
      },
      name: (module, chunks, cacheGroupKey) => {
        const allChunksNames = chunks.map((chunk) => chunk.name).join('~');
        const prefix =
          cacheGroupKey === 'defaultVendors' ? 'vendors' : cacheGroupKey;
        return `${prefix}~${allChunksNames}`;
      },
    },
  };
} else {
  baseConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
  baseConfig.plugins.push(
    new HtmlWebpackPlugin({ template: 'public/index.html' }),
  );
}

module.exports = baseConfig;
