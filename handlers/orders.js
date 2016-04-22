'use strict';
var orderService = require('../services/orderService.js');

module.exports.list = function (req, res) {
    var pendingOrder = orderService.getByStatus('pending')[0] ? orderService.getByStatus('pending')[0] : [];

    var context = {
        active: 'orders',
        approvedOrders: orderService.getByStatus('approved'),
        pendingOrder: pendingOrder,
        submittedOrders: orderService.getByStatus('submitted')
    };

    res.render('orders', context);
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

    orderService.submitOrder(id, amounts, meta);

    res.json(meta);
}

module.exports.approve = function (req, res) {
    var id = Number(req.body.id);
    var timestamp = req.body.timestamp;
    
    var meta = {
        user: {
            name: 'Admin 1'
        },
        timestamp: timestamp
    };

    orderService.approveOrder(id, meta);

    res.json(
        {
            meta: meta,
            id: id
        });
}

