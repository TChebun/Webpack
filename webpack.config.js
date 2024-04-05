const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  module: {
    rules: [
      { test: /\.svg$/, use: "svg-inline-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.(js)$/, use: "babel-loader" },
    ],
  },
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
  },
  plugins: [new HtmlWebpackPlugin()],
};
