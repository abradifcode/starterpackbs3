module.exports = function() {
    $.gulp.task('libsJS:dev', () => {
        return $.gulp.src([
          './node_modules/jquery/dist/jquery.min.js',
          // './node_modules/bootstrap-sass/assets/javascripts/bootstrap/alert.js',
          // './node_modules/bootstrap-sass/assets/javascripts/bootstrap/affix.js',
          // './node_modules/bootstrap-sass/assets/javascripts/bootstrap/button.js',
          // './node_modules/bootstrap-sass/assets/javascripts/bootstrap/carousel.js',
          // './node_modules/bootstrap-sass/assets/javascripts/bootstrap/collapse.js',
          // './node_modules/bootstrap-sass/assets/javascripts/bootstrap/dropdown.js',
          // './node_modules/bootstrap-sass/assets/javascripts/bootstrap/modal.js',
          // './node_modules/bootstrap-sass/assets/javascripts/bootstrap/scrollspy.js',
          // './node_modules/bootstrap-sass/assets/javascripts/bootstrap/tab.js',
          // './node_modules/bootstrap-sass/assets/javascripts/bootstrap/tooltip.js',
          // './node_modules/bootstrap-sass/assets/javascripts/bootstrap/transition.js',
          // './node_modules/bootstrap-sass/assets/javascripts/bootstrap/popover.js',
          './node_modules/svg4everybody/dist/svg4everybody.min.js'])
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gulp.dest('./build/static/js/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

    $.gulp.task('libsJS:build', () => {
        return $.gulp.src([
          './node_modules/jquery/dist/jquery.min.js',
          // './node_modules/bootstrap-sass/assets/javascript/bootstrap/alert.js',
          // './node_modules/bootstrap-sass/assets/javascript/bootstrap/affix.js',
          // './node_modules/bootstrap-sass/assets/javascript/bootstrap/button.js',
          // './node_modules/bootstrap-sass/assets/javascript/bootstrap/carousel.js',
          // './node_modules/bootstrap-sass/assets/javascript/bootstrap/collapse.js',
          // './node_modules/bootstrap-sass/assets/javascript/bootstrap/dropdown.js',
          // './node_modules/bootstrap-sass/assets/javascript/bootstrap/modal.js',
          // './node_modules/bootstrap-sass/assets/javascript/bootstrap/scrollspy.js',
          // './node_modules/bootstrap-sass/assets/javascript/bootstrap/tab.js',
          // './node_modules/bootstrap-sass/assets/javascript/bootstrap/tooltip.js',
          // './node_modules/bootstrap-sass/assets/javascript/bootstrap/transition.js',
          // './node_modules/bootstrap-sass/assets/javascript/bootstrap/popover.js',
          'node_modules/svg4everybody/dist/svg4everybody.min.js'])
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gp.uglifyjs())
            .pipe($.gulp.dest('./build/static/js/'));
    });

    $.gulp.task('js:copy', () => {
        return $.gulp.src(['./dev/static/js/*.js',
                           '!./dev/static/js/libs.min.js'])
            .pipe($.gulp.dest('./build/static/js/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });
};
