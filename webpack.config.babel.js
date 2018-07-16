const resolvePath = require('path').resolve;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const presetConfig = require('./build-utils/loadPresets');
// eslint-disable-next-line
const modeConfig = env => require(`./build-utils/webpack.${env.mode}`)(env);

module.exports = env =>
  webpackMerge(
    {
      mode: env.mode,
      context: resolvePath('src/client'),
      entry: './index.jsx',
      output: {
        filename: 'bundle.js',
        chunkFilename: '[name].lazy-chunk.js',
        path: resolvePath('dist'),
        publicPath: '/'
      },
      devtool: 'source-map',
      module: {
        rules: [
          { test: /\.(js|jsx)$/, loaders: ['babel-loader'], exclude: /node_modules/ },
          { test: /\.jpg$/, loaders: ['file-loader'] }
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './index.html'
        })
      ],
      resolve: {
        extensions: ['.js', '.jsx', '.json']
      }
    },
    modeConfig(env),
    presetConfig(env)
  );
