/*Module Dependencies*/

var express = require('express');
//var io = require('socket.io').listen(app);

//var app = module.exports = express.CreateServer();
var app = require('express').createServer()
var io = require('socket.io').listen(app);

app.listen(8080);

//Configuration
var pub = __dirname + '/public';

app.configure(function() {
    //app.set('views', __dirname + '/views');
    //app.set('view engine', 'ejs');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.static(pub));
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
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

//routes if needed


app.get('/', function(req,res) {
    res.sendfile(__dirname + '/index.html');
});

app.get('/newTest', function(req,res) {
    res.sendfile(__dirname + '/newTest.html');
});

//sockets
//listeners and emitters
io.sockets.on('connection', function(socket) {
    
    socket.on('sendEvent', function(clickId) {
        //for (i=0; i<=1000000; i++) 
        //for stress testing only
        {

            io.sockets.emit('updatelog', clickId);
        
            MongoHandler.inputEvent({
                timestamp: new Date(),
                clickedId: clickId
            }, function(error, docs) {
                //res.redirect('/');
            });
        //}
    });
    
});


