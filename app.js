var express = require('express');
var app = express();
var wmsController = require('./controllers/wmsController');

//set up template engin
app.set('view engine','ejs');

//static file location
app.use(express.static('./public'));

//fire controllers
wmsController(app);

//listen port
app.listen(3000);
console.log('Listinening 3000');
