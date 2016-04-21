'use strict';
var appComponents = appComponents || {};

appComponents.Home = function () {

};

appComponents.Home.prototype = function () {
    return {
        initialize: initialize
    };

    function initialize() {
        initializeButtons();
    }

    function initializeButtons() {
        $('.widget.-barcode button').click(function () {
            window.location.href = '/products';
        });
        
        $('.widget.-products button').click(function () {
            window.location.href = '/products';
        });
        
        $('.widget.-orders button').click(function () {
            window.location.href = '/orders';
        });
    }
} ();