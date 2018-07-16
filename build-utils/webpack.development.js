module.exports = () => ({
  module: {
    rules: [{ test: /\.css$/, loaders: ['style-loader', 'css-loader?url=false'] }]
  }
});
