module.exports = function() {
    var build = './build/';
    var client = './public/';
    var server = './';
    var clientApp = client + 'app/';
    var jsApp = clientApp + '**/app.js';
    var jsComponents =  clientApp + '**/components/*.js';
    var jsHelpers = clientApp + '**/helpers/*.js';
    var jsModules =  clientApp + '**/modules/*.js';
    var layouts = './views/layouts/';
    var templates = clientApp + 'templates/';
    var vendor = client + 'vendor/';

    var config = {
        /**
         * files paths
         */
        alljs: [
            client + '**/*.js',
            './*.js'
        ],
        build: build,
        client: client,
        css: client + 'styles/styles.css',
        cssVendor: vendor + '**/*.css',
        fonts: './bower_components/font-awesome/fonts/**/*.*',
        images: client + 'images/**/*.*',
        index: layouts + 'main.hbs',
        js: [
            jsModules,
            jsComponents,
            jsApp,
            '!' + clientApp + '**/*.spec.js'
        ],
        jsApp: jsApp,
        jsComponents: jsComponents,
        jsHandlebarsTemplates: client + '**/templates/*.hbs',
        jsHandlebarsPartials: client + '**/templates/partials/*.hbs',
        jsModules: jsModules,
        jsTemplates: templates + 'templates.js',
        jsVendor: vendor + '**/*.js',
        layouts: layouts,
        server: server,
        styles: './sass/**/*.scss',
        templates: clientApp + 'templates/',
        vendor: vendor,        

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
        nodeServer: './server.js'
    };

    return config;
};
