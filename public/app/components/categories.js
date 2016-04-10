'use strict';
var appComponents = appComponents || {};

appComponents.Categories = function() {
    
};

appComponents.Categories.prototype = function() {
    var isInitialized = false;

    return {
        initialize: initialize
    };
    
    function initialize() {
        if (isInitialized) {
            return;
        }
        
        $('.category-header').each(function(index, element) {
            element.onclick = function() {
                $('.' + element.id).toggleClass('-collapsed');
            };
        });
        
        $('.filter').each(function(index, element) {
            element.onclick = function() {
                $(this).toggleClass('-active');
            };
        });
        
        // isInitialized = true;
    }
}();
