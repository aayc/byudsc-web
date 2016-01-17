var app = require('express')();
var express = require('express');
var server = require('http').Server(app);
var bodyParser = require('body-parser');
var fs = require('fs');

app.use( bodyParser.json() );
app.use(express.static('public'));

app.post('/get-events', function(req, res) {
    console.log("Posted to get events");
    var eventsFileContents = JSON.parse(fs.readFileSync('admin/events.json', 'utf8'));
    res.send(eventsFileContents);
});

server.listen(process.env.PORT || 4004);

console.log("Listening.");


