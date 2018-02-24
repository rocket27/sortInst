'use strict';

module.exports = function() {
  $.gulp.task('deploy', function() {
    return $.gulp.src('./build/**/*.*')
      .pipe($.gp.sftp({
        host: 'hostName',
        user: 'userName',
        pass: 'password',
        remotePath: 'projectFolder/public_html/'
      }));
  });
};