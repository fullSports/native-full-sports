// module.exports = {
//  plugins: ["react-native-reanimated/plugin"],
// };

module.exports = function (api) {
  api.cache(true);
  return {
    plugins: ["react-native-reanimated/plugin", "react-native-paper/babel",
      ["module:react-native-dotenv", {
        "moduleName": "@env",
        "path": ".env",
        "blacklist": null,
        "whitelist": null,
        "safe": false,
        "allowUndefined": true
      }]],
    presets: ["babel-preset-expo"],
  };
};
