'use strict';

(function() {
    var itemsPerPage = 16; //TODO: move to global config object

    registerHelpers();
    registerPartials();
    renderProducts();

    function renderProducts() {
        var products = getProducts();
        var filteredProducts = getFiltered(products);
        var paginatedProducts = getPaginated(filteredProducts, itemsPerPage);

        var template = $('#product-page-template').html();
        var compiled = Handlebars.compile(template);
        var rendered = compiled({
            products: paginatedProducts
        });

        $('#catalog').html(rendered);
        attachHandlers();
    }
    
    function registerPartials() {
        Handlebars.registerPartial('product', $('#product-template').html());
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
            var link
        }

    }    
    
    function addUrlParameter(key, value) {
        var href = window.location.href;
        var encodedKey = encodeURI(key);
        var encodedValue = encodeURI(value);
        var encodedKeyValuePair = encodedKey + '=' + encodedValue;
        
        if (href.indexOf('?') === -1) {
            return href + '?' + encodedKeyValuePair;
        }
        
        var keyValuePairs = href.split('&');
        
        for (var i = 0; i < keyValuePairs.length; i++) {
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
    }

    function attachHandlers() {

    }

    function getPaginated(elements, elementsPerPage) {
        var paginatedElements = [];
        var currentIndex = 0;
        var remainingElements = elements;

        while (remainingElements.length > elementsPerPage) {
            paginatedElements[currentIndex] = remainingElements.slice(0, elementsPerPage - 1);
            remainingElements = remainingElements.slice(elementsPerPage);
            currentIndex++;
        }

        paginatedElements[currentIndex] = remainingElements;

        return paginatedElements;
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

