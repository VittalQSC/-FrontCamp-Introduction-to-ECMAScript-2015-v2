// const NODE_ENV = process.env.NODE_ENV || "development";
// const webpack = require('webpack');
// console.log(NODE_ENV);

// WILL IMPLEMENT LATER

module.exports = {
  entry: ['./javascripts/Template.js', './app.js'],
  
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build'
  },
  
  devtool: 'source-map',
  
  // watch: true,
  
  watchOptions: { aggregateTimeout: 100 },

  plugins: [
    // new webpack.DefinePlugin({
    //   NODE_ENV: JSON.stringify(NODE_ENV)
    // })
  ],
  
  module: {
       loaders: [
          {test: /\.css$/, loaders: ['style', 'css']},
          {
              test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel-loader',
              query: {
              presets: ['es2015']
            }
          }
      ]
  },

};