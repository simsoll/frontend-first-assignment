'use strict';
var purchaseService = require('../services/purchaseService.js');
var productService = require('../services/productService.js');

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
        submittedPurchases: submittedPurchases
    };

    res.render('home', context);
};