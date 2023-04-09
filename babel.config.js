/** @type {import('@babel/core').ConfigFunction} */
module.exports = function config(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-paper/babel',
      // fix for web: Export namespace should be first transformed by @babel/plugin-proposal-export-namespace-from
      '@babel/plugin-proposal-export-namespace-from',
      // Reanimated plugin has to be listed last.
      'react-native-reanimated/plugin',
    ],
  };
};
