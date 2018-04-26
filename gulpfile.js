var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('build:sass', function () {
  return gulp.src('./style/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({

    }))
    .pipe(sourcemaps.write('css-maps'))
    .pipe(gulp.dest('./style/css'));
});

gulp.task('watch', function(){
    gulp.watch('./style/scss/**/*.scss', ['build:sass']);
});
