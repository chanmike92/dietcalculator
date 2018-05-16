const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  module: {
  rules: [
  {
    test: /\.jsx?$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'babel-loader',
    query: {
      presets: ['env', 'react']
    }
  },
  ]
  }
};
