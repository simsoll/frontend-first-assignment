'use strict';

var itemsPerPage = 4; //TODO: move to global config object

exports.list = function(req, res) {
    var pageNumber = req.query.page || 1;
    
    var filteredProducts = getFiltered(getProducts());
    var paginatedProducts = getPaginated(filteredProducts, pageNumber, itemsPerPage);    
    
    var context = {
        active: { products: true },
        helpers: {
            generatePages: function(elements) {
                return generatePages(req.url, elements, itemsPerPage);
            },
            ifGreaterThan: function(a, b, options) {
                if (a > b) {
                    return options.fn(this);
                }
                return options.inverse(this);
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
    return element.isFiltered;
}

function getProducts() {
    return [
        {
            description: 'Product description 1',
            filters: ['tool', 'specialOffer'],
            image: 'http://lorempixel.com/g/600/600/technics',
            isFiltered: true,
            isInCart: false,
            name: 'Product 1',
            price: 50.3,
            producer: 'Craftsman',
            stock: 15
        },
        {
            description: 'Product description 2',
            filters: ['tool', 'specialOffer'],
            image: 'http://lorempixel.com/g/600/600/technics',
            isFiltered: true,
            isInCart: false,
            name: 'Product 2',
            price: 45.3,
            producer: 'Craftsman',
            stock: 1
        },
        {
            description: 'Product description 3',
            filters: ['tool', 'specialOffer'],
            image: 'http://lorempixel.com/g/600/600/technics',
            isFiltered: true,
            isInCart: false,
            name: 'Product 3',
            price: 13.0,
            producer: 'Craftsman',
            stock: 0
        },
        {
            description: 'Product description 4',
            filters: ['tool', 'specialOffer'],
            image: 'http://lorempixel.com/g/600/600/technics',
            isFiltered: true,
            isInCart: false,
            name: 'Product 4',
            price: 50.3,
            producer: 'Craftsman',
            stock: 15
        },
        {
            description: 'Product description 5',
            filters: ['tool', 'specialOffer'],
            image: 'http://lorempixel.com/g/600/600/technics',
            isFiltered: true,
            isInCart: false,
            name: 'Product 5',
            price: 50.3,
            producer: 'Craftsman',
            stock: 15
        },
        {
            description: 'Product description 6',
            filters: ['tool', 'specialOffer'],
            image: 'http://lorempixel.com/g/600/600/technics',
            isFiltered: true,
            isInCart: false,
            name: 'Product 6',
            price: 50.3,
            producer: 'Craftsman',
            stock: 15
        },
        {
            description: 'Product description 7',
            filters: ['tool', 'specialOffer'],
            image: 'http://lorempixel.com/g/600/600/technics',
            isFiltered: true,
            isInCart: false,
            name: 'Product 7',
            price: 50.3,
            producer: 'Craftsman',
            stock: 15
        },
        {
            description: 'Product description 8',
            filters: ['tool', 'specialOffer'],
            image: 'http://lorempixel.com/g/600/600/technics',
            isFiltered: true,
            isInCart: false,
            name: 'Product 8',
            price: 50.3,
            producer: 'Craftsman',
            stock: 15
        },
        {
            description: 'Product description 9',
            filters: ['tool', 'specialOffer'],
            image: 'http://lorempixel.com/g/600/600/technics',
            isFiltered: true,
            isInCart: false,
            name: 'Product 9',
            price: 50.3,
            producer: 'Craftsman',
            stock: 15
        },
        {
            description: 'Product description 10',
            filters: ['tool', 'specialOffer'],
            image: 'http://lorempixel.com/g/600/600/technics',
            isFiltered: true,
            isInCart: false,
            name: 'Product 10',
            price: 50.3,
            producer: 'Craftsman',
            stock: 15
        },
        {
            description: 'Product description 11',
            filters: ['tool', 'specialOffer'],
            image: 'http://lorempixel.com/g/600/600/technics',
            isFiltered: true,
            isInCart: false,
            name: 'Product 11',
            price: 50.3,
            producer: 'Craftsman',
            stock: 15
        },
        {
            description: 'Product description 12',
            filters: ['tool', 'specialOffer'],
            image: 'http://lorempixel.com/g/600/600/technics',
            isFiltered: true,
            isInCart: false,
            name: 'Product 12',
            price: 50.3,
            producer: 'Craftsman',
            stock: 15
        },
        {
            description: 'Product description 13',
            filters: ['tool', 'specialOffer'],
            image: 'http://lorempixel.com/g/600/600/technics',
            isFiltered: true,
            isInCart: false,
            name: 'Product 13',
            price: 50.3,
            producer: 'Craftsman',
            stock: 15
        },
        {
            description: 'Product description 14',
            filters: ['tool', 'specialOffer'],
            image: 'http://lorempixel.com/g/600/600/technics',
            isFiltered: true,
            isInCart: false,
            name: 'Product 14',
            price: 50.3,
            producer: 'Craftsman',
            stock: 15
        }
    ];
}