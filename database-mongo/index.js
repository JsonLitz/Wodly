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
  text: String,
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
  var row = new Entry({
   text: entry.text,
   nae: entry.text
  });
  return row.save();
};

module.exports.selectAll = selectAll;
module.exports.save = save;
