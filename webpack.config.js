const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader', // use babel with webpack, .babelrc to define presets
      test: /\.js$/, // file ends in .js
      exclude: /node_modules/ // don't compile node_modules
    }]
  },
  devtool: 'cheap-module-eval-source-map', // Compile and show original lines for errors, console logs, etc.
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
};
