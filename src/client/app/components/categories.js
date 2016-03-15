'use strict';
var appComponents = appComponents || {};

appComponents.Categories = function() {
    
};

appComponents.Categories.prototype = function() {
    return {
        setup: setup
    };
    
    function setup() {
        $('.category-header').each(function(index, element) {
            element.onclick = function() {
                $('.' + element.id).toggleClass('-collapsed');
            };
        });
        
        $('.filter').each(function(index, element) {
            element.onclick = function() {
                $(this).toggleClass('-active');
            }
        });
    }
}();
