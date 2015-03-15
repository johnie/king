/*------------------------------------*\
    $BROWSERIFY
\*------------------------------------*/

var gulp        = require('gulp');
var uglify      = require('gulp-uglify');
var rename      = require('gulp-rename');
var concat      = require('gulp-concat');
var browserify  = require('browserify');
var babelify    = require('babelify');
var source      = require('vinyl-source-stream');
var Config      = require('../config');

gulp.task('browserify', function() {
  browserify(Config.browserify)
  .transform(babelify)
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest(Config.basePaths.dest));
});
