'use strict';

exports.list = function(req, res) {
    var context = {
        active: { products: true },
        products: getProducts()
    };
    
    res.render('products', context);
};

exports.detail = function(req, res) {
    res.render('products');
};

function getProducts() {
    return [
        {
            filtered: true,
            description: 'Product description 1'
        },
        {
            filtered: true,
            description: 'Product description 2'
        },
        {
            filtered: true,
            description: 'Product description 3'
        },
        {
            filtered: true,
            description: 'Product description 4'
        },
        {
            filtered: true,
            description: 'Product description 5'
        },
        {
            filtered: true,
            description: 'Product description 6'
        },
        {
            filtered: true,
            description: 'Product description 7'
        },
        {
            filtered: true,
            description: 'Product description 8'
        }
    ];
}