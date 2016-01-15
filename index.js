var app = require('express')();
var express = require('express');
var server = require('http').Server(app);

app.use(express.static('public'));
server.listen(process.env.PORT || 4004);
console.log("Listening.");