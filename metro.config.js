const { getDefaultConfig } = require("expo/metro-config");

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig(__dirname);
  return {
    transformer: {
      // Add support for SVG files
      babelTransformerPath: require.resolve("react-native-svg-transformer"),
    },
    resolver: {
      // Add support for SVG files
      assetExts: assetExts.filter((ext) => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"],
    },
  };
})();
