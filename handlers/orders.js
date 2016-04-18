'use strict';
var orderService = require('../services/orderService.js');

module.exports.list = function(req, res) {
    var context = {
        active: { orders: true },
        approvedOrders: orderService.getByStatus('approved'),
        pendingOrders: orderService.getByStatus('pending'),
        submittedOrders: orderService.getByStatus('submitted'),
        helpers: {
            isEqual: isEqual
        }
    };

    res.render('orders', context);
};

function isEqual(a, b, options) {
    if (a === b) {
        return options.fn(this);
    }
    else {
        return options.inverse(this);
    }
}