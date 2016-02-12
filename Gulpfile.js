var gulp = require('gulp');
var sass = require('gulp-sass');
var wiredep = require('wiredep').stream;

gulp.task('sass', function () {
    gulp.src('assets/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('assets/css'));
});

gulp.task('wiredep', function() {
    gulp.src('_layouts/base.md')
        .pipe(wiredep({
            exclude: ['bootstrap-sass', '/bootstrap/'],
        }))
        .pipe(gulp.dest('_layouts'));
});

gulp.task('watch', function () {
    gulp.watch('assets/sass/*.scss', ['sass']);
});

gulp.task('fonts', function() {
    gulp.src('assets/lib/bootstrap/fonts/*')
        .pipe(gulp.dest('assets/fonts/bootstrap'));
});

gulp.task('default', ['sass', 'wiredep', 'fonts']);
