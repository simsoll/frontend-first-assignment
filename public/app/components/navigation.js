'use strict';
var appComponents = appComponents || {};

appComponents.Navigation = function() {

};

appComponents.Navigation.prototype = function() {
    var isInitialized = false;

    return {
        initialize: initialize
    };

    function initialize() {
        if (isInitialized) {
            return;
        }
        
        initializeNavigationLinks();
        initializeNavigationButtons();
        isInitialized = true;
    }

    function initializeNavigationLinks() {
        $('.navigation-link').each(function(index, element) {
            element.onclick = function() {
                $('.navigation-link').each(function(innerIndex, innerElement) {
                    $(innerElement).removeClass('-current');
                });

                $(this).addClass('-current');
            };
        });
    }

    function initializeNavigationButtons() {
        $('#category-button')[0].onclick = function() {
            $(this).toggleClass('-pressed');

            $('.categories').each(function(index, element) {
                $(element).toggleClass('hidden-xs visible-xs');
                $(element).toggleClass('hidden-sm visible-sm');
            });
        };
    }
} ();
