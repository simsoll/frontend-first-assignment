var productController = function(productService, nav) {
    return {
        getIndex: getIndex,
        getById: getById
    };

    function getIndex() {

    }

    function getById(id) {
        productService.getProductById(id, function(err, product) {
            res.render('product',
                {
                    nav: nav,
                    product: product
                }
            );
        });
    }
}

module.exports = productController;