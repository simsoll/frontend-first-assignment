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
            }).done(function (id) {
                //move pending-orders to approved orders instead of...
                // $('.pending-orders').remove();



                $('.cart__items').text('0');
                updateCheckoutButtonDisabledState();
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

    function productsInPendingOrder() {
        return $('.pending-orders .order__products-item').length;
    }
} ();