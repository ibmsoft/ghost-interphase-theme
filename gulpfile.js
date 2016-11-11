var gulp  = require('gulp'),
  concat     = require('gulp-concat'),
    gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');

// create a default task and just log a message
gulp.task('default', ['build-js','minify-style','minify-css','minify-xsmall','minify-xsmall','minify-small','minify-medium','minify-large','minify-xlarge']);

gulp.task('build-js', function() {
  return gulp.src(['src/js/skel.min.js','src/js/skel-layers.min.js','src/js/init.js'])
      .pipe(concat('zysoft.js'))
      .pipe(rename({suffix:'.min'}))
      .pipe(uglify())
    .pipe(gulp.dest('assets/js'));
});

gulp.task('minify-css', function() {
  return gulp.src('src/css/skel.css')
   .pipe(concat('zysoft.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('assets/css'));
});

gulp.task('minify-style', function() {
  return gulp.src('src/css/style.css')
   .pipe(concat('style.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('assets/css'));
});

gulp.task('minify-xsmall', function() {
  return gulp.src('src/css/style-xsmall.css')
   .pipe(concat('style-xsmall.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('assets/css'));
});

gulp.task('minify-small', function() {
  return gulp.src('src/css/style-small.css')
   .pipe(concat('style-small.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('assets/css'));
});

gulp.task('minify-medium', function() {
  return gulp.src('src/css/style-medium.css')
   .pipe(concat('style-medium.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('assets/css'));
});

gulp.task('minify-large', function() {
  return gulp.src('src/css/style-large.css')
   .pipe(concat('style-large.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('assets/css'));
});

gulp.task('minify-xlarge', function() {
  return gulp.src('src/css/style-xlarge.css')
   .pipe(concat('style-xlarge.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('assets/css'));
});
