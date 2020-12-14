var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');
var webpack = require('webpack');




module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
    hotUpdateChunkFilename: 'hot/hot-update.js',
    hotUpdateMainFilename: 'hot/hot-update.json'
  },
  devServer: {
    contentBase: DIST_DIR
  },

  externals: {
    newrelic: 'newrelic'
    },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
      extensions: ['*', '.js', '.jsx']
  },
  // plugins: [
  //   new webpack.HotModuleReplacementPlugin()
  // ],
  devServer: {
    hot: true,
    historyApiFallback: true
  }
};


