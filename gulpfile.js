var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');

function buildJS() {
  browserify('./src/index.js', { transform: 'babelify', debug: true })
    .bundle()
    .on('error', function (err) {
      console.error(err);
      this.emit('end');
    })
    .pipe(source('index.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./public/js'));
}

function watchJS() {
  buildJS();
  gulp.watch('src/**/*.js', ['buildJS']);
}

function buildCSS() {
  gulp.src('./src/css/*.css')
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./public/css'));
}

gulp.task('buildCSS', buildCSS);

function watchCSS(){
  buildCSS();
  gulp.watch('src/css/*.css', ['buildCSS']);
}

gulp.task('watchCSS', watchCSS);

gulp.task('buildJS', buildJS);
gulp.task('watchJS', watchJS);

gulp.task('build', ['buildJS', 'buildCSS']);
gulp.task('watch', ['watchJS', 'watchCSS']);

gulp.task('default', ['watch']);