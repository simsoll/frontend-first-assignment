'use strict';
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var exphbs = require('express-handlebars');

var sass = require('node-sass-middleware');
var postcss = require('postcss-middleware');
var autoprefixer = require('autoprefixer');


var app = express();

var defaultLayout = 'main';
var extname = '.hbs'; 
var handlebars = require('./helpers/handlebars')(exphbs, defaultLayout, extname);

app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');

app.set('environment', 'development');
app.set('port', process.env.PORT || 5000);

var destPath = path.join(__dirname, '/public/styles/');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
    sass({
        src: path.join(__dirname, 'sass'),
        dest: destPath,
        // debug: true,
        prefix: '/public/styles'
    })
);
app.use(postcss({
    plugins: [
        autoprefixer({ browsers: ['last 2 version', '> 5%'] })
    ],
    src: function(req) {
        return path.join(destPath, req.url);
    }
}));

app.use('/public', express.static(path.join(__dirname, 'public')));

// add routes
require('./routes.js')(app);

app.listen(app.get('port'), function(err) {
    console.log('running server on port ' + app.get('port'));
});
