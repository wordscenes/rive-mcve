const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.assetExts.push('riv'); // Add .riv to supported asset types

module.exports = defaultConfig;