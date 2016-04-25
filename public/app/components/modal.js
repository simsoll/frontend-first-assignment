'use strict';
var appComponents = appComponents || {};

appComponents.Modal = function () {

};

appComponents.Modal.prototype = function () {
    return {
        initialize: initialize
    };

    function initialize() {
        initializeModalOverlay();
        initializeModalCategories();
        initializeModelLogin();
    }

    function initializeModalOverlay() {
        $('.modal-overlay').click(function () {
            $(this).toggleClass('hide');
            
            $($(this).data('modal-class')).toggleClass('hide');
        });
    }
    
    function initializeModalCategories() {
        $('.category-button').click(function() {
            toggleModal('.modal-container.categories', 'hide');
        });
    }
    
    function initializeModelLogin() {
        $('.login-button').click(function() {
            toggleModal('.modal-container.login', 'hide');
        });
    }
    
    function toggleModal(modalClass, toggledClass) {
        $('.modal-overlay[data-modal-class="' + modalClass + '"]').toggleClass(toggledClass);
        $(modalClass).toggleClass(toggledClass);
    }
} ();
