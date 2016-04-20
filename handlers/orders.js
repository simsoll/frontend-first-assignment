'use strict';
var orderService = require('../services/orderService.js');

module.exports.list = function (req, res) {
    var pendingOrder = orderService.getByStatus('pending')[0] ? orderService.getByStatus('pending')[0] : [];

    var context = {
        active: { orders: true },
        approvedOrders: orderService.getByStatus('approved'),
        pendingOrder: pendingOrder,
        submittedOrders: orderService.getByStatus('submitted'),
        helpers: {
            isEqual: isEqual
        }
    };

    res.render('orders', context);
};

module.exports.submit = function (req, res) {
    var amounts = JSON.parse(req.body.amounts);
    var meta = {
        user: {
            name: 'Tester'
        },
        timestamp: new Date()
    };

    orderService.submitOrder(amounts, meta);

    res.json(meta);
}

function isEqual(a, b, options) {
    if (a === b) {
        return options.fn(this);
    }
    else {
        return options.inverse(this);
    }
}