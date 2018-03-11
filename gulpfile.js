'use strict';

global.$ = {
  package: require('./package.json'),
  config: require('./gulp/config'),
  path: {
    task: require('./gulp/paths/tasks.js'),
    jsFoundation: require('./gulp/paths/js.foundation.js'),
    cssFoundation: require('./gulp/paths/css.foundation.js'),
    jsModules: require('./gulp/paths/source.js')
  },
  gulp: require('gulp'),
  del: require('del'),
  browserSync: require('browser-sync').create(),
  sassGlob: require('gulp-sass-glob'),
  cssUnit: require('gulp-css-unit'),
  gp: require('gulp-load-plugins')()
};

$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'sass',
    'js:foundation',
    'js:process',
    'copy:image',
    'copy:fonts',
    'copy:html',
    'css:foundation'
  ),
  $.gulp.parallel(
    'watch',
    'serve'
  )
));