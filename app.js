var express = require('express');
var http = require('http');
var mongoose = require( 'mongoose' );

require( './src/server/models/posts' );

// connect to DB
mongoose.connect( 'mongodb://localhost/mouthzipperNews' );

var app = express();

app.use(express.static(__dirname + '/public/client'));

app.get( '/post', function( req, res ) {

} );

http.createServer(app).listen(3000);