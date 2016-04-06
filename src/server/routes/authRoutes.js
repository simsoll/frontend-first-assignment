var express = require('express');
var authRouter = express.Router();

var router = function() {
    authRouter.route('/signUp').post(function(req, res) {
        
    });
    
    return authRouter;
}

module.exports = router;