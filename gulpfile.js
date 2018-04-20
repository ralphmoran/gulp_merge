const gulp      = require('gulp'            ); // Gulp
const merge     = require('merge-stream'    ); // Execute multiple sources in one task
const minify    = require('gulp-csso'       ); // Minify CSS files
const concat    = require('gulp-concat'     ); // Concating files
const sourmaps  = require('gulp-sourcemaps' ); // Buffer file's content
const uglify    = require('gulp-uglify'     ); // Minify JS files

gulp.task('default', function () {
    var js = gulp.src('app/js/*.js')
            .pipe(sourmaps.init())
            .pipe(concat('scripts.min.js'))
            .pipe(sourmaps.write())
            .pipe(uglify())
            .pipe(gulp.dest('dist/js'));

    var css = gulp.src('app/css/*.css')
            .pipe(concat('styles.min.css'))
            .pipe(minify())
            .pipe(gulp.dest('dist/css'));

    return merge(js, css);
})