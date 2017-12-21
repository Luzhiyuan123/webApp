const gulp = require('gulp');
const swig = require('gulp-swig');
const babel = require('gulp-babel');

gulp.task('swig', function () {
  gulp.src('./src/html/**/*.html')
    .pipe(swig({defaults: { cache: false }}))
    .pipe(gulp.dest('dist/'));
});

gulp.task('babel', () =>
  gulp.src('src/es/**/*.js')
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(gulp.dest('dist/js'))
);

gulp.task('default',function(){
  gulp.watch("./src/scss/*.scss",['scss']);
  gulp.watch("./src/es/*.js",['babel']);
  gulp.watch("./src/html/**.html",['swig']);
});

(function (r) {
  "use strict";
  var scss = r("gulp-scss");
  var gulp = r("gulp");
  gulp.task('scss', function () {
      gulp.src("src/scss/**/*.scss")
      .pipe(scss())
      .pipe(gulp.dest("dist/css"));
  });
}(require));