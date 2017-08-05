var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/WODly');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var itemSchema = mongoose.Schema({
  text: String,
});

var Entry = mongoose.model('Entry', itemSchema);

var selectAll = function(callback) {
  Entry.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};
var save = function(entry){
  var row = new Entry({
   text: entry.text
  });
  return row.save();
};

module.exports.selectAll = selectAll;
module.exports.save = save;
