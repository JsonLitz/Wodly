var express = require('express');
var bodyParser = require('body-parser');
var items = require('../database-mongo');
var app = express();
var shortid = require('shortid');

console.log("shortid",shortid.generate());
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/items', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      console.log(res)
      res.json(data);
    }
  });
});

app.get('/', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      console.log(res)
      res.json(data);
    }
  });
});


app.post('/items', function(req, res){
  console.log(req.body);
  items.save(req.body);
  res.send(req.body);
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
