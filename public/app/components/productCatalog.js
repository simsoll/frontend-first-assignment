'use strict';

var appComponents = appComponents || {};

appComponents.ProductCatalog = function () {

};

appComponents.ProductCatalog.prototype = function () {
    var isInitialized = false;

    return {
        initialize: initialize
    };

    function initialize() {
        initializeAddButtons();
        initializeRemoveButtons();
        initializeBarCodeScannerCloseButton();
    }

    function initializeAddButtons() {
        $('.button-container .add').click(function () {
            var id = $(this).data('id');

            var amount = Number($('#quantityOption-' + id + ' :selected').text());

            if ($(this).closest('.modal-barcode').length) {
                $('.modal-overlay').addClass('hide');
                $('.modal-barcode').addClass('hide');
            }

            $.ajax({
                type: 'post',
                url: '/add',
                data: {
                    amount: amount,
                    id: id
                }
            }).done(function (id) {
                $('.button-container .add').filter(function (index, element) {
                    return hasId(element, id);
                }).addClass('hide');

                $('.quantity-container').filter(function (index, element) {
                    return hasId(element, id);
                }).addClass('hide');

                $('.button-container .remove').filter(function (index, element) {
                    return hasId(element, id);
                }).removeClass('hide');

                addToElement('.cart__items', 1);
                updateCheckoutButtonDisabledState();
                
                
            });
        });
    }

    function initializeRemoveButtons() {
        $('.button-container .remove').click(function () {
            $.ajax({
                type: 'post',
                url: '/remove',
                data: {
                    id: $(this).data('id')
                }
            }).done(function (id) {
                $('.button-container .add').filter(function (index, element) {
                    return hasId(element, id);
                }).removeClass('hide');

                $('.quantity-container').filter(function (index, element) {
                    return hasId(element, id);
                }).removeClass('hide');

                $('.button-container .remove').filter(function (index, element) {
                    return hasId(element, id);
                }).addClass('hide');

                addToElement('.cart__items', -1);
                updateCheckoutButtonDisabledState();
            });
        });
    }

    function hasId(element, id) {
        return Number($(element).data('id')) === Number(id);
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

    function initializeBarCodeScannerCloseButton() {
        $('.barcode-scanner__close-button').click(function () {
            $('.modal-overlay').removeClass('show');
            $('.modal-barcode').removeClass('show');
        });
    }
} ();
