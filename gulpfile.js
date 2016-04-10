'use strict';

var gulp = require('gulp');

var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var csso = require('gulp-csso');
var declare = require('gulp-declare');
var eslint = require('gulp-eslint');
var gulpif = require('gulp-if');
var handlebars = require('gulp-handlebars');
var imagemin = require('gulp-imagemin');
var inject = require('gulp-inject');
var nodemon = require('gulp-nodemon');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var taskListing = require('gulp-task-listing');
var uglify = require('gulp-uglify');
var useref = require('gulp-useref');
var wrap = require('gulp-wrap');

var config = require('./gulp.config')();
var del = require('del');
var mainBowerFiles = require('main-bower-files');
var merge = require('merge-stream');
var path = require('path');
var series = require('stream-series');
var wiredep = require('wiredep').stream;

var browserSync = require('browser-sync');

gulp.task('help', taskListing);
gulp.task('default', ['help']);

gulp.task('lint', function() {
    // return gulp.src(config.js)
    //     .pipe(eslint())
    //     .pipe(eslint.format())
    //     .pipe(eslint.failAfterError());
});

gulp.task('templates', function() {
    var partials = gulp.src(config.jsHandlebarsPartials)
        .pipe(handlebars({
            handlebars: require('handlebars')
        }))
        .pipe(wrap('Handlebars.registerPartial(<%= processPartialName(file.relative) %>, Handlebars.template(<%= contents %>));', {}, {
            imports: {
                processPartialName: function(fileName) {
                    // Strip the extension and the underscore 
                    // Escape the output with JSON.stringify 
                    return JSON.stringify(path.basename(fileName, '.js').substr(1));
                }
            }
        }));

    var templates = gulp.src(config.jsHandlebarsTemplates) //'./templates/[^_]*.hbs'
        .pipe(handlebars({
            handlebars: require('handlebars')
        }))
        .pipe(wrap('Handlebars.template(<%= contents %>)'))
        .pipe(declare({
            namespace: 'App.templates',
            noRedeclare: true
        }));

    return merge(partials, templates)
        .pipe(concat('templates.js'))
        .pipe(gulp.dest(config.templates));
});

gulp.task('fonts', ['clean-fonts'], function() {
    return gulp.src(config.fonts)
        .pipe(gulp.dest(config.build + 'fonts'));
});

gulp.task('images', ['clean-images'], function() {
    return gulp.src(config.images)
        .pipe(imagemin({ optimizationLevel: 4 }))
        .pipe(gulp.dest(config.build + 'images'));
})

gulp.task('clean', function(cb) {
    var files = [].concat(config.build);
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

gulp.task('bower-to-vendor', function() {
    return gulp.src(mainBowerFiles(), { base: './bower_components' })
        .pipe(gulp.dest(config.vendor));
});

gulp.task('inject-js', ['templates'], function() {
    var jsVendor = gulp.src(config.jsVendor, { read: false }); 
    var app = gulp.src(config.jsApp, { read: false });
    var components = gulp.src(config.jsComponents, { read: false });
    var templates = gulp.src(config.jsTemplates, { read: false });
    var modules = gulp.src(config.jsModules, { read: false });

    return gulp.src(config.index)
        .pipe(inject(series(jsVendor, templates, modules, components, app)))
        .pipe(gulp.dest(config.layouts));
});

gulp.task('inject-css', function() {
    var css = gulp.src(config.css, { read: false });
    var cssVendor = gulp.src(config.cssVendor, { read: false });
    
    return gulp.src(config.index)
        .pipe(inject(series(css, cssVendor)))
        .pipe(gulp.dest(config.layouts));
});

gulp.task('inject', ['inject-css', 'inject-js']);

gulp.task('optimize', ['inject', 'fonts', 'images'], function() {
    return gulp.src(config.index)
        .pipe(plumber())
        .pipe(useref({ searchPath: './' }))
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', csso()))
        .pipe(gulp.dest(config.build));
});

gulp.task('bs-reload', function() {
    browserSync.reload();
});

// gulp.task('dev', ['inject', 'lint'], function() {
gulp.task('dev', ['inject'], function() {
    gulp.watch(config.css, ['bs-reload']);
    gulp.watch(config.js, ['bs-reload']);
    gulp.watch(config.jsHandlebarsTemplates, ['templates']);
    gulp.watch(config.jsHandlebarsPartials, ['templates']);

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

gulp.task('serve-dev', ['inject', 'lint'], function() {
    var options = {
        script: config.nodeServer,
        delayTime: 1,
        env: {
            'PORT': 3000
        },
        watch: [].concat('public/', 'sass/')
    };

    return nodemon(options)
        .on('restart', function(ev) {
            console.log('Restarting...');
        });
});