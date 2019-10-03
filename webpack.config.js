const path = require("path");
require("dotenv").config({ path: "./environment/dev.env" });

module.exports = {
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, "./src/dist"),
    filename: "bundle.js"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\js$/,
        use: "babel-loader",
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
