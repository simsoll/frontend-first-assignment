var productService = function() {
    return {
        getProductById: getProductById
    };

    function getProductById(id, cb) {
        cb(null,
            {
                description: 'hi ' + id + '!'
            });

    }
}

module.exports = productService;