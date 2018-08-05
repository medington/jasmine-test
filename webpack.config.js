const path = require("path");

module.exports = {
  mode: "development",
  stats: "errors-only",
  module: {
    rules: [
      {
        include: [path.resolve(__dirname, "src")],
        loader: "babel-loader",
        options: {

          presets: [
            [
              "env",
              {
                // targets: { node: "current" },
                modules: "commonjs"
                // modules: false
              }
            ]
          ]
        },
        test: /\.js$/
      }
    ]
  },
};
