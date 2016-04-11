'use strict';

var itemsPerPage = 3; //TODO: move to global config object

exports.list = function(req, res) {
    var pageNumber = req.query.page || 1;
    
    var filteredProducts = getFiltered(getProducts());
    var paginatedProducts = getPaginated(filteredProducts, pageNumber, itemsPerPage);    
    
    var context = {
        active: { products: true },
        helpers: {
            generatePages: function(elements) {
                return generatePages(req.url, elements, itemsPerPage);
            }
        },
        products: getProducts(),
        paginatedProducts: paginatedProducts
    };

    res.render('products', context);
};

exports.detail = function(req, res) {
    res.render('products');
};


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
    return element.filtered;
}

function getProducts() {
    return [
        {
            description: 'Product description 1',
            filters: ['tool', 'specialOffer'],
            filtered: true,
            image: 'asdf',
            price: 50.3,
            stock: 15
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