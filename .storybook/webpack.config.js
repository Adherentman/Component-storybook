// const path = require("path");
// const genDefaultConfig = require('@storybook/react/dist/server/config/webpack.config.js');
// const TSDocgenPlugin = require("react-docgen-typescript-webpack-plugin");

// module.exports = (baseConfig, env) => {
//   const config = genDefaultConfig(baseConfig, env);
//   config.module.rules.push({
//     test: /\.(ts|tsx)$/,
//     loader: require.resolve("awesome-typescript-loader")
//   });
//   config.plugins.push(new TSDocgenPlugin()); // optional
//   config.resolve.extensions.push(".ts", ".tsx");
//   return config;
// };
const path = require("path");
const TSDocgenPlugin = require("react-docgen-typescript-webpack-plugin");
module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("awesome-typescript-loader")
  });
  config.plugins.push(new TSDocgenPlugin()); // optional
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};