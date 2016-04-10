'use strict';
var express = require('express');
var path = require('path');
var handlebars = require('express-handlebars');

var sass = require('node-sass-middleware');
var postcss = require('postcss-middleware');
var autoprefixer = require('autoprefixer');

var routes = require('./routes/home');
var productRoutes = require('./routes/products');
var orderRoutes = require('./routes/orders');

var app = express();


app.engine('.hbs', handlebars({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', '.hbs');

app.set('environment', 'development');
app.set('port', process.env.PORT || 5000);

var destPath = path.join(__dirname, '/public/styles/');

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
app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));

app.use('/', routes);
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

function getProductData() {
    return {
        products: [
            {
                name: 'Portland',
                iconUrl: 'http://icons-ak.wxug.com/i/c/k/cloudy.gif'
            },
            {
                name: 'Bend',
                iconUrl: 'http://icons-ak.wxug.com/i/c/k/partlycloudy.gif'
            },
            {
                name: 'Manzanita',
                iconUrl: 'http://icons-ak.wxug.com/i/c/k/rain.gif'
            }
        ]
    };
}

// app.use(function(req, res, next) {
//     if(!res.locals.partials) {
//         res.locals.partials = {};
//     }

//     res.locals.partials.productContext = getProductData();
//     next();
// });

app.listen(app.get('port'), function(err) {
    console.log('running server on port ' + app.get('port'));
});

