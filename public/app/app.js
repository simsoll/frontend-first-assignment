'use strict';
var appComponents = appComponents || {};
var appModules = appModules || {};

(function() {
    var categories = new appComponents.Categories();

    (new appComponents.Navigation()).initialize();
    (new appComponents.Home()).initialize();
    (new appComponents.ProductCatalog()).initialize();
    (new appComponents.Camera()).initialize();
    (new appComponents.Modal()).initialize();
    (new appComponents.PurchaseCatalog()).initialize();

})();
