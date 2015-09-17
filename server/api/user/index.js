/**
 * Created by hkhan on 9/14/15.
 */
'use strict';

var express = require('express');
var controller = require('./user.controller');
var config = require('../../config/environment');
//var auth = require('../../auth.service');

var router = express.Router();

//router.get('/', auth.hasRole('admin'), controller.index);
//router.delete('/:id', auth.hasRole('admin'), controller.destroy);
//router.get('/me', auth.isAuthenticated(), controller.me);
//router.put('/:id/password', auth.isAuthenticated(), controller.changePassword);
//router.get('/:id', auth.isAuthenticated(), controller.show);
router.post('/sign-up', controller.create);
router.get('/getAll', controller.getAll);
router.get('/:id', controller.getSingle);
router.post('/show', controller.findUser);


module.exports = router;

