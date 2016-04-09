var webpack = require('webpack')

// run me with webpack client/app/app.js --watch --optimize-minimize

module.exports = {
  output: {
    filename: 'bundle.js'
  },

  devtool: 'sourcemap',

  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'raw'
      },
      {
        test: /\.js$/,
        loader: 'babel', exclude: [/node_modules/, /\.spec\.js/]
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.css$/,
        loaders: ["style", "css"]
      }
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin(
      {
        compress: {warnings: false},
        mangle: false
      }
    )
  ]
}
