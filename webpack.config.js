const path = require("path");
const { DefinePlugin } = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const isProd = process.env.NODE_ENV !== "development";

module.exports = {
  mode: isProd ? "production" : "development",
  devtool: isProd ? "source-map" : "eval-source-map",

  entry: {
    "my-lib": path.resolve(__dirname, "src/my-lib.ts")
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    library: "MyLib",
    libraryTarget: "umd",
    libraryTarget: "window"
  },

  resolve: {
    extensions: [".ts", ".js"]
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: ["babel-loader", "ts-loader", "eslint-loader"]
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: ["babel-loader", "eslint-loader"]
      }
    ]
  },

  plugins: [
    new DefinePlugin({
      __VERSION__: require("./package.json").version
    }),
    new CleanWebpackPlugin()
  ]
};
