'use strict';
var purchaseService = require('../services/purchaseService.js');
var productService = require('../services/productService.js');
var math = require('../services/mathService.js');

module.exports.list = function (req, res) {
    var pendingPurchase = purchaseService.getByStatus('pending')[0] ? purchaseService.getByStatus('pending')[0] : [];
    var products = productService.getAll();

    var context = {
        active: 'purchases',
        approvedPurchases: purchaseService.getByStatus('approved'),
        pendingPurchase: pendingPurchase,
        submittedPurchases: purchaseService.getByStatus('submitted'),
        randomProduct: products[math.getRandomIntInclusive(0, products.length - 1)]
    };

    res.render('purchases', context);
};

module.exports.submit = function (req, res) {
    var id = Number(req.body.id);
    var amounts = JSON.parse(req.body.amounts);
    var timestamp = req.body.timestamp;
    
    var meta = {
        user: {
            name: 'Worker 1'
        },
        timestamp: timestamp
    };

    purchaseService.submitPurchase(id, amounts, meta);

    res.json(meta);
}

module.exports.approve = function (req, res) {
    var id = Number(req.body.id);
    var timestamp = req.body.timestamp;
    
    var meta = {
        user: {
            name: 'Admin'
        },
        timestamp: timestamp
    };

    purchaseService.approvePurchase(id, meta);

    res.json(
        {
            meta: meta,
            id: id
        });
}

