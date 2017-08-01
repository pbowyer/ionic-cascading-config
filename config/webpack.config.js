var webpack = require('webpack');
var merge = require('webpack-merge');

// Make CLI parsing easier
var yargs = require("yargs-parser");
var argv = yargs(process.argv);
var env = argv.env;
console.log(argv);

var webpackConfig = require('../node_modules/@ionic/app-scripts/config/webpack.config');

module.exports = merge(webpackConfig, {
  plugins: [
    new webpack.NormalModuleReplacementPlugin(/\.\/environments\/environment\.default/, function (resource) {
      if (env !== undefined) {
        console.log('Rewriting ', resource.request);
        // @TODO try to generalise the regex using negative lookaheads https://stackoverflow.com/questions/977251/regular-expressions-and-negating-a-whole-character-group
        resource.request = resource.request.replace(/\.\/environments\/environment\.default/, '\.\/environments/environment.' + env);
        console.log('to        ', resource.request);
      } else {
        console.log('ERROR: You did not specify an environment. Use `--env <<envname>>`');
      }
    })
  ]
});
