var express = require('express')
    , http = require('http')
    , app = express()
    , server = http.createServer(app);
var path = require('path');

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});



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
    //var restraunts = require('./data/restraunt_list.json');

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