var path = require('path');

module.exports = {
  context: __dirname,
  entry: "./gameFiles/breakStijl.js",
  output: {
    path: path.resolve(__dirname),
  	filename: "./gameFiles/bundle.js"
  },
  devtool: 'source-map',
};
