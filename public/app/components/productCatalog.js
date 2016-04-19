'use strict';

var appComponents = appComponents || {};

appComponents.ProductCatalog = function() {

};

appComponents.ProductCatalog.prototype = function() {
    var isInitialized = false;

    return {
        initialize: initialize
    };

    function initialize() {
        initializeButtons();
    }

    function initializeButtons() {
        $('.product__button.add').click(function() {
            var id = $(this).data('id');
            
            var amount = Number($('#quantityOption-' + id + ' :selected').text());

            $.ajax({
                type: 'post',
                url: '/add',
                data: {
                    amount: amount,
                    id: id
                }
            }).done(function(id) {
                $('.product__button.add').filter(function(index, element) {
                    return hasId(element, id);
                }).addClass('hide');

                $('.product__button.option').filter(function(index, element) {
                    return hasId(element, id);
                }).addClass('hide');

                $('.product__button.remove').filter(function(index, element) {
                    return hasId(element, id);
                }).removeClass('hide');

                addToElement('.cart__items', 1);
                updateCheckoutButtonDisabledState();
            });
        });

        $('.product__button.remove').click(function() {
            $.ajax({
                type: 'post',
                url: '/remove',
                data: {
                    id: $(this).data('id')
                }
            }).done(function(id) {
                $('.product__button.add').filter(function(index, element) {
                    return hasId(element, id);
                }).removeClass('hide');

                $('.product__button.option').filter(function(index, element) {
                    return hasId(element, id);
                }).removeClass('hide');

                $('.product__button.remove').filter(function(index, element) {
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
} ();
