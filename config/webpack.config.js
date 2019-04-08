const path = require("path");
const webpack = require("webpack");
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
    main: [
      "./src/index.ts"
    ]
  },
  mode: "development",
  output: {
    filename: "bundle.js", // template (main-bundle.js)
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/"
  },
  devtool: "source-map",
  module: {
    rules: [{
      test: /\.ts$/,
      use: [{
        loader: "ts-loader"
      }],
      exclude: /node_modules/
    }
    ]
  },
  node: {
    fsevents: 'empty',
    tls: 'empty'
  },
  target: 'node',
  externals: [nodeExternals({
    target: 'node',
    modulesFromFile: true
  })],
  resolve: {
    extensions: ['.ts']
  }
};
