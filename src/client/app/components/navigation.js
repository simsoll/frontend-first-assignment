'use strict';
var appComponents = appComponents || {};

appComponents.Navigation = function() {

};

appComponents.Navigation.prototype = function() {
    return {
        setup: setup
    };

    function setup() {
        setupNavigationLinks();
        setupNavigationButtons();
    }
    
    function setupNavigationLinks() {
        $('.navigation-link').each(function(index, element) {
            element.onclick = function() {
                $('.navigation-link').each(function(innerIndex, innerElement) {
                    $(innerElement).removeClass('-current');
                });
                
                $(this).addClass('-current');
            };
        });        
    }
    
    function setupNavigationButtons() {
        $('#category-button')[0].onclick = function() {
            $(this).toggleClass('-pressed');

            $('.categories').each(function(index, element) {
                $(element).toggleClass('hidden-xs visible-xs');
                $(element).toggleClass('hidden-sm visible-sm');
            });
        };        
    }
} ();
