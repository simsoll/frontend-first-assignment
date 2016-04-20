'use strict';
var appComponents = appComponents || {};

appComponents.Camera = function () {

};

appComponents.Camera.prototype = function () {
    return {
        initialize: initialize
    };

    function initialize() {
        $('.camera-input').on('change', '#barcode-scanner', function (event) {
            // Get a reference to the taken picture or chosen file
            var files = event.target.files;

            if (files && files.length > 0) {
                var file = files[0];
                // Create ObjectURL
                var imgURL = window.URL.createObjectURL(file);

                // Set img src to ObjectURL
                $('.modal-barcode .product__image').attr('src', imgURL);

                // Revoke ObjectURL
                URL.revokeObjectURL(imgURL);
            }
            
            $('.modal-overlay').addClass('show');
            $('.modal-barcode').addClass('show');
        });
    }
} ();