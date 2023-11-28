const path = require('path');
const glob = require('glob');
const IMG_REGEXP = /\.(png|jpg|gif|svg)$/;

module.exports = {
  entry: {
    "bundle.js": glob.sync("build/static/?(js)/main.*.?(js)").map(f => path.resolve(__dirname, f)),
  },
  output: {
    filename: "build/static/js/bundle.min.js",
  },
  module: {
    rules: [
      {
        test: IMG_REGEXP,
        type: 'asset/resource',
      }
    ],
  },
}