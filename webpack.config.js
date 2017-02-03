module.exports = {
  entry: ["./src/app.js", "./src/utils"],
  output: {
    filename: "./src/bundle.js"
  },
  module: {
    loaders: [
      {
        test: '/\.js$/',
        exclude: '/node_modules',
        loader: "babel-loader"
      }
    ]
  }
};