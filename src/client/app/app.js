'use strict';
var appComponents = appComponents || {};
var appModules = appModules || {};

(function() {
    (new appComponents.Categories()).setup();
    (new appComponents.Navigation()).setup();
})();
