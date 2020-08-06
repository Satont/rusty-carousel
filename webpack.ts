import VueLoaderPlugin from 'vue-loader/lib/plugin'
import HtmlPlugin from 'html-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import { resolve } from 'path'

export default {
  mode: 'development',
  entry: {
    front: './src/front/index.ts',
  },
  output: {
    path: resolve(__dirname, 'public', 'dest'),
    publicPath: '/static/',
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js',
    pathinfo: false,
  },
  performance: { hints: false },
  module: {
    rules: [
      { test: /\.vue$/i, loader: 'vue-loader' },
      { test: /\.css$/i, use: ['vue-style-loader', 'css-loader'] },
      { test: /\.ts$/i, use: { loader: 'ts-loader', options: { experimentalFileCaching: true, appendTsSuffixTo: [/\.vue$/] } } }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new HtmlPlugin({
      filename: '../index.html', template: 'src/front/index.html', chunks: ['front']
    }),
  ],
  resolve: {
    alias: { 
      'vue$': 'vue/dist/vue.esm.js',
    },
    extensions: ['.ts', '.js', '.vue'],
  }
}