const path = require("path");

module.exports = {
  context: path.resolve(__dirname),
  resolve: {
    modules: [__dirname, "node_modules"]
  },
  //Punto de entrada, nuestro archivo principal
  entry: "./test-webpack-tree-shaking/index.js",
  //Hacia donde vamos a preparar nuestro proyecto
  output: {
    path: path.resolve(__dirname, "./test-webpack-tree-shaking"),
    filename: "main-result.js"
  },
  mode: "production"
};
