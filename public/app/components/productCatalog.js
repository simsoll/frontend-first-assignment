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
            $.ajax({
                type: 'post',
                url: '/add',
                data: {
                    id: $(this).data('id')
                }
            }).done(function(id) {
                $('.product__button.add').filter(function(index, element) {
                    return hasId(element, id);
                }).addClass('hide');

                $('.product__button.remove').filter(function(index, element) {
                    return hasId(element, id);
                }).removeClass('hide');

                addToElement('.cart__items', 1);
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
                
                $('.product__button.remove').filter(function(index, element) {
                    return hasId(element, id);
                }).addClass('hide');
                
                addToElement('.cart__items', -1);
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
} ();
