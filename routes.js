'use strict';

var main = require('./handlers/main.js');
var product = require('./handlers/products.js');
var purchase = require('./handlers/purchases.js');

module.exports = function(app) {
    app.get('/', main.home);

    // product routes
    app.get('/products', product.list);
    app.post('/add', product.add);
    app.post('/remove', product.remove);
    
    // purchase routes
    app.get('/purchases', purchase.list);
    app.post('/submit', purchase.submit);
    app.post('/approve', purchase.approve);
};
