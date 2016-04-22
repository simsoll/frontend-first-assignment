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
        $('.widget.-products button').click(function () {
            window.location.href = '/products';
        });
        
        $('.widget.-purchases button').click(function () {
            window.location.href = '/purchases';
        });
    }
} ();