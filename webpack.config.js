require("dotenv").config();

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "/client/src/index.jsx"),
  output: {
    path: path.join(__dirname, "/client/dist"),
    filename: "bundle.js",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|pdf)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "My Portfolio",
      favicon: "./client/src/assets/favicon.png",
    }),
    new webpack.DefinePlugin({
      "process.env": {
        AUTH_SECRET: JSON.stringify(process.env.AUTH_SECRET),
      },
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.join(__dirname, "/client/src/assets"), to: path.join(__dirname, "/client/dist/assets") },
      ],
    }),
  ],
};