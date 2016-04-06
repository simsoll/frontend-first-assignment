module.exports = function() {
    var build = './build/';
    var client = './src/client/';
    var server = './src/server/';
    var clientApp = client + 'app/';
    var jsApp = clientApp + '**/app.js';
    var jsComponents =  clientApp + '**/components/*.js';
    var jsHelpers = clientApp + '**/helpers/*.js';
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
        jsHelpers: jsHelpers,
        jsModules: jsModules,
        images: client + 'images/**/*.*',
        index: client + 'index.html',
        server: server,
        styles: client + 'styles/**/*.scss',
        temp: temp,

        /**
         * bower configurations
         */
        bower: {
            json: require('./bower.json'),
            directory: './bower_components/',
            ignorePath: '../..'
        },
        
        /**
         * Node settings
         */
        defaultPort: 7203,
        nodeServer: './src/server/app.js'
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
