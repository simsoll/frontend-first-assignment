/* Needed gulp config */
var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifycss = require('gulp-minify-css');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

/* Scripts task */
gulp.task('scripts', function () {
    return gulp.src(['./js/base/*.js', '!./js/main.js', '!./js/main.min.js'])
        .pipe(plumber())
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./js/'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('./js/'));
});

/* Sass task */
gulp.task('sass', function () {
    gulp.src('sass/default.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('./css/'))        
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(gulp.dest('./css/'))
    /* Reload the browser CSS after every change */
        .pipe(reload({ stream: true }));
});

/* Reload task */
gulp.task('bs-reload', function () {
    browserSync.reload();
});

/* Prepare Browser-sync for localhost */
gulp.task('browser-sync', function () {
    browserSync.init(['css/*.css', 'js/*.js'], {
        /*
        I like to use a vhost, WAMP guide: https://www.kristengrote.com/blog/articles/how-to-set-up-virtual-hosts-using-wamp, XAMP guide: http://sawmac.com/xampp/virtualhosts/
        */
        // proxy: 'your_dev_site.url'

        /* For a static server you would use this: */
        server: {
            baseDir: './'
        }
    });
});

/* Watch scss, js and html files, doing different things with each. */
gulp.task('default', ['scripts', 'sass', 'browser-sync'], function () {
    /* Watch js files, run the scripts task on change. */
    gulp.watch(['./js/base/*.js', '!./js/main.js', '!./js/main.min.js'], ['scripts']);
    /* Watch scss, run the sass task on change. */
    gulp.watch(['./sass/*.scss', './sass/**/*.scss'], ['sass']);
    /* Watch .html files, run the bs-reload task on change. */
    gulp.watch(['*.html'], ['bs-reload']);
    /* Watch .css files, run the bs-reload task on change. */
    gulp.watch(['*.css'], ['bs-reload']);
});