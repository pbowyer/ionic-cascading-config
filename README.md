# Cascading configuration files

...because separate files are painful.

## Features
- [x] Merge our custom webpack config into the Ionic config, so upgrading Ionic won't cause future problems
- [x] Rewrite config paths to include the environment-specific config
- [x] Merge our app configurations together, so properties cascade
- [ ] Add shortcut commands for building e.g. `build:prod`, `build:uat` etc
- [ ] Validate our config so no required fields are missing/set to the default placeholder value



## Merging configurations: choices
Merging configurations is not as straightforward as it first seems. When you encounter arrays, do you replace or append? Do you merge or overwrite?

For this project, I've taken the approach of *merging* where possible. This keeps the code size down, but if you want more control here's other merging libraries that can be used -- and a summary of my research.

#### [webpack-merge](https://github.com/survivejs/webpack-merge/)

I chose this to merge our Webpack changes into the main configuration file. Why this and not [webpack-config](https://github.com/Fitbit/webpack-config)? Because it's more popular.

I also liked the way you can choose and change how the merge happens. It's very nice - [check out the documentation](https://github.com/survivejs/webpack-merge#webpack-merge---merge-designed-for-webpack).

#### [webpack-config](https://github.com/Fitbit/webpack-config)

Does the same job as above, with fewer options available. However it also takes care of loading the base webpack file, which gives a cleaner API in usage.

**While both are called `webpack-*`, they can be used to merge our app configuration.**

#### [deepmerge](https://github.com/KyleAMathews/deepmerge)

Allows control over how to merge arrays and array values. I chose this again because it's more widely used and I liked the idea of having control over the merging, if needed in the future.

#### [cloner](https://github.com/WebReflection/cloner)

An improved alternative to deepmerge (according to the developer) which handles shallow or deep copy or merging properly. For this setup, deep vs shallow doesn't matter.

## Prior work

I spent a while looking for an existing library to use. My requirements were:

  * structure. .ini files have no structure beyond `KEY=VALUE`. I find groupings make config values easier to deal with
  * config inheritance. We have configuration variables that don't need to change between environments - they're in a file for easy editing.

#### dotenv
  
`.env` ([dotenv]()) is great for setting current values, and there are work-arounds for storing different environments and cascading them (see this great post for how to with React)
