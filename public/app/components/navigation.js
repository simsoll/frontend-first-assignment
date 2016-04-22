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
        //TODO: enable again when categories are implemented
        // $('.category-button').onclick = function () {
        //     $(this).toggleClass('-pressed');

        //     $('.categories').each(function (index, element) {
        //         $(element).toggleClass('hide-x-small show-x-small');
        //         $(element).toggleClass('hide-small show-small');
        //     });
        // };

        $('.checkout-button').click(function () {
            window.location.href = '/purchases';
        })
    }
} ();
