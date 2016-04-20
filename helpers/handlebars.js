'use strict';

function hbsHelpers(hbs, defaultLayout, extname) {
    return hbs.create({
        defaultLayout: defaultLayout,
        extname: extname,
        helpers: {
            isEqual: isEqual
        }
    });

    function isEqual(a, b, options) {
        if (a === b) {
            return options.fn(this);
        }

        return options.inverse(this);
    }
}

module.exports = hbsHelpers;
