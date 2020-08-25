const path = require('path');

module.exports = {
  entry: './static/weblogic.js',
  mode: 'development',
  output: {
    filename: 'weblogic.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
};
