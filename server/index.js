var express = require('express');
var bodyParser = require('body-parser');
var items = require('../database-mongo');
var app = express();
var shortid = require('shortid');

app.use(require("body-parser").json());
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/items', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
      console.log("Successfully retreived from /items!!");
    }
  });
});

app.get('/', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
      console.log("Successfully retrieved from '/'!");

    }
  });
});

app.delete('/items', function (req,res) {
    items.destroy(req.body);
    // res.send(req.body);

    console.log("req.body for delete request", req.body);
})

app.post('/items', function(req, res){
    console.log("req.body posted to /items", req.body);
  items.taco(req.body);
  res.send(req.body);
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
