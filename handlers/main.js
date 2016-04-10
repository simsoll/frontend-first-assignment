'use strict';

exports.home = function(req, res) {
    var context = {
        active: { home: true }
    };

    res.render('home', context);
};