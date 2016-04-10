var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('orders', {
        active: { orders: true }
    });
});

module.exports = router;