const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// ⚠️ Points directly to your global tailwind styling sheet
module.exports = withNativeWind(config, { input: "./global.css" });
