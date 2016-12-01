const NODE_ENV = process.env.NODE_ENV || "development";
const webpack = require('webpack');
console.log(NODE_ENV);

module.exports = {
  entry: ['./javascripts/Template.js', './app.js'],
  
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build'
  },
  
  devtool: NODE_ENV == "development" ? 'eval' :'source-map',
  
  // watch: NODE_ENV == "development",
  
  watchOptions: { aggregateTimeout: 100 },

  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    })
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