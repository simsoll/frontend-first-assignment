'use strict';

module.exports = (function () {
    var products = [
        {
            description: 'Product description 1',
            filters: ['tool'],
            id: 1,
            image: 'http://lorempixel.com/g/600/600/technics',
            isFiltered: true,
            isInPendingPurchase: false,
            name: 'Product 1',
            price: 39.95,
            producer: 'Craftsman',
            stock: 15
        },
        {
            description: 'Product description 2',
            filters: ['tool'],
            id: 2,
            image: 'http://lorempixel.com/g/600/600/technics',
            isFiltered: true,
            isInPendingPurchase: false,
            name: 'Product 2',
            price: 45.50,
            producer: 'Craftsman',
            stock: 1
        },
        {
            description: 'Product description 3',
            filters: ['material'],
            id: 3,
            image: 'http://lorempixel.com/g/600/600/technics',
            isFiltered: true,
            isInPendingPurchase: false,
            name: 'Product 3',
            price: 13.00,
            producer: 'Craftsman',
            stock: 0
        },
        {
            description: 'Product description 4',
            filters: ['tool'],
            id: 4,
            image: 'http://lorempixel.com/g/600/600/technics',
            isFiltered: true,
            isInPendingPurchase: false,
            name: 'Product 4',
            price: 9.75,
            producer: 'Craftsman',
            stock: 15
        },
        {
            description: 'Product description 5',
            filters: ['material'],
            id: 5,
            image: 'http://lorempixel.com/g/600/600/technics',
            isFiltered: true,
            isInPendingPurchase: false,
            name: 'Product 5',
            price: 10.25,
            producer: 'Craftsman',
            stock: 4
        },
        {
            description: 'Product description 6',
            filters: ['material'],
            id: 6,
            image: 'http://lorempixel.com/g/600/600/technics',
            isFiltered: true,
            isInPendingPurchase: false,
            name: 'Product 6',
            price: 50.25,
            producer: 'Craftsman',
            stock: 6
        },
        {
            description: 'Product description 7',
            filters: ['tool'],
            id: 7,
            image: 'http://lorempixel.com/g/600/600/technics',
            isFiltered: true,
            isInPendingPurchase: false,
            name: 'Product 7',
            price: 50.25,
            producer: 'Craftsman',
            stock: 3
        },
        { description: 'Product description 8', filters: ['tool'], id: 8, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 8', price: 59.95, producer: 'Craftsman', stock: 15 },
        { description: 'Product description 9', filters: ['tool'], id: 9, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 9', price: 59.95, producer: 'Craftsman', stock: 15 },
        { description: 'Product description 10', filters: ['tool'], id: 10, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 10', price: 59.95, producer: 'Craftsman', stock: 0 },
        { description: 'Product description 11', filters: ['tool'], id: 11, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 11', price: 59.95, producer: 'Craftsman', stock: 15 },
        { description: 'Product description 12', filters: ['tool'], id: 12, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 12', price: 59.95, producer: 'Craftsman', stock: 15 },
        { description: 'Product description 13', filters: ['tool'], id: 13, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 13', price: 59.95, producer: 'Craftsman', stock: 15 },
        { description: 'Product description 14', filters: ['tool'], id: 14, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 14', price: 59.95, producer: 'Craftsman', stock: 15 },
        { description: 'Product description 15', filters: ['tool'], id: 15, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 15', price: 59.95, producer: 'Craftsman', stock: 15 },
        { description: 'Product description 16', filters: ['tool'], id: 16, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 16', price: 59.95, producer: 'Craftsman', stock: 15 },
        { description: 'Product description 17', filters: ['tool'], id: 17, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 17', price: 59.95, producer: 'Craftsman', stock: 15 },
        { description: 'Product description 18', filters: ['tool'], id: 18, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 18', price: 59.95, producer: 'Craftsman', stock: 15 },
        { description: 'Product description 19', filters: ['tool'], id: 19, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 19', price: 59.95, producer: 'Craftsman', stock: 15 },
        { description: 'Product description 20', filters: ['tool'], id: 20, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 20', price: 59.95, producer: 'Craftsman', stock: 15 },
        { description: 'Product description 21', filters: ['tool'], id: 21, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 21', price: 59.95, producer: 'Craftsman', stock: 15 },
        { description: 'Product description 22', filters: ['tool'], id: 22, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 22', price: 59.95, producer: 'Craftsman', stock: 15 },
        { description: 'Product description 23', filters: ['tool'], id: 23, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 23', price: 59.95, producer: 'Craftsman', stock: 15 },
        { description: 'Product description 24', filters: ['tool'], id: 24, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 24', price: 59.95, producer: 'Craftsman', stock: 15 },
        { description: 'Product description 25', filters: ['tool'], id: 25, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 25', price: 59.95, producer: 'Craftsman', stock: 15 },
        { description: 'Product description 26', filters: ['tool'], id: 26, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 26', price: 59.95, producer: 'Craftsman', stock: 15 },
        { description: 'Product description 27', filters: ['tool'], id: 27, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 27', price: 59.95, producer: 'Craftsman', stock: 15 },
        { description: 'Product description 28', filters: ['tool'], id: 28, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 28', price: 59.95, producer: 'Craftsman', stock: 15 },
        { description: 'Product description 29', filters: ['tool'], id: 29, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 29', price: 59.95, producer: 'Craftsman', stock: 15 },
        { description: 'Product description 30', filters: ['tool'], id: 30, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 30', price: 59.95, producer: 'Craftsman', stock: 15 },
        { description: 'Product description 31', filters: ['tool'], id: 31, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 31', price: 59.95, producer: 'Craftsman', stock: 15 },
        { description: 'Product description 32', filters: ['tool'], id: 32, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 32', price: 59.95, producer: 'Craftsman', stock: 15 },
        { description: 'Product description 33', filters: ['tool'], id: 33, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 33', price: 59.95, producer: 'Craftsman', stock: 15 },
        { description: 'Product description 34', filters: ['tool'], id: 34, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 34', price: 59.95, producer: 'Craftsman', stock: 15 },
        { description: 'Product description 35', filters: ['tool'], id: 35, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 35', price: 59.95, producer: 'Craftsman', stock: 15 },
        { description: 'Product description 36', filters: ['tool'], id: 36, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 36', price: 59.95, producer: 'Craftsman', stock: 15 },
        { description: 'Product description 37', filters: ['tool'], id: 37, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 37', price: 59.95, producer: 'Craftsman', stock: 15 },
        { description: 'Product description 38', filters: ['tool'], id: 38, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 38', price: 59.95, producer: 'Craftsman', stock: 15 },
        { description: 'Product description 39', filters: ['tool'], id: 39, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 39', price: 59.95, producer: 'Craftsman', stock: 15 },
        { description: 'Product description 40', filters: ['tool'], id: 40, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 40', price: 59.95, producer: 'Craftsman', stock: 15 },
        { description: 'Product description 41', filters: ['tool'], id: 41, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 41', price: 59.95, producer: 'Craftsman', stock: 15 },
        { description: 'Product description 42', filters: ['tool'], id: 42, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 42', price: 59.95, producer: 'Craftsman', stock: 15 },
        { description: 'Product description 43', filters: ['tool'], id: 43, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 43', price: 59.95, producer: 'Craftsman', stock: 15 },
        { description: 'Product description 44', filters: ['tool'], id: 44, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 44', price: 59.95, producer: 'Craftsman', stock: 15 },
        { description: 'Product description 45', filters: ['tool'], id: 45, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 45', price: 59.95, producer: 'Craftsman', stock: 15 },
        { description: 'Product description 46', filters: ['tool'], id: 46, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 46', price: 59.95, producer: 'Craftsman', stock: 15 },
        { description: 'Product description 47', filters: ['tool'], id: 47, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 47', price: 59.95, producer: 'Craftsman', stock: 15 },
        { description: 'Product description 48', filters: ['tool'], id: 48, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 48', price: 59.95, producer: 'Craftsman', stock: 15 },
        { description: 'Product description 49', filters: ['tool'], id: 49, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 49', price: 59.95, producer: 'Craftsman', stock: 15 },
        { description: 'Product description 50', filters: ['tool'], id: 50, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 50', price: 59.95, producer: 'Craftsman', stock: 15 },
        { description: 'Product description 51', filters: ['tool'], id: 51, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 51', price: 59.95, producer: 'Craftsman', stock: 15 },
        { description: 'Product description 52', filters: ['tool'], id: 52, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 52', price: 59.95, producer: 'Craftsman', stock: 15 },
        { description: 'Product description 53', filters: ['tool'], id: 53, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 53', price: 59.95, producer: 'Craftsman', stock: 15 },
        { description: 'Product description 54', filters: ['tool'], id: 54, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 54', price: 59.95, producer: 'Craftsman', stock: 15 },
        { description: 'Product description 55', filters: ['tool'], id: 55, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 55', price: 59.95, producer: 'Craftsman', stock: 15 },
        { description: 'Product description 56', filters: ['tool'], id: 56, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 56', price: 59.95, producer: 'Craftsman', stock: 15 },
        { description: 'Product description 57', filters: ['tool'], id: 57, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 57', price: 59.95, producer: 'Craftsman', stock: 15 },
        { description: 'Product description 58', filters: ['tool'], id: 58, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 58', price: 59.95, producer: 'Craftsman', stock: 15 },
        { description: 'Product description 59', filters: ['tool'], id: 59, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 59', price: 59.95, producer: 'Craftsman', stock: 15 },
        { description: 'Product description 60', filters: ['tool'], id: 60, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 60', price: 59.95, producer: 'Craftsman', stock: 15 },
        { description: 'Product description 61', filters: ['tool'], id: 61, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 61', price: 59.95, producer: 'Craftsman', stock: 15 },
        { description: 'Product description 62', filters: ['tool'], id: 62, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 62', price: 59.95, producer: 'Craftsman', stock: 15 },
        { description: 'Product description 63', filters: ['tool'], id: 63, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 63', price: 59.95, producer: 'Craftsman', stock: 15 },
        { description: 'Product description 64', filters: ['tool'], id: 64, image: 'http://lorempixel.com/g/600/600/technics', isFiltered: true, isInPendingPurchase: false, name: 'Product 64', price: 59.95, producer: 'Craftsman', stock: 15 }
    ];

    return {
        getAll: getAll,
        getById: getById
    };

    function getAll() {
        return products;
    }

    function getById(id) {
        return products.filter(function (product) {
            return product.id === id;
        })[0];
    }
})();
