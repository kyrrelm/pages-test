const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './index.html',
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
    path: path.join(__dirname, 'docs'),
    filename: 'bundle.js',
    publicPath: './'
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

  devServer: {
    historyApiFallback: true
  },

  plugins: [
    HtmlWebpackPluginConfig,
    new ExtractTextPlugin("styles.css"),
    //new CopyWebpackPlugin([{ from: 'img', to: 'img'} ]),
  ]
};
