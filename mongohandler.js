var mongoose = require('mongoose');
mongoose.connect('mongoose://localhost/sockFinder');

var Schema = mongoose.Schema
, ObjectId = Schema.ObjectId;

var ClickEvent = new Schema({
    clickId : String
    ,
    timestamp : Date
});

var ClickEvent = mongoose.model('ClickEvent', ClickEvent);


MongoHandler = function(){};

MongoHandler.prototype.inputEvent = function(clickId, callback) {
    var clickevent = new ClickEvent({clickedId: clickId, timestamp: new Date()});
    clickevent.save(function(err) {
        callback();
    });
};

exports.MongoHandler = MongoHandler;