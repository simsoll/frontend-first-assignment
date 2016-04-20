'use strict';

module.exports = (function () {
    var orders = [
        {
            id: 1,
            creator: 'Simon',
            createdAt: new Date(),
            status: 'submitted',
            products: [
                {
                    amount: 3,
                    product: {
                        filtered: true,
                        description: 'Product description 1',
                        price: 39.95
                    }
                },
                {
                    amount: 2,
                    product: {
                        filtered: true,
                        description: 'Product description 4',
                        price: 9.75
                    }
                },
                {
                    amount: 6,
                    product: {
                        filtered: true,
                        description: 'Product description 5',
                        price: 10.25
                    }
                }]
        },
        {
            id: 2,
            creator: 'John',
            createdAt: new Date(),
            approver: 'Admin',
            approvedAt: new Date(),
            status: 'approved',
            products: [
                {
                    amount: 1,
                    product: {
                        filtered: true,
                        description: 'Product description 1',
                        price: 12.25
                    }
                },
                {
                    amount: 4,
                    product: {
                        filtered: true,
                        description: 'Product description 3',
                        price: 59.95
                    }
                },
                {
                    amount: 2,
                    product: {
                        filtered: true,
                        description: 'Product description 9',
                        price: 45.25
                    }
                }]
        }
    ];

    return {
        addToPending: addToPending,
        approveOrder: approveOrder,
        getAll: getAll,
        getByStatus: getByStatus,
        removeFromPending: removeFromPending,
        submitOrder: submitOrder
    };

    function addToPending(product, amount) {
        var order = getByStatus('pending')[0];
        var isNewOrder = !order;

        if (isNewOrder) {
            order = {
                id: generateId(),
                products: [],
                status: 'pending'
            };
        }

        order.products.push({
            amount: amount,
            product: product
        });

        if (isNewOrder) {
            orders.push(order);
        }
    }

    function removeFromPending(productId) {
        var order = getByStatus('pending')[0];

        if (!order) {
            return;
        }

        var products = order.products;

        var index = products.map(function (item) {
            return item.product.id;
        }).indexOf(productId);

        if (index > -1) {
            products.splice(index, 1);
        }
    }

    function submitOrder(id, amounts, meta) {
        var order = getById(id);

        if (!order) {
            return;
        }

        if (order.status !== 'pending') {
            return;
        }

        for (var i = 0; i < order.products.length; i++) {
            var productItem = order.products[i];

            var amount = amounts.filter(function (element) {
                return element.id === productItem.product.id;
            })[0].amount;

            productItem.product.isInPendingOrder = false;
            productItem.amount = amount;
        }

        order.status = 'submitted';
        order.creator = meta.user.name;
        order.createdAt = meta.timestamp;
    }

    function approveOrder(id, meta) {
        var order = getById(id);

        if (!order) {
            return;
        }

        if (order.status !== 'submitted') {
            return;
        }

        order.status = 'approved';
        order.approver = meta.user.name;
        order.approvedAt = meta.timestamp;
    }

    function getAll() {
        return orders;
    }

    function getByStatus(status) {
        return orders.filter(function (order) {
            return order.status === status;
        }).sort(compareByCreatedAtDesc);
    }

    function getById(id) {
        return orders.filter(function (order) {
            return order.id === id;
        })[0];
    }

    function generateId() {
        if (orders.length === 0) {
            return 1;
        }
        var maxId = orders[0].id;

        for (var i = 1; i < orders.length; i++) {
            if (maxId < orders[i].id) {
                maxId = orders[i].id;
            }
        }

        return maxId + 1;
    }

    function compareByCreatedAtDesc(a, b) {
        if (a.createdAt < b.createdAt) {
            return 1;
        }
        else if (a.createdAt > b.createdAt) {
            return -1;
        }

        return 0;
    }
})();