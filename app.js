/*Module Dependencies*/

var express = require('express');
var io = require('socket.io').listen(app);

var app = module.exports = express.CreateServer();

app.listen(8080);

//Configuration
var pub = __dirname + '/public';

app.configure(function() {
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.static(pub));
    app.use(app.router);
});
    
app.configure('development', function(){
    app.use(express.errorHandler({
        dumpExceptions:true, 
        showStack: true
    }));
});

app.configure('production', function() {
    app.use(express.errorHandler());
});

//Load the database handler
var MongoHandler = require('./mongohandler').MongoHandler;
var MongoHandler = new MongoHandler();