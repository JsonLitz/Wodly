var mongoose = require('mongoose');
var db = mongoose.connection;
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/WODly');

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var wodSchema = new Schema({
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

var destroy = function(id){
    console.log("Your delete function in Mongoose",id);
    Entry.deleteOne({"_id": id }, function (err){
        if (err) return handleError(err);
    })
};

var save = function(entry){
  var entry = new Entry({
    movements: entry.movements,
    details: entry.details,
    name: entry.name
  });
  console.log("Your save function in Mongoose", entry);
  return entry.save();
};

module.exports.selectAll = selectAll;
module.exports.save = save;
module.exports.destroy = destroy;
