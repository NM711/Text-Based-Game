const path = require('path');

module.exports = {
  mode: "production",
  entry: './src/js/my.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  watch: true
};