/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const packageJson = require('./package.json');

module.exports = (env, args) => {
  const devMode = args.mode !== 'production';

  const paths = {
    SRC: path.resolve(__dirname, 'src'),
    DIST: path.resolve(__dirname, 'dist'),
  };

  return {
    devServer: {
      historyApiFallback: true, // support for html5 mode
      noInfo: true, // limit output
      contentBase: paths.SRC,
      compress: true, // enable compression
      hot: true, // enable hot module replacement
    },
    devtool: devMode ? 'cheap-module-source-map' : 'source-map',
    entry: ['react-hot-loader/patch', path.resolve(paths.SRC, 'index.tsx')],
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(paths.SRC, 'index.html'),
        meta: [
          {
            version: packageJson.version,
          },
        ],
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: 'disabled',
        generateStatsFile: true,
      }),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: devMode ? 'static/css/[name].css' : 'static/css/[name].[contenthash].css',
        chunkFilename: devMode ? 'static/css/[id].css' : 'static/css/[name].[contenthash].chunk.css',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx|tsx|ts)$/, // apply babel-loader for any js file
          loader: 'babel-loader',
          exclude: /node_modules/, // except in node_modules
        },
        {
          test: /\.(png|jpg|gif|woff|woff2|eot|svg|ttf|ico|pdf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'static/media/[name].[hash:8].[ext]',
              },
            },
          ],
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: devMode,
              },
            },
            'css-loader',
            'sass-loader',
          ],
        },
      ],
    },
    output: {
      filename: devMode ? 'static/js/[name].js' : 'static/js/[name].[contenthash].js',
      path: paths.DIST,
      publicPath: '/',
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    },
  };
};
