'use strict';

module.exports = (function () {
    return {
        getRandomIntInclusive: getRandomIntInclusive
    };
    
    function getRandomIntInclusive(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
})();
