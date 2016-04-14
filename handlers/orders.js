'use strict';
var orderRepository = require('../repositories/orderRepository.js');

module.exports.list = function(req, res) {
    var context = {
        active: { orders: true },
        approvedOrders: orderRepository.getByStatus('approved'),
        pendingOrders: orderRepository.getByStatus('pending'),
        submittedOrders: orderRepository.getByStatus('submitted')
    };

    res.render('orders', context);
};
