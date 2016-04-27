'use strict';
var appComponents = appComponents || {};

appComponents.Camera = function () {

};

appComponents.Camera.prototype = function () {
    return {
        initialize: initialize
    };

    function initialize() {
        $('.barcode-scanner').on('change', '#barcode-scanner', eventHandler);
        $('.barcode-scanner-widget').on('change', '#barcode-scanner-widget', eventHandler);
    }

    function eventHandler(event) {
        var applyTo = $('.modal-barcode .product__image');//.attr('src', imgURL);

        injectPicture(event, applyTo);

        $('.modal-overlay[data-modal-class=".modal-barcode"]').toggleClass('hide');
        $('.modal-barcode').toggleClass('hide');
    }

    function injectPicture(event, applyTo) {
        // Get a reference to the taken picture or chosen file
        var files = event.target.files;

        if (files && files.length > 0) {
            var file = files[0];

            try {
                // Create ObjectURL
                var imgURL = window.URL.createObjectURL(file);

                // Set img src to ObjectURL
                applyTo.src = imgURL;

                // Revoke ObjectURL
                URL.revokeObjectURL(imgURL);
            }
            catch (e) {
                try {
                    // Fallback if createObjectURL is not supported
                    var fileReader = new FileReader();
                    fileReader.onload = function (event) {
                        applyTo.src = event.target.result;
                    };
                    fileReader.readAsDataURL(file);
                }
                catch (e) {
                    //
                    var error = document.querySelector("#error");
                    if (error) {
                        error.innerHTML = "Neither createObjectURL or FileReader are supported";
                    }
                }
            }
        }
    }
} ();