var express = require('express');
var mustacheExpress = require('mustache-express');
var app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');

app.set('views', __dirname + '/dist/pages');
app.use(express.static(__dirname + '/dist/public')); 

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});



var server = app.listen(3001, "localhost", function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port)

});