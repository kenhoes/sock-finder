var mongoose = require('mongoose');
mongoose.connect('mongoose://localhost/mongo_blog');

var Schema = mongoose.Schema
, ObjectId = Schema.ObjectId;

var ClickEvent = new Schema({
    clickId : String
    ,
    timestamp : Date
});

var ClickEvent = mongoose.model('ClickEvent', ClickEvent);

MongoHandler = function(){};

