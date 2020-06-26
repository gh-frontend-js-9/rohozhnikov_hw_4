const gulp = require('gulp'),
    less = require('gulp-less'),
    watch = require('gulp-watch'),
    cleanCSS = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps'),
    fileinclude = require('gulp-file-include'),
    browserSync = require('browser-sync').create();

exports.styles = () => {
    return gulp.src('./app/less/*.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./app/css'))
};

exports.default = () => {
    browserSync.init({
        server: {
            baseDir: './app/'
        }
    });
    gulp.watch('./app/less/**/*.less', gulp.series(['styles']))
    gulp.watch('./app/').on('change', browserSync.reload)
}