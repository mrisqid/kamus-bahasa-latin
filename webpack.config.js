const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('@babel/polyfill');

module.exports = (env) => {
  const isProduction = env === 'production';
  return {
    entry: ['@babel/polyfill', './src/index.jsx'],
    output: {
      path: path.resolve(__dirname, 'build'),
      publicPath: '/',
      filename: 'bundle.js',
    },
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src'),
        '@mui/styled-engine': '@mui/styled-engine-sc',
      },
      extensions: ['.js', '.jsx'],
    },
    devServer: {
      static: './build',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader', 'eslint-loader'],
        },
        {
          test: /\.(jpg|png|jpeg)$/,
          use: {
            loader: 'url-loader',
          },
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve('./index.html'),
      }),
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
  };
};
