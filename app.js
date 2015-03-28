var express = require('express');
var http = require('http');
var app = express();

app.use(express.static(__dirname + '/public/client'));

http.createServer(app).listen(3000);