'use strict';
var orderRepository = require('../repositories/orderRepository.js');

module.exports.list = function(req, res) {
    var context = {
        active: { orders: true },
        orders: orderRepository.getAll()
    };  

    res.render('orders', context);
};
