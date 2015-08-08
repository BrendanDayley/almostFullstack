'use strict';

//#####################################################
//Dependencies:
//#####################################################
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

//#####################################################
//Express:
//#####################################################
var app = express();

//#####################################################
//Port:
//#####################################################
var port = process.argv[2] || 3000;

//#####################################################
//Middelware:
//#####################################################
app.use('/', bodyParser.json());
app.use('/', cors());

// var allowCrossDomain = function(req, res, next) { 
// 	res.header('Access-Control-Allow-Origin', '*'); 
// 	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE'); 
// 	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); 

// 	// intercept OPTIONS method 
// 	if ('OPTIONS' === req.method) { 
// 		res.send(200); 
// 	} else { 
// 		next(); 
// 	}
// };
// app.use('/', allowCrossDomain);

//#####################################################
//Routes:
//#####################################################

//GET /api/name:
app.get('/api/name', function(req, res) {
	res.json(name);
});

//GET /api/location:
app.get('/api/location', function(req, res) {
	res.json(location);
});

//GET /api/hobbies:
app.get('/api/hobbies', function(req, res) {
	res.json({hobbies: hobbies});
});

//GET /api/occupations:
app.get('/api/occupations', function(req, res) {
	res.json({occupations: occupations});
});

//GET /api/occupations/latest:
app.get('/api/occupations/latest', function(req, res) {
	res.json({latestOccupation: occupations[occupations.length - 1]});  
});

//#####################################################
//Starting server:
//#####################################################
app.listen(port, function(err) {
	if(err) {
		console.log(err);
	} else {
		console.log('Listening on port: ' + port);
	}
});

//#####################################################
//Personal Information:
//#####################################################
var name = {name: 'Philipp Schulte'};
var location = {location: 'Provo, UT'};
var hobbies = ['Programming', 'Fussball', 'Ping Pong'];
var occupations = ['Student', 'Bridge Engineer', 'Student'];
var mentions = ['https://www.linkedin.com/pub/philipp-schulte/b5/9b4/180'];
var references = ['Polina Marchenko', 'Reinhard Schulz', 'Michael Fischer'];
var skills = [
  {
    id: 1,
    name: 'JavaScript',
    experience: 'Advance'
  },
  {
    id: 2,
    name: 'AngularJS',
    experience: 'Intermediate'
  },
  {
    id: 2,
    name: 'Firebase',
    experience: 'Beginner'
  },
  {
    id: 3,
    name: 'node.js',
    experience: 'Beginner'
  },
  {
    id: 4,
    name: 'MongoDB',
    experience: 'Beginner'
  }
];