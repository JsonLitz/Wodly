var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/WODly');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var wodSchema = mongoose.Schema({
  movements: String,
  details: String,
  name: String
});

var Entry = mongoose.model('Entry', wodSchema);

var selectAll = function(callback) {
  Entry.find({}, function(err, wods) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, wods);
    }
  });
};

var save = function(entry){
  var entry = new Entry({
    movements: entry.movements,
    details: entry.details,
    name: entry.name
  });
  console.log("THIS IS A FLAG", entry);
  return entry.save();
};

module.exports.selectAll = selectAll;
module.exports.save = save;
