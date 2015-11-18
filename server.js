var express = require('express')
    , http = require('http')
    , app = express()
    , server = http.createServer(app);

app.get('/', function (req, res) {
    console.log(__dirname);
    res.sendfile(__dirname + '/index.html');

});

app.get("/friends", function(req, res) {
    var friends = require('./data/friends_restraunt_list');
    res.send(friends.get());
});

app.get("/restraunts", function(req, res) {
    var restraunts = require('./data/my_restraunt_list');
    res.send(restraunts.get());
});

app.get("/restraunt/:id", function(req, res){
    console.log(req.params.id);
    res.send(req.params.id);
});

server.listen(8000, function() {
    console.log('Express server listening on port ' + server.address().port);
});