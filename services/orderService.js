'use strict';

module.exports = (function() {
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
                        description: 'Product description 1'
                    }
                },
                {
                    amount: 2,
                    product: {
                        filtered: true,
                        description: 'Product description 4'
                    }
                },
                {
                    amount: 6,
                    product: {
                        filtered: true,
                        description: 'Product description 5'
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
                        description: 'Product description 1'
                    }
                },
                {
                    amount: 4,
                    product: {
                        filtered: true,
                        description: 'Product description 3'
                    }
                },
                {
                    amount: 2,
                    product: {
                        filtered: true,
                        description: 'Product description 9'
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

        var index = products.map(function(item) {
            return item.product.id;
        }).indexOf(productId);

        if (index > -1) {
            products.splice(index, 1);
        }
    }

    function submitOrder(id, amounts, user) {
        var order = getById(id);
        
        if (order.status !== 'pending') {
            return;
        }
        
        order.status = 'submitted';
        order.creator = user.name;
        order.createdAt = new Date();
    }
    
    function approveOrder(id, user) {
        var order = getById(id);
        
        if (order.status !== 'submitted') {
            return;
        }
        
        order.status = 'approved';
        order.approver = user.name;
        order.approvedAt = new Date();
    }

    function getAll() {
        return orders;
    }

    function getByStatus(status) {
        return orders.filter(function(order) {
            return order.status === status;
        });
    }

    function getById(id) {
        return orders.filter(function(order) {
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
})();