var express = require('express');
var http = require('http');
var app = express();
var port = process.env.PORT || 8080;
var appRoutes = require('./routes/approutes');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors=require('cors');
mongoose.connect('mongodb://ayusri:ayu1234@ds117061.mlab.com:17061/employeedb');
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/', appRoutes);
http.createServer(app).listen(port);
console.log("Backend Server is On ", port);

