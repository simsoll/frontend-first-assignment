var express = require('express');
var productRouter = express.Router();

var router = function router(nav) {
    var productService = require('../services/productService.js');
    var productController = require('../controllers/productController')(productService, nav);

    var products = [{
        name: 'Asdf',
        description: 'asdf asdf',
        price: 56.4,
        image: 'Aadf'
    }];

    productRouter.route('/')
        .get(function(req, res) {
            res.render('products');
        });

    productRouter.route('/:id')
        .get();

    return productRouter;
};

module.exports = router;