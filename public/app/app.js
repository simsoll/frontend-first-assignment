'use strict';
var appComponents = appComponents || {};
var appModules = appModules || {};

(function() {
    var categories = new appComponents.Categories();

    (new appComponents.Navigation()).initialize();
    (new appComponents.ProductCatalog()).initialize();

})();
