const path = require("path");

module.exports = {
  entry: "./src/index",
  output: {
    filename: path.resolve(__dirname, "./src/dist"),
    filename: "bundle.js"
  }
};
