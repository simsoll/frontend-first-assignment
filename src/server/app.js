var express = require('express');
var handlebars = require('express-handlebars');
var bodyParser = require('body-parser');

var app = express();

var port = process.env.port || 5000;
var nav = [
    {
        title: 'Home',
        link: '/Home'
    },
    {
        title: 'Products',
        link: '/Products'
    }];

var productRouter = require('./routes/productRoutes')(nav);
var authRouter = require('./routes/authRoutes')(nav);

app.use(express.static('../client'));
app.use(express.static('../server'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.set('views', '../client');
app.engine('.hbs', handlebars(
    {
        extname: '.hbs'
    })
);
app.set('view engine', '.hbs');

app.use('/Products', productRouter);
app.use('/Auth', authRouter);

app.get('/', function(req, res) {
    res.render('test', {
        title: 'This is a test',
        list: ['a', 'b']
    });
});


app.listen(port, function(err) {
    console.log('running server on port ' + port);
});