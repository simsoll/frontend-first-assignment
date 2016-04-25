'use strict';
var appComponents = appComponents || {};

appComponents.Navigation = function () {

};

appComponents.Navigation.prototype = function () {
    var isInitialized = false;

    return {
        initialize: initialize
    };

    function initialize() {
        if (isInitialized) {
            return;
        }

        initializeNavigationButtons();
        isInitialized = true;
    }

    function initializeNavigationButtons() {
        $('.checkout-button').click(function () {
            window.location.href = '/purchases';
        })
    }
} ();
