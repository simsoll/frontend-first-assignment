'use strict';
var appComponents = appComponents || {};

appComponents.Categories = function() {
    
};

appComponents.Categories.prototype = function() {
    return {
        setup: setup
    };
    
    function setup() {
        $('.toggleable').each(function(index, element) {
            element.onclick = function() {
                $('.' + element.id).toggleClass('-collapsed');
            };
        });
    }
}();
