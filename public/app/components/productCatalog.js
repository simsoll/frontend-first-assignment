'use strict';

(function() {
    var itemsPerPage = 3; //TODO: move to global config object

    registerHelpers();
    renderNavigation();
    renderProducts();
    renderPageLinks();

    function renderNavigation() {
        $('nav').html(App.templates.navigation);
    }

    function renderProducts() {
        var products = getProducts();
        var pageValue = getValueFromQueryString('page');

        var filteredProducts = getFiltered(products);
        var paginatedProducts = getPaginated(filteredProducts, pageValue, itemsPerPage);

        var rendered = App.templates.products({
            products: paginatedProducts
        });

        $('#catalog').html(rendered);
        attachHandlers();
    }
    
    function renderPageLinks() {
        var products = getProducts();
        var filteredProducts = getFiltered(products);
        
        var rendered = App.templates.pageLinks({
            products: filteredProducts
        });
        
        $('#pagination').html(rendered);
        $('#pagination a').click(function(event) {
            // event.preventDefault();
        });
    }
    
    function registerHelpers() {
        Handlebars.registerHelper('generatePages', function(elements) {
            return generatePages(elements, itemsPerPage);
        });
    }
    
    function generatePages(elements, elementsPerPage) {
        var pages = [];
        var pageCount = Math.ceil(elements.length / elementsPerPage);

        for (var i = 1; i <= pageCount; i++) {
            var link = addToQueryString('page', i);
            pages.push({
                number: i,
                link: link
            });
        }
        
        return pages;

    }    
    
    function getValueFromQueryString(key) {
        var search = window.location.search || '';
        var encodedKey = encodeURI(key);

        var keyValuePairs = search.substr(1).split('&');
        
        for (var i = 0; i < keyValuePairs.length; i++) {
            var keyValuePair = keyValuePairs[i].split('=');
            
            if (keyValuePair[0] === encodedKey) {
                return keyValuePair[1];
            }
        }
        
        return null;        
    }
    
    function addToQueryString(key, value) {
        var path = window.location.path || '';
        var search = window.location.search || '';
        var hash = window.location.hash || '';
        var encodedKey = encodeURI(key);
        var encodedValue = encodeURI(value);
        var encodedKeyValuePair = encodedKey + '=' + encodedValue;
        var i;
        
        if (search === '') {
            return path + '?' + encodedKeyValuePair + hash;
        }
        
        var keyValuePairs = search.substr(1).split('&');
        
        for (i = 0; i < keyValuePairs.length; i++) {
            var keyValuePair = keyValuePairs[i].split('=');
            
            if (keyValuePair[0] === encodedKey) {
                keyValuePairs[i] = encodedKeyValuePair;
                break;
            }
        }
        
        //if no match then just append
        if (i === keyValuePairs.length) {
            keyValuePairs[keyValuePairs.length] = encodedKeyValuePair;
        }
        
        return path + '?' + keyValuePairs.join('&') + hash;
    }

    function attachHandlers() {

    }

    function getPaginated(elements, pageValue, elementsPerPage) {
        return elements.slice((pageValue - 1) * elementsPerPage, pageValue * elementsPerPage);
    }

    function getFiltered(elements) {
        return elements.filter(isFiltered);
    }

    function isFiltered(element) {
        return element.filtered;
    }

    function getProducts() {
        return [
            {
                filtered: true,
                description: 'Product description 1'
            },
            {
                filtered: true,
                description: 'Product description 2'
            },
            {
                filtered: true,
                description: 'Product description 3'
            },
            {
                filtered: true,
                description: 'Product description 4'
            },
            {
                filtered: true,
                description: 'Product description 5'
            },
            {
                filtered: true,
                description: 'Product description 6'
            },
            {
                filtered: true,
                description: 'Product description 7'
            },
            {
                filtered: true,
                description: 'Product description 8'
            }
        ];
    }
})();

