'use strict';
var orderService = require('../services/orderService.js');
var productService = require('../services/productService.js');

module.exports.home = function(req, res) {
    var products = productService.getAll();
    var pendingOrder = orderService.getByStatus('pending')[0] ? orderService.getByStatus('pending')[0] : [];
    var submittedOrders = orderService.getByStatus('submitted');
    var approvedOrders = orderService.getByStatus('approved');
    
    var context = {
        active: 'home',
        approvedOrders: approvedOrders,
        pendingOrder: pendingOrder,
        products: products,
        submittedOrders: submittedOrders
    };

    res.render('home', context);
};