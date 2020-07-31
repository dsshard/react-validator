const path = require('path');

module.exports = {
  entry: [
    path.resolve('./example/example.jsx'),
  ],
  output: {
    path: path.resolve('./example'),
    filename: './dist/example.js',
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
