const wpConfig = require("./webpack.config");
module.exports = function(config) {
  config.set({
    basePath: "./",
    singleRun: true,
    browsers: ["ChromeHeadless"],
    frameworks: ["jasmine"],
    reporters: ["kjhtml", "spec"],
    files: [
      "test-main.js"
    ],
    preprocessors: {
      "test-main.js": ["webpack"]
    },
    webpack: {
      mode: "development",
      devtool: "eval-source-map",
      module: wpConfig.module,
      stats: wpConfig.stats,
    },
    webpackMiddleware: {
      stats: "errors-only"
    },
  })
};
