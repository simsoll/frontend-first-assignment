'use strict';
var orderService = require('../services/orderService.js');

module.exports.list = function(req, res) {
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

function isEqual(a, b, options) {
    if (a === b) {
        return options.fn(this);
    }
    else {
        return options.inverse(this);
    }
}