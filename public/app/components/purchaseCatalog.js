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
                movePurchaseToSection($purchase, 'submitted-purchases', 'To be approved');

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
                movePurchaseToSection($purchase, 'approved-purchases', 'Approved');

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
            .find('.purchase-section.products')
            .after('<div class="purchase-section events">' +
                        '<h2>Timeline</h2>' +
                        '<table class="purchase__table events">' +
                            '<tr class="purchase__event">' +
                                purchaseDetailsTableRow('Who', 'left', true) +
                                purchaseDetailsTableRow('What', 'right', true) +
                                purchaseDetailsTableRow('When', 'right', true) +
                            '</tr>' +
                            '<tr class="purchase__event">' +
                                purchaseDetailsTableRow(meta.user.name, 'left') +
                                purchaseDetailsTableRow('Submitted', 'right') +
                                purchaseDetailsTableRow(meta.timestamp, 'right') +
                            '</tr>' +
                        '</table>' +
                    '</div>');

        //replace input box with number
        $(purchase)
            .find('.purchase-details.amounts')
            .each(function (index, element) {
                var amount = $(element).find('input').val();
                $(element)
                    .removeClass('amount')
                    .remove('input')
                    .remove('button')
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
            .find('.purchase__table.events tbody')
            .append(purchaseDetailsTableRow(meta.user.name, 'left'))
            .append(purchaseDetailsTableRow('Approved', 'right'))
            .append(purchaseDetailsTableRow(meta.timestamp, 'right'));

        //remove approve button
        $(purchase)
            .find('.button.approve')
            .unbind('click')
            .remove();
    }
    
    function purchaseDetailsTableRow(innerHtml, alignment, isHeading) {
        if (isHeading) {
            return '<td class="purchase-details -align-' + alignment + ' -heading">' + innerHtml + '</td>';            
        }
        return '<td class="purchase-details -align-' + alignment + '">' + innerHtml + '</td>';
    }

    function formatDate(date) {
        var day = date.getDate();
        var month = date.getMonth();
        var year = date.getFullYear();

        return year + '-' + prefixZeroAsString(month) + '-' + prefixZeroAsString(day) + ' ' + formatTime(date);
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