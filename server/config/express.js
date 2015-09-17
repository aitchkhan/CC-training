/**
 * Created by hkhan on 9/14/15.
 */

'use strict';

//requiring the exported modules required for app
var express = require('express');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser');
var multer = require('multer');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var errorHandler = require('errorhandler');
var path = require('path');
var config = require('./environment');
var passport = require('passport');

//exposing the middlewares and view engine to app.js
module.exports = function (app) {
    var env = app.get('env');

    app.set('views', config.root + '/server/views');
    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');
    app.use(compression());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
   // app.use(multer());
    app.use(cookieParser());
    app.use(passport.initialize());

    //when the app is ready for production
    if('production' === env) {
        app.use(favicon(path.join(config.root, 'public' , 'favicon.ico')));
        app.use(express.static(path.join(config.root, 'public')));
        app.use(morgan('dev'));
    }
    //when in developement phase
    if('development' === env || 'test' === 'env') {
        app.use(require('connect-livereload')());
        app.use(express.static(path.join(config.root + '.tmp')));
        app.use(express.static(path.join(config.root, 'client')));
        app.set('appPath', path.join(config.root, 'client'));
        app.use(morgan('dev'));
        app.use(errorHandler());
    }


};