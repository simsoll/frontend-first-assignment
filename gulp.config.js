module.exports = function() {
    var build = './build/';
    var client = './src/client/';
    var clientApp = client + 'app/';
    var jsApp = clientApp + '**/app.js';
    var jsComponents =  clientApp + '**/components/*.js';
    var jsModules =  clientApp + '**/modules/*.js';
    var temp = './.tmp/';

    var config = {
        /**
         * files paths
         */
        alljs: [
            './src/**/*.js',
            './*.js'
        ],
        build: build,
        client: client,
        css: temp + 'styles.css',
        fonts: './bower_components/font-awesome/fonts/**/*.*',
        js: [
            jsModules,
            jsComponents,
            jsApp,
            '!' + clientApp + '**/*.spec.js'
        ],
        jsApp: jsApp,
        jsComponents: jsComponents,
        jsModules: jsModules,
        images: client + 'images/**/*.*',
        index: client + 'index.html',
        styles: client + 'styles/**/*.scss',
        temp: temp,

        /**
         * bower configurations
         */
        bower: {
            json: require('./bower.json'),
            directory: './bower_components/',
            ignorePath: '../..'
        }
    };

    /**
     * wiredep configurations
     */
    config.getWiredepDefaultOptions = function() {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        };

        return options;
    };

    return config;
};
