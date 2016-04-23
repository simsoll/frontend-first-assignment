'use strict';
var appComponents = appComponents || {};

appComponents.PurchaseCatalog = function () {

};

appComponents.PurchaseCatalog.prototype = function () {
    return {
        initialize: initialize
    };

    function initialize() {
        initializeButtons();
    }

    function initializeButtons() {
        initializeSubmitButton();
        initilizeRemoveButtons();
        initializeApproveButtons();
    }

    function initilizeRemoveButtons() {
        $('.button.remove-product').click(function () {
            $.ajax({
                type: 'post',
                url: '/remove',
                data: {
                    id: $(this).data('id')
                }
            }).done(function (id) {
                if (productsIn('pending-purchases') === 1) {
                    $('.pending-purchases').remove();
                }
                else {
                    $('.pending-purchases').find('[data-id=' + id + ']').closest('.purchase__product').remove();
                }

                addToElement('.cart__items', -1);
                updateCheckoutButtonDisabledState();
            });
        });
    }

    function initializeSubmitButton() {
        $('.button.submit').click(function () {
            var amounts = [];

            $('.pending-purchases .purchase__product').each(function (index, element) {
                var inputElement = $(element).find('input');
                amounts.push(
                    {
                        id: inputElement.data('id'),
                        amount: Number(inputElement.val())
                    });
            });

            $.ajax({
                type: 'post',
                url: '/submit',
                data: {
                    id: $(this).data('id'),
                    amounts: JSON.stringify(amounts),
                    timestamp: formatDate(new Date())
                }
            }).done(function (meta) {
                var $purchase = $('.pending-purchases .purchase-container');

                convertPendingPurchaseToSubmittedPurchase($purchase, meta);
                movePurchaseToSection($purchase, 'submitted-purchases', 'Purchases to be Approved');

                if (purchasesIn('pending-purchases') === 0) {
                    $('.pending-purchases').remove();
                }

                $('.cart__items').text('0');
                updateCheckoutButtonDisabledState();
            });
        });
    }

    function initializeApproveButtons() {
        $('.button.approve').click(function () {
            $.ajax({
                type: 'post',
                url: '/approve',
                data: {
                    id: $(this).data('id'),
                    timestamp: formatDate(new Date())
                }
            }).done(function (data) {
                var $purchase = $('.button.approve[data-id=' + data.id + ']').closest('.purchase-container');

                convertSubmittedPurchaseToApprovedPurchase($purchase, data.meta);
                movePurchaseToSection($purchase, 'approved-purchases', 'Approved Purchases');

                if (purchasesIn('submitted-purchases') === 0) {
                    $('.submitted-purchases').remove();
                }
            });
        });
    }

    function addToElement(element, number) {
        var $element = $(element);
        $element.text(Number($element.html()) + number);
    }

    function updateCheckoutButtonDisabledState() {
        if (Number($('.cart__items').html()) === 0) {
            $('.checkout-button').prop('disabled', true);
        }
        else {
            $('.checkout-button').prop('disabled', false);
        }
    }

    function productsIn(section) {
        return $('.' + section + ' .purchase__product').length;
    }

    function purchasesIn(section) {
        return $('.' + section + ' .purchase').length;
    }

    function movePurchaseToSection(purchase, section, headline) {
        if (!$('.' + section).length) {
            $('.' + previousSection(section)).after('<div class="' + section + '"><h1>' + headline + '</h1></div>');
        }

        $('.' + section + ' h1').after($(purchase));
    }

    function previousSection(section) {
        if (section === 'submitted-purchases') {
            return 'pending-purchases';
        }
        if (section === 'approved-purchases') {
            return 'submitted-purchases';
        }

        return null;
    }

    function convertPendingPurchaseToSubmittedPurchase(purchase, meta) {
        //add timestamp and user name after products section
        $(purchase)
            .find('.purchase__products')
            .append('<h2>Timeline</h2>')
            .append('<p>Purchased by: ' + meta.user.name + '</p>')
            .append('<p>Purchased at: ' + meta.timestamp + '</p>');

        //replace input box with number
        $(purchase)
            .find('.purchase__product-amount')
            .each(function (index, element) {
                var amount = $(element).find('input').val();
                $(element)
                    .removeClass('purchase__product-amount')
                    .addClass('purchase__product-details -align-right')
                    .html(amount);
            });
        
        //change submit button to approve button
        $(purchase)
            .find('.button.submit')
            .unbind('click')
            .removeClass('submit')
            .addClass('approve')
            .html('Approve');
        initializeApproveButtons();
    }

    function convertSubmittedPurchaseToApprovedPurchase(purchase, meta) {
        //add timestamp and user name
        $(purchase)
            .find('.purchase')
            .addClass('-approved')
            .append('<p>Approved by: ' + meta.user.name + '</p>')
            .append('<p>Approved at: ' + meta.timestamp + '</p>');

        //remove approve button
        $(purchase)
            .find('.button.approve')
            .unbind('click')
            .remove();

    }

    function formatDate(date) {
        var weekDayNames = ['Sunday', 'Monday', 'Tuesday',
            'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        var monthNames = ['January', 'February', 'March',
            'April', 'May', 'June', 'July', 'August', 'September',
            'October', 'November', 'December'];

        var day = date.getDate();
        var sup = '';

        if (day === 1 || day === 21 || day === 31) {
            sup = 'st';
        }
        else if (day === 2 || day === 22) {
            sup = 'nd';
        }
        else if (day === 3 || day === 23) {
            sup = 'rd';
        }
        else {
            sup = 'th';
        }

        var weekDay = date.getDay();
        var month = date.getMonth();
        var year = date.getFullYear();

        return weekDayNames[weekDay] + ' ' + day + sup + ' ' + monthNames[month] + ' ' + year + ' - ' + formatTime(date);
    }

    function formatTime(date) {
        var amPm = '';
        var hours = date.getHours();

        if (hours < 12) {
            amPm = 'AM';
        }
        else {
            amPm = 'PM';
        }
        if (hours === 0) {
            hours = 12;
        }
        if (hours > 12) {
            hours = hours - 12;
        }

        var seconds = prefixZeroAsString(date.getSeconds());        
        var minutes = prefixZeroAsString(date.getMinutes());
        hours = prefixZeroAsString(hours);

        return hours + ':' + minutes + ':' + seconds + ' ' + amPm;
    }

    function prefixZeroAsString(inputNumber) {
        var inputAsString = inputNumber + '';

        if (inputAsString.length === 1) {
            return '0' + inputAsString;
        }
        
        return inputAsString;
    }
} ();