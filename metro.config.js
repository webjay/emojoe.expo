const { getDefaultConfig } = require('expo/metro-config');

const IgnoreAmplifyRe = /(\/amplify\/.*)$/;

const config = getDefaultConfig(__dirname);

const {
  resolver: { sourceExts, blockList },
} = config;

// https://github.com/aws-amplify/amplify-js/issues/11474#issuecomment-1626399291
sourceExts.push('mjs');

if (Array.isArray(blockList)) {
  blockList.push(IgnoreAmplifyRe);
} else {
  config.resolver.blockList = [blockList, IgnoreAmplifyRe];
}

module.exports = config;
