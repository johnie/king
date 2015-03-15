/*------------------------------------*\
    $CONFIG
\*------------------------------------*/

var src = './';
var dest = './dist';

module.exports = {
  basePaths: {
    dest: dest,
    src: src
  },
  browserify: {
    entries: src + './index.jsx',
    extensions: ['.jsx'],
    debug: true
  }
};
