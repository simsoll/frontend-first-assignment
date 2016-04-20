'use strict';
var appComponents = appComponents || {};

appComponents.OrderCatalog = function () {

};

appComponents.OrderCatalog.prototype = function () {
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

    function initializeSubmitButton() {
        $('.order__submit-button').click(function () {
            var amounts = [];

            $('.pending-orders .order__products-item').each(function (index, element) {
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
                    amounts: JSON.stringify(amounts)
                }
            }).done(function (meta) {
                //move pending-orders to approved orders instead of...
                // $('.pending-orders').remove();
                convertPendingOrderToApprovedOrder(meta);
                movePendingOrderListToApprovedOrderList();
                removePendingOrderSection();

                $('.cart__items').text('0');
                updateCheckoutButtonDisabledState();
            });
        });
    }

    function initilizeRemoveButtons() {
        $('.order__remove-button').click(function () {
            $.ajax({
                type: 'post',
                url: '/remove',
                data: {
                    id: $(this).data('id')
                }
            }).done(function (id) {
                if (productsInPendingOrder() === 1) {
                    $('.pending-orders').remove();
                }
                else {
                    $('.pending-orders').find("[data-id='" + id + "']").closest('.order__products-item').remove();
                }

                addToElement('.cart__items', -1);
                updateCheckoutButtonDisabledState();
            });
        });
    }

    function initializeApproveButtons() {

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

    function productsInPendingOrder() {
        return $('.pending-orders .order__products-item').length;
    }

    function movePendingOrderListToApprovedOrderList() {
        $('.submitted-orders h2').after($('.pending-orders .order'));
    }
    
    function removePendingOrderSection() {
        $('.pending-orders').remove();
    }

    function convertPendingOrderToApprovedOrder(meta) {
        //add timestamp and user name
        $('.pending-orders .order')
            .prepend('<p>Ordered at: ' + meta.timestamp + '</p>')
            .prepend('<p>Ordered by: ' + meta.user.name + '</p>');

        //replace input box with number
        $('.pending-orders .order__products-item-amount').each(function (index, element) {
            var amount = $(element).find('input').val();
            $(element).html('Amount: ' + amount);
        });

        //change submit button to approve button
        $('.pending-orders .order__submit-button')
            .unbind('click')
            .removeClass('order__submit-button')
            .addClass('order__approve-button')
            .html('Approve');
        initializeApproveButtons();
    }
} ();