var appModules = appModules || {};

//apply revealing prototype pattern

(function() {
    'use strict';

    /**
     * on-click function for toggleable elements
     */
    $('.toggleable').each(function(index, element) {
        element.onclick = function() {
            $('.' + element.id).toggleClass('-collapsed');
        };
    });
    
    /**
     * on-click function for categories button
     */
    $('#category-button')[0].onclick = function() {
        $('.categories').each(function(index, element) {
            $(element).toggleClass('hidden-xs visible-xs');
            $(element).toggleClass('hidden-sm visible-sm');
        });
    };
})();
