// module.exports = {
//  plugins: ["react-native-reanimated/plugin"],
// };

module.exports = function (api) {
  api.cache(true);
  return {
    plugins: ["react-native-reanimated/plugin", "react-native-paper/babel"],
    presets: ["babel-preset-expo"],
  };
};
