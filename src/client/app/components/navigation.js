'use strict';
var appComponents = appComponents || {};

appComponents.Navigation = function() {
    
};

appComponents.Navigation.prototype = function() {
    return {
        setup: setup
    };
    
    function setup() {
        $('#category-button')[0].onclick = function() {
            $(this).toggleClass('-pressed');

            $('.categories').each(function(index, element) {
                $(element).toggleClass('hidden-xs visible-xs');
                $(element).toggleClass('hidden-sm visible-sm');
            });
        };
    }
}();
