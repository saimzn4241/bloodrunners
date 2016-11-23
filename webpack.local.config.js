const getConfig = require('hjs-webpack');

var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')
var config = require('./webpack.base.config.js')

config.devtool = "#eval-source-map"

var ip = '127.0.0.1'


config.entry = {
  App1: [
    'webpack-dev-server/client?http://' + ip + ':3000',
    'webpack/hot/only-dev-server',
    './reactjs/App1',
  ],
  Home: [
    'webpack-dev-server/client?http://' + ip + ':3000',
    'webpack/hot/only-dev-server',
    './reactjs/Home',
  ],
  Extra: [
    'webpack-dev-server/client?http://' + ip + ':3000',
    'webpack/hot/only-dev-server',
    './reactjs/Extra',
  ],
  Login: [
    'webpack-dev-server/client?http://' + ip + ':3000',
    'webpack/hot/only-dev-server',
    './reactjs/Login',
  ],
  SignupFirebaseConfig: [
    'webpack-dev-server/client?http://' + ip + ':3000',
    'webpack/hot/only-dev-server',
    './reactjs/SignupFirebaseConfig',
  ],
  Search: [
    'webpack-dev-server/client?http://' + ip + ':3000',
    'webpack/hot/only-dev-server',
    './reactjs/Search',
  ],
  Data: [
    'webpack-dev-server/client?http://' + ip + ':3000',
    'webpack/hot/only-dev-server',
    './reactjs/Data',
  ],
  Data2: [
    'webpack-dev-server/client?http://' + ip + ':3000',
    'webpack/hot/only-dev-server',
    './reactjs/Data2',
  ],
  Profile: [
    'webpack-dev-server/client?http://' + ip + ':3000',
    'webpack/hot/only-dev-server',
    './reactjs/Profile',
  ],
  Firebase: [
    'webpack-dev-server/client?http://' + ip + ':3000',
    'webpack/hot/only-dev-server',
    './reactjs/Firebase',
  ],
  Firebase_auth: [
    'webpack-dev-server/client?http://' + ip + ':3000',
    'webpack/hot/only-dev-server',
    './reactjs/Firebase_auth',
  ],
  React_map: [
    'webpack-dev-server/client?http://' + ip + ':3000',
    'webpack/hot/only-dev-server',
    './reactjs/React_map',
  ],
}

config.plugins = config.plugins.concat([
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new BundleTracker({filename: './webpack-stats-local.json'}),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('development'),
      'BASE_API_URL': JSON.stringify('https://'+ ip +':8000/api/v1/'),
  }}),
])

config.module.loaders.push(
  { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel'] }
)
config.module.loaders.push(
  { test: /\.css$/, loaders: ['css-loader'] }
)


config.output.publicPath = 'http://' + ip + ':3000' + '/assets/bundles/'


module.exports = config