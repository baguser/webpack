const path = require("path");
const config = require("./webpack.config");
const { merge } = require("webpack-merge");
module.exports = merge(config, {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.[contenthash].js",
    clean: true,
  },
});
