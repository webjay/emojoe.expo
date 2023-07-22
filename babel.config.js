const paths = [
  'module-resolver',
  {
    alias: {
      '@app': './src/app',
      '@src': './src',
    },
  },
];

/** @type {import('@babel/core').ConfigFunction} */
module.exports = function config(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      paths,
      'react-native-paper/babel',
      'expo-router/babel',
      // Reanimated plugin has to be listed last.
      'react-native-reanimated/plugin',
    ],
  };
};
