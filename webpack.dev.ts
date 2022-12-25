import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { resolve } from 'path';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import webpack, { EnvironmentPlugin } from 'webpack';
import { merge } from 'webpack-merge';
import common from './webpack.common';

const plugins = [
  new HtmlWebpackPlugin({
    template: resolve(__dirname, 'src', 'index.html'),
  }),
  new MiniCssExtractPlugin({
    filename: '[id].css',
  }),
  new ForkTsCheckerWebpackPlugin({
    async: false,
  }),
  new EnvironmentPlugin({
    NODE_ENV: 'development',
  }),
];

declare module 'webpack' {
  interface Configuration {
    devServer?: DevServerConfiguration;
  }
}

const config: webpack.Configuration = merge(common, {
  mode: 'development',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  devServer: {
    static: {
      publicPath: '/',
    },
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
      progress: true,
    },
    port: 9000,
    historyApiFallback: true,
    hot: true,
  },
  plugins,
});

export default config;
