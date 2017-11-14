const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
});


module.exports = {
  context: path.join(__dirname, 'client/'),
  entry: [
    './app/App.jsx',
    './css/main.css'
  ],
  output: {
    path: path.resolve('dist'),
    filename: 'min.bundle.js'
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react'],
        },
      },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react'],
        },
      },
      { test: /\.css$/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }) },
      {
        test: /\.(ttf|otf|eot|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
        }
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[hash].[ext]',
        },
      },
    ]
  },

  plugins: [
      HtmlWebpackPluginConfig,
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.AggressiveMergingPlugin(),
      new ExtractTextPlugin("styles.css")
  ]
};
