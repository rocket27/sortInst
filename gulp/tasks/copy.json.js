'use strict';

module.exports = function() {
  $.gulp.task('copy:json', function() {
    return $.gulp.src('./source/json/**/*.json*', { since: $.gulp.lastRun('copy:json') })
      .pipe($.gulp.dest($.config.root + '/json'));
  });
};