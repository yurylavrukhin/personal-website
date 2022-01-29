const gulp = require('gulp')

gulp.task('css', () => {
  const postcss = require('gulp-postcss')
  const sourcemaps = require('gulp-sourcemaps')

  return gulp
    .src('./src/styles/index.css')
    .pipe(sourcemaps.init())
    .pipe(postcss())
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('./dist'))
})

gulp.task('watch', (done) => {
  gulp.parallel('css')(done)
  gulp.watch('./src/**/*.css', gulp.series('css'))
})

gulp.task('default', (done) => {
  gulp.parallel('css')(done)
})
