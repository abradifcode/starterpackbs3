'use strict';

module.exports = function () {
  $.gulp.task('styles:build', () => {
    return $.gulp.src('./dev/static/styles/main.sass')
      .pipe($.gp.sass({
        'include css': true
      }))
      .pipe($.gp.autoprefixer({
        browsers: ['last 3 version', '> 1%', 'ie 8', 'ie 9', 'Opera 12.1']
      }))
      .pipe($.gp.csscomb())
      .pipe($.gp.csso())
      .pipe($.gulp.dest('./build/static/css/'))
  });

  $.gulp.task('styles:dev', () => {
    return $.gulp.src('./dev/static/styles/main.sass')
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.sass({
        'include css': true
      }))
      .on('error', $.gp.notify.onError(function (error) {
        return {
          title: 'Styles',
          message: error.message
        };
      }))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gp.autoprefixer({
        browsers: ['last 3 version', '> 1%', 'ie 8', 'ie 9', 'Opera 12.1']
      }))
      .pipe($.gulp.dest('./build/static/css/'))
      .pipe($.browserSync.reload({
        stream: true
      }));
});
};