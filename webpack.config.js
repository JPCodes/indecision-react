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
    },
    {
      test: /\.s?css$/, // Add '?' to support normalize css file
      use: [
        'style-loader', // Inject CSS to DOM
        'css-loader', // CSS JS
        'sass-loader' // SCSS to CSS
      ]
    }]
  },
  devtool: 'cheap-module-eval-source-map', // Compile and show original lines for errors, console logs, etc.
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
};
