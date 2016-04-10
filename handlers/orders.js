'use strict';

exports.list = function(req, res) {
    var context = {
        active: { orders: true },
        orders: getOrders()
    };

    res.render('orders', context);
};

exports.detail = function(req, res) {
    res.render('orders');
};

function getOrders() {
    return [{
        creator: 'Simon',
        timestamp: new Date(),
        approved: false,
        products: [
            {
                filtered: true,
                description: 'Product description 2'
            },
            {
                filtered: true,
                description: 'Product description 4'
            },
            {
                filtered: true,
                description: 'Product description 5'
            }]
    },
    {
        creator: 'John',
        timestamp: new Date(),
        approved: true,
        products: [
            {
                filtered: true,
                description: 'Product description 1'
            },
            {
                filtered: true,
                description: 'Product description 3'
            },
            {
                filtered: true,
                description: 'Product description 5'
            }]
    }];
}
