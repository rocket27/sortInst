'use strict';

module.exports = function() {
  $.gulp.task('watch', function() {
    $.gulp.watch('./source/scripts/**/*.js', $.gulp.series('js:process'));
    $.gulp.watch('./source/style/**/*.scss', $.gulp.series('sass'));
    $.gulp.watch('./source/**/*.html', $.gulp.series('copy:html'));
    $.gulp.watch('./source/images/**/*.*', $.gulp.series('copy:image'));
  });
};
