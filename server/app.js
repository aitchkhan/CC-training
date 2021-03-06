/**
 * Created by hkhan on 9/11/15.
 */

'use strict';
//Set default node env to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var mongoose = require('mongoose');
var config = require('./config/environment');


//Connection to database
mongoose.connect(config.mongo.uri, config.mongo.options);
mongoose.connection.on('error', function (err) {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
});


//Populate Db with Seed data
if(config.seedDB) {
    require('./config/seed');
}

//Setup server
var app = express();

var server = require('http').createServer(app);
require('./config/express')(app);
require('./routes')(app);

//Start Server

server.listen(config.port, config.ip, function () {
    console.log('Express server listening on %d in %s mode', config.port, app.get('env'));
});

//Expose app

exports = module.exports = app;



