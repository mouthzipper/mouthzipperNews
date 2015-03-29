var express = require('express');
var http = require('http');
var mongoose = require( 'mongoose' );

// connect to DB
mongoose.connect( 'mongodb://localhost/mouthzipperNews' );

var app = express();

app.use(express.static(__dirname + '/public/client'));

http.createServer(app).listen(3000);