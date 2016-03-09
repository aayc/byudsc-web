var app = require('express')();
var express = require('express');
var server = require('http').Server(app);
var bodyParser = require('body-parser');
var gspread = require('google-spreadsheet');
var creds = require('./event-creds.json');
var fs = require('fs'); 
var pyshell = require('python-shell')

app.use( bodyParser.json() );
app.use(express.static('public'));
var LEADERBOARD;

/* 2016 CONTEST CODE
/* On start, scrape BNP leaderboard. */

function scrapeLeaderboard (callback) {
	var options = {
      mode: 'text',
      pythonPath: 'python',
      pythonOptions: ['-u'],
      scriptPath: '',
    };

    pyshell.run('bnp-scrape.py', options, callback);
}

scrapeLeaderboard(function (err, result) {
	LEADERBOARD = result
	console.log("LEADERBOARD SCRAPE COMPLETE")
})

app.post('/get-leaderboard', function (req, res) {
	res.send(LEADERBOARD)
})

/* --------------- END CONTEST 2016 CODE ----- */


	 
app.post('/get-events', function(req, res) {
	var events = new gspread('1kvxPYFbeFL9MGtKExJAMEwEzIDiP2yYbLa0_P71bUR8');
	events.useServiceAccountAuth(creds, function(err){

		events.getRows(1, {
			start: 0,			 // start index 
			num: 3,			   // number of rows to pull 
		}, function(err, row_data){
			var categories = [];
			seen = {};
			for (var i = 0; i < row_data.length; i++) {
				var category = row_data[i].category;
				var header = row_data[i].header;
				var date = row_data[i].date;
				var content = row_data[i].content;
				if (!(category in seen)) {
					seen[category] = true;
					categories.unshift({ "category-name": category, "events": [] });
				}

				var eventList = categories.filter(function (x) { 
					return x["category-name"] == category;
				})[0].events;

				eventList.unshift({
					"name" : header,
					"date" : date,
					"content" : content
				});
			}
			res.send({ "categories" : categories });
		});
	});
    /*
	DEPRECATED - fetch from events.json, which is updated by admin page.
	now uses google spreadsheets.
    var eventsFileContents = JSON.parse(fs.readFileSync('admin/events.json', 'utf8'));
    res.send(eventsFileContents);*/
});

server.listen(process.env.PORT || 4004);

console.log("Listening.");


