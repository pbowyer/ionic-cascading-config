var webpack = require('webpack');
var merge = require('webpack-merge');

var webpackConfig = require('../node_modules/@ionic/app-scripts/config/webpack.config');

module.exports = merge(webpackConfig, {
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: undefined
    }),
    new webpack.NormalModuleReplacementPlugin(/\.\/environments\/environment\.default/, function (resource) {
      //console.log('NODE_ENV', process.env.NODE_ENV);
      if (process.env.NODE_ENV !== undefined) {
        var env = process.env.NODE_ENV;
        console.log('Rewriting ', resource.request);
        // @TODO try to generalise the regex using negative lookaheads https://stackoverflow.com/questions/977251/regular-expressions-and-negating-a-whole-character-group
        resource.request = resource.request.replace(/\.\/environments\/environment\.default/, '\.\/environments/environment.' + env);
        console.log('to        ', resource.request);
      } else {
        console.log('No environment specified. Using `default`');
      }
    })
  ]
});
