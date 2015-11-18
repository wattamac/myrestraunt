var express = require('express')
    , http = require('http')
    , app = express()
    , server = http.createServer(app);

app.get('/', function (req, res) {
    console.log(__dirname);
    res.sendfile(__dirname + '/index.html');
});







app.get("/api/friends", function(req, res) {
    var friends = require('./data/friends_restraunt_list');
    res.send(friends.get());
});

app.get("/api/restraunts", function(req, res) {
    var restraunts = require('./data/my_restraunt_list');
    res.send(restraunts.get());
});

app.get("/api/restraunt/:id", function(req, res){
    var restraunts = require('./data/restaurantInfo');
    var id = req.params.id;
    console.log(id);
    var restraunt = restraunts.get(id);
    console.log(restraunt);
    return res.send(restraunt);
});

server.listen(8000, function() {
    console.log('Express server listening on port ' + server.address().port);
});