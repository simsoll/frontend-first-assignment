'use strict';

module.exports = (function() {
    var products = [
        {
            description: 'Product description 1',
            filters: ['tool', 'specialOffer'],
            id: 1,
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
            id: 2,
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
            id: 3,
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
            id: 4,
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
            id: 5,
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
            id: 6,
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
            id: 7,
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
            id: 8,
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
            id: 9,
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
            id: 10,
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
            id: 11,
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
            id: 12,
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
            id: 13,
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
            id: 14,
            image: 'http://lorempixel.com/g/600/600/technics',
            isFiltered: true,
            isInCart: false,
            name: 'Product 14',
            price: 50.3,
            producer: 'Craftsman',
            stock: 15
        }
    ];

    return {
        getAll: getAll,
        getById: getById
    };

    function getAll() {
        return products;
    }

    function getById(id) {
        return products.filter(function(product) {
            return product.id === id;
        })[0];
    }
})();
