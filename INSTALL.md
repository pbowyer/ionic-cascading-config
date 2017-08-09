# Installation guide

  1. First we need to install a couple of packages:
     ```
     npm install --save-dev webpack-merge
     npm install --save-dev cross-env
     npm install --save deepmerge
     ```
  1. Create config directory `config/`
  1. Put this file `webpack.config.js` inside that directory
  1. Make a directory for your environment files `src/environments/`
  1. Put [my sample environment files](src/environments) in it
  1. Now we need to make Ionic know about your custom webpack config file. Open `package.json`. If you don't have a `"config"` section add the following line:
     ```
     "config": {
       "ionic_webpack": "./config/webpack.config.js"
     },  
     ```
     If you do have an existing config section, add that specific line to it
  1. Also in the `package.json` file, add some script aliases. These are easier to type commands to build with your custom configs than typing them out each time. For my sample config files, add these to the end of the `"scripts"` block:
      ```
      "cordova:build:dev": "NODE_ENV=dev ionic cordova build ios",
      "cordova:build:uat": "NODE_ENV=uat ionic cordova build ios",
      "cordova:build:prod": "NODE_ENV=prod ionic cordova build ios --prod",
      "ionic:serve:dev": "NODE_ENV=dev npm run ionic:serve",
      "ionic:serve:uat": "NODE_ENV=uat npm run ionic:serve",
      "ionic:serve:prod": "NODE_ENV=prod npm run ionic:serve",
      ```
  1. All done, you're ready to go!
