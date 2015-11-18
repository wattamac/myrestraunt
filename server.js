var express = require('express')
    , http = require('http')
    , app = express()
    , server = http.createServer(app);
var path = require('path');

app.set('views', path.join(__dirname, '/html'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    console.log(__dirname);
    res.render('index', { title: 'Express',name:'Terry' });
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

app.get("/api/today", function(req, res){
    var restraunts = require('./data/restaurantInfo');
    var restraunt = restraunts.getRandom();
    console.log(restraunt);
    return res.send(restraunt);
});

server.listen(8000, function() {
    console.log('Express server listening on port ' + server.address().port);
});