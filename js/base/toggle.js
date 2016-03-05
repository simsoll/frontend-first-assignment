var myNP = myNP || {};

//apply revealing prototype pattern

(function () {
    "use strict";

    var toggleables = document.getElementsByClassName("toggleable");

    for (var i = 0; i < toggleables.length; i++) {
        var toggleable = toggleables[i];
        var expandables = concatenate(toggleable.getElementsByClassName("expanded"), 
                                      toggleable.getElementsByClassName("collapsed"));

        toggleable.onclick = toggleElements(expandables);
    }

    function concatenate(a, b) {
        return Array.prototype.slice.call(a).concat(Array.prototype.slice.call(b));
    }

    function toggleElements(elements) {
        //create function scope by using a wrapping function, so element is bound to this
        //particular value and not reset in each loop iteration 
        //TODO: can this be simplified by using bind?         
        return function () {
            for (var j = 0; j < elements.length; j++) {
                toggle(elements[j]);
            }
        };
    }

    function toggle(element) {
        var collapsed = "collapsed";
        var expanded = "expanded";

        if (element.className.indexOf(collapsed) > -1) {
            element.className = element.className.replace(collapsed, expanded);
        }
        else if (element.className.indexOf(expanded) > -1) {
            element.className = element.className.replace(expanded, collapsed);
        }
    }
})();