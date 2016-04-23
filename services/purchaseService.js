'use strict';

module.exports = (function () {
    var purchases = [
        {
            id: 1,
            status: 'submitted',
            events: [
                {
                    who: 'Simon',
                    what: 'Submitted',
                    when: '2016-04-21 02:57:42 PM'
                }],
            products: [
                {
                    amount: 3,
                    product: {
                        name: 'Product 1',
                        filtered: true,
                        description: 'Product description 1',
                        price: 39.95
                    }
                },
                {
                    amount: 2,
                    product: {
                        name: 'Product 4',
                        filtered: true,
                        description: 'Product description 4',
                        price: 9.75
                    }
                },
                {
                    amount: 6,
                    product: {
                        name: 'Product 5',
                        filtered: true,
                        description: 'Product description 5',
                        price: 10.25
                    }
                }]
        },
        {
            id: 2,
            status: 'approved',
            events: [
                {
                    who: 'John',
                    what: 'Submitted',
                    when: '2016-04-16 09:42:13 AM'
                },
                {
                    who: 'Admin',
                    what: 'Approved',
                    when: '2016-04-16 03:17:19 PM'
                }],
            products: [
                {
                    amount: 1,
                    product: {
                        name: 'Product 1',
                        filtered: true,
                        description: 'Product description 1',
                        price: 39.95
                    }
                },
                {
                    amount: 4,
                    product: {
                        name: 'Product 3',
                        filtered: true,
                        description: 'Product description 3',
                        price: 9.75
                    }
                },
                {
                    amount: 2,
                    product: {
                        name: 'Product 9',
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
                status: 'pending',
                events: []
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

        purchase.events.push({
            who: meta.user.name,
            what: 'Submitted',
            when: meta.timestamp
        });
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

        purchase.events.push({
            who: meta.user.name,
            what: 'Approved',
            when: meta.timestamp
        });
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