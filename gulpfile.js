'use strict';

var gulp = require('gulp');

var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var eslint = require('gulp-eslint');
var gulpif = require('gulp-if');
var imagemin = require('gulp-imagemin');
var inject = require('gulp-inject');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var taskListing = require('gulp-task-listing');
var uglify = require('gulp-uglify');
var useref = require('gulp-useref');

var config = require('./gulp.config')();
var del = require('del');
var series = require('stream-series');
var wiredep = require('wiredep').stream;

var browserSync = require('browser-sync');

gulp.task('help', taskListing);
gulp.task('default', ['help']);

gulp.task('lint', function() {
    return gulp.src(config.js)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('styles', ['clean-styles'], function() {
    return gulp.src(config.styles)
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer({ browsers: ['last 2 version', '> 5%'] }))
        .pipe(gulp.dest(config.temp));
});

gulp.task('fonts', ['clean-fonts'], function() {
    return gulp.src(config.fonts)
        .pipe(gulp.dest(config.build + 'fonts'));
});

gulp.task('images', ['clean-images'], function() {
    return gulp.src(config.images)
        .pipe(imagemin({optimizationLevel: 4}))
        .pipe(gulp.dest(config.build + 'images'));
})

gulp.task('clean', function(cb) {
    var files = [].concat(config.build, config.temp);
    return clean(files, cb);
});

gulp.task('clean-styles', function(cb) {
    var files = config.temp + '**/*.css';
    return clean(files, cb);
});

gulp.task('clean-fonts', function(cb) {
    var files = config.build + 'fonts/**/*.*';
    return clean(files, cb);
});

gulp.task('clean-images', function(cb) {
    var files = config.build + 'images/**/*.*';
    return clean(files, cb);
});

function clean(path, cb) {
    return del(path, cb);
}

gulp.task('wiredep', function() {
    var options = config.getWiredepDefaultOptions();
    
    var app = gulp.src(config.jsApp, {read: false});
    var components = gulp.src(config.jsComponents, {read: false});
    var modules = gulp.src(config.jsModules, {read: false});

    return gulp.src(config.index)
        .pipe(wiredep(options))
        .pipe(inject(series(modules, components, app)))
        .pipe(gulp.dest(config.client));
});

gulp.task('inject', ['wiredep', 'styles'], function() {
    return gulp.src(config.index)
        .pipe(inject(gulp.src(config.css)))
        .pipe(gulp.dest(config.client));
});

gulp.task('optimize', ['inject', 'fonts', 'images'], function() {
    return gulp.src(config.index)
        .pipe(plumber())
        .pipe(useref({ searchPath: './' }))
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', csso()))
        .pipe(gulp.dest(config.build));
});

gulp.task('bs-reload', ['inject'], function() {
    browserSync.reload();
});

gulp.task('dev', ['inject', 'lint'], function() {
    gulp.watch(config.styles, ['bs-reload']);
    gulp.watch(config.js, ['lint']);

    var files = [
        config.index,
        config.js,
        config.css
    ];

    browserSync.init({
        server: {
            baseDir: [].concat(['./'], config.client)
        },
        files: files
    });
});
