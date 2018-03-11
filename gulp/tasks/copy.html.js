'use strict';

module.exports = function() {
  $.gulp.task('copy:html', function() {
    return $.gulp.src('./source/**/*.html', { since: $.gulp.lastRun('copy:html') })
      .pipe($.gulp.dest($.config.root));
  });
};