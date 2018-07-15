const resolvePath = require('path').resolve;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
  const config = {
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
        { test: /\.css$/, loaders: ['style-loader', 'css-loader?url=false'] },
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
  };

  return config;
};
