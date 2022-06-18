function getTargetEnvFile() {
  const targetEnv = process.env.REACT_ENV;

  switch (targetEnv) {
    case "development":
      return ".env.development";

    case "test":
      return ".env.test";

    case "production":
      return ".env.production";


    default:
      return ".env.development";
  }
}

module.exports = function (api) {

  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    "plugins": [
      ["module:react-native-dotenv", {
        "envName": "APP_ENV",
        "moduleName": "@env",
        "path": getTargetEnvFile(),
        "blocklist": null,
        "allowlist": null,
        "safe": false,
        "allowUndefined": true,
        "verbose": false
      }]
    ]
  };
};
