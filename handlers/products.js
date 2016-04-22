'use strict';
var productService = require('../services/productService.js');
var purchaseService = require('../services/purchaseService.js');

var itemsPerPage = 8; //TODO: move to global config object

module.exports.list = function (req, res) {
    var context = generateContext(req);
    res.render('products', context);
};

module.exports.add = function (req, res) {
    var amount = Number(req.body.amount);
    var id = Number(req.body.id);
    var product = productService.getById(id);

    purchaseService.addToPending(product, amount);
    product.isInPendingPurchase = true;

    res.end(req.body.id);
};

module.exports.remove = function (req, res) {
    var id = Number(req.body.id);
    var product = productService.getById(id);

    purchaseService.removeFromPending(product.id);
    product.isInPendingPurchase = false;

    res.end(req.body.id);
};

module.exports.detail = function (req, res) {
    res.render('products');
};

function generateContext(req) {
    var pageNumber = req.query.page || 1;

    var products = productService.getAll();
    var filteredProducts = getFiltered(products);
    var paginatedProducts = getPaginated(filteredProducts, pageNumber, itemsPerPage);

    var pendingPurchase = purchaseService.getByStatus('pending')[0] ? purchaseService.getByStatus('pending')[0] : [];

    return {
        active: 'products',
        pendingPurchase: pendingPurchase,
        helpers: {
            generatePages: function (elements) {
                return generatePages(req.url, elements, itemsPerPage);
            },
            ifGreaterThan: function (a, b, options) {
                if (a > b) {
                    return options.fn(this);
                }
                return options.inverse(this);
            }
        },
        products: products,
        paginatedProducts: paginatedProducts,
        randomProduct: products[getRandomIntInclusive(0, products.length - 1)]
    };
}

function generatePages(url, elements, elementsPerPage) {
    var pages = [];
    var pageCount = Math.ceil(elements.length / elementsPerPage);

    for (var i = 1; i <= pageCount; i++) {
        var link = addQueryStringToUrl(url, 'page', i);
        pages.push({
            number: i,
            link: link
        });
    }

    return pages;
}

function addQueryStringToUrl(url, key, value) {
    var path = url.indexOf('?') === -1 ? url : url.substring(0, url.indexOf('?'));
    var query = url.indexOf('?') === -1 ? '' : url.substring(url.indexOf('?'), url.length);
    var encodedKey = encodeURI(key);
    var encodedValue = encodeURI(value);
    var encodedKeyValuePair = encodedKey + '=' + encodedValue;
    var i;

    if (query === '') {
        return path + '?' + encodedKeyValuePair;
    }

    var keyValuePairs = query.substr(1).split('&');

    for (i = 0; i < keyValuePairs.length; i++) {
        var keyValuePair = keyValuePairs[i].split('=');

        if (keyValuePair[0] === encodedKey) {
            keyValuePairs[i] = encodedKeyValuePair;
            break;
        }
    }

    //if there is no match we just append to the array
    if (i === keyValuePairs.length) {
        keyValuePairs[keyValuePairs.length] = encodedKeyValuePair;
    }

    return path + '?' + keyValuePairs.join('&');
}

function getPaginated(elements, pageNumber, elementsPerPage) {
    return elements.slice((pageNumber - 1) * elementsPerPage, pageNumber * elementsPerPage);
}

function getFiltered(elements) {
    return elements.filter(isFiltered);
}

function isFiltered(element) {
    return element.isFiltered;
}

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}