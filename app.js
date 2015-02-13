var express = require('express');
var path = require('path');
var compress = require('compression');
var controller = require('./web/controller');

var app = express();

app.set('views', path.join(__dirname, 'web/views'));
app.set('view engine', 'jade');

app.use(compress());
app.use(express.static(__dirname + '/web'));

// Routing
app.use('/nut/:full', controller.nut);
app.use('/plugins/:name', controller.plugin);
app.use('/plugins/', controller.plugin);
app.use('/:full', controller.nut);
app.use('/', controller.index);


app.listen(process.env.PORT || 3000);