'use strict';
var purchaseService = require('../services/purchaseService.js');
var productService = require('../services/productService.js');
var math = require('../services/mathService.js');

module.exports.home = function(req, res) {
    var products = productService.getAll();
    var pendingPurchase = purchaseService.getByStatus('pending')[0] ? purchaseService.getByStatus('pending')[0] : [];
    var submittedPurchases = purchaseService.getByStatus('submitted');
    var approvedPurchases = purchaseService.getByStatus('approved');
    
    var context = {
        active: 'home',
        approvedPurchases: approvedPurchases,
        pendingPurchase: pendingPurchase,
        products: products,
        randomProduct: products[math.getRandomIntInclusive(0, products.length - 1)],
        submittedPurchases: submittedPurchases
    };

    res.render('home', context);
};