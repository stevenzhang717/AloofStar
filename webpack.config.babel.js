const resolvePath = require('path').resolve;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
  const config = {
    context: resolvePath('src/client'),
    entry: './index.jsx',
    output: {
      filename: 'bundle.js',
      path: resolvePath('dist'),
      pathinfo: !!env.dev,
      publicPath: '/'
    },
    devtool: 'source-map',
    module: {
      loaders: [
        { test: /\.(js|jsx)$/, loaders: ['babel-loader'], exclude: /node_modules/ },
        { test: /\.css$/, loaders: ['style-loader', 'css-loader'] },
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
