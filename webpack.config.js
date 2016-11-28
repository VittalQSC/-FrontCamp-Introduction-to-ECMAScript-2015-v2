const NODE_ENV = process.env.NODE_ENV || "development";
const webpack = require('webpack');

module.exports = {
  entry: ['whatwg-fetch', './javascripts/Request.js', './javascripts/Template.js'],
  
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build'
  },
  
  watch: NODE_ENV == "development",
  
  watchOptions: { aggregateTimeout: 100 },
  
  devtool: NODE_ENV == "development" ? "eval" : "source-map",
  
  plugins: [
  	new webpack.DefinePlugin({
  		NODE_ENV: JSON.stringify(NODE_ENV)
  	})
  ],
  
  module: {
  	loaders: [
  		{
  			test: /\.js$/,
  			exclude: /(node_modules|bower_components)/,
  			loader: 'babel-loader?presets[]=es2015'
  	    },
  	  	{
        	test: /\.scss$/,
        	loaders: ["style-loader", "css-loader", "sass-loader"]
      	}

  	]
  }

};