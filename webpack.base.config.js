var path = require("path")
var webpack = require('webpack')

module.exports = {
  context: __dirname,

  entry: {
    // Add as many entry points as you have container-react-components here
    App1: './reactjs/App1',
    Home: './reactjs/Home',
    Login: './reactjs/Login',
    Signup: './reactjs/Signup',
    Search: './reactjs/Search',
    Extra: './reactjs/Search',
    Data: './reactjs/Data',
    Data2: './reactjs/Data2',
    Profile: './reactjs/Profile',
    Firebase: './reactjs/Firebase',
    Firebase_auth: './reactjs/Firebase_auth',
    react_map: './reactjs/react_map',
    
    vendors: ['react'],
  },

  output: {
      path: path.resolve('./djreact/static/bundles/local/'),
      filename: "[name]-[hash].js"
  },

  externals: [
  ], // add all vendor libs

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
  ], // add all common plugins here

  module: {
    loaders: [] // add all common loaders here
  },

  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx']
  },
}