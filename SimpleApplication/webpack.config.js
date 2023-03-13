const path = require('path');

module.exports = {
  mode: 'production',
  entry: './routes/index.js',
  output: {
    path: path.resolve(__dirname, 'SimpleApplication'),
    filename: 'bundle.js'
  },
  target: 'node',
  resolve: {
    modules: [
      path.resolve(__dirname, 'SimpleApplication'),
      'node_modules'
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
