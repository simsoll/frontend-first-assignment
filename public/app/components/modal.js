'use strict';
var appComponents = appComponents || {};

appComponents.Modal = function () {

};

appComponents.Modal.prototype = function () {
    return {
        initialize: initialize
    };

    function initialize() {
        $('.modal-overlay').click(function () {
            $(this).removeClass('show');
            
            $($(this).data('modal-class')).removeClass('show');
        });
    }
} ();