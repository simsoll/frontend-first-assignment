'use strict';
var appComponents = appComponents || {};
var appModules = appModules || {};

(function() {
    var categories = new appComponents.Categories();

    (new appComponents.Navigation()).initialize();

    initialize();
    loadPage('../../home.html');

    function initialize() {
        
        $('.navigation-link.home-link').click(function() {
            loadPage('../../home.html');
        });

        $('.navigation-link.products-link').click(function() {
            loadPage('../../products.html', function() {
                categories.initialize();
            });
        });

        $('.navigation-link.about-link').click(function() {
            loadPage('../../about.html');
        });
     
    }

    function loadPage(href, callback) {
        $('#content').load(href, callback);
    }
})();
