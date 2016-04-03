var express = require('express');

var app = express();


var port = process.env.port || 5000;
var productRouter = express.Router();

app.use(express.static('../client'));
app.set('views', '../client');

productRouter.route('/')
    .get(function (req, res) {
        res.send('Hello products');
    });
    
productRouter.route('/details')
    .get(function (req, res) {
        res.send('Hello product details');
    });    
    
app.use('/Products', productRouter);
    
app.get('/', function(req, res) {
    res.send('hello world');
});


app.listen(port, function(err) {
    console.log('running server on port ' + port);
});