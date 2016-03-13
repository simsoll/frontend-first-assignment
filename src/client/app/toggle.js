var myNP = myNP || {};

//apply revealing prototype pattern

(function() {
    'use strict';

    /**
     * on-click function for toggleable elements
     */
    $('.toggleable').each(function(index, value) {
        value.onclick = toggleElements($(value).find('.expanded, .collapsed'));
    });
    
    /**
     * on-click function for categories button
     */
    $('#category-button')[0].onclick = function() {
        $('.categories').each(function(index, value) {
            switchClass(value, 'hidden-xs', 'visible-xs');
            switchClass(value, 'hidden-sm', 'visible-sm');
        });
    };

    function toggleElements(elements) {
        return function() {
            $(elements).each(function(index, value) {
                switchClass(value, 'collapsed', 'expanded');
            });
        };
    }

    function switchClass(element, first, second) {
        if (hasClass(element, first)) {
            replaceClass(element, first, second);
        }
        else if (hasClass(element, second)) {
            replaceClass(element, second, first);
        }
    }

    function addClass(element, className) {
        element.className += ' ' + className;
    }
    
    function removeClass(element, className) {
        replaceClass(element, className, '');
    }

    function replaceClass(element, from, to) {
        element.className = element.className.replace(from, to);
    }

    function hasClass(element, className) {
        return element.className.indexOf(className) > -1;
    }
})();