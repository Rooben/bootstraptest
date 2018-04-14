var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass:build', function(){
  return gulp
    .src('layout/scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: 'expanded',
      }).on('error', sass.logError)
    )
    .pipe(autoprefixer({ browsers: ['last 2 versions'] }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist/src/css'));
});


gulp.task('dist:copy', function(){
    gulp.src('./layout/*.html')
        .pipe(gulp.dest('./dist/'));
    gulp.src('./layout/js/**/*.js')
        .pipe(gulp.dest('./dist/src/js/'));
});

gulp.task('sass:watch', function(){
  gulp.watch('layout/**/*.scss', ['sass:build']);
  gulp.watch('layout/*.html', ['dist:copy']);
});

gulp.task('sass', ['sass:build', 'dist:copy', 'sass:watch']);

gulp.task('default', function(){
  console.log('Use npm scripts');
});
