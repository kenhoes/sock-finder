var mongoose = require('mongoose');
mongoose.connect('mongoose://localhost/sockFinder');

var Schema = mongoose.Schema
, ObjectId = Schema.ObjectId;

var ClickEvent = new Schema({
    clickId : String
    ,
    timestamp : Date
    ,
    project: String
});

//Set project name here
var project = 'SampleCompany-SampleCampaign'; 


var ClickEvent = mongoose.model('ClickEvent', ClickEvent);


MongoHandler = function(){};

MongoHandler.prototype.inputEvent = function(clickId, callback) {
    var clickevent = new ClickEvent({clickedId: clickId, projectName: project});
    
    clickevent.save(function(err) {
        callback();
    });
    
};

exports.MongoHandler = MongoHandler;