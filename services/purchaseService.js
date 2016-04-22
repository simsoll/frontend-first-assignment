'use strict';

module.exports = (function () {
    var purchases = [
        {
            id: 1,
            creator: 'Simon',
            createdAt: 'Thursday 21st April 2016 - 02:57:42 PM',
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
            createdAt: 'Thursday 16th April 2016 - 09:42:13 AM',
            approver: 'Admin',
            approvedAt: 'Thursday 16th April 2016 - 03:17:19 PM',
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
        approvePurchase: approvePurchase,
        getAll: getAll,
        getByStatus: getByStatus,
        removeFromPending: removeFromPending,
        submitPurchase: submitPurchase
    };

    function addToPending(product, amount) {
        var purchase = getByStatus('pending')[0];
        var isNewPurchase = !purchase;

        if (isNewPurchase) {
            purchase = {
                id: generateId(),
                products: [],
                status: 'pending'
            };
        }

        purchase.products.push({
            amount: amount,
            product: product
        });

        if (isNewPurchase) {
            purchases.push(purchase);
        }
    }

    function removeFromPending(productId) {
        var purchase = getByStatus('pending')[0];

        if (!purchase) {
            return;
        }

        var products = purchase.products;

        var index = products.map(function (item) {
            return item.product.id;
        }).indexOf(productId);

        if (index > -1) {
            products.splice(index, 1);
        }
    }

    function submitPurchase(id, amounts, meta) {
        var purchase = getById(id);

        if (!purchase) {
            return;
        }

        if (purchase.status !== 'pending') {
            return;
        }

        for (var i = 0; i < purchase.products.length; i++) {
            var productItem = purchase.products[i];

            var amount = amounts.filter(function (element) {
                return element.id === productItem.product.id;
            })[0].amount;

            productItem.product.isInPendingPurchase = false;
            productItem.amount = amount;
        }

        purchase.status = 'submitted';
        purchase.creator = meta.user.name;
        purchase.createdAt = meta.timestamp;
    }

    function approvePurchase(id, meta) {
        var purchase = getById(id);

        if (!purchase) {
            return;
        }

        if (purchase.status !== 'submitted') {
            return;
        }

        purchase.status = 'approved';
        purchase.approver = meta.user.name;
        purchase.approvedAt = meta.timestamp;
    }

    function getAll() {
        return purchases;
    }

    function getByStatus(status) {
        return purchases.filter(function (purchase) {
            return purchase.status === status;
        }).sort(compareByCreatedAtDesc);
    }

    function getById(id) {
        return purchases.filter(function (purchase) {
            return purchase.id === id;
        })[0];
    }

    function generateId() {
        if (purchases.length === 0) {
            return 1;
        }
        var maxId = purchases[0].id;

        for (var i = 1; i < purchases.length; i++) {
            if (maxId < purchases[i].id) {
                maxId = purchases[i].id;
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