'use strict';
var orderService = require('../services/orderService.js');
var productService = require('../services/productService.js');

module.exports.home = function(req, res) {
    var products = productService.getAll();
    var pendingOrders = orderService.getByStatus('pending');
    var submittedOrders = orderService.getByStatus('submitted');
    var approvedOrders = orderService.getByStatus('approved');
    
    var context = {
        active: { home: true },
        approvedOrders: approvedOrders,
        pendingOrders: pendingOrders,
        products: products,
        submittedOrders: submittedOrders
    };

    res.render('home', context);
};