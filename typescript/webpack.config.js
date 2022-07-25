const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Exercise",
      template: "index.html",
    }),
  ],
  devtool: "source-map",
  devServer: {
    contentBase: "./dist",
    host: "0.0.0.0",
  },
};
