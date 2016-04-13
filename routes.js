'use strict';

var main = require('./handlers/main.js');
var product = require('./handlers/products.js');
var order = require('./handlers/orders.js');

module.exports = function(app) {
    app.get('/', main.home);

    // product routes
    app.get('/products', product.list);
    app.get('/product/:product', product.detail);
    app.post('/add', product.add);
    app.post('/remove', product.remove);
    
    // order routes
    app.get('/orders', order.list);
};
